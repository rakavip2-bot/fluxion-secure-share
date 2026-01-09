import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const MouseSpotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            mouseX.set(clientX);
            mouseY.set(clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300">
            <motion.div
                className="absolute inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.1),
              transparent 80%
            )
          `,
                }}
            />
        </div>
    );
};

export default MouseSpotlight;
