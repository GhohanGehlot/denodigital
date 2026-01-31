import { motion } from "framer-motion";

const PhoneMockup = () => {
  // Sample reel placeholders representing video thumbnails
  const reels = [
    { id: 1, gradient: "from-primary to-secondary" },
    { id: 2, gradient: "from-secondary to-primary" },
    { id: 3, gradient: "from-primary/80 to-secondary/80" },
    { id: 4, gradient: "from-secondary/80 to-primary/80" },
    { id: 5, gradient: "from-primary to-secondary" },
    { id: 6, gradient: "from-secondary to-primary" },
  ];

  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      {/* Phone frame */}
      <div className="relative w-64 md:w-72 h-[520px] md:h-[580px] bg-foreground rounded-[3rem] p-2 shadow-2xl animate-pulse-glow">
        {/* Phone inner bezel */}
        <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl z-20" />
          
          {/* Screen content - scrolling reels */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="flex flex-col gap-3 p-4 pt-10"
            >
              {[...reels, ...reels].map((reel, index) => (
                <div
                  key={index}
                  className={`relative w-full aspect-[9/16] rounded-2xl bg-gradient-to-br ${reel.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
                    <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Reel UI overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-background/30" />
                      <div className="flex-1">
                        <div className="w-16 h-2 bg-background/30 rounded" />
                        <div className="w-12 h-2 bg-background/20 rounded mt-1" />
                      </div>
                    </div>
                  </div>

                  {/* Side icons */}
                  <div className="absolute right-3 bottom-16 flex flex-col gap-4">
                    <div className="w-6 h-6 rounded-full bg-background/30" />
                    <div className="w-6 h-6 rounded-full bg-background/30" />
                    <div className="w-6 h-6 rounded-full bg-background/30" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl gradient-bg opacity-60 blur-sm"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-secondary/40 blur-sm"
      />
    </motion.div>
  );
};

export default PhoneMockup;