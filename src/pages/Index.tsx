import { motion } from "framer-motion";
import { Clock, Database, Shield, Lock, Eye } from "lucide-react";
import FloatingOrbs from "@/components/FloatingOrbs";
import Hero3D from "@/components/Hero3D";
import ActionCard from "@/components/ActionCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingOrbs />

      <main className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section - Centered */}
        <section className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* 3D Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-10 flex justify-center"
            >
              <Hero3D />
            </motion.div>

            {/* Title with letter animation */}
            <div className="overflow-hidden">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-4">
                {"FLUXION".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                    whileHover={{
                      scale: 1.2,
                      color: "hsl(var(--primary))",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-primary font-medium mb-4"
            >
              Zero-Trust, Browser-to-Browser File Sharing
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-6"
            >
              Share files directly between browsers using end-to-end encryption.
              <br />
              <span className="text-foreground/70">
                No servers. No stored keys. No third-party access.
              </span>
            </motion.p>

            {/* Trust badges with stagger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {[
                { icon: Lock, text: "End-to-End Encrypted" },
                { icon: Shield, text: "Zero-Trust" },
                { icon: Eye, text: "No Third-Party" },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground cursor-default transition-colors"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                  </motion.div>
                  {item.text}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Question with animated line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="relative mb-8"
            >
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-4 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                How do you want to handle your file?
              </h2>
            </motion.div>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <ActionCard
                icon={<Clock className="w-6 h-6 text-primary-foreground" />}
                title="Temporary Share"
                description="Share a file once and let it automatically expire after transfer."
                features={[
                  "One-time access",
                  "QR-based secure sharing",
                  "Session self-destruct",
                ]}
                buttonText="Share Temporarily"
                variant="primary"
                delay={1}
              />

              <ActionCard
                icon={<Database className="w-6 h-6 text-accent-foreground" />}
                title="Permanent Store"
                description="Store your file securely and keep it until you decide to delete it."
                features={[
                  "Encrypted storage",
                  "Controlled access",
                  "Manual deletion",
                ]}
                buttonText="Store Permanently"
                variant="secondary"
                delay={1.1}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
