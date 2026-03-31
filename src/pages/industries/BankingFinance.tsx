import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, CreditCard, ShieldCheck, TrendingUp, BarChart3, Lock, Building2 } from "lucide-react";
import imgCore from "@/assets/cards/banking-core.jpg";
import imgFraud from "@/assets/cards/banking-fraud.jpg";
import imgTrading from "@/assets/cards/banking-trading.jpg";
import imgRisk from "@/assets/cards/banking-risk.jpg";
import imgCompliance from "@/assets/cards/banking-compliance.jpg";
import imgDigital from "@/assets/cards/banking-digital.jpg";

const solutions = [
  { icon: CreditCard, title: "Core Banking Modernization", desc: "Migrate legacy systems to cloud-native architectures with zero downtime.", image: imgCore },
  { icon: ShieldCheck, title: "Fraud Detection & AML", desc: "AI-powered real-time transaction monitoring and anti-money laundering systems.", image: imgFraud },
  { icon: TrendingUp, title: "Algorithmic Trading", desc: "Low-latency trading platforms with advanced quantitative models.", image: imgTrading },
  { icon: BarChart3, title: "Risk Analytics", desc: "Predictive risk modeling and regulatory reporting automation.", image: imgRisk },
  { icon: Lock, title: "Regulatory Compliance", desc: "SOC2, PCI-DSS, and GDPR compliance frameworks built into every solution.", image: imgCompliance },
  { icon: Building2, title: "Digital Banking", desc: "Neobank platforms, mobile banking, and open banking API integrations.", image: imgDigital },
];

const caseStudies = [
  { client: "Global Investment Bank", result: "Reduced trade execution latency by 85%", tech: "Java, Kafka, AWS" },
  { client: "Digital Payments Provider", result: "Processed 2M+ daily transactions with 99.99% uptime", tech: "Kubernetes, Go, PostgreSQL" },
  { client: "Insurance Company", result: "Automated 70% of claims processing with AI", tech: "Python, TensorFlow, Azure" },
];

const BankingFinance = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link>
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              Banking & <span className="gradient-text">Finance</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
              Secure, compliant, and high-performance technology solutions for banks, fintechs, insurance companies, and investment firms.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p>
          <h2 className="font-heading font-bold text-4xl text-foreground">What We Build for Finance</h2>
        </div></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <IndustryCard {...s} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal><div className="text-center mb-16">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Results</p>
          <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Client Success Stories</h2>
        </div></ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <ScrollReveal key={c.client} delay={i * 0.1}>
              <div className="service-card-dark h-full">
                <h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4>
                <p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p>
                <p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Modernize Your Financial Platform?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
            Schedule a Consultation <ArrowRight size={16} className="ml-2" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default BankingFinance;
