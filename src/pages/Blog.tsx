import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    category: "Cloud & DevOps",
    title: "Why Multi-Cloud Strategy Is No Longer Optional for Enterprises",
    excerpt: "As enterprises scale globally, relying on a single cloud provider creates risk. Learn how a multi-cloud approach ensures resilience, cost optimization, and vendor independence.",
    author: "Rajesh Kapoor",
    role: "VP of Cloud Architecture",
    date: "March 25, 2026",
    readTime: "8 min read",
    image: "/src/assets/service-cloud-devops.jpg",
    tags: ["AWS", "Azure", "GCP", "Strategy"],
    featured: true,
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    title: "Generative AI in Enterprise: Moving Beyond the Hype",
    excerpt: "Generative AI is transforming industries — but only when deployed strategically. We break down real use cases that deliver measurable ROI.",
    author: "Dr. Priya Menon",
    role: "Head of AI Research",
    date: "March 18, 2026",
    readTime: "10 min read",
    image: "/src/assets/service-ai-ml.jpg",
    tags: ["GenAI", "LLM", "Machine Learning"],
    featured: true,
  },
  {
    id: 3,
    category: "Cybersecurity",
    title: "Zero Trust Architecture: A Practical Implementation Guide",
    excerpt: "Traditional perimeter security is dead. Here's how to implement Zero Trust across your organization without disrupting operations.",
    author: "Michael Torres",
    role: "Chief Security Officer",
    date: "March 12, 2026",
    readTime: "7 min read",
    image: "/src/assets/service-cybersecurity.jpg",
    tags: ["Security", "Zero Trust", "Compliance"],
  },
  {
    id: 4,
    category: "Software Engineering",
    title: "Microservices vs. Modular Monolith: Choosing the Right Architecture",
    excerpt: "Not every application needs microservices. We explore when a modular monolith might be the smarter, more cost-effective choice.",
    author: "Anna Kowalski",
    role: "Principal Architect",
    date: "March 5, 2026",
    readTime: "9 min read",
    image: "/src/assets/service-custom-software.jpg",
    tags: ["Architecture", "Microservices", "Backend"],
  },
  {
    id: 5,
    category: "Digital Transformation",
    title: "Legacy Modernization: 5 Strategies That Actually Work",
    excerpt: "Modernizing legacy systems is one of the biggest challenges enterprises face. Here are five battle-tested strategies from our project portfolio.",
    author: "David Chen",
    role: "Director of Engineering",
    date: "February 26, 2026",
    readTime: "6 min read",
    image: "/src/assets/products/legacy-modern.jpg",
    tags: ["Legacy", "Modernization", "Strategy"],
  },
  {
    id: 6,
    category: "Data Engineering",
    title: "Building a Real-Time Data Pipeline with Kafka and Spark",
    excerpt: "Real-time data processing is critical for modern enterprises. This deep-dive covers architecture patterns for building scalable streaming pipelines.",
    author: "Sarah Johnson",
    role: "Lead Data Engineer",
    date: "February 19, 2026",
    readTime: "12 min read",
    image: "/src/assets/products/data-analytics-platform.jpg",
    tags: ["Kafka", "Spark", "Big Data"],
  },
  {
    id: 7,
    category: "Cloud & DevOps",
    title: "Infrastructure as Code: Terraform Best Practices for Teams",
    excerpt: "Managing cloud infrastructure at scale requires discipline. We share our proven Terraform patterns for enterprise environments.",
    author: "James Park",
    role: "DevOps Lead",
    date: "February 12, 2026",
    readTime: "8 min read",
    image: "/src/assets/products/devops-platform.jpg",
    tags: ["Terraform", "IaC", "DevOps"],
  },
  {
    id: 8,
    category: "Artificial Intelligence",
    title: "Computer Vision in Manufacturing: Quality Control at Scale",
    excerpt: "How AI-powered visual inspection systems are reducing defects by 95% in manufacturing facilities worldwide.",
    author: "Dr. Priya Menon",
    role: "Head of AI Research",
    date: "February 5, 2026",
    readTime: "7 min read",
    image: "/src/assets/industry-manufacturing.jpg",
    tags: ["Computer Vision", "Manufacturing", "AI"],
  },
  {
    id: 9,
    category: "Blockchain",
    title: "Smart Contracts in Supply Chain: Real-World Implementation",
    excerpt: "Blockchain technology is revolutionizing supply chain transparency. Learn how smart contracts automate trust and reduce fraud.",
    author: "Marcus Lee",
    role: "Blockchain Architect",
    date: "January 28, 2026",
    readTime: "9 min read",
    image: "/src/assets/industry-blockchain.jpg",
    tags: ["Blockchain", "Smart Contracts", "Supply Chain"],
  },
  {
    id: 10,
    category: "Healthcare Tech",
    title: "HIPAA-Compliant Cloud Architecture for Healthcare Applications",
    excerpt: "Building healthcare applications requires strict compliance. This guide covers essential security patterns for HIPAA compliance in the cloud.",
    author: "Dr. Emily Watson",
    role: "Healthcare Solutions Lead",
    date: "December 15, 2025",
    readTime: "10 min read",
    image: "/src/assets/industry-healthcare.jpg",
    tags: ["HIPAA", "Healthcare", "Compliance"],
  },
  {
    id: 11,
    category: "FinTech",
    title: "Building Scalable Payment Systems: Lessons from Banking Giants",
    excerpt: "Payment processing at scale requires careful architecture. We share insights from building systems that handle millions of transactions daily.",
    author: "Robert Kim",
    role: "FinTech Solutions Architect",
    date: "November 22, 2025",
    readTime: "11 min read",
    image: "/src/assets/industry-banking.jpg",
    tags: ["Payments", "Banking", "Scalability"],
  },
  {
    id: 12,
    category: "E-commerce",
    title: "Headless Commerce: The Future of Retail Technology",
    excerpt: "Traditional e-commerce platforms are limiting growth. Discover how headless architecture enables omnichannel experiences.",
    author: "Jennifer Martinez",
    role: "E-commerce Architect",
    date: "September 30, 2025",
    readTime: "8 min read",
    image: "/src/assets/industry-retail.jpg",
    tags: ["Headless", "E-commerce", "Retail"],
  },
  {
    id: 13,
    category: "IoT",
    title: "Industrial IoT: Predictive Maintenance with Edge Computing",
    excerpt: "Edge computing is transforming industrial operations. Learn how IoT sensors and ML models predict equipment failures before they happen.",
    author: "Thomas Anderson",
    role: "IoT Solutions Lead",
    date: "June 12, 2025",
    readTime: "9 min read",
    image: "/src/assets/products/iot-platform.jpg",
    tags: ["IoT", "Edge Computing", "Predictive Maintenance"],
  },
  {
    id: 14,
    category: "Software Engineering",
    title: "API Design Best Practices: Building Developer-Friendly Interfaces",
    excerpt: "Great APIs are intuitive and well-documented. This guide covers REST, GraphQL, and gRPC design patterns for modern applications.",
    author: "Lisa Chen",
    role: "API Architect",
    date: "April 18, 2025",
    readTime: "7 min read",
    image: "/src/assets/service-web-mobile.jpg",
    tags: ["API", "REST", "GraphQL"],
  },
  {
    id: 15,
    category: "Quality Assurance",
    title: "Test Automation Strategy: From Unit Tests to E2E",
    excerpt: "Comprehensive testing is essential for quality software. Learn how to build an effective test automation pyramid for your applications.",
    author: "Ahmed Hassan",
    role: "QA Engineering Manager",
    date: "March 8, 2025",
    readTime: "8 min read",
    image: "/src/assets/service-qa-testing.jpg",
    tags: ["Testing", "Automation", "QA"],
  },
  {
    id: 16,
    category: "Digital Transformation",
    title: "Digital Transformation Roadmap: A Step-by-Step Guide",
    excerpt: "Successful digital transformation requires careful planning. This roadmap helps enterprises navigate their modernization journey.",
    author: "Patricia Williams",
    role: "Digital Strategy Consultant",
    date: "January 15, 2025",
    readTime: "10 min read",
    image: "/src/assets/service-digital.jpg",
    tags: ["Strategy", "Transformation", "Planning"],
  },
  {
    id: 17,
    category: "Education Tech",
    title: "AI-Powered Learning Platforms: Personalization at Scale",
    excerpt: "Adaptive learning systems are revolutionizing education. Discover how AI personalizes learning experiences for millions of students.",
    author: "Dr. Samantha Brown",
    role: "EdTech Solutions Lead",
    date: "November 10, 2024",
    readTime: "9 min read",
    image: "/src/assets/industry-education.jpg",
    tags: ["EdTech", "AI", "Personalization"],
  },
  {
    id: 18,
    category: "Logistics",
    title: "Route Optimization with Machine Learning: Reducing Delivery Times",
    excerpt: "ML algorithms are transforming logistics operations. Learn how intelligent routing reduces costs and improves delivery efficiency.",
    author: "Carlos Rodriguez",
    role: "Logistics Tech Lead",
    date: "August 25, 2024",
    readTime: "8 min read",
    image: "/src/assets/industry-logistics.jpg",
    tags: ["Logistics", "ML", "Optimization"],
  },
  {
    id: 19,
    category: "Cloud & DevOps",
    title: "Kubernetes Security: Hardening Your Container Infrastructure",
    excerpt: "Container security is critical for production workloads. This guide covers essential Kubernetes security practices and tools.",
    author: "Kevin Zhang",
    role: "Cloud Security Engineer",
    date: "May 14, 2024",
    readTime: "11 min read",
    image: "/src/assets/products/cloud-platform.jpg",
    tags: ["Kubernetes", "Security", "Containers"],
  },
  {
    id: 20,
    category: "Consulting",
    title: "IT Consulting Best Practices: Delivering Value to Enterprise Clients",
    excerpt: "Successful IT consulting requires more than technical expertise. Learn how to build trust and deliver measurable business outcomes.",
    author: "Michael Stevens",
    role: "Principal Consultant",
    date: "February 20, 2024",
    readTime: "7 min read",
    image: "/src/assets/service-consulting.jpg",
    tags: ["Consulting", "Strategy", "Best Practices"],
  },
  {
    id: 21,
    category: "Software Engineering",
    title: "Monorepo Management: Scaling Development with Nx and Turborepo",
    excerpt: "Managing multiple projects in a single repository requires the right tools. Compare Nx and Turborepo for enterprise monorepo strategies.",
    author: "Daniel Park",
    role: "Senior Software Architect",
    date: "October 5, 2023",
    readTime: "9 min read",
    image: "/src/assets/service-custom-software.jpg",
    tags: ["Monorepo", "Nx", "Turborepo"],
  },
  {
    id: 22,
    category: "Data Engineering",
    title: "Data Mesh Architecture: Decentralizing Data Ownership",
    excerpt: "Traditional centralized data platforms are becoming bottlenecks. Learn how data mesh principles enable scalable data architecture.",
    author: "Rachel Green",
    role: "Data Architecture Lead",
    date: "June 18, 2023",
    readTime: "10 min read",
    image: "/src/assets/products/data-analytics-platform.jpg",
    tags: ["Data Mesh", "Architecture", "Big Data"],
  },
  {
    id: 23,
    category: "Cybersecurity",
    title: "Application Security: Shifting Left in the SDLC",
    excerpt: "Security can't be an afterthought. Discover how to integrate security practices throughout the software development lifecycle.",
    author: "Alex Thompson",
    role: "Security Engineer",
    date: "March 12, 2023",
    readTime: "8 min read",
    image: "/src/assets/service-cybersecurity.jpg",
    tags: ["AppSec", "DevSecOps", "SDLC"],
  },
  {
    id: 24,
    category: "Artificial Intelligence",
    title: "MLOps Best Practices: Productionizing Machine Learning Models",
    excerpt: "Getting ML models into production is challenging. This guide covers MLOps practices for reliable model deployment and monitoring.",
    author: "Dr. Priya Menon",
    role: "Head of AI Research",
    date: "November 8, 2022",
    readTime: "11 min read",
    image: "/src/assets/service-ai-ml.jpg",
    tags: ["MLOps", "Machine Learning", "DevOps"],
  },
  {
    id: 25,
    category: "Cloud & DevOps",
    title: "Serverless Architecture Patterns: When to Go Serverless",
    excerpt: "Serverless computing offers scalability and cost benefits, but it's not always the right choice. Learn when serverless makes sense.",
    author: "James Park",
    role: "DevOps Lead",
    date: "July 22, 2022",
    readTime: "9 min read",
    image: "/src/assets/products/cloud-platform.jpg",
    tags: ["Serverless", "AWS Lambda", "Architecture"],
  },
  {
    id: 26,
    category: "Software Engineering",
    title: "Event-Driven Architecture: Building Reactive Systems",
    excerpt: "Event-driven systems enable loose coupling and scalability. Explore patterns for building reactive applications with event sourcing.",
    author: "Anna Kowalski",
    role: "Principal Architect",
    date: "April 15, 2022",
    readTime: "10 min read",
    image: "/src/assets/service-custom-software.jpg",
    tags: ["Event-Driven", "Architecture", "Microservices"],
  },
  {
    id: 27,
    category: "Digital Transformation",
    title: "Remote Work Technology: Building Distributed Teams That Thrive",
    excerpt: "The shift to remote work requires new tools and practices. Learn how to build effective distributed engineering teams.",
    author: "Patricia Williams",
    role: "Digital Strategy Consultant",
    date: "December 10, 2021",
    readTime: "7 min read",
    image: "/src/assets/service-digital.jpg",
    tags: ["Remote Work", "Team Management", "Collaboration"],
  },
  {
    id: 28,
    category: "Quality Assurance",
    title: "Performance Testing at Scale: Load Testing Best Practices",
    excerpt: "Performance issues can sink applications. This guide covers load testing strategies for high-traffic systems.",
    author: "Ahmed Hassan",
    role: "QA Engineering Manager",
    date: "August 25, 2021",
    readTime: "8 min read",
    image: "/src/assets/service-qa-testing.jpg",
    tags: ["Performance", "Load Testing", "QA"],
  },
  {
    id: 29,
    category: "Cloud & DevOps",
    title: "GitOps: Infrastructure Management Through Git Workflows",
    excerpt: "GitOps brings version control to infrastructure management. Learn how to implement GitOps with ArgoCD and Flux.",
    author: "Kevin Zhang",
    role: "Cloud Security Engineer",
    date: "May 18, 2021",
    readTime: "9 min read",
    image: "/src/assets/products/devops-platform.jpg",
    tags: ["GitOps", "Kubernetes", "CI/CD"],
  },
  {
    id: 30,
    category: "Software Engineering",
    title: "Domain-Driven Design: Building Better Software Models",
    excerpt: "DDD helps align software with business domains. Explore tactical and strategic patterns for domain-driven development.",
    author: "David Chen",
    role: "Director of Engineering",
    date: "February 8, 2021",
    readTime: "12 min read",
    image: "/src/assets/service-custom-software.jpg",
    tags: ["DDD", "Architecture", "Design Patterns"],
  },
];

