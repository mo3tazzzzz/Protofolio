import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Intern — Full Stack .Net Track",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Dec 2025 – Present",
    details: [
      "Hands-on training on Database Design, SQL Server, C#, OOP, LINQ, EF Core, and Dapper.",
      "Building web applications using ASP.NET Web API and ASP.NET MVC.",
      "Debugging API endpoints and SQL queries for accurate data flow.",
    ],
  },
  {
    role: "Intern — Summer Training",
    company: "Information Technology Institute (ITI)",
    period: "Jul 2025 – Aug 2025",
    details: [
      "Intensive training on HTML5, CSS3, Bootstrap, JavaScript, TypeScript, and Angular.",
      "Built an E-commerce web application using Angular.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary shadow-glow" />
                <div className="bg-gradient-card rounded-xl p-6 border-glow">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase size={18} className="text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 ml-7">
                    {exp.details.map((d, j) => (
                      <li key={j} className="text-sm text-muted-foreground font-body">
                        • {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
