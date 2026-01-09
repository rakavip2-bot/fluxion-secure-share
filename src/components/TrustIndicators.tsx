import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";

const indicators = [
  {
    icon: Lock,
    text: "End-to-End Encrypted",
  },
  {
    icon: Shield,
    text: "Zero-Trust Architecture",
  },
  {
    icon: Eye,
    text: "No Third-Party Access",
  },
];

const TrustIndicators = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-wrap justify-center gap-4 md:gap-6"
    >
      {indicators.map((indicator, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + index * 0.1 }}
          className="trust-badge"
        >
          <indicator.icon className="w-4 h-4" />
          <span>{indicator.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustIndicators;
