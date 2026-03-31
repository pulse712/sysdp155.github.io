import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Award, Shield, Zap } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import techAbstract from "@/assets/tech-abstract.jpg";

const values = [
  { icon: Target, title: "Excellence", desc: "We set the highest standards in every deliverable, ensuring quality that exceeds expectations." },
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries with emerging technologies and creative problem-solving approaches." },
  { icon: Users, title: "Collaboration", desc: "We succeed together — with our clients, partners, and each other." },
  { icon: Heart, title: "Integrity", desc: "We operate with transparency, honesty, and trust in every interaction." },
  { icon: Eye, title: "Vision", desc: "We think long-term, building sustainable solutions for the future." },
  { icon: Award, title: "Impact", desc: "We measure success by the tangible value we create for our clients and communities." },
];

const principles = [
  { icon: Shield, title: "Security First", desc: "Every solution is built with enterprise-grade security from the ground up." },
  { icon: Zap, title: "Speed & Quality", desc: "We deliver fast without compromising on code quality or architecture." },
  { icon: Users, title: "Client-Centric", desc: "We treat our clients' challenges as our own, driving outcomes together." },
];

const MissionVision = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden section-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Mission & Vision</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Driven by <span className="gradient-text">Purpose</span>, Guided by Values
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                Our mission and values shape every decision we make, every solution we build, and every relationship we nurture.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="service-card h-full relative overflow-hidden">
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${heroOffice})`,
                  }}
                />
                <div className="absolute inset-0 bg-white/80" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "hsl(0 0% 100%)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                    <Target size={32} style={{ color: "hsl(220 20% 20%)" }} />
                  </div>
                  <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: "hsl(220 20% 15%)" }}>Our Mission</h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "hsl(220 20% 15%)" }}>
                    To empower global enterprises with innovative, scalable, and secure technology solutions that accelerate digital transformation and create lasting business value.
                  </p>
                  <ul className="space-y-3">
                    {["Accelerate digital transformation for enterprises", "Deliver measurable business outcomes", "Build technology that scales with ambition"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "hsl(220 20% 15%)" }}>
                        <ArrowRight size={14} className="mt-0.5 shrink-0" style={{ color: "hsl(210 100% 45%)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="service-card h-full relative overflow-hidden">
                {/* Background image with overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ 
                    backgroundImage: `url(${techAbstract})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-900/95" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "hsla(200, 100%, 68%, 1.00)", boxShadow: "0 4px 20px rgba(56, 189, 248, 0.4)" }}>
                    <Eye size={32} style={{ color: "hsl(220 20% 15%)" }} />
                  </div>
                  <h2 className="font-heading font-bold text-3xl mb-4" style={{ color: "hsl(220 20% 15%)" }}>Our Vision</h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "hsl(220 20% 15%)" }}>
                    To be the world's most trusted technology partner, known for engineering excellence, innovation leadership, and an unwavering commitment to client success.
                  </p>
                  <ul className="space-y-3">
                    {["Set the global standard for engineering excellence", "Pioneer next-generation technology solutions", "Build enduring partnerships with world-class organizations"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "hsl(220 20% 15%)" }}>
                        <ArrowRight size={14} className="mt-0.5 shrink-0" style={{ color: "hsl(210 100% 45%)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Core Values</p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>What Drives Us Every Day</h2>
              <p className="text-lg" style={{ color: "hsl(0 0% 55%)" }}>
                These values are the foundation of everything we do.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="service-card-dark text-center h-full">
                  <v.icon size={28} className="mx-auto mb-4" style={{ color: "hsl(var(--cyan))" }} />
                  <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 90%)" }}>{v.title}</h3>
                  <p className="text-sm" style={{ color: "hsl(0 0% 55%)" }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">How We Work</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">Operating Principles</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="service-card h-full text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "hsl(var(--indigo) / 0.08)" }}>
                    <p.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
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
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Share Our Vision?</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Let's build the future of enterprise technology together.</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(var(--indigo))" }}>
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default MissionVision;
