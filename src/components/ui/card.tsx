import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-charcoal-100 bg-white p-6 sm:p-8 shadow-card",
        hover && "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
