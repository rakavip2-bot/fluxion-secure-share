import { motion } from "framer-motion";

const Hero3D = () => {
  return (
    <div className="relative w-72 h-72 perspective-1000">
      {/* Orbiting particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [
              Math.cos((i * 30 * Math.PI) / 180) * 120,
              Math.cos(((i * 30 + 360) * Math.PI) / 180) * 120,
            ],
            y: [
              Math.sin((i * 30 * Math.PI) / 180) * 120,
              Math.sin(((i * 30 + 360) * Math.PI) / 180) * 120,
            ],
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-accent/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner ring with dots */}
      <motion.div
        className="absolute inset-16 rounded-full border border-primary/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <motion.div
            key={deg}
            className="absolute w-2 h-2 bg-accent rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${deg}deg) translateX(40px) translateY(-50%)`,
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
          />
        ))}
      </motion.div>

      {/* 3D Cube Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: [0, 15, 0, -15, 0],
          rotateY: [0, 360],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Cube faces */}
        <div className="relative w-24 h-24" style={{ transformStyle: "preserve-3d" }}>
          {[
            { transform: "translateZ(48px)", bg: "from-primary to-primary/80" },
            { transform: "translateZ(-48px) rotateY(180deg)", bg: "from-primary/60 to-primary/40" },
            { transform: "translateX(48px) rotateY(90deg)", bg: "from-accent to-accent/80" },
            { transform: "translateX(-48px) rotateY(-90deg)", bg: "from-accent/60 to-accent/40" },
            { transform: "translateY(-48px) rotateX(90deg)", bg: "from-primary/80 to-accent/60" },
            { transform: "translateY(48px) rotateX(-90deg)", bg: "from-accent/80 to-primary/60" },
          ].map((face, i) => (
            <motion.div
              key={i}
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${face.bg} backdrop-blur-sm border border-white/20`}
              style={{ transform: face.transform }}
              animate={{ opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          {/* Center lock icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateZ(50px)" }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-10 h-10 text-primary-foreground drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Pulsing glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Hero3D;
