import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      {/* Orbs */}

      {/* Primary orb - subtle deep blue */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, hsla(226, 71%, 40%, 0.08) 0%, transparent 70%)", // Very low opacity
          filter: "blur(80px)", // Increased blur for softer look
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent orb - subtle teal */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          bottom: "10%",
          left: "-10%",
          background: "radial-gradient(circle, hsla(187, 85%, 43%, 0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
