// src/app/cicd/page.tsx
"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GitBranch, GitCommit, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";
import styles from './page.module.css';

const BLUR_FADE_DELAY = 0.04;

// Title component with floating animation
const AnimatedTitle = () => (
  <div className="text-center">
    <span className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
      Watch Code in{" "}
      <span className={styles.motionText}>Motion</span>
    </span>
  </div>
);

// Interactive Counter Component
const Counter = ({ count, setCount }: { count: number; setCount: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700">
      <div className="bg-card rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4 text-center">Counter Component</h3>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setCount(count - 1)}
            className="w-12 h-12 bg-primary/90 text-primary-foreground rounded-lg transition-all hover:bg-primary active:scale-95"
          >
            -
          </button>
          <span className="text-3xl font-bold min-w-[3ch] text-center">{count}</span>
          <button
            onClick={() => setCount(count + 1)} 
            className="w-12 h-12 bg-primary/90 text-primary-foreground rounded-lg transition-all hover:bg-primary active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
 };

interface Deployment {
 id: string;
 timestamp: string;
 branch: string;
 commit: string;
 message: string;
}

export default function CICDOutput() {
 const [deployment, setDeployment] = useState<Deployment | null>(null);
 const [count, setCount] = useState(0);
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
     if (data?.deployments?.[0]) {
       const latest = data.deployments[0];
       setDeployment({
         id: latest.uid,
         timestamp: new Date(latest.created).toLocaleString(),
         branch: latest.meta?.githubCommitRef || 'main',
         commit: latest.meta?.githubCommitMessage || 'Counter Component',
         message: latest.meta?.githubCommitMessage || 'Interactive counter demo'
       });
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

 if (isLoading) return <div>Loading...</div>;
 if (!deployment) return <div>No deployments found</div>;

 return (
   <main className="flex flex-col min-h-[100dvh] space-y-10 p-8">
     <section>
       <div className="mx-auto w-full max-w-4xl">
         <AnimatedTitle />
         <BlurFadeText
           className="text-muted-foreground md:text-xl mt-4 text-center"
           delay={BLUR_FADE_DELAY * 2}
           text="Experience code as it comes to life in real-time—just hit commit, and let the CI/CD pipeline work its magic."
         />
       </div>
     </section>

     <section className="w-full max-w-4xl mx-auto">
       <BlurFade delay={BLUR_FADE_DELAY * 3}>
         <Card className="p-6">
           <div className="flex items-center justify-between mb-4">
             <div className="flex items-center gap-2">
               <GitCommit className="w-5 h-5" />
               <span className="font-mono text-sm">{deployment.commit}</span>
             </div>
             <Badge variant="outline">{deployment.timestamp}</Badge>
           </div>
           
           <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
             <GitBranch className="w-4 h-4" />
             <span>{deployment.branch}</span>
             <span className="mx-2">•</span>
             <span>{deployment.message}</span>
           </div>

           <div className="relative">
             <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-r from-green-500 to-blue-500" />
             <div className="pl-4">
               <div className="flex items-center gap-2 mb-2">
                 <PlayCircle className="w-4 h-4 text-green-500" />
                 <span className="text-sm font-medium">Live Output</span>
               </div>
               <Counter count={count} setCount={setCount} />
             </div>
           </div>
         </Card>
       </BlurFade>
     </section>
   </main>
 );
}