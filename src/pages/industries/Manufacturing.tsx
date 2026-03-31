import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Cog, Cpu, BarChart3, Wrench, Factory } from "lucide-react";
import imgIot from "@/assets/cards/mfg-iot.jpg";
import imgPredictive from "@/assets/cards/mfg-predictive.jpg";
import imgTwin from "@/assets/cards/mfg-twin.jpg";
import imgAnalytics from "@/assets/cards/mfg-analytics.jpg";
import imgMes from "@/assets/cards/mfg-mes.jpg";
import imgSupply from "@/assets/cards/mfg-supply.jpg";

const solutions = [
  { icon: Wifi, title: "IoT & Smart Factory", desc: "Connected sensors, real-time monitoring, and industrial IoT platforms.", image: imgIot },
  { icon: Cog, title: "Predictive Maintenance", desc: "ML models that predict equipment failures before they happen.", image: imgPredictive },
  { icon: Cpu, title: "Digital Twins", desc: "Virtual replicas of physical assets for simulation and optimization.", image: imgTwin },
  { icon: BarChart3, title: "Production Analytics", desc: "Real-time dashboards for OEE, throughput, and quality metrics.", image: imgAnalytics },
  { icon: Wrench, title: "MES Integration", desc: "Manufacturing Execution System integration with ERP and PLM platforms.", image: imgMes },
  { icon: Factory, title: "Supply Chain Digitization", desc: "End-to-end supply chain visibility with blockchain-enabled tracking.", image: imgSupply },
];

const caseStudies = [
  { client: "Automotive Manufacturer", result: "Reduced unplanned downtime by 60%", tech: "Python, Azure IoT, Power BI" },
  { client: "Electronics Factory", result: "Improved quality yield by 25%", tech: "TensorFlow, Kafka, React" },
  { client: "Chemical Plant", result: "Saved $12M/year with predictive maintenance", tech: "AWS, Python, Grafana" },
];

const Manufacturing = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} /><div className="relative z-10 max-w-7xl mx-auto px-6"><ScrollReveal><Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link><div className="max-w-3xl"><h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Smart <span className="gradient-text">Manufacturing</span></h1><p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>IoT-enabled smart factories, predictive maintenance, digital twins, and supply chain digitization.</p></div></ScrollReveal></div></section>
    <section className="section-light py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p><h2 className="font-heading font-bold text-4xl text-foreground">What We Build for Manufacturing</h2></div></ScrollReveal><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{solutions.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><IndustryCard {...s} /></ScrollReveal>))}</div></div></section>
    <section className="section-dark py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Results</p><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Client Success Stories</h2></div></ScrollReveal><div className="grid md:grid-cols-3 gap-6">{caseStudies.map((c, i) => (<ScrollReveal key={c.client} delay={i * 0.1}><div className="service-card-dark h-full"><h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4><p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p><p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p></div></ScrollReveal>))}</div></div></section>
    <section className="relative py-20 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} /><div className="relative z-10 max-w-4xl mx-auto px-6 text-center"><ScrollReveal><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Digitize Your Factory?</h2><Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Schedule a Consultation <ArrowRight size={16} className="ml-2" /></Link></ScrollReveal></div></section>
  </Layout>
);

export default Manufacturing;
