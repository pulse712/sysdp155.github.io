import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Users, Code2, Award, CalendarDays, CheckCircle2 } from "lucide-react";

const programHighlights = [
  { icon: Code2, title: "Real Projects", desc: "Work on production code that impacts millions of enterprise users worldwide." },
  { icon: Users, title: "1:1 Mentorship", desc: "Paired with a senior engineer who guides your growth throughout the program." },
  { icon: Award, title: "Full-Time Offers", desc: "85% of our interns receive and accept full-time return offers." },
  { icon: Rocket, title: "Demo Day", desc: "Present your project to company leadership and the entire engineering org." },
];

const timeline = [
  { month: "Month 1", title: "Onboarding & Immersion", items: ["Meet your mentor and team", "Complete tech stack bootcamp", "Ship your first pull request"] },
  { month: "Month 2", title: "Deep Dive", items: ["Own a feature end-to-end", "Participate in design reviews", "Join cross-team collaboration sessions"] },
  { month: "Month 3", title: "Impact & Showcase", items: ["Polish and ship your project", "Present at Demo Day", "Receive performance feedback and offer discussion"] },
];

const eligibility = [
  "Currently pursuing a BS, MS, or PhD in Computer Science or related field",
  "Available for a 12-week full-time commitment (summer or winter cohorts)",
  "Proficient in at least one programming language (Python, Java, TypeScript, etc.)",
  "Passionate about solving complex engineering challenges",
  "Strong communication and collaboration skills",
];

const InternshipProgram = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors" style={{ color: "hsl(192 91% 52%)" }}>
                ← Back to Careers
              </Link>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Internship <span className="gradient-text">Program</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                A 12-week immersive experience designed to launch your engineering career. Real impact. Real mentorship. Real offers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Program Highlights</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Why Intern at NexaTech?</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className="service-card h-full text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "hsl(160 84% 44% / 0.1)" }}>
                    <h.icon size={26} style={{ color: "hsl(160 84% 44%)" }} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>12-Week Program</p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Your Journey</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((phase, i) => (
              <ScrollReveal key={phase.month} delay={i * 0.15}>
                <div className="service-card-dark h-full">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <CalendarDays size={18} style={{ color: "hsl(192 91% 52%)" }} />
                    <span className="text-xs font-heading font-bold uppercase tracking-wider" style={{ color: "hsl(192 91% 52%)" }}>{phase.month}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-4" style={{ color: "hsl(0 0% 90%)" }}>{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "hsl(0 0% 60%)" }}>
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "hsl(160 84% 44%)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-light py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Requirements</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Who Can Apply?</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="service-card">
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Applications Open Now</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Summer 2026 cohort applications close April 30. Don't miss your chance.</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              Apply Now <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default InternshipProgram;
