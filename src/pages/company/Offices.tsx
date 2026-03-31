import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import globalMap from "@/assets/global-map.jpg";

const offices = [
  { 
    city: "San Francisco", 
    country: "United States",
    address: "100 Market St, Suite 4200, CA 94105", 
    phone: "+1 (555) 000-1234",
    email: "sf@nexatech.com",
    tz: "PST (UTC-8)" 
  },
  { 
    city: "London", 
    country: "United Kingdom",
    address: "30 St Mary Axe, EC3A 8BF", 
    phone: "+44 20 7946 0958",
    email: "london@nexatech.com",
    tz: "GMT (UTC+0)" 
  },
  { 
    city: "Singapore", 
    country: "Singapore",
    address: "1 Raffles Place, #20-61, 048616", 
    phone: "+65 6534 0000",
    email: "sg@nexatech.com",
    tz: "SGT (UTC+8)" 
  },
  { 
    city: "Dubai", 
    country: "United Arab Emirates",
    address: "DIFC Gate Village, Building 4", 
    phone: "+971 4 375 0000",
    email: "dubai@nexatech.com",
    tz: "GST (UTC+4)" 
  },
];

const Offices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden section-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(var(--cyan))" }}>Global Presence</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                Our <span className="gradient-text">Offices</span> Worldwide
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                With offices across four continents, we're positioned to serve clients globally while maintaining local expertise and support.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map */}
      <section className="section-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
              <img src={globalMap} alt="Global offices" className="w-full" loading="lazy" width={1920} height={900} />
            </div>
          </ScrollReveal>

          {/* Office Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.1}>
                <div className="service-card h-full">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "hsl(var(--indigo) / 0.08)" }}>
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{office.city}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{office.country}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-primary shrink-0" />
                      <span className="text-muted-foreground">{office.tz}</span>
                    </div>
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
            <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Connect?</h2>
            <p className="text-lg mb-8" style={{ color: "hsl(0 0% 100% / 0.8)" }}>Reach out to the office nearest you or contact our global team.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" 
              style={{ background: "hsl(0 0% 100%)", color: "hsl(var(--indigo))" }}
            >
              Contact Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Offices;
