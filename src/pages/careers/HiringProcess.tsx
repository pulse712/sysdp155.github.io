import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Send, Phone, Code2, Users, CheckCircle2, HelpCircle, Clock } from "lucide-react";

const steps = [
  {
    icon: Send,
    step: "01",
    title: "Application",
    duration: "1–2 days review",
    desc: "Submit your resume and a brief cover note. Our recruiting team reviews every application personally — no AI screening.",
  },
  {
    icon: Phone,
    step: "02",
    title: "Recruiter Screen",
    duration: "30 min call",
    desc: "A friendly conversation about your background, career goals, and what excites you about NexaTech. We'll also share salary ranges upfront.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Technical Assessment",
    duration: "Take-home or live (your choice)",
    desc: "A practical coding challenge relevant to the role. No trick questions — we want to see how you think, design, and communicate.",
  },
  {
    icon: Users,
    step: "04",
    title: "Team Interviews",
    duration: "2–3 hours (virtual or onsite)",
    desc: "Meet your future teammates and manager. Sessions cover system design, problem-solving, and cultural alignment. We encourage questions.",
  },
  {
    icon: CheckCircle2,
    step: "05",
    title: "Offer & Onboarding",
    duration: "Offer within 48 hours",
    desc: "If it's a match, you'll receive a competitive offer quickly. Our onboarding program ensures you're set up for success from day one.",
  },
];

const faqs = [
  { q: "How long does the entire process take?", a: "Typically 2–3 weeks from application to offer, though we can expedite for candidates with competing timelines." },
  { q: "Can I choose between a take-home and live coding?", a: "Absolutely. We offer both options for the technical assessment — pick whichever lets you do your best work." },
  { q: "Do you provide visa sponsorship?", a: "Yes, we sponsor work visas for qualified candidates in the US, UK, Singapore, and UAE." },
  { q: "What tech stack will I work with?", a: "It depends on the team, but our primary stacks include React/TypeScript, Python, Go, AWS/Azure, and Kubernetes." },
  { q: "Is remote work available?", a: "Most engineering roles are remote-eligible. Some leadership and client-facing roles may require hybrid presence." },
];

const HiringProcess = () => {
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
                Our <span className="gradient-text">Hiring Process</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                No surprises, no guessing games. Here's exactly what to expect when you apply to NexaTech.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <section className="section-light py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Step by Step</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">5 Steps to Joining Us</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <div className="service-card flex flex-col md:flex-row gap-6 !p-8">
                  <div className="flex items-start gap-5 flex-1">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "hsl(234 89% 54% / 0.08)" }}>
                      <s.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-accent">Step {s.step}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} /> {s.duration}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-dark py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>FAQ</p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Common Questions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.08}>
                <div className="service-card-dark !p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle size={20} className="shrink-0 mt-0.5" style={{ color: "hsl(192 91% 52%)" }} />
                    <div>
                      <h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{faq.q}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 55%)" }}>{faq.a}</p>
                    </div>
                  </div>
                </div>
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
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Apply?</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Browse our open roles and take the first step toward an exciting career.</p>
            <Link to="/careers/positions" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              View Open Positions <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default HiringProcess;
