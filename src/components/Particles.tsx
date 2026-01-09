import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Particles = () => {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

    useEffect(() => {
        // Create initial generic particles
        const initialParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
        }));
        setParticles(initialParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary/30"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default Particles;
