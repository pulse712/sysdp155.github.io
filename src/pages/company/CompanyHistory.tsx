import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Building2, Users, Globe2, Brain, Trophy, MapPin, Cloud, UsersRound, Cpu, Star, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const milestones = [
  { year: "2010", title: "Founded in San Francisco", desc: "NexaTech was founded by a team of engineers with a vision to transform enterprise technology.", icon: Rocket, height: 6, golden: false },
  { year: "2012", title: "First Enterprise Client", desc: "Secured our first Fortune 500 client and delivered a full-stack platform migration.", icon: Building2, height: 22, golden: false },
  { year: "2014", title: "100 Engineers Strong", desc: "Grew our engineering team to 100+ across offices in San Francisco and London.", icon: Users, height: 26, golden: false },
  { year: "2016", title: "APAC Expansion", desc: "Opened our Singapore office, establishing a presence in the Asia-Pacific region.", icon: Globe2, height: 42, golden: false },
  { year: "2017", title: "AI & ML Division Launch", desc: "Launched dedicated AI & Machine Learning division led by Dr. Lin Wei.", icon: Brain, height: 44, golden: false },
  { year: "2018", title: "500+ Projects Milestone", desc: "Crossed 500 successful project deliveries across banking, healthcare, and logistics.", icon: Trophy, height: 46, golden: false },
  { year: "2019", title: "Dubai Office Opens", desc: "Expanded into the Middle East & Africa region with our Dubai headquarters.", icon: MapPin, height: 48, golden: false },
  { year: "2020", title: "Cloud-First Transformation", desc: "Pivoted to cloud-native development, becoming certified partners with AWS, Azure, and GCP.", icon: Cloud, height: 72, golden: true },
  { year: "2021", title: "Revenue Tripled", desc: "Record-breaking year with 3x revenue growth, 150+ new enterprise clients onboarded globally.", icon: TrendingUp, height: 87, golden: true },
  { year: "2022", title: "2,000+ Team Members", desc: "Grew to 2,000+ employees across 4 continents, serving clients in 30+ countries.", icon: UsersRound, height: 99, golden: true },
  { year: "2023", title: "Industry Leader Award", desc: "Recognized as a top-10 global technology consultancy by Gartner and Forrester.", icon: Star, height: 83, golden: true },
  { year: "2024", title: "Next-Gen AI Platform", desc: "Launched proprietary AI platform enabling rapid deployment of intelligent solutions.", icon: Cpu, height: 72, golden: false },
  { year: "2025", title: "Vision 2026", desc: "Targeting 5,000+ team members, $1B ARR, and expansion into 50+ countries worldwide.", icon: Globe2, height: 79, golden: false },
  { year: "2026", title: "Vision 2026", desc: "Targeting 5,000+ team members, $1B ARR, and expansion into 50+ countries worldwide.", icon: Globe2, height: 83, golden: false },
];

const achievements = [
  { number: "500+", label: "Projects Delivered" },
  { number: "200+", label: "Enterprise Clients" },
  { number: "30+", label: "Countries Served" },
  { number: "2,000+", label: "Team Members" },
  { number: "4", label: "Global Offices" },
  { number: "98%", label: "Client Retention" },
];

