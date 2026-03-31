import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Custom Software", href: "/services" },
        { label: "Cloud & DevOps", href: "/services" },
        { label: "AI & ML", href: "/services" },
        { label: "Cybersecurity", href: "/services" },
        { label: "IT Consulting", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Leadership", href: "/about" },
        { label: "Careers", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Banking & Finance", href: "/services" },
        { label: "Healthcare", href: "/services" },
        { label: "Retail", href: "/services" },
        { label: "Logistics", href: "/services" },
      ],
    },
  ];

  return (
    <footer className="section-dark">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <span className="font-heading font-bold text-lg" style={{ color: "hsl(0 0% 100%)" }}>N</span>
              </div>
              <span className="font-heading font-bold text-xl" style={{ color: "hsl(0 0% 100%)" }}>NexaTech</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(0 0% 55%)" }}>
              Enterprise-grade technology solutions for global businesses. We transform ideas into scalable digital products.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                <MapPin size={16} style={{ color: "hsl(192 91% 52%)" }} />
                San Francisco · London · Singapore · Dubai
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                <Mail size={16} style={{ color: "hsl(192 91% 52%)" }} />
                hello@nexatech.com
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                <Phone size={16} style={{ color: "hsl(192 91% 52%)" }} />
                +1 (555) 000-1234
              </div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6" style={{ color: "hsl(0 0% 80%)" }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "hsl(0 0% 50%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(192 91% 52%)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 50%)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}>
          <p className="text-sm" style={{ color: "hsl(0 0% 40%)" }}>
            © 2026 NexaTech Global. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background: "hsl(0 0% 100% / 0.05)", color: "hsl(0 0% 55%)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(234 89% 54% / 0.2)";
                  e.currentTarget.style.color = "hsl(192 91% 52%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                  e.currentTarget.style.color = "hsl(0 0% 55%)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
