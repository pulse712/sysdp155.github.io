import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
}

const IndustryCard = ({ icon: Icon, title, desc, image }: IndustryCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-full group transition-all duration-300 hover:-translate-y-1" style={{ minHeight: "220px", boxShadow: "var(--shadow-card)" }}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        width={640}
        height={512}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(222 47% 8% / 0.4) 0%, hsl(222 47% 8% / 0.88) 55%, hsl(222 47% 8% / 0.95) 100%)" }} />
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <Icon size={24} className="mb-3" style={{ color: "hsl(192 91% 52%)" }} />
        <h3 className="font-heading font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 70%)" }}>{desc}</p>
      </div>
    </div>
  );
};

export default IndustryCard;
