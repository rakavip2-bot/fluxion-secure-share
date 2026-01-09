import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const Hero3D = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-64 h-64 perspective-1000">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {/* 3D Cube Container */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Cube faces */}
          {[
            { transform: "translateZ(80px)", opacity: 0.9 },
            { transform: "translateZ(-80px) rotateY(180deg)", opacity: 0.7 },
            { transform: "translateX(80px) rotateY(90deg)", opacity: 0.8 },
            { transform: "translateX(-80px) rotateY(-90deg)", opacity: 0.8 },
            { transform: "translateY(-80px) rotateX(90deg)", opacity: 0.85 },
            { transform: "translateY(80px) rotateX(-90deg)", opacity: 0.75 },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-[32px] rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm"
              style={{
                transform: face.transform,
                opacity: face.opacity,
              }}
            />
          ))}

          {/* Center lock icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateZ(100px)" }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center shadow-2xl">
              <svg
                className="w-10 h-10 text-primary-foreground"
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
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10" />
    </div>
  );
};

export default Hero3D;
