import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const courses = [
  "Data Structures", "Algorithms", "Software Engineering", "OOP",
  "Operating Systems", "Networking", "AI", "Machine Learning", "Databases",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-card rounded-xl p-6 border-glow">
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap size={24} className="text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-sm text-primary">Faculty of Computer and Information, Tanta University</p>
                  <p className="text-xs text-muted-foreground mt-1">Sep 2022 – Jun 2026 (Expected)</p>
                  <p className="text-xs text-muted-foreground">Grade: Very Good</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 border-glow">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen size={24} className="text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Frontend Development — Route
                  </h3>
                  <p className="text-sm text-primary">Professional Training Program</p>
                  <p className="text-xs text-muted-foreground mt-1">Mar 2024 – Aug 2024</p>
                  <p className="text-xs text-muted-foreground">Angular, TypeScript, Responsive Design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((c) => (
                <span
                  key={c}
                  className="text-xs font-body px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
