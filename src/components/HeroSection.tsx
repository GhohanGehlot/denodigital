import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-10 px-6 py-6 md:px-12"
      >
        <div className="font-display font-bold text-xl md:text-2xl tracking-tight">
          <span className="text-foreground">Deno</span>
          <span className="text-primary">Digital</span>
        </div>
      </motion.header>

      {/* Main content */}
      <div className="container mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full pt-20">
          
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              I am{" "}
              <span className="gradient-text">Ghohan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Short-form video editor crafting{" "}
              <span className="text-foreground font-medium">scroll-stopping content</span> using{" "}
              <span className="text-primary font-medium">Premiere Pro</span> &{" "}
              <span className="text-secondary font-medium">After Effects</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Reels", "TikTok", "Shorts", "Motion Graphics"].map((tag, index) => (
                <span 
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-foreground/5 text-sm font-medium border border-border hover:border-primary/50 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <a 
                href="#portfolio" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-display font-semibold text-lg glow-shadow hover:scale-105 transition-transform"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;