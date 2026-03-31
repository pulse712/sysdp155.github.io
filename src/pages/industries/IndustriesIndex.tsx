import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Heart, ShoppingCart, Truck, GraduationCap, Factory, Link2, Code2 } from "lucide-react";
import imgBanking from "@/assets/industry-banking.jpg";
import imgHealthcare from "@/assets/industry-healthcare.jpg";
import imgRetail from "@/assets/industry-retail.jpg";
import imgLogistics from "@/assets/industry-logistics.jpg";
import imgEducation from "@/assets/industry-education.jpg";
import imgManufacturing from "@/assets/industry-manufacturing.jpg";
import imgBlockchain from "@/assets/industry-blockchain.jpg";
import imgWebdev from "@/assets/industry-webdev.jpg";

const industries = [
  {
    icon: Building2,
    title: "Banking & Finance",
    desc: "Secure, compliant fintech solutions — from core banking modernization to fraud detection and algorithmic trading platforms.",
    href: "/industries/banking-finance",
    image: imgBanking,
  },
  {
    icon: Heart,
    title: "Healthcare",
    desc: "HIPAA-compliant platforms, EHR integrations, telemedicine systems, and AI-powered diagnostics for modern healthcare.",
    href: "/industries/healthcare",
    image: imgHealthcare,
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    desc: "Omnichannel commerce platforms, inventory management, personalization engines, and supply chain optimization.",
    href: "/industries/retail-ecommerce",
    image: imgRetail,
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    desc: "Fleet management, route optimization, real-time tracking, and warehouse automation solutions.",
    href: "/industries/logistics",
    image: imgLogistics,
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "LMS platforms, adaptive learning engines, virtual classrooms, and student analytics systems.",
    href: "/industries/education",
    image: imgEducation,
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "IoT-enabled smart factories, predictive maintenance, digital twins, and supply chain digitization.",
    href: "/industries/manufacturing",
    image: imgManufacturing,
  },
  {
    icon: Link2,
    title: "Blockchain & Trading",
    desc: "Decentralized applications, smart contracts, crypto exchange platforms, and tokenization solutions.",
    href: "/industries/blockchain-trading",
    image: imgBlockchain,
  },
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "Full-cycle web and mobile development for startups and enterprises — SaaS, marketplaces, and consumer apps.",
    href: "/industries/web-app-development",
    image: imgWebdev,
  },
];

const stats = [
  { value: "8+", label: "Industry Verticals" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30+", label: "Countries Served" },
];

const IndustriesIndex = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="absolute top-1/3 right-1/5 w-80 h-80 rounded-full opacity-15 animate-float" style={{ background: "radial-gradient(circle, hsl(234 89% 54% / 0.5), transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Industries</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Deep Expertise Across <span className="gradient-text">Every Sector</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                We understand the unique challenges, regulations, and opportunities of each industry — delivering tailored solutions that drive measurable outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark py-16 border-t" style={{ borderColor: "hsl(0 0% 100% / 0.05)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl gradient-text mb-2">{s.value}</div>
                <div className="text-sm font-medium" style={{ color: "hsl(0 0% 55%)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Verticals</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">Industries We Serve</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Each industry demands unique domain expertise. Explore how we tailor solutions for your sector.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={i * 0.06}>
                <Link to={ind.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)", minHeight: "340px" }}>
                    {/* Background image */}
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={640}
                      height={544}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(180deg, hsl(222 47% 8% / 0.3) 0%, hsl(222 47% 8% / 0.85) 60%, hsl(222 47% 8% / 0.95) 100%)" }} />
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <ind.icon size={28} className="mb-4" style={{ color: "hsl(192 91% 52%)" }} />
                      <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>{ind.title}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(0 0% 70%)" }}>{ind.desc}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: "hsl(192 91% 52%)" }}>
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
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
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Don't See Your Industry?</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Our expertise extends beyond listed verticals. Let's discuss your unique challenges.</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default IndustriesIndex;
