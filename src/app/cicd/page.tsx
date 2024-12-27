"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, GitBranch, GitCommit, PlayCircle } from "lucide-react";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function CICDOutput() {
  // Mock data - replace with your actual deployment data
  const [deployments] = useState([
    {
      id: 1,
      timestamp: "2024-12-27 14:30:23",
      branch: "main",
      commit: "feat: Add Counter Component",
      message: "Added interactive counter with increment/decrement",
      output: (
        <div className="p-4 bg-card rounded-lg">
          <h3 className="text-lg font-bold mb-2">Counter Component</h3>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded">-</button>
            <span className="text-2xl">0</span>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded">+</button>
          </div>
        </div>
      )
    },
    {
      id: 2,
      timestamp: "2024-12-27 14:15:12",
      branch: "main",
      commit: "feat: Add Todo List",
      message: "Implemented basic todo list functionality",
      output: (
        <div className="p-4 bg-card rounded-lg">
          <h3 className="text-lg font-bold mb-2">Todo List</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <input type="checkbox" checked readOnly />
              <span className="line-through">Implement CICD</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" readOnly />
              <span>Add more features</span>
            </li>
          </ul>
        </div>
      )
    }
  ]);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 p-8">
      <section>
        <div className="mx-auto w-full max-w-4xl">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
            text="Live Deployment Showcase"
          />
          <BlurFadeText
            className="text-muted-foreground md:text-xl mt-4"
            delay={BLUR_FADE_DELAY * 2}
            text="Watch my code come to life in real-time as I commit and deploy"
          />
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto space-y-6">
        {deployments.map((deploy, index) => (
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
        ))}
      </section>
    </main>
  );
}