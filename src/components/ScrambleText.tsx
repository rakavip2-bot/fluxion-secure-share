import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const ScrambleText = ({ text, className, delay = 0 }: ScrambleTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = text.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    return randomChar;
                })
                .join("");

            setDisplayText(scrambled);
            pos++;

            if (pos >= text.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setDisplayText(text);
    };

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay, duration: 0.5 }}
            onAnimationComplete={scramble}
            onHoverStart={scramble}
        >
            {displayText}
        </motion.span>
    );
};

export default ScrambleText;
