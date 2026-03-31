import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  Code2, Cloud, Brain, Shield, Monitor, Smartphone, TestTube, Settings,
  ArrowRight, CheckCircle2
} from "lucide-react";
import imgCustomSoftware from "@/assets/service-custom-software.jpg";
import imgWebMobile from "@/assets/service-web-mobile.jpg";
import imgCloudDevops from "@/assets/service-cloud-devops.jpg";
import imgAiMl from "@/assets/service-ai-ml.jpg";
import imgCybersecurity from "@/assets/service-cybersecurity.jpg";
import imgQaTesting from "@/assets/service-qa-testing.jpg";
import imgConsulting from "@/assets/service-consulting.jpg";
import imgDigital from "@/assets/service-digital.jpg";

const allServices = [
  {
    icon: Code2,
    title: "Custom Software Development",
    id: "custom-software",
    image: imgCustomSoftware,
    imageAlt: "Developers building custom software solutions",
    desc: "We design and build bespoke software solutions that solve complex business challenges. Our agile teams deliver scalable, maintainable systems using modern architectures.",
    features: ["Microservices Architecture", "API-First Design", "Legacy Modernization", "Performance Optimization"],
  },
  {
    icon: Monitor,
    title: "Web & Mobile App Development",
    id: "web-mobile",
    image: imgWebMobile,
    imageAlt: "Responsive web and mobile application interfaces",
    desc: "Cross-platform web and native mobile applications with exceptional user experiences. From Progressive Web Apps to enterprise mobile solutions.",
    features: ["React / Angular / Vue", "iOS & Android Native", "Cross-Platform (Flutter)", "Responsive Design Systems"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    id: "cloud-devops",
    image: imgCloudDevops,
    imageAlt: "Cloud computing infrastructure and network",
    desc: "End-to-end cloud strategy, migration, and infrastructure automation. We help enterprises optimize costs and accelerate delivery with modern DevOps practices.",
    features: ["AWS / Azure / GCP", "Kubernetes & Docker", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    id: "ai-ml",
    image: imgAiMl,
    imageAlt: "AI neural network and machine learning visualization",
    desc: "Unlock the power of artificial intelligence with custom ML models, NLP solutions, computer vision, and predictive analytics tailored to your business domain.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Engines"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    id: "cybersecurity",
    image: imgCybersecurity,
    imageAlt: "Digital security shield and encryption",
    desc: "Comprehensive cybersecurity assessments, penetration testing, and managed security services to protect your enterprise from evolving threats.",
    features: ["Penetration Testing", "Security Audits", "Compliance (SOC2, HIPAA)", "Incident Response"],
  },
  {
    icon: TestTube,
    title: "QA & Testing",
    id: "qa-testing",
    image: imgQaTesting,
    imageAlt: "Quality assurance testing dashboards and code",
    desc: "Rigorous quality assurance with automated testing frameworks, performance testing, and continuous quality monitoring throughout the development lifecycle.",
    features: ["Automated Testing", "Performance Testing", "Security Testing", "Mobile QA"],
  },
  {
    icon: Settings,
    title: "IT Consulting",
    id: "consulting",
    image: imgConsulting,
    imageAlt: "IT consulting strategy meeting with analytics",
    desc: "Strategic technology consulting to align your IT investments with business goals. Technology roadmaps, architecture reviews, and digital strategy.",
    features: ["Technology Roadmaps", "Architecture Reviews", "Vendor Selection", "Process Optimization"],
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    id: "digital",
    image: imgDigital,
    imageAlt: "Digital transformation connected systems",
    desc: "Holistic digital transformation programs that modernize operations, customer experiences, and business models through technology innovation.",
    features: ["Process Digitization", "Customer Experience", "Data-Driven Culture", "Change Management"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Our Services</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Technology Services That <span className="gradient-text">Drive Growth</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                Comprehensive IT outsourcing and consulting services designed for enterprise-scale challenges. We combine deep technical expertise with industry knowledge.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {allServices.map((service, i) => (
            <ScrollReveal key={service.id}>
              <div
                id={service.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "hsl(234 89% 54% / 0.08)" }}>
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent shrink-0" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary !text-sm">
                    Discuss Your Project <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ border: "1px solid hsl(var(--border))", boxShadow: "var(--shadow-card)" }}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-auto object-cover aspect-[800/544]"
                    loading="lazy"
                    width={800}
                    height={544}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              Need a Custom Solution?
            </h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 55%)" }}>
              Our experts will help you find the right technology approach for your business challenge.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Consultation <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
