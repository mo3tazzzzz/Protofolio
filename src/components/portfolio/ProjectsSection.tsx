import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectBusicol from "@/assets/project-busicol.jpg";
import projectNotablee from "@/assets/project-notablee.jpg";
import projectCRUD from "@/assets/project-crud.jpg";
import projectOSKA from "@/assets/project-oska.jpg";

const projects = [
 
  {
    title: "FreshCart — E-commerce",
    tech: ["Angular 17", "TypeScript", "Bootstrap", "JWT"],
    desc: "Fully responsive e-commerce platform with lazy loading, authentication, email verification, cart, wishlist, and product filtering.",
    live: "https://e-commerce-rho-olive.vercel.app",
    code: "https://github.com/mo3tazzzzz/E-commerce",
    image: projectEcommerce,
  },
  {
    title: "Restaurant Website",
    tech: ["Angular", "SCSS", "Bootstrap"],
    desc: "Modern restaurant website with menu, reservations, and online ordering system.",
    live: "https://restaurant-iota-navy.vercel.app/",
    code: "https://github.com/mo3tazzzzz/Restauranttt",
    image: projectRestaurant,
  },
  {
    title: "Busicol",
    tech: ["Angular", "TypeScript", "CSS"],
    desc: "Business collaboration platform for team management and project tracking.",
    live: "https://busicol-seven.vercel.app/",
    code: "https://github.com/mo3tazzzzz/BUSICOL",
    image: projectBusicol,
  },
  {
    title: "Notablee",
    tech: ["Angular", "TypeScript", "Tailwind CSS"],
    desc: "Note-taking application with rich text editing and organization features.",
    live: "https://notablee-1zb3.vercel.app/",
    code: "https://github.com/mo3tazzzzz/notablee",
    image: projectNotablee,
  },
  {
    title: "CRUD Application",
    tech: ["Angular", "TypeScript", "Bootstrap" ],
    desc: "Full CRUD operations application demonstrating data management capabilities.",
    live: "https://crud-beta-pearl.vercel.app/",
    code: "https://github.com/mo3tazzzzz/CRUD",
    image: projectCRUD,
  },
   {
    title: "OSKA",
    tech: ["Angular", "SCSS", "TypeScript"],
    desc:  "Modern web application showcasing responsive design and user experience.",
    live: "https://oska-psi.vercel.app/",
    code: "https://github.com/mo3tazzzzz/oska",
    image: projectOSKA,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-gradient-card rounded-xl overflow-hidden border-glow hover:shadow-glow transition-all duration-300"
              >
                {/* Project image placeholder */}
                <div className="h-44 overflow-hidden border-b border-border">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body mb-3 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
