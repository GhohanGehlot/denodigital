import { motion } from "framer-motion";
import { useState } from "react";

interface VideoCategory {
  id: string;
  title: string;
  description: string;
  videoUrl: string | null;
}

const PortfolioSection = () => {
  const [categories] = useState<VideoCategory[]>([
    {
      id: "3d-animation",
      title: "3D Animation",
      description: "",
      videoUrl: "https://res.cloudinary.com/dfa1ausex/video/upload/v1765625348/MrBeastRaw_1_sua4og.mp4", // User will add their video URL here
    },
    {
      id: "subtitle-editing",
      title: "Talking head ",
      description: "",
      videoUrl: "https://res.cloudinary.com/dfa1ausex/video/upload/v1767434447/Ant_-_TEST_VIDEO_iyksp8.mp4", // User will add their video URL here
    },
    {
      id: "White minimal edit",
      title: "White background reel",
      description: "",
      videoUrl: "https://res.cloudinary.com/dfa1ausex/video/upload/2026_1_28_editing_is_most_useless_1_1_tc3pwy.mp4"
, // User will add their video URL here
    },
    {
      id: "Advance 3d animation",
      title: "Advance 3d animated",
      description: "",
      videoUrl: "https://res.cloudinary.com/dfa1ausex/video/upload/v1769877150/Top_skills_for_freelancing_rnypi6.mp4", // User will add their video URL here
    },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Portfolio
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Explore my video editing categories and see what I can create for you
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-foreground/5 border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:card-shadow-hover">
                {/* Video container - 9:16 aspect ratio */}
                <div className="aspect-[9/16] max-h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 relative mx-auto">
                  {category.videoUrl ? (
                   <video
                        src={category.videoUrl}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                      />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Placeholder for video upload */}
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground text-sm">Video coming soon</p>
                    </div>
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                </div>

                {/* Content */}
                <div className="p-6 text-center pointer-events-none">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Want to see more or discuss a project?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-display font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Let's Connect
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;