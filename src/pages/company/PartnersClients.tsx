import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Handshake, Star, CheckCircle2, Quote } from "lucide-react";

const technologyPartners = [
  { name: "Microsoft", tier: "Gold Partner", desc: "Azure cloud solutions and enterprise integrations" },
  { name: "AWS", tier: "Advanced Partner", desc: "Cloud infrastructure, AI/ML, and serverless solutions" },
  { name: "Google Cloud", tier: "Premier Partner", desc: "Data analytics, Kubernetes, and AI platform services" },
  { name: "SAP", tier: "Silver Partner", desc: "Enterprise resource planning and business process automation" },
  { name: "Salesforce", tier: "Consulting Partner", desc: "CRM implementation, customization, and integration" },
  { name: "Oracle", tier: "Gold Partner", desc: "Database management, cloud applications, and ERP systems" },
];

const clientLogos = [
  "JPMorgan Chase", "Siemens", "Unilever", "Pfizer",
  "FedEx", "Samsung", "BMW", "Nestlé",
  "HSBC", "Accenture", "Deloitte", "McKinsey",
];

const caseStudies = [
  { client: "FinanceFlow", industry: "Banking & Finance", result: "Reduced processing time by 65%", desc: "Migrated legacy infrastructure to a modern cloud-native platform with real-time analytics." },
  { client: "MedCore", industry: "Healthcare", result: "300% faster diagnostics", desc: "Built an AI-powered diagnostics solution that improved accuracy and processing speed." },
  { client: "ShipTrack Global", industry: "Logistics", result: "10x traffic scalability", desc: "Scaled logistics platform architecture to handle peak season traffic demands." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, FinanceFlow", quote: "NexaTech transformed our legacy infrastructure into a modern, cloud-native platform. Their team's expertise in fintech is unmatched." },
  { name: "Marcus Wright", role: "VP Engineering, MedCore", quote: "The AI-powered diagnostics solution they built has improved our processing speed by 300%. Exceptional delivery." },
];

const PartnersClients = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden section-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Partners & Clients</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Trusted by <span className="gradient-text">Industry Leaders</span> Worldwide
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                We partner with the world's leading technology companies and serve Fortune 500 enterprises across every major industry.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Technology Partners</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Strategic Technology Alliances</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our partnerships with leading technology providers ensure we deliver best-in-class solutions.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyPartners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.08}>
                <div className="service-card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Handshake size={20} className="text-primary" />
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-accent">{partner.tier}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Our Clients</p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Trusted by 200+ Enterprises</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clientLogos.map((name, i) => (
              <ScrollReveal key={name} delay={i * 0.05}>
                <div className="service-card-dark text-center py-8">
                  <span className="font-heading font-bold text-lg" style={{ color: "hsl(0 0% 60%)" }}>{name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Case Studies</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Success Stories</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.client} delay={i * 0.1}>
                <div className="service-card h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Star size={16} className="text-accent" />
                    <span className="text-xs font-heading font-semibold uppercase tracking-wider text-accent">{cs.industry}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{cs.client}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{cs.desc}</p>
                  <div className="flex items-center gap-2 pt-4" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                    <CheckCircle2 size={16} className="text-primary" />
                    <span className="font-heading font-semibold text-sm text-primary">{cs.result}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Testimonials</p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>What Our Clients Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="service-card-dark h-full flex flex-col p-8">
                  <Quote size={24} style={{ color: "hsl(var(--cyan))" }} className="mb-6 opacity-40" />
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "hsl(0 0% 70%)" }}>"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-semibold" style={{ color: "hsl(0 0% 90%)" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>{t.role}</p>
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
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Become a Partner</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Join our ecosystem of technology partners and unlock new opportunities together.</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(var(--indigo))" }}>
              Partner With Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default PartnersClients;
