import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Code } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14" aria-label="Main navigation">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" aria-hidden="true"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  target={item.label === "Resume" ? "_blank" : undefined}
                  rel={item.label === "Resume" ? "noopener noreferrer" : undefined}
                  className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
                  aria-label={item.label}
                >
                  <span aria-hidden="true" tabIndex={-1}>
                    <item.icon className="size-4" />
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" aria-hidden="true" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
                    aria-label={`Visit ${name} profile`}
                  >
                    <span aria-hidden="true" tabIndex={-1}>
                      <social.icon className="size-4" />
                    </span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full py-2" aria-hidden="true" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/cicd"
                className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}
                aria-label="View code examples"
              >
                <span aria-hidden="true" tabIndex={-1}>
                  <Code className="size-4" />
                </span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Code</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </nav>
  );
}