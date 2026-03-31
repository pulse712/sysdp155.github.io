import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { useState } from "react";

type Position = {
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
};

const positions: Position[] = [
  { title: "Senior Full-Stack Engineer", department: "Engineering", location: "San Francisco / Remote", type: "Full-time", level: "Senior" },
  { title: "Staff ML Engineer", department: "AI & Data", location: "London / Remote", type: "Full-time", level: "Staff" },
  { title: "DevOps Lead", department: "Cloud & Infrastructure", location: "Singapore", type: "Full-time", level: "Lead" },
  { title: "Product Designer", department: "Design", location: "Remote", type: "Full-time", level: "Mid" },
  { title: "Security Engineer", department: "Cybersecurity", location: "Dubai / Remote", type: "Full-time", level: "Senior" },
  { title: "Frontend Engineer", department: "Engineering", location: "London", type: "Full-time", level: "Mid" },
  { title: "Data Engineer", department: "AI & Data", location: "San Francisco", type: "Full-time", level: "Senior" },
  { title: "Engineering Manager", department: "Engineering", location: "Remote", type: "Full-time", level: "Manager" },
  { title: "Technical Writer", department: "Engineering", location: "Remote", type: "Full-time", level: "Mid" },
  { title: "Solutions Architect", department: "Cloud & Infrastructure", location: "Dubai", type: "Full-time", level: "Senior" },
];

const departments = ["All", ...Array.from(new Set(positions.map((p) => p.department)))];

const OpenPositions = () => {
  const [activeDept, setActiveDept] = useState("All");

  const filtered = activeDept === "All" ? positions : positions.filter((p) => p.department === activeDept);

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
                Open <span className="gradient-text">Positions</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                {positions.length} open roles across engineering, data science, design, and more. Find your next challenge.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + Listings */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Department Filter */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className="px-5 py-2.5 rounded-lg text-sm font-heading font-medium transition-all duration-200"
                  style={{
                    background: activeDept === dept ? "hsl(234 89% 54%)" : "hsl(220 14% 96%)",
                    color: activeDept === dept ? "hsl(0 0% 100%)" : "hsl(220 9% 46%)",
                    border: `1px solid ${activeDept === dept ? "hsl(234 89% 54%)" : "hsl(220 13% 91%)"}`,
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Job Cards */}
          <div className="space-y-4">
            {filtered.map((pos, i) => (
              <ScrollReveal key={pos.title + pos.location} delay={i * 0.05}>
                <div className="service-card flex flex-col md:flex-row md:items-center justify-between gap-4 !p-6">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{pos.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={14} className="text-primary" /> {pos.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" /> {pos.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} className="text-primary" /> {pos.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-md text-xs font-heading font-medium" style={{ background: "hsl(234 89% 54% / 0.08)", color: "hsl(234 89% 54%)" }}>
                      {pos.level}
                    </span>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-heading font-medium text-primary hover:gap-3 transition-all whitespace-nowrap">
                      Apply <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              No open positions in this department right now. Check back soon!
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Don't See Your Role?</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Send us your resume and we'll keep you in mind for future opportunities.</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default OpenPositions;
