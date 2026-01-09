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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card-hover p-8 flex flex-col h-full group relative overflow-hidden"
    >
      {/* Animated background gradient on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          variant === "primary"
            ? "bg-gradient-to-br from-primary/5 to-accent/5"
            : "bg-gradient-to-br from-accent/5 to-primary/5"
        }`}
      />

      {/* Corner accent */}
      <motion.div
        className={`absolute top-0 right-0 w-20 h-20 ${
          variant === "primary" ? "bg-primary/10" : "bg-accent/10"
        } rounded-bl-full`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
            variant === "primary"
              ? "bg-gradient-to-br from-primary to-primary/80"
              : "bg-gradient-to-br from-accent to-accent/80"
          }`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{
            boxShadow: [
              "0 4px 20px hsla(226, 71%, 40%, 0.2)",
              "0 8px 30px hsla(226, 71%, 40%, 0.35)",
              "0 4px 20px hsla(226, 71%, 40%, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {icon}
        </motion.div>

        {/* Title with animated underline */}
        <div className="relative inline-block mb-3">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {title}
          </h3>
          <motion.div
            className={`absolute -bottom-1 left-0 h-0.5 ${
              variant === "primary" ? "bg-primary" : "bg-accent"
            }`}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
          />
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Features with staggered animation */}
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1 + index * 0.1 }}
              className="flex items-center gap-3 text-sm text-foreground/80 group/item"
            >
              <motion.span
                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  variant === "primary" ? "bg-primary" : "bg-accent"
                }`}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
              <span className="group-hover/item:text-foreground transition-colors">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Animated button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative overflow-hidden w-full ${
            variant === "primary" ? "btn-primary" : "btn-secondary"
          }`}
        >
          <motion.span
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{ x: "100%", opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <span className="relative z-10">{buttonText}</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ActionCard;
