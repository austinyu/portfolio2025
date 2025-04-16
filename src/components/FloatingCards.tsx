import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode; // Accepts any JSX content
  className?: string; // Optional custom styles for the card
}

export default function FloatingCard({
  children,
  className,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "bg-foreground/10 hover:bg-foreground",
        "text-card hover:text-card",
        "p-2 rounded-lg shadow-lg",
        `gap-4 z-50 transition-colors duration-200 ${className}`
      )}
    >
      {children}
    </div>
  );
}
