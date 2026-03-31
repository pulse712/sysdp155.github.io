import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Shield, Globe, Workflow, Server, Users, Check } from "lucide-react";
import heroImg from "@/assets/products/enterprise-dashboard.jpg";

const features = [
  { icon: Building2, title: "Enterprise Architecture", desc: "Scalable, modular architecture that grows with your business and handles millions of users." },
  { icon: Shield, title: "Security & Compliance", desc: "SOC2, ISO 27001, and GDPR-compliant platforms with end-to-end encryption." },
  { icon: Globe, title: "Global Deployment", desc: "Multi-region deployments with CDN integration for worldwide performance." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate complex business processes and approval chains with intelligent workflows." },
  { icon: Server, title: "System Integration", desc: "Seamlessly integrate with SAP, Salesforce, Oracle, and legacy enterprise systems." },
  { icon: Users, title: "Role-Based Access", desc: "Granular permission systems with SSO, LDAP, and Active Directory support." },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "50M+", label: "Daily Transactions" },
  { value: "24/7", label: "Support & Monitoring" },
];

const plans = [
  { name: "Starter", price: "$2,499", period: "/mo", features: ["Up to 100 users", "5 integrations", "Standard support", "99.9% uptime"], highlight: false },
  { name: "Business", price: "$7,999", period: "/mo", features: ["Up to 1,000 users", "Unlimited integrations", "Priority support", "99.99% uptime", "Custom workflows"], highlight: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited users", "Dedicated infrastructure", "24/7 premium support", "On-premise deployment", "Custom SLA"], highlight: false },
];

const EnterpriseSolutions = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← All Products</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ background: "hsl(192 91% 52% / 0.1)", color: "hsl(192 91% 52%)", border: "1px solid hsl(192 91% 52% / 0.2)" }}>
                🏢 Enterprise Platform
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                NexaEnterprise <span className="gradient-text">Suite</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: "hsl(0 0% 60%)" }}>
                The all-in-one enterprise platform that unifies operations, automates workflows, and scales with your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Request Demo <ArrowRight size={16} className="ml-2" /></Link>
                <a href="#pricing" className="btn-outline-light">View Pricing</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid hsl(0 0% 100% / 0.1)" }}>
              <img src={heroImg} alt="NexaEnterprise Dashboard" width={1280} height={720} className="w-full h-auto" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="relative py-12 overflow-hidden" style={{ background: "hsl(222 47% 14%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading font-bold text-3xl gradient-text">{s.value}</p>
              <p className="text-sm mt-1" style={{ color: "hsl(0 0% 50%)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Features</p>
          <h2 className="font-heading font-bold text-4xl text-foreground">Everything Your Enterprise Needs</h2>
        </div></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="service-card h-full"><s.icon size={28} className="text-accent mb-4" /><h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3><p className="text-sm text-muted-foreground">{s.desc}</p></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section id="pricing" className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal><div className="text-center mb-16">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Pricing</p>
          <h2 className="font-heading font-bold text-4xl" style={{ color: "hsl(0 0% 100%)" }}>Choose Your Plan</h2>
        </div></ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 h-full ${p.highlight ? "border-2" : "border"}`} style={{ background: p.highlight ? "hsl(0 0% 100% / 0.08)" : "hsl(0 0% 100% / 0.04)", borderColor: p.highlight ? "hsl(192 91% 52%)" : "hsl(0 0% 100% / 0.08)" }}>
                {p.highlight && <span className="text-xs font-bold uppercase px-3 py-1 rounded-full mb-4 inline-block" style={{ background: "hsl(192 91% 52% / 0.2)", color: "hsl(192 91% 52%)" }}>Most Popular</span>}
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: "hsl(0 0% 100%)" }}>{p.name}</h3>
                <p className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>{p.price}<span className="text-base font-normal" style={{ color: "hsl(0 0% 50%)" }}>{p.period}</span></p>
                <ul className="space-y-3 mb-8">{p.features.map((f) => (<li key={f} className="flex items-center gap-2 text-sm" style={{ color: "hsl(0 0% 70%)" }}><Check size={16} style={{ color: "hsl(192 91% 52%)" }} />{f}</li>))}</ul>
                <Link to="/contact" className={p.highlight ? "btn-primary w-full text-center" : "btn-outline-light w-full text-center"}>Get Started</Link>
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
          <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Transform Your Enterprise?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Schedule a Demo <ArrowRight size={16} className="ml-2" /></Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default EnterpriseSolutions;
