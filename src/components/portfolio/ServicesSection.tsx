import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Server, Smartphone, Database, Code2, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Building modern, scalable single-page applications with Angular and TypeScript.",
  },
  {
    icon: Server,
    title: "Backend API Development",
    desc: "Designing RESTful APIs using ASP.NET Core, Entity Framework, and SQL Server.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Mobile-first, pixel-perfect responsive layouts with HTML5, CSS3, and Tailwind CSS.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Efficient database architecture with SQL Server, LINQ, and Entity Framework Core.",
  },
  {
    icon: Code2,
    title: "Full Stack Solutions",
    desc: "End-to-end development from frontend UI to backend logic and deployment.",
  },
  {
    icon: Wrench,
    title: "Bug Fixing & Optimization",
    desc: "Performance optimization, debugging, and maintaining existing web applications.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Offered <span className="text-gradient">Services</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gradient-card rounded-xl p-6 border-glow hover:shadow-glow transition-all duration-300"
              >
                <s.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
