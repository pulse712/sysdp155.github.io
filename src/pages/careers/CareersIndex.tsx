import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Briefcase, GraduationCap, ClipboardCheck } from "lucide-react";

const careerPages = [
  {
    icon: Sparkles,
    title: "Life at NexaTech",
    desc: "Discover our culture, values, and what makes working here extraordinary. From hackathons to team retreats, see how we grow together.",
    href: "/careers/life",
    color: "hsl(192 91% 52%)",
  },
  {
    icon: Briefcase,
    title: "Open Positions",
    desc: "Explore current openings across engineering, design, data science, and leadership roles in offices worldwide.",
    href: "/careers/positions",
    color: "hsl(234 89% 64%)",
  },
  {
    icon: GraduationCap,
    title: "Internship Program",
    desc: "Kickstart your career with a world-class internship. Mentorship, real projects, and a clear path to a full-time role.",
    href: "/careers/internships",
    color: "hsl(160 84% 44%)",
  },
  {
    icon: ClipboardCheck,
    title: "Hiring Process",
    desc: "Transparency matters. Learn exactly what to expect at every stage of our interview and onboarding process.",
    href: "/careers/hiring",
    color: "hsl(32 95% 55%)",
  },
];

const stats = [
  { value: "2,000+", label: "Engineers Worldwide" },
  { value: "30+", label: "Countries" },
  { value: "4.8/5", label: "Glassdoor Rating" },
  { value: "92%", label: "Employee Retention" },
];

const CareersIndex = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-15 animate-float" style={{ background: "radial-gradient(circle, hsl(234 89% 54% / 0.5), transparent)" }} />
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full opacity-10 animate-float" style={{ background: "radial-gradient(circle, hsl(192 91% 52% / 0.5), transparent)", animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Careers</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Build the <span className="gradient-text">Future</span> With Us
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                Join a global team of innovators, engineers, and problem-solvers shaping enterprise technology for the world's most ambitious organizations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark py-16 border-t" style={{ borderColor: "hsl(0 0% 100% / 0.05)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl gradient-text mb-2">{s.value}</div>
                <div className="text-sm font-medium" style={{ color: "hsl(0 0% 55%)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pages Grid */}
      <section className="section-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Explore</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
                Your Journey Starts Here
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you're a seasoned professional or just starting out, we have a place for you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {careerPages.map((page, i) => (
              <ScrollReveal key={page.title} delay={i * 0.1}>
                <Link to={page.href} className="group block">
                  <div className="service-card h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300" style={{ background: `${page.color.replace(")", " / 0.1)")}` }}>
                      <page.icon size={26} style={{ color: page.color }} />
                    </div>
                    <h3 className="font-heading font-semibold text-2xl text-foreground mb-3">{page.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{page.desc}</p>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Explore <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              Don't See Your Role?
            </h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
              We're always looking for exceptional talent. Send us your resume and we'll reach out when the right opportunity opens.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CareersIndex;
