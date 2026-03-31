import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Brain, Users, BookOpen, BarChart3, GraduationCap } from "lucide-react";
import imgLms from "@/assets/cards/edu-lms.jpg";
import imgAdaptive from "@/assets/cards/edu-adaptive.jpg";
import imgVirtual from "@/assets/cards/edu-virtual.jpg";
import imgContent from "@/assets/cards/edu-content.jpg";
import imgAnalytics from "@/assets/cards/edu-analytics.jpg";
import imgCredential from "@/assets/cards/edu-credential.jpg";

const solutions = [
  { icon: Monitor, title: "Learning Management Systems", desc: "Scalable LMS platforms with content authoring, assessments, and analytics.", image: imgLms },
  { icon: Brain, title: "Adaptive Learning", desc: "AI-powered engines that personalize learning paths for each student.", image: imgAdaptive },
  { icon: Users, title: "Virtual Classrooms", desc: "Real-time video conferencing with whiteboarding, breakout rooms, and recording.", image: imgVirtual },
  { icon: BookOpen, title: "Content Platforms", desc: "Digital content delivery with multimedia support and offline access.", image: imgContent },
  { icon: BarChart3, title: "Student Analytics", desc: "Comprehensive dashboards tracking engagement, progress, and outcomes.", image: imgAnalytics },
  { icon: GraduationCap, title: "Credentialing", desc: "Digital certificates, micro-credentials, and blockchain-verified badges.", image: imgCredential },
];

const caseStudies = [
  { client: "University Network", result: "Enrolled 200K+ students on a unified LMS", tech: "React, Node.js, AWS" },
  { client: "EdTech Startup", result: "Improved completion rates by 60% with AI", tech: "Python, TensorFlow, GCP" },
  { client: "Corporate Training", result: "Delivered training to 50K+ employees globally", tech: "React, GraphQL, Azure" },
];

const Education = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} /><div className="relative z-10 max-w-7xl mx-auto px-6"><ScrollReveal><Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link><div className="max-w-3xl"><h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}><span className="gradient-text">Education</span> Technology</h1><p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>LMS platforms, adaptive learning engines, virtual classrooms, and student analytics systems.</p></div></ScrollReveal></div></section>
    <section className="section-light py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p><h2 className="font-heading font-bold text-4xl text-foreground">What We Build for Education</h2></div></ScrollReveal><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{solutions.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><IndustryCard {...s} /></ScrollReveal>))}</div></div></section>
    <section className="section-dark py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Results</p><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Client Success Stories</h2></div></ScrollReveal><div className="grid md:grid-cols-3 gap-6">{caseStudies.map((c, i) => (<ScrollReveal key={c.client} delay={i * 0.1}><div className="service-card-dark h-full"><h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4><p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p><p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p></div></ScrollReveal>))}</div></div></section>
    <section className="relative py-20 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} /><div className="relative z-10 max-w-4xl mx-auto px-6 text-center"><ScrollReveal><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Transform Learning?</h2><Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Schedule a Consultation <ArrowRight size={16} className="ml-2" /></Link></ScrollReveal></div></section>
  </Layout>
);

export default Education;
