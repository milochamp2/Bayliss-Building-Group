import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "accent";
  hover?: boolean;
  blur?: "sm" | "md" | "lg";
}

const variantStyles = {
  light:
    "bg-white/60 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
  dark:
    "bg-charcoal/40 border-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
  accent:
    "bg-accent/10 border-accent/20 shadow-[0_8px_32px_rgba(194,102,45,0.08)]",
};

const blurStyles = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-xl",
};

export function GlassCard({
  children,
  className,
  variant = "light",
  hover = true,
  blur = "md",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 sm:p-8",
        blurStyles[blur],
        variantStyles[variant],
        hover &&
          "transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-white/60",
        className
      )}
    >
      {children}
    </div>
  );
}
