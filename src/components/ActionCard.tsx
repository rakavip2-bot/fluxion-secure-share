import { motion } from "framer-motion";
import { ReactNode } from "react";

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
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <div
        className={`group relative h-full flex flex-col p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${variant === 'primary'
            ? 'hover:border-primary/50 hover:shadow-primary/10'
            : 'hover:border-accent/50 hover:shadow-accent/10'
          }`}
      >
        {/* Icon */}
        <div className="mb-6">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${variant === "primary"
              ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
              : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
            }`}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
              <div className={`w-1.5 h-1.5 rounded-full ${variant === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className={`w-full py-3 rounded-xl font-medium text-sm transition-all duration-200 active:scale-95 ${variant === "primary"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
          }`}>
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default ActionCard;
