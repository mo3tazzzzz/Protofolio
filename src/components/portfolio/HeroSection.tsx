import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-primary/40 shadow-glow overflow-hidden bg-secondary flex items-center justify-center"
        >
          <img src={profilePhoto} alt="Moataz Adel Gadalla" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Moataz Adel{" "}
          <span className="text-gradient">Gadalla</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body"
        >
          Full Stack Developer — .NET & Angular
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://github.com/mo3tazzzzz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all"
          >
            <Github size={20} className="text-foreground" />
          </a>
          <a
            href="https://linkedin.com/in/mo3taz-gadalla"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all"
          >
            <Linkedin size={20} className="text-foreground" />
          </a>
          <a
            href="mailto:motazgadalla8@gmail.com"
            className="p-3 rounded-full border border-border hover:border-primary hover:shadow-glow transition-all"
          >
            <Mail size={20} className="text-foreground" />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="inline-flex animate-bounce text-primary"
        >
          <ArrowDown size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
