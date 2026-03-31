import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Brain, FileText, Shield, Smartphone, Heart } from "lucide-react";
import imgTele from "@/assets/cards/health-tele.jpg";
import imgAi from "@/assets/cards/health-ai.jpg";
import imgEhr from "@/assets/cards/health-ehr.jpg";
import imgHipaa from "@/assets/cards/health-hipaa.jpg";
import imgPatient from "@/assets/cards/health-patient.jpg";
import imgTrials from "@/assets/cards/health-trials.jpg";

const solutions = [
  { icon: Stethoscope, title: "Telemedicine Platforms", desc: "HIPAA-compliant video consultation and remote patient monitoring systems.", image: imgTele },
  { icon: Brain, title: "AI Diagnostics", desc: "Machine learning models for medical imaging analysis and clinical decision support.", image: imgAi },
  { icon: FileText, title: "EHR Integration", desc: "Seamless integration with Epic, Cerner, and other electronic health record systems.", image: imgEhr },
  { icon: Shield, title: "HIPAA Compliance", desc: "End-to-end security architecture ensuring full regulatory compliance.", image: imgHipaa },
  { icon: Smartphone, title: "Patient Engagement", desc: "Mobile apps for appointment booking, health tracking, and care coordination.", image: imgPatient },
  { icon: Heart, title: "Clinical Trials", desc: "Digital platforms for patient recruitment, data collection, and trial management.", image: imgTrials },
];

const caseStudies = [
  { client: "Regional Hospital Network", result: "Improved diagnostic accuracy by 40% with AI", tech: "Python, TensorFlow, AWS" },
  { client: "Telehealth Startup", result: "Scaled to 500K+ monthly consultations", tech: "React, Node.js, WebRTC" },
  { client: "Pharma Company", result: "Reduced clinical trial time by 30%", tech: "Azure, Databricks, React" },
];

const Healthcare = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link>
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              <span className="gradient-text">Healthcare</span> Technology
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
              HIPAA-compliant platforms, AI-powered diagnostics, and patient engagement solutions for modern healthcare organizations.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p>
          <h2 className="font-heading font-bold text-4xl text-foreground">What We Build for Healthcare</h2>
        </div></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><IndustryCard {...s} /></ScrollReveal>))}
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
          {caseStudies.map((c, i) => (<ScrollReveal key={c.client} delay={i * 0.1}><div className="service-card-dark h-full"><h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4><p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p><p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Transform Healthcare Delivery?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
            Schedule a Consultation <ArrowRight size={16} className="ml-2" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Healthcare;
