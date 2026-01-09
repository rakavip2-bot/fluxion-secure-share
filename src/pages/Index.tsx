import { motion } from "framer-motion";
import { Clock, Database, Shield, Lock, Eye } from "lucide-react";
import FloatingOrbs from "@/components/FloatingOrbs";
import Hero3D from "@/components/Hero3D";
import ActionCard from "@/components/ActionCard";
import Footer from "@/components/Footer";
import AnimatedGrid from "@/components/AnimatedGrid";
import Particles from "@/components/Particles";
import ScrambleText from "@/components/ScrambleText";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <AnimatedGrid />
      <Particles />
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

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="font-display text-6xl md:text-8xl font-bold text-foreground tracking-tight mb-6 text-shimmer"
            >
              FLUXION
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="mb-6"
            >
              <ScrambleText
                text="Zero-Trust And Secure Permanent File Sharing"
                className="text-xl md:text-3xl text-primary font-medium"
                delay={0.4}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Store files securely with long-term encrypted storage and controlled access.

            </motion.p>



            {/* Trust badges inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {[
                { icon: Eye, text: "No third-party access" },
                { icon: Shield, text: "Full user-controlled availability" },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--secondary) / 0.8)" }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground cursor-default border border-transparent hover:border-primary/20 transition-colors min-w-[320px]"
                >
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  {item.text}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Question */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-display text-xl md:text-2xl font-semibold text-foreground mb-8"
            >
              How do you want to handle your file?
            </motion.h2>

            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <ActionCard
                icon={<Database className="w-6 h-6 text-accent-foreground" />}
                title="Permanent Share"
                description="Store your file securely and keep it until you decide to delete it."
                features={[
                  "Encrypted storage",
                  "Controlled access",
                  "Manual deletion",
                ]}
                buttonText="Share Permanently"
                variant="secondary"
                delay={0.7}
              />

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
                delay={0.8}
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
