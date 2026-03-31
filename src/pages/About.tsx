import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Lightbulb, Heart, Code, Shield, Zap } from "lucide-react";
import businessMeeting from "@/assets/business-meeting.jpg";
import dataCenter from "@/assets/data-center.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import techAbstract from "@/assets/tech-abstract.jpg";

const leadership = [
  { name: "Alexander Voronov", role: "Chief Executive Officer", bio: "20+ years in enterprise technology leadership" },
  { name: "Priya Sharma", role: "Chief Technology Officer", bio: "Former VP Engineering at a Fortune 100 company" },
  { name: "James Mitchell", role: "Chief Operating Officer", bio: "Scaled operations across 30+ countries" },
  { name: "Dr. Lin Wei", role: "VP of AI & Data", bio: "PhD in Machine Learning, 50+ published papers" },
  { name: "Maria Santos", role: "VP of Client Services", bio: "15 years in enterprise client management" },
  { name: "David Park", role: "VP of Engineering", bio: "Led teams of 500+ engineers globally" },
];

const values = [
  { icon: Target, title: "Excellence", desc: "We set the highest standards in every deliverable." },
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries with emerging technologies." },
  { icon: Users, title: "Collaboration", desc: "We succeed together with our clients and partners." },
  { icon: Heart, title: "Integrity", desc: "We operate with transparency and trust." },
  { icon: Eye, title: "Vision", desc: "We think long-term and build for the future." },
  { icon: Award, title: "Impact", desc: "We measure success by the value we create." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={businessMeeting} alt="NexaTech leadership team" className="w-full h-full object-cover" width={1200} height={800} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(222 47% 8% / 0.85), hsl(222 47% 8% / 0.95))" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>About NexaTech</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Building the <span className="gradient-text">Digital Infrastructure</span> of Tomorrow
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                Founded in 2010, NexaTech has grown into a global technology powerhouse serving enterprises across 30+ countries with 2,000+ talented engineers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Story</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">
                From Humble Beginnings to Global Impact
              </h2>
            </div>
          </ScrollReveal>

          {/* The Beginning */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our journey began with a simple but powerful idea: to make high-quality technology services accessible, reliable, and scalable for businesses of all sizes. We started as a small group of passionate engineers who believed that great software is not just about writing code, but about solving real business problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In the early days, we focused on supporting startups that needed strong technical foundations but lacked in-house development teams. Those experiences shaped our understanding of what businesses truly need from an IT partner: trust, flexibility, and consistent delivery.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={heroOffice} alt="Our early days" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>

          {/* Growth & Evolution */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <img src={dataCenter} alt="Our growth" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="order-1 md:order-2">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Growth & Evolution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As we grew, so did our capabilities and our vision. We evolved into a full-scale IT outsourcing company, working with clients across different industries and regions. Each project added to our experience and strengthened our expertise in building reliable and scalable digital solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We learned that every business has its own story, challenges, and goals, and we made it our mission to adapt to each one. Today, we operate as a dedicated technology partner for companies that want to accelerate their digital transformation.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Our Team Today */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Team Today</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team includes experienced software developers, system architects, UI/UX designers, QA engineers, and IT consultants. Together, we work as one unit focused on delivering complete end-to-end solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our working approach is based on collaboration and transparency. We begin every project by understanding the client's business, not just the technical requirements. We analyze workflows, identify challenges, and define clear objectives before writing a single line of code.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={businessMeeting} alt="Our team collaboration" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>

          {/* Our Approach */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-2xl p-8 md:p-12 mb-20">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">Our Approach</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(234 89% 54% / 0.1)" }}>
                    <Code size={28} className="text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Agile Development</h4>
                  <p className="text-sm text-muted-foreground">
                    We follow agile practices that allow us to stay flexible and responsive throughout the project lifecycle.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(192 91% 52% / 0.1)" }}>
                    <Users size={28} className="text-accent" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Client Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    Clients are involved at every stage, from planning and design to development and testing.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "hsl(234 89% 54% / 0.1)" }}>
                    <Shield size={28} className="text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Quality & Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Every solution goes through strict testing and follows modern security standards.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Our Expertise */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                <img src={techAbstract} alt="Our expertise" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="order-1 md:order-2">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">Our Expertise</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Over time, we have built strong expertise in software development, web and mobile applications, cloud-based solutions, and IT consulting services. We also provide dedicated development teams for long-term collaboration, allowing businesses to scale their engineering capacity quickly and efficiently.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it is building a new product from scratch or improving an existing system, we approach every challenge with the same level of commitment and attention to detail.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Our Philosophy */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">Our Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                What defines us most is our long-term mindset. We do not see ourselves as just a service provider, but as a technology partner in our clients' growth journey. Many of our collaborations evolve into long-term relationships because we stay committed even after delivery, providing maintenance, support, and continuous improvements.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At our core, we believe technology should simplify complexity, not create it. That belief drives everything we do—from the way we design systems to the way we communicate with clients. We are constantly learning, improving, and adapting to new technologies such as cloud computing, automation, and modern development frameworks.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Join Our Global Team</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>We're always looking for talented engineers, designers, and leaders to join our mission.</p>
            <Link to="/careers/positions" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              View Open Positions <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
