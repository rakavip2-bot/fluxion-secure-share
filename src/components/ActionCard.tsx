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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card-hover p-8 flex flex-col h-full"
    >
      <div className="mb-6">
        <motion.div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${
            variant === "primary"
              ? "bg-gradient-to-br from-primary to-primary/80"
              : "bg-gradient-to-br from-accent to-accent/80"
          }`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
      </div>

      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.2 + index * 0.1 }}
            className="flex items-center gap-3 text-sm text-foreground/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={variant === "primary" ? "btn-primary w-full" : "btn-secondary w-full"}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default ActionCard;
