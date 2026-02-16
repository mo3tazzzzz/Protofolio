import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science graduate and Full Stack Developer with hands-on experience
                in building scalable single-page applications using <span className="text-foreground font-medium">Angular</span> and <span className="text-foreground font-medium">TypeScript</span>,
                and developing RESTful APIs with <span className="text-foreground font-medium">.NET Core</span>.
              </p>
              <p>
                Skilled in debugging, performance optimization, SQL Server, responsive design,
                and writing clean, maintainable code. Currently supporting businesses as a freelance developer
                from Tanta, Egypt.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Tanta, Egypt" },
                { label: "Email", value: "motazgadalla8@gmail.com" },
                { label: "Degree", value: "B.Sc. Computer Science" },
                { label: "Languages", value: "Arabic, English" },
              ].map((item) => (
                <div key={item.label} className="bg-gradient-card rounded-lg p-4 border-glow">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm text-foreground font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
