import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    id: 1,
    category: "Partnership",
    title: "NexaTech Partners with Microsoft to Accelerate Enterprise Cloud Adoption",
    excerpt: "We are thrilled to announce our strategic partnership with Microsoft, becoming a Gold-tier Azure Solutions Partner. This collaboration will enable us to deliver cutting-edge cloud transformation services to enterprises worldwide.",
    author: "NexaTech Communications",
    date: "March 31, 2026",
    readTime: "4 min read",
    image: "/src/assets/blogs/1.JPG",
    featured: true,
  },
  {
    id: 2,
    category: "Expansion",
    title: "NexaTech Opens New Innovation Hub in Singapore",
    excerpt: "Expanding our global footprint, NexaTech inaugurates a state-of-the-art innovation center in Singapore to serve the fast-growing APAC market and strengthen our AI research capabilities.",
    author: "NexaTech Communications",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "/src/assets/blogs/2.JPG",
    featured: true,
  },
  {
    id: 3,
    category: "Award",
    title: "NexaTech Named a Leader in Gartner's 2026 Magic Quadrant for IT Services",
    excerpt: "For the third consecutive year, NexaTech has been recognized as a Leader in the Gartner Magic Quadrant for Custom Software Development Services, reflecting our commitment to innovation and client success.",
    author: "NexaTech Communications",
    date: "February 28, 2026",
    readTime: "3 min read",
    image: "/src/assets/blogs/1.JPG",
  },
  {
    id: 4,
    category: "Milestone",
    title: "NexaTech Crosses 10,000 Employees Globally",
    excerpt: "A proud milestone — NexaTech now employs over 10,000 talented professionals across 28 offices in 15 countries. This growth underscores our position as a premier global technology partner.",
    author: "NexaTech HR",
    date: "January 20, 2026",
    readTime: "3 min read",
    image: "/src/assets/blogs/2.JPG",
  },
  {
    id: 5,
    category: "Acquisition",
    title: "NexaTech Acquires DataStream AI to Strengthen Machine Learning Capabilities",
    excerpt: "The acquisition of DataStream AI, a leading MLOps platform provider, will bolster our end-to-end AI delivery capabilities and expand our data science talent pool by over 200 engineers.",
    author: "NexaTech Communications",
    date: "December 10, 2025",
    readTime: "5 min read",
    image: "/src/assets/service-ai-ml.jpg",
  },
  {
    id: 6,
    category: "CSR",
    title: "NexaTech Launches 'Code for Good' Initiative — Training 5,000 Students in Emerging Tech",
    excerpt: "Our new CSR program aims to bridge the digital skills gap by providing free training in AI, cloud computing, and cybersecurity to underserved communities across Southeast Asia and Africa.",
    author: "NexaTech Foundation",
    date: "November 5, 2025",
    readTime: "4 min read",
    image: "/src/assets/industry-education.jpg",
  },
  {
    id: 7,
    category: "Product Launch",
    title: "Introducing NexaCloud — Our Proprietary Multi-Cloud Management Platform",
    excerpt: "NexaCloud simplifies multi-cloud operations with a unified dashboard, automated cost optimization, and built-in security compliance for AWS, Azure, and GCP environments.",
    author: "NexaTech Product Team",
    date: "October 12, 2025",
    readTime: "6 min read",
    image: "/src/assets/products/cloud-platform.jpg",
  },
  {
    id: 8,
    category: "Event",
    title: "NexaTech to Headline at Web Summit 2026 in Lisbon",
    excerpt: "CEO Arjun Mehta will deliver a keynote on 'The Future of Enterprise AI' at Web Summit 2026. Join our team at booth E-42 for live demos and networking.",
    author: "NexaTech Events",
    date: "September 18, 2025",
    readTime: "3 min read",
    image: "/src/assets/blogs/3.JPG",
  },
  {
    id: 9,
    category: "Partnership",
    title: "NexaTech and AWS Launch Joint Innovation Lab for FinTech",
    excerpt: "The new lab in London will focus on developing next-generation banking and payment solutions using serverless architecture, real-time data streaming, and generative AI.",
    author: "NexaTech Communications",
    date: "August 22, 2025",
    readTime: "4 min read",
    image: "/src/assets/industry-banking.jpg",
  },
  {
    id: 10,
    category: "Product Launch",
    title: "NexaTech Unveils Advanced Cybersecurity Platform for Enterprise",
    excerpt: "Our new cybersecurity platform offers real-time threat detection, automated response, and compliance management for enterprises across all industries.",
    author: "NexaTech Security Team",
    date: "July 8, 2025",
    readTime: "5 min read",
    image: "/src/assets/service-cybersecurity.jpg",
  },
  {
    id: 11,
    category: "Milestone",
    title: "NexaTech Achieves ISO 27001 and SOC 2 Type II Certifications",
    excerpt: "We are proud to announce that NexaTech has achieved ISO 27001 and SOC 2 Type II certifications, demonstrating our commitment to information security and data protection.",
    author: "NexaTech Compliance",
    date: "June 15, 2025",
    readTime: "3 min read",
    image: "/src/assets/products/cybersecurity-platform.jpg",
  },
  {
    id: 12,
    category: "Partnership",
    title: "Strategic Alliance with Google Cloud for Healthcare Solutions",
    excerpt: "NexaTech partners with Google Cloud to deliver HIPAA-compliant healthcare solutions powered by advanced AI and machine learning technologies.",
    author: "NexaTech Communications",
    date: "May 20, 2025",
    readTime: "4 min read",
    image: "/src/assets/industry-healthcare.jpg",
  },
  {
    id: 13,
    category: "Expansion",
    title: "New Development Center Opens in Bangalore, India",
    excerpt: "Our latest development center in Bangalore will house 500+ engineers focusing on AI, blockchain, and cloud-native application development.",
    author: "NexaTech Operations",
    date: "April 10, 2025",
    readTime: "4 min read",
    image: "/src/assets/blogs/4.JPG",
  },
  {
    id: 14,
    category: "Award",
    title: "NexaTech Wins 'Best IT Outsourcing Company' at Tech Excellence Awards",
    excerpt: "We are honored to receive the Best IT Outsourcing Company award, recognizing our innovative solutions and exceptional client service.",
    author: "NexaTech Communications",
    date: "March 5, 2025",
    readTime: "3 min read",
    image: "/src/assets/blogs/5.JPG",
  },
  {
    id: 15,
    category: "Product Launch",
    title: "NexaTech Launches AI-Powered Data Analytics Platform",
    excerpt: "Our new platform enables businesses to unlock insights from their data with advanced AI algorithms, predictive analytics, and real-time visualization.",
    author: "NexaTech Product Team",
    date: "February 12, 2025",
    readTime: "5 min read",
    image: "/src/assets/products/data-analytics-platform.jpg",
  },
  {
    id: 16,
    category: "CSR",
    title: "NexaTech Foundation Donates $2M to STEM Education Programs",
    excerpt: "Supporting the next generation of tech talent, NexaTech Foundation commits $2 million to STEM education initiatives in underserved communities.",
    author: "NexaTech Foundation",
    date: "January 18, 2025",
    readTime: "3 min read",
    image: "/src/assets/blogs/6.JPG",
  },
  {
    id: 17,
    category: "Partnership",
    title: "Collaboration with SAP for Enterprise Resource Planning Solutions",
    excerpt: "NexaTech becomes an SAP Gold Partner, offering comprehensive ERP implementation and customization services to global enterprises.",
    author: "NexaTech Communications",
    date: "December 8, 2024",
    readTime: "4 min read",
    image: "/src/assets/service-consulting.jpg",
  },
  {
    id: 18,
    category: "Milestone",
    title: "NexaTech Completes 1,000th Successful Project Delivery",
    excerpt: "Celebrating a major milestone as we complete our 1,000th project, spanning industries from finance to healthcare to retail.",
    author: "NexaTech Operations",
    date: "November 15, 2024",
    readTime: "3 min read",
    image: "/src/assets/blogs/7.JPG",
  },
  {
    id: 19,
    category: "Product Launch",
    title: "Introducing NexaIoT: Enterprise IoT Management Platform",
    excerpt: "NexaIoT provides end-to-end IoT device management, data collection, and analytics for manufacturing and logistics industries.",
    author: "NexaTech Product Team",
    date: "October 22, 2024",
    readTime: "5 min read",
    image: "/src/assets/products/iot-platform.jpg",
  },
  {
    id: 20,
    category: "Expansion",
    title: "NexaTech Establishes Presence in Latin America with Mexico City Office",
    excerpt: "Expanding into Latin America, our new Mexico City office will serve clients across the region with localized support and expertise.",
    author: "NexaTech Operations",
    date: "November 5, 2025",
    readTime: "4 min read",
    image: "/src/assets/blogs/8.JPG",
  },
  {
    id: 21,
    category: "Partnership",
    title: "NexaTech Joins Blockchain Consortium for Supply Chain Innovation",
    excerpt: "As a founding member of the Global Blockchain Supply Chain Consortium, we're driving innovation in logistics and supply chain management.",
    author: "NexaTech Communications",
    date: "August 5, 2024",
    readTime: "4 min read",
    image: "/src/assets/industry-blockchain.jpg",
  },
  {
    id: 22,
    category: "Award",
    title: "CEO Arjun Mehta Named 'Technology Leader of the Year'",
    excerpt: "Our CEO receives prestigious recognition for visionary leadership and driving digital transformation across global enterprises.",
    author: "NexaTech Communications",
    date: "July 18, 2024",
    readTime: "3 min read",
    image: "/src/assets/blogs/9.JPG",
  },
  {
    id: 23,
    category: "Product Launch",
    title: "NexaTech Releases DevOps Automation Suite",
    excerpt: "Streamline your CI/CD pipelines with our comprehensive DevOps automation suite, featuring integrated testing, deployment, and monitoring tools.",
    author: "NexaTech Product Team",
    date: "October 12, 2025",
    readTime: "5 min read",
    image: "/src/assets/products/devops-platform.jpg",
  },
  {
    id: 24,
    category: "Milestone",
    title: "NexaTech Achieves Carbon Neutral Operations",
    excerpt: "We're proud to announce that all NexaTech offices worldwide have achieved carbon neutrality through renewable energy and offset programs.",
    author: "NexaTech Sustainability",
    date: "May 8, 2024",
    readTime: "4 min read",
    image: "/src/assets/blogs/10.JPG",
  },
  {
    id: 25,
    category: "Partnership",
    title: "Strategic Partnership with Oracle for Database Modernization",
    excerpt: "NexaTech and Oracle collaborate to help enterprises modernize legacy databases and migrate to cloud-native architectures.",
    author: "NexaTech Communications",
    date: "April 15, 2024",
    readTime: "4 min read",
    image: "/src/assets/service-custom-software.jpg",
  },
  {
    id: 26,
    category: "Expansion",
    title: "NexaTech Opens AI Research Lab in Toronto",
    excerpt: "Our new AI research facility in Toronto will focus on advancing natural language processing and computer vision technologies.",
    author: "NexaTech Research",
    date: "March 20, 2024",
    readTime: "4 min read",
    image: "/src/assets/blogs/11.JPG",
  },
  {
    id: 27,
    category: "Product Launch",
    title: "NexaTech Introduces Healthcare Platform for Telemedicine",
    excerpt: "Our HIPAA-compliant telemedicine platform enables healthcare providers to deliver remote care with integrated EHR and billing systems.",
    author: "NexaTech Healthcare",
    date: "February 10, 2024",
    readTime: "5 min read",
    image: "/src/assets/products/healthcare-platform.jpg",
  },
  {
    id: 28,
    category: "CSR",
    title: "NexaTech Volunteers Complete 10,000 Hours of Community Service",
    excerpt: "Our employees have contributed over 10,000 hours to community service projects, including tech education and environmental initiatives.",
    author: "NexaTech Foundation",
    date: "January 5, 2024",
    readTime: "3 min read",
    image: "/src/assets/blogs/12.JPG",
  },
  {
    id: 29,
    category: "Award",
    title: "NexaTech Recognized as Top Employer for Diversity and Inclusion",
    excerpt: "We're honored to be recognized for our commitment to building a diverse and inclusive workplace that celebrates all backgrounds and perspectives.",
    author: "NexaTech HR",
    date: "December 12, 2023",
    readTime: "3 min read",
    image: "/src/assets/blogs/13.JPG",
  },
  {
    id: 30,
    category: "Partnership",
    title: "NexaTech and Salesforce Launch CRM Integration Services",
    excerpt: "New partnership enables seamless integration of Salesforce CRM with enterprise systems, enhancing customer relationship management capabilities.",
    author: "NexaTech Communications",
    date: "November 8, 2023",
    readTime: "4 min read",
    image: "/src/assets/service-digital.jpg",
  },
  {
    id: 31,
    category: "Product Launch",
    title: "NexaTech Unveils E-commerce Platform for Retail Businesses",
    excerpt: "Our comprehensive e-commerce solution offers headless architecture, AI-powered recommendations, and omnichannel capabilities for modern retailers.",
    author: "NexaTech Product Team",
    date: "October 15, 2022",
    readTime: "5 min read",
    image: "/src/assets/products/ecommerce-platform.jpg",
  },
  {
    id: 32,
    category: "Milestone",
    title: "NexaTech Client Satisfaction Score Reaches 98%",
    excerpt: "Our latest client satisfaction survey shows a 98% satisfaction rate, reflecting our commitment to delivering exceptional service and results.",
    author: "NexaTech Client Services",
    date: "September 5, 2021",
    readTime: "3 min read",
    image: "/src/assets/blogs/14.JPG",
  },
  {
    id: 33,
    category: "Expansion",
    title: "NexaTech Doubles Engineering Team in Eastern Europe",
    excerpt: "Significant expansion in Poland and Romania adds 1,000+ engineers to support growing demand for custom software development services.",
    author: "NexaTech Operations",
    date: "July 20, 2020",
    readTime: "4 min read",
    image: "/src/assets/blogs/15.JPG",
  },
  {
    id: 34,
    category: "Partnership",
    title: "Collaboration with IBM for Quantum Computing Research",
    excerpt: "NexaTech joins IBM's quantum computing network to explore enterprise applications of quantum technology in optimization and cryptography.",
    author: "NexaTech Research",
    date: "May 10, 2018",
    readTime: "4 min read",
    image: "/src/assets/blogs/16.JPG",
  },
  {
    id: 35,
    category: "Product Launch",
    title: "NexaTech Launches Legacy System Modernization Framework",
    excerpt: "Our proven framework helps enterprises modernize legacy applications with minimal disruption, reducing technical debt and improving agility.",
    author: "NexaTech Product Team",
    date: "March 1, 2017",
    readTime: "5 min read",
    image: "/src/assets/products/legacy-modern.jpg",
  },
];

