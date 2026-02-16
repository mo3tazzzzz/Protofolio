import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "SCSS", "Bootstrap", "Tailwind CSS", "JavaScript (ES6)", "TypeScript", "jQuery", "Angular"],
  },
  {
    title: "Backend",
    skills: ["C#", "SQL Server", "OOP", "LINQ", "EF Core", "Dapper", "ASP.NET MVC", "ASP.NET APIs", "JWT Auth", "SignalR"],
  },
  {
    title: "Architecture",
    skills: ["SOLID Principles", "Design Patterns", "Clean Architecture", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Visual Studio", "VS Code", "SSMS", "Postman", "Git", "GitHub", "Swagger"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-card rounded-xl p-6 border-glow"
              >
                <h3 className="font-display text-lg font-semibold text-primary mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-body px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
