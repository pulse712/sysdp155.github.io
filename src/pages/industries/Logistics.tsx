import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Truck, Warehouse, BarChart3, Clock, Route } from "lucide-react";
import imgRoute from "@/assets/cards/logistics-route.jpg";
import imgFleet from "@/assets/cards/logistics-fleet.jpg";
import imgWarehouse from "@/assets/cards/logistics-warehouse.jpg";
import imgSupply from "@/assets/cards/logistics-supply.jpg";
import imgTracking from "@/assets/cards/logistics-tracking.jpg";
import imgLastmile from "@/assets/cards/logistics-lastmile.jpg";

const solutions = [
  { icon: MapPin, title: "Route Optimization", desc: "AI-powered routing algorithms that reduce delivery times and fuel costs.", image: imgRoute },
  { icon: Truck, title: "Fleet Management", desc: "Real-time vehicle tracking, maintenance scheduling, and driver management.", image: imgFleet },
  { icon: Warehouse, title: "Warehouse Automation", desc: "Robotic process automation, pick-and-pack optimization, and inventory systems.", image: imgWarehouse },
  { icon: BarChart3, title: "Supply Chain Analytics", desc: "End-to-end visibility and predictive analytics across the supply chain.", image: imgSupply },
  { icon: Clock, title: "Real-Time Tracking", desc: "Live shipment tracking with ETA predictions and automated notifications.", image: imgTracking },
  { icon: Route, title: "Last-Mile Delivery", desc: "Optimized last-mile solutions with crowd-sourced delivery and smart lockers.", image: imgLastmile },
];

const caseStudies = [
  { client: "Global Shipping Company", result: "Reduced delivery costs by 35%", tech: "Python, ML, Google Maps API" },
  { client: "3PL Provider", result: "Scaled to 10M+ parcels per month", tech: "Kubernetes, Go, PostgreSQL" },
  { client: "Freight Platform", result: "Automated 80% of dispatch operations", tech: "React, Node.js, Redis" },
];

const Logistics = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} /><div className="relative z-10 max-w-7xl mx-auto px-6"><ScrollReveal><Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link><div className="max-w-3xl"><h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Logistics & <span className="gradient-text">Transportation</span></h1><p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>Fleet management, route optimization, real-time tracking, and warehouse automation solutions.</p></div></ScrollReveal></div></section>
    <section className="section-light py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p><h2 className="font-heading font-bold text-4xl text-foreground">What We Build for Logistics</h2></div></ScrollReveal><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{solutions.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><IndustryCard {...s} /></ScrollReveal>))}</div></div></section>
    <section className="section-dark py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Results</p><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Client Success Stories</h2></div></ScrollReveal><div className="grid md:grid-cols-3 gap-6">{caseStudies.map((c, i) => (<ScrollReveal key={c.client} delay={i * 0.1}><div className="service-card-dark h-full"><h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4><p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p><p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p></div></ScrollReveal>))}</div></div></section>
    <section className="relative py-20 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} /><div className="relative z-10 max-w-4xl mx-auto px-6 text-center"><ScrollReveal><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Optimize Your Supply Chain?</h2><Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Schedule a Consultation <ArrowRight size={16} className="ml-2" /></Link></ScrollReveal></div></section>
  </Layout>
);

export default Logistics;
