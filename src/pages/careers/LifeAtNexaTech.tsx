import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Globe, Coffee, Dumbbell, BookOpen, PartyPopper, Users, Sparkles, Clock, Rocket, Brain, Shield, Palette } from "lucide-react";

const perks = [
  { icon: Globe, title: "Remote-First Culture", desc: "Work from anywhere — our teams span 30+ countries with flexible schedules.", color: "hsl(var(--cyan))" },
  { icon: BookOpen, title: "Learning Budget", desc: "$5,000 annual learning stipend for courses, conferences, and certifications.", color: "hsl(var(--indigo))" },
  { icon: Dumbbell, title: "Wellness Program", desc: "Gym memberships, mental health support, and wellness days every quarter.", color: "hsl(var(--accent))" },
  { icon: Coffee, title: "Team Retreats", desc: "Annual all-company offsite and quarterly team meetups worldwide.", color: "hsl(var(--cyan))" },
  { icon: PartyPopper, title: "Hackathons", desc: "Quarterly innovation sprints where any idea can become a real product.", color: "hsl(var(--indigo))" },
  { icon: Heart, title: "Parental Leave", desc: "26 weeks paid parental leave for all parents, regardless of gender.", color: "hsl(var(--accent))" },
];

const cultureValues = [
  { title: "Ship with Purpose", desc: "We build solutions that matter for millions of users." },
  { title: "Radical Transparency", desc: "Open salaries, open roadmaps, open conversations." },
  { title: "Growth Mindset", desc: "Failure is a teacher. We celebrate experiments." },
  { title: "Diversity & Belonging", desc: "50+ nationalities. Everyone has a voice and a seat at the table." },
//  { emoji: "🌍", title: "Diversity & Belonging", desc: "50+ nationalities. Everyone has a voice and a seat at the table." },

];

const LifeAtNexaTech = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors" style={{ color: "hsl(192 91% 52%)" }}>
                ← Back to Careers
              </Link>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Life at <span className="gradient-text">NexaTech</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                We're not just building software — we're building a place where brilliant people do the best work of their careers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Culture Values */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Culture</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">What We Stand For</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {cultureValues.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="service-card h-full flex items-start gap-5">
                  <span className="text-4xl mt-1">{v.emoji}</span>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Perks & Benefits</p>
              <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Built for Your Best Life
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="service-card-dark h-full">
                  <p.icon size={28} className="mb-4" style={{ color: "hsl(192 91% 52%)" }} />
                  <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 90%)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 55%)" }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">A Day in the Life</p>
              <h2 className="font-heading font-bold text-4xl text-foreground mb-6">What a Typical Day Looks Like</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { time: "9:00 AM", activity: "Async standup — share updates on Slack at your own pace." },
              { time: "10:00 AM", activity: "Deep work block — no meetings, just focus time on your sprint tasks." },
              { time: "12:00 PM", activity: "Lunch & Learn — optional talks on tech, leadership, or wellness." },
              { time: "1:30 PM", activity: "Collaborative sessions — pair programming, design reviews, or brainstorming." },
              { time: "4:00 PM", activity: "Wind-down — wrap up, document learnings, and plan tomorrow." },
            ].map((item, i) => (
              <ScrollReveal key={item.time} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <div className="font-heading font-bold text-sm whitespace-nowrap pt-1" style={{ color: "hsl(234 89% 54%)", minWidth: "80px" }}>{item.time}</div>
                  <div className="service-card flex-1 !p-5">
                    <p className="text-muted-foreground text-sm">{item.activity}</p>
                  </div>
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
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Join Us?</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>See what roles are open and find your place in our global team.</p>
            <Link to="/careers/positions" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              View Open Positions <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default LifeAtNexaTech;
