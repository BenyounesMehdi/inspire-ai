"use client";

import { useState } from "react";
import { Bot, CloudOff, Compass, Ghost, Search, Stars } from "lucide-react";
import { cn } from "@/lib/utils";

interface NoDataProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  variant?: "default" | "search" | "error" | "empty" | "location" | "bot";
}

export function NoData({
  title,
  description,
  variant = "default",
  className,
  ...props
}: NoDataProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: {
      icon: Ghost,
      title: title || "Nothing to see here",
      description:
        description || "This place is like a ghost town... but in a good way!",
      iconClassName: "group-hover:animate-bounce",
    },
    search: {
      icon: Search,
      title: title || "No results found",
      description:
        description || "It looks like you have not generated anything yet",
      iconClassName: "group-hover:animate-[spin_1s_ease-in-out]",
    },
    error: {
      icon: CloudOff,
      title: title || "Data unavailable",
      description: description || "There was an error loading the data",
      iconClassName: "group-hover:animate-shake",
    },
    empty: {
      icon: Stars,
      title: title || "Start fresh",
      description: description || "Be the first to add something amazing here!",
      iconClassName: "group-hover:animate-pulse",
    },
    location: {
      icon: Compass,
      title: title || "Lost in space",
      description: description || "We couldn't find what you're looking for",
      iconClassName: "group-hover:animate-spin",
    },
    bot: {
      icon: Bot,
      title: title || "No data computed",
      description: description || "Even robots need a break sometimes",
      iconClassName: "group-hover:animate-bounce",
    },
  };

  const currentVariant = variants[variant];

  return (
    <div
      className={cn(
        "group relative flex min-h-[400px] flex-col items-center justify-center gap-6 overflow-hidden rounded-lg  bg-background p-8 text-center",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: "50px 50px",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.3s ease-in-out",
        }}
      />

      {/* Icon container with animations */}
      <div className="relative">
        <div
          className={cn(
            "rounded-full bg-muted/50 p-6 ring-8 ring-background transition-all duration-300",
            "group-hover:bg-primary/10 group-hover:ring-primary/5"
          )}
        >
          <currentVariant.icon
            className={cn(
              "h-12 w-12 text-muted-foreground transition-colors duration-300",
              "group-hover:text-primary",
              currentVariant.iconClassName
            )}
          />
        </div>

        {/* Decorative circles */}
        {isHovered && (
          <>
            <div className="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/50" />
            <div className="absolute right-0 top-0 h-3 w-3 translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/30" />
            <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 animate-bounce rounded-full bg-primary/40" />
          </>
        )}
      </div>

      <div className="relative max-w-md space-y-2">
        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
          {currentVariant.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {currentVariant.description}
        </p>
      </div>
    </div>
  );
}
