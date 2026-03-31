import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, FileCheck, Fingerprint } from "lucide-react";
import heroImg from "@/assets/products/cybersecurity-platform.jpg";

const features = [
  { icon: Shield, title: "Threat Scanner", desc: "Comprehensive vulnerability assessments, pen testing, and security audits." },
  { icon: Lock, title: "Zero Trust Engine", desc: "Identity-first security with micro-segmentation and least-privilege access." },
  { icon: Eye, title: "SOC Dashboard", desc: "24/7 security monitoring, SIEM integration, and real-time incident response." },
  { icon: AlertTriangle, title: "Incident Response", desc: "Rapid containment, forensic analysis, and recovery planning." },
  { icon: FileCheck, title: "Compliance Hub", desc: "SOC2, HIPAA, PCI-DSS, GDPR, and ISO 27001 compliance automation." },
  { icon: Fingerprint, title: "IAM Platform", desc: "MFA, biometrics, PAM, and federated identity management." },
];

const stats = [
  { value: "0", label: "Client Breaches" },
  { value: "500K+", label: "Threats Blocked Daily" },
  { value: "73", label: "Avg Security Score" },
  { value: "SOC2", label: "Certified Platform" },
];

const CybersecuritySolutions = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← All Products</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{ background: "hsl(192 91% 52% / 0.1)", color: "hsl(192 91% 52%)", border: "1px solid hsl(192 91% 52% / 0.2)" }}>🛡️ Security Platform</div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>NexaShield <span className="gradient-text">Security</span></h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: "hsl(0 0% 60%)" }}>Enterprise-grade cybersecurity platform covering threat detection, compliance, and incident response.</p>
              <div className="flex flex-wrap gap-4"><Link to="/contact" className="btn-primary">Request Demo <ArrowRight size={16} className="ml-2" /></Link><a href="#features" className="btn-outline-light">Explore Features</a></div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid hsl(0 0% 100% / 0.1)" }}><img src={heroImg} alt="NexaShield Security" width={1280} height={720} className="w-full h-auto" /></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <section className="relative py-12 overflow-hidden" style={{ background: "hsl(222 47% 14%)" }}><div className="max-w-7xl mx-auto px-6"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((s) => (<div key={s.label} className="text-center"><p className="font-heading font-bold text-3xl gradient-text">{s.value}</p><p className="text-sm mt-1" style={{ color: "hsl(0 0% 50%)" }}>{s.label}</p></div>))}</div></div></section>
    <section id="features" className="section-light py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Features</p><h2 className="font-heading font-bold text-4xl text-foreground">Security Arsenal</h2></div></ScrollReveal><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{features.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><div className="service-card h-full"><s.icon size={28} className="text-accent mb-4" /><h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3><p className="text-sm text-muted-foreground">{s.desc}</p></div></ScrollReveal>))}</div></div></section>
    <section className="relative py-20 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} /><div className="relative z-10 max-w-4xl mx-auto px-6 text-center"><ScrollReveal><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Secure Your Business</h2><Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Get Started <ArrowRight size={16} className="ml-2" /></Link></ScrollReveal></div></section>
  </Layout>
);

export default CybersecuritySolutions;
