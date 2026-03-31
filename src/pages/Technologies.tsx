import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Frontend Development",
    color: "hsl(234 89% 54%)",
    skills: [
      "React", "Angular", "Vue.js", "Next.js", "Svelte", "TypeScript", "JavaScript",
      "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI", "Sass/SCSS",
      "Redux", "Zustand", "Webpack", "Vite", "Storybook", "Framer Motion",
    ],
  },
  {
    name: "Backend Development",
    color: "hsl(160 84% 39%)",
    skills: [
      "Node.js", "Python", "Java", "C#", ".NET", "Go", "Rust", "Ruby on Rails",
      "Django", "Flask", "FastAPI", "Spring Boot", "Express.js", "NestJS",
      "GraphQL", "REST APIs", "gRPC", "Microservices", "PHP", "Laravel",
    ],
  },
  {
    name: "Cloud & Infrastructure",
    color: "hsl(192 91% 52%)",
    skills: [
      "AWS", "Azure", "Google Cloud", "Terraform", "Pulumi", "CloudFormation",
      "Docker", "Kubernetes", "OpenShift", "Ansible", "Chef", "Puppet",
      "Jenkins", "GitHub Actions", "GitLab CI/CD", "ArgoCD", "Helm",
      "Nginx", "Apache", "Serverless",
    ],
  },
  {
    name: "AI & Machine Learning",
    color: "hsl(280 67% 55%)",
    skills: [
      "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI API", "LangChain",
      "Hugging Face", "Computer Vision", "NLP", "Deep Learning", "MLOps",
      "Pandas", "NumPy", "Jupyter", "ONNX", "Stable Diffusion",
    ],
  },
  {
    name: "Databases & Storage",
    color: "hsl(25 95% 53%)",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB",
      "Cassandra", "Neo4j", "Firebase", "Supabase", "SQL Server", "Oracle DB",
      "CockroachDB", "InfluxDB", "Snowflake", "BigQuery",
    ],
  },
  {
    name: "Mobile Development",
    color: "hsl(340 82% 52%)",
    skills: [
      "React Native", "Flutter", "Swift", "Kotlin", "Objective-C",
      "Ionic", "Xamarin", ".NET MAUI", "Capacitor", "Android SDK",
      "iOS SDK", "Expo", "Firebase Auth",
    ],
  },
  {
    name: "Cybersecurity",
    color: "hsl(0 72% 51%)",
    skills: [
      "OWASP", "Penetration Testing", "SOC 2", "ISO 27001", "Zero Trust",
      "IAM", "SIEM", "Vault", "SSL/TLS", "WAF", "Encryption",
      "Threat Modeling", "GDPR Compliance", "HIPAA Compliance",
    ],
  },
  {
    name: "DevOps & Monitoring",
    color: "hsl(45 93% 47%)",
    skills: [
      "Prometheus", "Grafana", "Datadog", "New Relic", "Splunk", "ELK Stack",
      "PagerDuty", "Sentry", "CircleCI", "Travis CI", "SonarQube",
      "Vagrant", "Istio", "Consul",
    ],
  },
  {
    name: "Data Engineering & Analytics",
    color: "hsl(210 78% 56%)",
    skills: [
      "Apache Spark", "Kafka", "Airflow", "dbt", "Hadoop", "Flink",
      "Tableau", "Power BI", "Looker", "Redshift", "Data Lakes",
      "ETL Pipelines", "Data Warehousing",
    ],
  },
  {
    name: "Blockchain & Web3",
    color: "hsl(263 70% 50%)",
    skills: [
      "Solidity", "Ethereum", "Hyperledger", "Smart Contracts", "Web3.js",
      "Hardhat", "IPFS", "DeFi Protocols", "NFT Development", "Polygon",
    ],
  },
  {
    name: "Testing & QA",
    color: "hsl(150 60% 40%)",
    skills: [
      "Jest", "Cypress", "Playwright", "Selenium", "JUnit", "Mocha",
      "Postman", "k6", "JMeter", "Appium", "TestRail",
      "BDD/TDD", "Load Testing",
    ],
  },
];

const totalSkills = categories.reduce((sum, c) => sum + c.skills.length, 0);

const Technologies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Technology Stack</p>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
                {totalSkills}+ <span className="gradient-text">Technologies</span> We Master
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>
                Our engineers are proficient across the full technology spectrum — from frontend frameworks to AI platforms, cloud infrastructure to blockchain.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat.name} delay={ci * 0.05}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
                  <h2 className="font-heading font-bold text-2xl text-foreground">{cat.name}</h2>
                  <span className="text-xs font-medium text-muted-foreground ml-2">({cat.skills.length})</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: `${cat.color.replace(")", " / 0.06)")}`,
                        borderColor: `${cat.color.replace(")", " / 0.15)")}`,
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>
              Don't See What You Need?
            </h2>
            <p className="text-lg mb-10" style={{ color: "hsl(0 0% 55%)" }}>
              Our team continuously expands its expertise. Contact us to discuss your specific technology requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Talk to Our Experts <ArrowRight size={16} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Technologies;