const categories = [
  "All",
  "Cloud & DevOps",
  "Artificial Intelligence",
  "Cybersecurity",
  "Software Engineering",
  "Digital Transformation",
  "Data Engineering",
  "Blockchain",
  "Healthcare Tech",
  "FinTech",
  "E-commerce",
  "IoT",
  "Quality Assurance",
  "Education Tech",
  "Logistics",
  "Consulting",
];

const FeaturedPost = ({ post }: { post: (typeof blogPosts)[0] }) => (
  <Link to="/auth">
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "hsl(var(--navy-light))" }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent, hsl(var(--navy-light)))",
            }}
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: "hsl(var(--cyan))" }}
          >
            {post.category}
          </span>
          <h3
            className="font-heading text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors"
            style={{ color: "hsl(0 0% 95%)" }}
          >
            {post.title}
          </h3>
          <p className="text-sm mb-6" style={{ color: "hsl(0 0% 60%)" }}>
            {post.excerpt}
          </p>
          <div
            className="flex items-center gap-4 text-xs"
            style={{ color: "hsl(0 0% 50%)" }}
          >
            <span className="flex items-center gap-1">
              <User size={12} /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded text-xs"
                style={{
                  background: "hsl(var(--cyan) / 0.1)",
                  color: "hsl(var(--cyan))",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => (
  <Link to="/auth">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl overflow-hidden border cursor-pointer"
      style={{
        background: "hsl(var(--navy-light))",
        borderColor: "hsl(0 0% 100% / 0.06)",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: "hsl(var(--cyan) / 0.2)",
            color: "hsl(var(--cyan))",
            backdropFilter: "blur(8px)",
          }}
        >
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <h3
          className="font-heading text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2"
          style={{ color: "hsl(0 0% 93%)" }}
        >
          {post.title}
        </h3>
        <p
          className="text-sm mb-4 line-clamp-3"
          style={{ color: "hsl(0 0% 55%)" }}
        >
          {post.excerpt}
        </p>
        <div
          className="flex items-center justify-between text-xs"
          style={{ color: "hsl(0 0% 45%)" }}
        >
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: "hsl(0 0% 100% / 0.05)",
                color: "hsl(0 0% 60%)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: "hsl(var(--cyan))" }}>
            Read Article <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </motion.div>
  </Link>
);

const Blog = () => {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

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
              "radial-gradient(circle at 20% 50%, hsl(var(--indigo) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--cyan) / 0.2) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                background: "hsl(var(--cyan) / 0.1)",
                color: "hsl(var(--cyan))",
                border: "1px solid hsl(var(--cyan) / 0.2)",
              }}
            >
              Insights & Articles
            </span>
            <h1
              className="font-heading text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(0 0% 95%)" }}
            >
              Tech Insights That{" "}
              <span style={{ color: "hsl(var(--cyan))" }}>Matter</span>
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: "hsl(0 0% 60%)" }}
            >
              Expert perspectives on cloud, AI, cybersecurity, and software
              engineering from our global team of technologists.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: "hsl(var(--surface-navy))" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border"
                style={{
                  background:
                    i === 0
                      ? "hsl(var(--cyan) / 0.15)"
                      : "hsl(0 0% 100% / 0.03)",
                  color:
                    i === 0 ? "hsl(var(--cyan))" : "hsl(0 0% 55%)",
                  borderColor:
                    i === 0
                      ? "hsl(var(--cyan) / 0.3)"
                      : "hsl(0 0% 100% / 0.06)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section
        className="py-16"
        style={{ background: "hsl(var(--surface-navy))" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2
              className="font-heading text-2xl font-bold mb-8"
              style={{ color: "hsl(0 0% 90%)" }}
            >
              Featured Articles
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {featuredPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <FeaturedPost post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section
        className="py-20"
        style={{ background: "hsl(var(--surface-dark))" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2
              className="font-heading text-2xl font-bold mb-10"
              style={{ color: "hsl(0 0% 90%)" }}
            >
              Latest Articles
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-20"
        style={{ background: "hsl(var(--surface-navy))" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "hsl(0 0% 95%)" }}
            >
              Stay Ahead of the Curve
            </h2>
            <p className="mb-8" style={{ color: "hsl(0 0% 55%)" }}>
              Subscribe to our newsletter for weekly insights on technology
              trends, engineering best practices, and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
                style={{
                  background: "hsl(0 0% 100% / 0.06)",
                  border: "1px solid hsl(0 0% 100% / 0.1)",
                  color: "hsl(0 0% 90%)",
                }}
              />
              <button
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{
                  background: "var(--gradient-primary)",
                  color: "hsl(0 0% 100%)",
                }}
              >
                Subscribe
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
