import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Particles = () => {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Create initial generic particles
        const initialParticles = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 1.5 + 0.5, // Tiny dust particles (0.5px - 2px)
            duration: Math.random() * 20 + 20, // Slower movement
            delay: Math.random() * 10,
        }));
        setParticles(initialParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-foreground/20" // Neutral color, low opacity
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -50], // Less vertical movement
                        opacity: [0, 0.3, 0], // Very subtle opacity
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default Particles;
