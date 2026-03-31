import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Users, Package, BarChart3, Globe, Zap } from "lucide-react";
import imgOmni from "@/assets/cards/retail-omni.jpg";
import imgPersonal from "@/assets/cards/retail-personal.jpg";
import imgInventory from "@/assets/cards/retail-inventory.jpg";
import imgAnalytics from "@/assets/cards/retail-analytics.jpg";
import imgMarketplace from "@/assets/cards/retail-marketplace.jpg";
import imgHeadless from "@/assets/cards/retail-headless.jpg";

const solutions = [
  { icon: ShoppingCart, title: "Omnichannel Commerce", desc: "Unified shopping experiences across web, mobile, and in-store touchpoints.", image: imgOmni },
  { icon: Users, title: "Personalization Engines", desc: "AI-driven product recommendations and dynamic pricing strategies.", image: imgPersonal },
  { icon: Package, title: "Inventory Management", desc: "Real-time inventory tracking, demand forecasting, and automated replenishment.", image: imgInventory },
  { icon: BarChart3, title: "Analytics & BI", desc: "Customer behavior analytics, sales dashboards, and conversion optimization.", image: imgAnalytics },
  { icon: Globe, title: "Marketplace Platforms", desc: "Multi-vendor marketplace development with payment processing and logistics.", image: imgMarketplace },
  { icon: Zap, title: "Headless Commerce", desc: "API-first architecture for lightning-fast storefronts with any frontend framework.", image: imgHeadless },
];

const caseStudies = [
  { client: "Fashion Retailer", result: "Increased online conversion by 45%", tech: "React, Shopify Plus, Algolia" },
  { client: "Grocery Chain", result: "Launched same-day delivery in 12 weeks", tech: "React Native, Node.js, Redis" },
  { client: "D2C Brand", result: "Scaled to $50M ARR with headless commerce", tech: "Next.js, Stripe, Contentful" },
];

const RetailEcommerce = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link>
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Retail & <span className="gradient-text">E-commerce</span></h1>
            <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>Omnichannel commerce platforms, personalization engines, and supply chain optimization for modern retail.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <section className="section-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p><h2 className="font-heading font-bold text-4xl text-foreground">What We Build for Retail</h2></div></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><IndustryCard {...s} /></ScrollReveal>))}
        </div>
      </div>
    </section>
    <section className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal><div className="text-center mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Results</p><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Client Success Stories</h2></div></ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (<ScrollReveal key={c.client} delay={i * 0.1}><div className="service-card-dark h-full"><h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4><p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p><p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
    <section className="relative py-20 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} /><div className="relative z-10 max-w-4xl mx-auto px-6 text-center"><ScrollReveal><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Transform Your Retail Experience?</h2><Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Schedule a Consultation <ArrowRight size={16} className="ml-2" /></Link></ScrollReveal></div></section>
  </Layout>
);

export default RetailEcommerce;
