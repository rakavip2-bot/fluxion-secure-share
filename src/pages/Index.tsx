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

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-tight mb-4"
            >
              FLUXION
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-primary font-medium mb-4"
            >
              Zero-Trust, Browser-to-Browser File Sharing
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-6"
            >
              Share files directly between browsers using end-to-end encryption.
              <br />
              <span className="text-foreground/70">
                No servers. No stored keys. No third-party access.
              </span>
            </motion.p>

            {/* Trust badges inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {[
                { icon: Lock, text: "End-to-End Encrypted" },
                { icon: Shield, text: "Zero-Trust" },
                { icon: Eye, text: "No Third-Party" },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground"
                >
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  {item.text}
                </span>
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
                delay={0.7}
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
