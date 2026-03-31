import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Layers, Palette, Zap, Code2 } from "lucide-react";
import imgWeb from "@/assets/cards/webdev-web.jpg";
import imgMobile from "@/assets/cards/webdev-mobile.jpg";
import imgSaas from "@/assets/cards/webdev-saas.jpg";
import imgUiux from "@/assets/cards/webdev-uiux.jpg";
import imgMvp from "@/assets/cards/webdev-mvp.jpg";
import imgApi from "@/assets/cards/webdev-api.jpg";

const solutions = [
  { icon: Globe, title: "Web Application Development", desc: "High-performance web apps with React, Angular, and Vue — from SaaS dashboards to consumer platforms.", image: imgWeb },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native iOS/Android and cross-platform apps with Flutter and React Native.", image: imgMobile },
  { icon: Layers, title: "SaaS Product Development", desc: "End-to-end SaaS platform engineering — multi-tenancy, billing, and scalable architecture.", image: imgSaas },
  { icon: Palette, title: "UI/UX Design", desc: "Research-driven design systems, prototyping, and usability testing for exceptional user experiences.", image: imgUiux },
  { icon: Zap, title: "MVP & Rapid Prototyping", desc: "Launch your product in weeks with lean MVP development and iterative feature rollouts.", image: imgMvp },
  { icon: Code2, title: "API & Backend Development", desc: "RESTful and GraphQL APIs, microservices, and serverless architectures built for scale.", image: imgApi },
];

const caseStudies = [
  { client: "FinTech Startup", result: "Launched MVP in 8 weeks, raised $5M Series A", tech: "React, Node.js, PostgreSQL" },
  { client: "Enterprise SaaS", result: "Scaled to 100K+ users with 99.99% uptime", tech: "React, Go, Kubernetes" },
  { client: "Consumer App", result: "2M+ downloads in first year", tech: "Flutter, Firebase, GCP" },
];

const WebAppDevelopment = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} /><div className="relative z-10 max-w-7xl mx-auto px-6"><ScrollReveal><Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link><div className="max-w-3xl"><h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Web & App <span className="gradient-text">Development</span></h1><p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>Full-cycle web and mobile development for startups and enterprises.</p></div></ScrollReveal></div></section>
    <section className="section-light py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p><h2 className="font-heading font-bold text-4xl text-foreground">What We Build</h2></div></ScrollReveal><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{solutions.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><IndustryCard {...s} /></ScrollReveal>))}</div></div></section>
    <section className="section-dark py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Results</p><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Client Success Stories</h2></div></ScrollReveal><div className="grid md:grid-cols-3 gap-6">{caseStudies.map((c, i) => (<ScrollReveal key={c.client} delay={i * 0.1}><div className="service-card-dark h-full"><h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4><p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p><p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p></div></ScrollReveal>))}</div></div></section>
    <section className="relative py-20 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} /><div className="relative z-10 max-w-4xl mx-auto px-6 text-center"><ScrollReveal><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Build Your Product?</h2><Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Schedule a Consultation <ArrowRight size={16} className="ml-2" /></Link></ScrollReveal></div></section>
  </Layout>
);

export default WebAppDevelopment;
