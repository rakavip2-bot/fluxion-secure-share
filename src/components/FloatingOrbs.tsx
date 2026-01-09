import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb - top right */}
      <motion.div
        className="floating-orb orb-1"
        style={{ top: "-10%", right: "-5%" }}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Accent orb - bottom left */}
      <motion.div
        className="floating-orb orb-2"
        style={{ bottom: "-10%", left: "-5%" }}
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Third orb - center */}
      <motion.div
        className="floating-orb orb-3"
        style={{ top: "40%", left: "50%", transform: "translateX(-50%)" }}
        animate={{
          x: ["-50%", "-45%", "-50%"],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
