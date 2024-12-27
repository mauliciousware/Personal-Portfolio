"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, GitBranch, GitCommit, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";

const BLUR_FADE_DELAY = 0.04;

interface Deployment {
 id: string;
 timestamp: string; 
 branch: string;
 commit: string;
 message: string;
 output?: React.ReactNode;
}

export default function CICDOutput() {
 const [deployments, setDeployments] = useState<Deployment[]>([]);
 const [isLoading, setIsLoading] = useState(true);

 const fetchDeployments = async () => {
   try {
     const response = await fetch(`https://api.vercel.com/v6/deployments?teamId=${process.env.NEXT_PUBLIC_VERCEL_TEAM_ID}&projectId=${process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID}`, {
       headers: {
         Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_API_TOKEN}`,
         'Content-Type': 'application/json',
       },
     });
     
     const data = await response.json();
     console.log('Raw API Response:', data); // Log raw response

     if (data.deployments) {
       const formattedDeployments = data.deployments.map((deploy: any) => {
         console.log('Individual Deployment:', deploy); // Log each deployment
         return {
           id: deploy.uid,
           timestamp: new Date(deploy.created).toLocaleString(),
           branch: deploy.meta?.branch || 'main',
           commit: deploy.meta?.commitMessage?.split('\n')[0] || 'Unknown',
           message: deploy.meta?.commitMessage || 'No message',
           output: (
             <div className="p-4 bg-card rounded-lg">
               <h3 className="text-lg font-bold mb-2">{deploy.meta?.commitMessage?.split('\n')[0]}</h3>
               {deploy.meta?.output || (
                 <div className="flex items-center gap-4">
                   <button className="px-4 py-2 bg-primary text-primary-foreground rounded">-</button>
                   <span className="text-2xl">0</span>
                   <button className="px-4 py-2 bg-primary text-primary-foreground rounded">+</button>
                 </div>
               )}
             </div>
           )
         };
       });

       console.log('Formatted Deployments:', formattedDeployments); // Log formatted data
       setDeployments(formattedDeployments);
     }
   } catch (error) {
     console.error('API Error:', error);
   } finally {
     setIsLoading(false);
   }
 };

 useEffect(() => {
   fetchDeployments();
   const interval = setInterval(fetchDeployments, 30000);
   return () => clearInterval(interval);
 }, []);

 return (
   <main className="flex flex-col min-h-[100dvh] space-y-10 p-8">
     <section>
       <div className="mx-auto w-full max-w-4xl">
         <BlurFadeText
           delay={BLUR_FADE_DELAY}
           className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
           text="Watch Code in Motion"
         />
         <BlurFadeText
           className="text-muted-foreground md:text-xl mt-4"
           delay={BLUR_FADE_DELAY * 2}
           text="Experience code as it comes to life in real-time—just hit commit, and let the CI/CD pipeline work its magic, updating the output with each push. No wizardry, just streamlined deployment at its finest."
         />
       </div>
     </section>

     <section className="w-full max-w-4xl mx-auto space-y-6">
       {isLoading ? (
         <div className="text-center">Loading deployments...</div>
       ) : deployments.length === 0 ? (
         <div className="text-center">No deployments found</div>
       ) : (
         deployments.map((deploy, index) => (
           <BlurFade key={deploy.id} delay={BLUR_FADE_DELAY * (index + 3)}>
             <Card className="p-6">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-2">
                   <GitCommit className="w-5 h-5" />
                   <span className="font-mono text-sm">{deploy.commit}</span>
                 </div>
                 <Badge variant="outline">{deploy.timestamp}</Badge>
               </div>
               
               <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                 <GitBranch className="w-4 h-4" />
                 <span>{deploy.branch}</span>
                 <span className="mx-2">•</span>
                 <span>{deploy.message}</span>
               </div>

               <div className="relative">
                 <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500" />
                 <div className="pl-4">
                   <div className="flex items-center gap-2 mb-2">
                     <PlayCircle className="w-4 h-4 text-green-500" />
                     <span className="text-sm font-medium">Live Output</span>
                   </div>
                   {deploy.output}
                 </div>
               </div>
             </Card>
           </BlurFade>
         ))
       )}
     </section>
   </main>
 );
}