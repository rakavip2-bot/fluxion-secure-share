import { motion } from "framer-motion";
import { Clock, Database } from "lucide-react";
import FloatingOrbs from "@/components/FloatingOrbs";
import Hero3D from "@/components/Hero3D";
import ActionCard from "@/components/ActionCard";
import TrustIndicators from "@/components/TrustIndicators";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingOrbs />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    <span className="gradient-text">FLUXION</span>
                  </h1>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-display text-xl md:text-2xl font-medium text-foreground mb-4"
                >
                  Zero-Trust, Browser-to-Browser File Sharing
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  Share files directly between browsers using end-to-end encryption.
                  <br />
                  <span className="text-foreground/80 font-medium">
                    No servers. No stored keys. No third-party access.
                  </span>
                </motion.p>
              </div>

              {/* 3D Hero Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex-shrink-0"
              >
                <Hero3D />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-12 md:py-16 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                How do you want to handle your file?
              </h3>
              <p className="text-muted-foreground">
                Choose the sharing method that fits your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <ActionCard
                icon={<Clock className="w-7 h-7 text-primary-foreground" />}
                title="Temporary Share"
                description="Share a file once and let it automatically expire after transfer."
                features={[
                  "One-time access",
                  "QR-based secure sharing",
                  "Session self-destruct",
                ]}
                buttonText="Share Temporarily"
                variant="primary"
                delay={0.5}
              />

              <ActionCard
                icon={<Database className="w-7 h-7 text-accent-foreground" />}
                title="Permanent Store"
                description="Store your file securely and keep it until you decide to delete it."
                features={[
                  "Encrypted storage",
                  "Controlled access",
                  "Manual deletion",
                ]}
                buttonText="Store Permanently"
                variant="secondary"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <TrustIndicators />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