const GraphTimeline = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setDimensions({ width: w, height: Math.max(420, w * 0.42) });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const padding = { top: 60, right: 60, bottom: 80, left: 60 };
  const graphW = dimensions.width - padding.left - padding.right;
  const graphH = dimensions.height - padding.top - padding.bottom;

  const points = milestones.map((m, i) => ({
    x: padding.left + (i / (milestones.length - 1)) * graphW,
    y: padding.top + graphH - (m.height / 100) * graphH,
    ...m,
  }));

  // Build smooth curve path
  const buildPath = () => {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpx = (curr.x + next.x) / 2;
      d += ` C ${cpx} ${curr.y}, ${cpx} ${next.y}, ${next.x} ${next.y}`;
    }
    return d;
  };

  // Build filled area path
  const buildAreaPath = () => {
    const linePath = buildPath();
    const lastPoint = points[points.length - 1];
    const firstPoint = points[0];
    return `${linePath} L ${lastPoint.x} ${padding.top + graphH} L ${firstPoint.x} ${padding.top + graphH} Z`;
  };

  const curvePath = buildPath();
  const areaPath = buildAreaPath();

  return (
    <div ref={containerRef} className="w-full relative">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="w-full h-auto"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(234 89% 54%)" />
            <stop offset="50%" stopColor="hsl(210 90% 55%)" />
            <stop offset="100%" stopColor="hsl(192 91% 52%)" />
          </linearGradient>
          <linearGradient id="goldenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(38 92% 50%)" />
            <stop offset="100%" stopColor="hsl(45 97% 64%)" />
          </linearGradient>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(234 89% 54%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(192 91% 52%)" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="goldenAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(45 97% 64%)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="hsl(38 92% 50%)" stopOpacity="0.01" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="goldenGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = padding.top + graphH - (v / 100) * graphH;
          return (
            <line
              key={v}
              x1={padding.left}
              y1={y}
              x2={padding.left + graphW}
              y2={y}
              stroke="hsl(0 0% 100%)"
              strokeOpacity={0.05}
              strokeDasharray="4 6"
            />
          );
        })}

        {/* Golden period highlight zone */}
        {(() => {
          const goldenStart = points.find(p => p.year === "2020");
          const goldenEnd = points.find(p => p.year === "2023");
          if (!goldenStart || !goldenEnd) return null;
          return (
            <g>
              <rect
                x={goldenStart.x - 10}
                y={padding.top - 10}
                width={goldenEnd.x - goldenStart.x + 20}
                height={graphH + 20}
                rx={12}
                fill="hsl(45 97% 64%)"
                fillOpacity={0.04}
                stroke="hsl(45 97% 64%)"
                strokeOpacity={0.08}
                strokeWidth={1}
                strokeDasharray="6 4"
              />
              {/* Golden period label */}
              <text
                x={(goldenStart.x + goldenEnd.x) / 2}
                y={padding.top - 18}
                textAnchor="middle"
                fill="hsl(45 97% 64%)"
                fontSize="11"
                fontFamily="Manrope, sans-serif"
                fontWeight="700"
                letterSpacing="0.1em"
              >
                ★ GOLDEN PERIOD
              </text>
            </g>
          );
        })()}

        {/* Filled area under curve */}
        <path d={areaPath} fill="url(#areaGrad)" />

        {/* Glow line */}
        <path d={curvePath} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeOpacity="0.3" filter="url(#glow)" />

        {/* Main curve */}
        <path d={curvePath} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Vertical drop lines, dots, year labels */}
        {points.map((p, i) => {
          const isActive = activeIndex === i;
          const isGolden = p.golden;
          const dotColor = isGolden ? "hsl(45 97% 64%)" : "hsl(234 89% 54%)";
          const dotFill = isGolden ? "url(#goldenGrad)" : "url(#lineGrad)";
          const activeColor = isGolden ? "hsl(45 97% 64%)" : "hsl(192 91% 52%)";
          return (
            <g key={p.year}>
              {/* Vertical dashed line to baseline */}
              <line
                x1={p.x}
                y1={p.y}
                x2={p.x}
                y2={padding.top + graphH}
                stroke={isGolden ? "hsl(45 97% 64%)" : "hsl(0 0% 100%)"}
                strokeOpacity={isActive ? 0.2 : (isGolden ? 0.08 : 0.04)}
                strokeDasharray="3 5"
                className="transition-all duration-300"
              />

              {/* Dot outer glow */}
              <circle cx={p.x} cy={p.y} r={isActive ? 18 : (isGolden ? 12 : 10)} fill={dotColor} fillOpacity={isActive ? 0.2 : (isGolden ? 0.12 : 0.06)} className="transition-all duration-300" />

              {/* Dot */}
              <circle
                cx={p.x}
                cy={p.y}
                r={isActive ? 7 : (isGolden ? 6 : 5)}
                fill={dotFill}
                filter={isGolden ? "url(#goldenGlow)" : "url(#dotGlow)"}
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              />

              {/* Inner white dot */}
              <circle cx={p.x} cy={p.y} r={isActive ? 3 : 2} fill="white" className="transition-all duration-300 pointer-events-none" />

              {/* Year label at bottom */}
              <text
                x={p.x}
                y={padding.top + graphH + 28}
                textAnchor="middle"
                fill={isActive ? activeColor : (isGolden ? "hsl(45 97% 64%)" : "hsl(0 0% 45%)")}
                fontSize="12"
                fontFamily="Manrope, sans-serif"
                fontWeight={isActive || isGolden ? "700" : "500"}
                className="transition-all duration-300"
              >
                {p.year}
              </text>
            </g>
          );
        })}

        {/* Active tooltip card */}
        {activeIndex !== null && (() => {
          const p = points[activeIndex];
          const Icon = p.icon;
          const tooltipW = 220;
          const tooltipH = 80;
          // Keep tooltip within SVG bounds
          let tx = p.x - tooltipW / 2;
          if (tx < 10) tx = 10;
          if (tx + tooltipW > dimensions.width - 10) tx = dimensions.width - tooltipW - 10;
          const ty = p.y - tooltipH - 24;

          return (
            <g className="pointer-events-none">
              {/* Connector line from tooltip to dot */}
              <line x1={p.x} y1={p.y - 8} x2={p.x} y2={ty + tooltipH} stroke="hsl(0 0% 100%)" strokeOpacity="0.1" strokeWidth="1" />

              <foreignObject x={tx} y={ty} width={tooltipW} height={tooltipH}>
                <div
                  className="rounded-xl px-4 py-3 backdrop-blur-md border"
                  style={{
                    background: "hsl(222 47% 14% / 0.95)",
                    borderColor: "hsl(0 0% 100% / 0.1)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style={{ background: "hsl(234 89% 54% / 0.2)" }}>
                      <Icon size={14} style={{ color: "hsl(192 91% 52%)" }} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-xs text-white leading-tight truncate" style={{ fontFamily: "Manrope, sans-serif" }}>{p.title}</p>
                      <p className="text-[10px] mt-1 leading-snug line-clamp-2" style={{ color: "hsl(0 0% 55%)", fontFamily: "Inter, sans-serif" }}>{p.desc}</p>
                    </div>
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })()}
      </svg>
    </div>
  );
};

const CompanyHistory = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden section-dark">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]" style={{ background: "hsl(234 89% 54%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]" style={{ background: "hsl(192 91% 52%)" }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 0.5px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-6" style={{ color: "hsl(var(--cyan))" }}>
                Est. 2010
              </p>
              <h1 className="font-heading font-bold text-5xl md:text-7xl mb-8 leading-[1.05]" style={{ color: "hsl(0 0% 100%)" }}>
                A Decade of{" "}
                <span className="gradient-text">Innovation</span>
                <br />and Growth
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "hsl(0 0% 55%)" }}>
                From a small team in San Francisco to a global technology powerhouse — our journey has been defined by bold ambition and relentless execution.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Graph Timeline */}
      <section className="relative py-28 overflow-hidden" style={{ background: "hsl(222 47% 7%)" }}>
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        {/* Radial glow behind the graph */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.06] blur-[80px]" style={{ background: "var(--gradient-primary)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Growth Trajectory</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>Our Journey</h2>
              <p className="text-sm" style={{ color: "hsl(0 0% 45%)" }}>Hover over the data points to explore our key milestones</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl border p-4 md:p-8" style={{ background: "hsl(222 47% 9% / 0.8)", borderColor: "hsl(0 0% 100% / 0.06)", backdropFilter: "blur(12px)" }}>
              <GraphTimeline />
            </div>
          </ScrollReveal>

          {/* Legend cards below graph */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {milestones.filter((_, i) => i % 2 === 0).map((m, i) => (
              <ScrollReveal key={m.year} delay={0.1 + i * 0.06}>
                <div className="rounded-xl border px-4 py-3 flex items-start gap-3 transition-all duration-300 hover:border-[hsl(234_89%_54%_/_0.3)]" style={{ background: "hsl(0 0% 100% / 0.02)", borderColor: "hsl(0 0% 100% / 0.06)" }}>
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5" style={{ background: "hsl(234 89% 54% / 0.15)" }}>
                    <m.icon size={13} style={{ color: "hsl(var(--cyan))" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-bold tracking-wider" style={{ color: "hsl(var(--cyan))" }}>{m.year}</p>
                    <p className="text-xs font-medium" style={{ color: "hsl(0 0% 75%)" }}>{m.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-dark py-28">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: "hsl(var(--cyan))" }}>By the Numbers</p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>Our Achievements</h2>
              <p className="text-base" style={{ color: "hsl(0 0% 50%)" }}>The milestones that define our commitment to excellence.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {achievements.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 0.08}>
                <div className="relative group rounded-2xl border p-8 md:p-10 text-center transition-all duration-500 hover:-translate-y-1" style={{ background: "hsl(0 0% 100% / 0.03)", borderColor: "hsl(0 0% 100% / 0.08)" }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, hsl(var(--indigo) / 0.08), hsl(var(--cyan) / 0.05))" }} />
                  <div className="relative">
                    <div className="font-heading font-bold text-4xl md:text-5xl mb-3 gradient-text">{a.number}</div>
                    <p className="text-sm font-medium tracking-wide uppercase" style={{ color: "hsl(0 0% 50%)" }}>{a.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Be Part of Our Next Chapter</h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
              Join us as we continue to push the boundaries of enterprise technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/careers/positions" className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-heading font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" style={{ background: "hsl(0 0% 100%)", color: "hsl(var(--indigo))" }}>
                Join Our Team <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline-light">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyHistory;
