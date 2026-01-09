import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="perspective-1000 h-full"
    >
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass-card-hover p-8 flex flex-col h-full cursor-default"
      >
        <div
          className="mb-6"
          style={{ transform: "translateZ(20px)" }}
        >
          <motion.div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${variant === "primary"
              ? "bg-gradient-to-br from-primary to-primary/80"
              : "bg-gradient-to-br from-accent to-accent/80"
              }`}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
        </div>

        <h3
          className="font-display text-2xl font-bold text-foreground mb-4"
          style={{ transform: "translateZ(30px)" }}
        >
          {title}
        </h3>

        <p
          className="text-muted-foreground text-base leading-relaxed mb-8"
          style={{ transform: "translateZ(25px)" }}
        >
          {description}
        </p>

        <ul className="space-y-3 mb-8 flex-grow" style={{ transform: "translateZ(20px)" }}>
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
          style={{ transform: "translateZ(40px)" }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ActionCard;