const categoryColors: Record<string, string> = {
  Partnership: "hsl(234 89% 64%)",
  Expansion: "hsl(192 91% 52%)",
  Award: "hsl(45 93% 58%)",
  Milestone: "hsl(142 71% 45%)",
  Acquisition: "hsl(280 67% 60%)",
  CSR: "hsl(340 75% 55%)",
  "Product Launch": "hsl(192 91% 52%)",
  Event: "hsl(24 95% 55%)",
};

const BlogNews = () => {
  const featuredNews = newsArticles.filter((a) => a.featured);
  const regularNews = newsArticles.filter((a) => !a.featured);

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "hsl(var(--surface-dark))" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, hsl(var(--indigo) / 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, hsl(var(--cyan) / 0.2) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-6">
              <a href="/blog" className="text-sm" style={{ color: "hsl(0 0% 50%)" }}>
                Blog
              </a>
              <span style={{ color: "hsl(0 0% 30%)" }}>/</span>
              <span className="text-sm" style={{ color: "hsl(var(--cyan))" }}>
                Company News
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "hsl(var(--cyan) / 0.1)" }}
              >
                <Building2 size={24} style={{ color: "hsl(var(--cyan))" }} />
              </div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "hsl(var(--cyan) / 0.1)",
                  color: "hsl(var(--cyan))",
                  border: "1px solid hsl(var(--cyan) / 0.2)",
                }}
              >
                Company News
              </span>
            </div>
            <h1
              className="font-heading text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(0 0% 95%)" }}
            >
              What's Happening at{" "}
              <span style={{ color: "hsl(var(--cyan))" }}>NexaTech</span>
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: "hsl(0 0% 60%)" }}
            >
              Stay updated on our partnerships, milestones, product launches,
              and global expansion — the latest from NexaTech.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16" style={{ background: "hsl(var(--surface-navy))" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold mb-10" style={{ color: "hsl(0 0% 90%)" }}>
              Top Stories
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.1}>
                <Link to="/auth">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-2xl overflow-hidden border h-full cursor-pointer"
                    style={{
                      background: "hsl(var(--navy-light))",
                      borderColor: "hsl(0 0% 100% / 0.06)",
                    }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, hsl(var(--navy-light)), transparent 60%)",
                        }}
                      />
                      <span
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                        style={{
                          background: `${categoryColors[article.category] || "hsl(var(--cyan))"} / 0.2)`.replace(")", ""),
                          color: categoryColors[article.category] || "hsl(var(--cyan))",
                          backdropFilter: "blur(8px)",
                          border: `1px solid ${categoryColors[article.category] || "hsl(var(--cyan))"} / 0.3)`.replace(")", ""),
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3
                        className="font-heading text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors"
                        style={{ color: "hsl(0 0% 95%)" }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-sm mb-5" style={{ color: "hsl(0 0% 55%)" }}>
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs" style={{ color: "hsl(0 0% 45%)" }}>
                        <span className="flex items-center gap-1">
                          <User size={12} /> {article.author}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20" style={{ background: "hsl(var(--surface-dark))" }}>
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-bold mb-10" style={{ color: "hsl(0 0% 90%)" }}>
              All Company News
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {regularNews.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.05}>
                <Link to="/auth">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex flex-col md:flex-row gap-6 p-5 rounded-xl border transition-all duration-200 cursor-pointer"
                    style={{
                      background: "hsl(var(--navy-light))",
                      borderColor: "hsl(0 0% 100% / 0.04)",
                    }}
                  >
                    <div className="relative w-full md:w-56 h-40 md:h-36 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            background: "hsl(var(--cyan) / 0.1)",
                            color: categoryColors[article.category] || "hsl(var(--cyan))",
                          }}
                        >
                          {article.category}
                        </span>
                        <span className="text-xs" style={{ color: "hsl(0 0% 45%)" }}>
                          {article.date}
                        </span>
                      </div>
                      <h3
                        className="font-heading text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors"
                        style={{ color: "hsl(0 0% 93%)" }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-sm line-clamp-2" style={{ color: "hsl(0 0% 50%)" }}>
                        {article.excerpt}
                      </p>
                      <div className="mt-3">
                        <span
                          className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-3 transition-all"
                          style={{ color: "hsl(var(--cyan))" }}
                        >
                          Read More <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "hsl(var(--surface-navy))" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(0 0% 95%)" }}>
              Want to Learn More About NexaTech?
            </h2>
            <p className="mb-8" style={{ color: "hsl(0 0% 55%)" }}>
              Get in touch with our team to explore how we can help transform your business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{
                background: "var(--gradient-primary)",
                color: "hsl(0 0% 100%)",
              }}
            >
              Contact Us <ArrowRight size={16} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default BlogNews;
