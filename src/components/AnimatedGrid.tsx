import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Scan, FileKey, Shield, Activity, Lock, Binary, Fingerprint, Eye } from "lucide-react";

const AnimatedGrid = () => {
    const [beams, setBeams] = useState<{ id: number; x: number; y: number; dir: 'h' | 'v' }[]>([]);
    const [activeCell, setActiveCell] = useState<{ x: number; y: number } | null>(null);

    const icons = [Scan, FileKey, Shield, Activity, Lock, Binary, Fingerprint, Eye];
    const ActiveIcon = activeCell ? icons[((activeCell.x / 64) + (activeCell.y / 64)) % icons.length] : null;

    useEffect(() => {
        // Beam animation interval
        const interval = setInterval(() => {
            const id = Date.now();
            const dir = Math.random() > 0.5 ? 'h' : 'v';
            const x = Math.floor(Math.random() * 20) * 5 + 5; // Grid steps
            const y = Math.floor(Math.random() * 20) * 5 + 5;

            setBeams(prev => [...prev.slice(-10), { id, x, y, dir }]); // Keep last 10
        }, 2000);

        // Mouse tracking for grid highlight
        const handleMouseMove = (e: MouseEvent) => {
            // Grid size is 64px to match the visual grid
            const gridSize = 64;
            const x = Math.floor(e.clientX / gridSize) * gridSize;
            const y = Math.floor(e.clientY / gridSize) * gridSize;

            setActiveCell({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Background Grid Lines - darker base */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
                    backgroundSize: '64px 64px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />

            {/* Interactive Highlight Cell with Scanner */}
            {activeCell && (
                <motion.div
                    className="absolute bg-primary/10 border border-primary/50 shadow-[0_0_15px_rgba(37,99,235,0.3)] backdrop-blur-[1px] overflow-hidden flex items-center justify-center"
                    initial={false}
                    animate={{
                        x: activeCell.x,
                        y: activeCell.y,
                        opacity: 1
                    }}
                    transition={{
                        type: "tween",
                        ease: "backOut",
                        duration: 0.15
                    }}
                    style={{
                        width: 63,
                        height: 63,
                        left: 1,
                        top: 1,
                    }}
                >
                    {/* Scanning Line */}
                    <motion.div
                        className="absolute w-full h-[2px] bg-primary shadow-[0_0_10px_#3b82f6] z-10"
                        animate={{
                            top: ["0%", "100%", "0%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Dynamic Icon */}
                    {ActiveIcon && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0 }}
                            key={`${activeCell.x}-${activeCell.y}`}
                            className="z-0"
                        >
                            <ActiveIcon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                        </motion.div>
                    )}

                    {/* Scan Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
                </motion.div>
            )}

            {/* Moving Beams */}
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-[0.15]">
                {beams.map(beam => (
                    <motion.div
                        key={beam.id}
                        initial={{
                            opacity: 0,
                            left: beam.dir === 'v' ? `${beam.x * 4}rem` : '0',
                            top: beam.dir === 'h' ? `${beam.y * 4}rem` : '0',
                            width: beam.dir === 'h' ? '10rem' : '1px',
                            height: beam.dir === 'v' ? '10rem' : '1px',
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            left: beam.dir === 'h' ? ['0%', '100%'] : `${beam.x * 4}rem`,
                            top: beam.dir === 'v' ? ['0%', '100%'] : `${beam.y * 4}rem`,
                        }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bg-gradient-to-r from-transparent via-primary to-transparent"
                        style={{
                            background: beam.dir === 'h'
                                ? 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)'
                                : 'linear-gradient(180deg, transparent, hsl(var(--primary)), transparent)'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimatedGrid;
