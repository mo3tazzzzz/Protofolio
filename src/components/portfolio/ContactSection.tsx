import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-4 mx-auto" />
          <p className="text-center text-muted-foreground font-body mb-10 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "motazgadalla8@gmail.com", href: "mailto:motazgadalla8@gmail.com" },
                { icon: Phone, label: "Phone", value: "+20 1016530868", href: "tel:+201016530868" },
                { icon: MapPin, label: "Location", value: "Tanta, Egypt", href: "#" },
                { icon: Linkedin, label: "LinkedIn", value: "mo3taz-gadalla", href: "https://linkedin.com/in/mo3taz-gadalla" },
                { icon: Github, label: "GitHub", value: "mo3tazzzzz", href: "https://github.com/mo3tazzzzz" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-glow transition-all">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm text-foreground font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-glow transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground font-display font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
