import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      {/* Orbs */}

      {/* Primary orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: "10%",
          right: "10%",
          background: "radial-gradient(circle, hsla(226, 71%, 40%, 0.12) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          bottom: "20%",
          left: "5%",
          background: "radial-gradient(circle, hsla(187, 85%, 43%, 0.1) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
