
import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionCardProps {
    icon: React.ReactNode;
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="relative group h-full"
        >
            {/* Animated Gradient Border Layer */}
            <div className={cn(
                "absolute -inset-[2px] rounded-2xl opacity-75 blur-sm transition-opacity duration-500",
                variant === "primary"
                    ? "bg-gradient-to-r from-[hsl(226,71%,40%)] via-blue-500 to-[hsl(226,71%,40%)] animate-pulse"
                    : "bg-gradient-to-r from-[hsl(187,85%,35%)] via-teal-500 to-[hsl(187,85%,35%)] animate-pulse"
            )} />

            {/* Main Card Content */}
            <div className={cn(
                "relative h-full bg-card/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col transition-all duration-300 group-hover:bg-card/95",
                "shadow-2xl"
            )}>

                {/* Shimmer Overlay on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 via-white/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon Header - FORCE DARKER COLORS */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-lg transition-transform duration-300 group-hover:scale-110",
                        variant === "primary"
                            ? "bg-primary/20 text-[hsl(226,71%,40%)] shadow-primary/20"
                            : "bg-accent/20 text-[hsl(187,85%,30%)] shadow-accent/20"
                    )}>
                        {/* Clone the icon to enforce the color class if possible, or reliance on CSS cascade.
                However, inline classes on the passed icon (text-primary-foreground) will win.
                So I will handle that in Index.tsx.
                Here, I set the container color which works if I strip the prop.
            */}
                        {React.isValidElement(icon)
                            ? React.cloneElement(icon as React.ReactElement<any>, { className: cn("w-6 h-6", (icon as React.ReactElement<any>).props.className?.replace(/text-\S+/g, '')) })
                            : icon}
                    </div>
                </div>

                <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">
                    {title}
                </h3>

                <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-8 opacity-50" />

                <ul className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                            <span className={cn(
                                "flex items-center justify-center w-5 h-5 rounded-full shrink-0",
                                variant === "primary" ? "bg-[hsl(226,71%,40%)]/10 text-[hsl(226,71%,40%)]" : "bg-[hsl(187,85%,35%)]/10 text-[hsl(187,85%,35%)]"
                            )}>
                                <Check className="w-3 h-3" strokeWidth={3} />
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto">
                    <button className={cn(
                        "w-full py-4 px-6 rounded-xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group/btn",
                        variant === "primary"
                            ? "bg-[hsl(226,71%,40%)] text-white hover:bg-[hsl(226,71%,40%)]/90 hover:shadow-[0_0_20px_-5px_hsl(226,71%,40%)]"
                            : "bg-[hsl(187,85%,43%)] text-white hover:bg-[hsl(187,85%,43%)]/90 hover:shadow-[0_0_20px_-5px_hsl(187,85%,43%)]"
                    )}>
                        {buttonText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ActionCard;
