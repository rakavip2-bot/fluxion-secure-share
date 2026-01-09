
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    variant: "primary" | "secondary";
    delay?: number;
}

const ActionCard = ({
    icon,
    title,
    description,
    features,
    buttonText,
    variant,
    delay = 0,
}: ActionCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -5 }}
            className="relative group h-full"
        >
            <div className={cn(
                "relative z-10 h-full p-8 rounded-2xl border backdrop-blur-sm transition-colors duration-300 flex flex-col",
                variant === "primary"
                    ? "bg-card/50 border-primary/20 hover:border-primary/50"
                    : "bg-card/50 border-accent/20 hover:border-accent/50"
            )}>
                {/* Glow effect */}
                <div className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
                    variant === "primary" ? "bg-primary" : "bg-accent"
                )} />

                {/* Icon */}
                <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300",
                    variant === "primary"
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary))]"
                        : "bg-accent text-accent-foreground shadow-[0_0_20px_-5px_hsl(var(--accent))]"
                )}>
                    {icon}
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">{title}</h3>

                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {description}
                </p>

                <ul className="space-y-3 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                            <span className={cn(
                                "flex items-center justify-center w-5 h-5 rounded-full shrink-0",
                                variant === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                            )}>
                                <Check className="w-3 h-3" />
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <button className={cn(
                    "w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform active:scale-95 mt-auto",
                    variant === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_hsl(var(--primary))]"
                        : "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_20px_-5px_hsl(var(--accent))]"
                )}>
                    {buttonText}
                </button>
            </div>
        </motion.div>
    );
};

export default ActionCard;
