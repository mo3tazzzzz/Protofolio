import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Award } from "lucide-react";

// const testimonials = [
//   {
//     name: "Client Name",
//     role: "CEO, Company",
//     text: "Add your client testimonial here. Showcase the positive feedback from satisfied clients.",
//   },
//   {
//     name: "Client Name",
//     role: "Project Manager, Company",
//     text: "Add your client testimonial here. Highlight the quality of work and professionalism.",
//   },
//   {
//     name: "Client Name",
//     role: "CTO, Company",
//     text: "Add your client testimonial here. Mention the impact your work had on their business.",
//   },
// ];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Achievements */}
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            Achievements  <span className="text-gradient"></span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { label: "DEPI Initiative", sub: "Full Stack .NET Track" },
              { label: "ITI Training", sub: "Summer Internship" },
              { label: "Route Academy", sub: "Frontend Development" },
            ].map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-gradient-card rounded-lg p-4 border-glow"
              >
                <Award size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-sm font-display font-semibold text-foreground">{a.label}</p>
                  <p className="text-xs text-muted-foreground">{a.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          {/* <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-gradient-card rounded-xl p-6 border-glow"
              >
                <Quote size={20} className="text-primary/40 mb-3" />
                <p className="text-sm text-muted-foreground font-body mb-4 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="text-sm font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
