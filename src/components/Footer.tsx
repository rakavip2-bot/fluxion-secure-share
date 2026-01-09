import { motion } from "framer-motion";

const Footer = () => {
  const footerItems = [
    { text: "Privacy-First", color: "bg-accent" },
    { text: "Browser-Native", color: "bg-primary" },
    { text: "Secure by Design", color: "bg-accent" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="py-8 border-t border-border/50 relative overflow-hidden"
    >
      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
        }}
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-muted-foreground"
            whileHover={{ color: "hsl(var(--foreground))" }}
          >
            © 2026 Fluxion
          </motion.p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {footerItems.map((item, i) => (
              <motion.span
                key={i}
                className="flex items-center gap-2 cursor-default"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                whileHover={{ 
                  color: "hsl(var(--foreground))",
                  x: 3,
                }}
              >
                <motion.span
                  className={`w-1.5 h-1.5 rounded-full ${item.color}`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
                {item.text}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
