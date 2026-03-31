import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import IndustryCard from "@/components/IndustryCard";
import { Link } from "react-router-dom";
import { ArrowRight, Coins, FileCode, Link2, TrendingUp, Shield, Lock } from "lucide-react";
import imgExchange from "@/assets/cards/blockchain-exchange.jpg";
import imgSmart from "@/assets/cards/blockchain-smart.jpg";
import imgDapp from "@/assets/cards/blockchain-dapp.jpg";
import imgTrading from "@/assets/cards/blockchain-trading.jpg";
import imgAudit from "@/assets/cards/blockchain-audit.jpg";
import imgToken from "@/assets/cards/blockchain-token.jpg";

const solutions = [
  { icon: Coins, title: "Crypto Exchange Platforms", desc: "High-performance trading engines with order matching, wallets, and KYC/AML compliance.", image: imgExchange },
  { icon: FileCode, title: "Smart Contract Development", desc: "Audited smart contracts on Ethereum, Solana, and Polygon for DeFi, NFTs, and DAOs.", image: imgSmart },
  { icon: Link2, title: "DApp Development", desc: "Decentralized applications with seamless Web3 wallet integration and on-chain interactions.", image: imgDapp },
  { icon: TrendingUp, title: "Trading Bots & Algorithms", desc: "Automated trading strategies, market making bots, and quantitative analysis tools.", image: imgTrading },
  { icon: Shield, title: "Security Audits", desc: "Comprehensive smart contract and blockchain infrastructure security assessments.", image: imgAudit },
  { icon: Lock, title: "Tokenization & Asset Management", desc: "Real-world asset tokenization, token launchpads, and portfolio management platforms.", image: imgToken },
];

const caseStudies = [
  { client: "Crypto Exchange", result: "Handles 100K+ trades per second with sub-ms latency", tech: "Rust, Kafka, PostgreSQL" },
  { client: "DeFi Protocol", result: "$500M+ TVL with zero security incidents", tech: "Solidity, Hardhat, React" },
  { client: "NFT Marketplace", result: "Onboarded 1M+ users in 6 months", tech: "Next.js, Solana, IPFS" },
];

const BlockchainTrading = () => (
  <Layout>
    <section className="relative pt-32 pb-24 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} /><div className="relative z-10 max-w-7xl mx-auto px-6"><ScrollReveal><Link to="/industries" className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: "hsl(192 91% 52%)" }}>← Back to Industries</Link><div className="max-w-3xl"><h1 className="font-heading font-bold text-5xl md:text-6xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Blockchain & <span className="gradient-text">Trading</span></h1><p className="text-xl leading-relaxed" style={{ color: "hsl(0 0% 60%)" }}>Decentralized applications, smart contracts, crypto exchange platforms, and tokenization solutions.</p></div></ScrollReveal></div></section>
    <section className="section-light py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center max-w-2xl mx-auto mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-accent mb-4">Solutions</p><h2 className="font-heading font-bold text-4xl text-foreground">What We Build for Blockchain</h2></div></ScrollReveal><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{solutions.map((s, i) => (<ScrollReveal key={s.title} delay={i * 0.08}><IndustryCard {...s} /></ScrollReveal>))}</div></div></section>
    <section className="section-dark py-24"><div className="max-w-7xl mx-auto px-6"><ScrollReveal><div className="text-center mb-16"><p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "hsl(192 91% 52%)" }}>Results</p><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Client Success Stories</h2></div></ScrollReveal><div className="grid md:grid-cols-3 gap-6">{caseStudies.map((c, i) => (<ScrollReveal key={c.client} delay={i * 0.1}><div className="service-card-dark h-full"><h4 className="font-heading font-semibold mb-2" style={{ color: "hsl(0 0% 90%)" }}>{c.client}</h4><p className="text-sm mb-4" style={{ color: "hsl(192 91% 52%)" }}>{c.result}</p><p className="text-xs" style={{ color: "hsl(0 0% 50%)" }}>Tech: {c.tech}</p></div></ScrollReveal>))}</div></div></section>
    <section className="relative py-20 overflow-hidden"><div className="absolute inset-0" style={{ background: "var(--gradient-primary)" }} /><div className="relative z-10 max-w-4xl mx-auto px-6 text-center"><ScrollReveal><h2 className="font-heading font-bold text-4xl mb-6" style={{ color: "hsl(0 0% 100%)" }}>Ready to Build on Blockchain?</h2><Link to="/contact" className="inline-flex items-center justify-center rounded-lg px-8 py-4 font-heading font-semibold text-sm transition-all duration-300" style={{ background: "hsl(0 0% 100%)", color: "hsl(234 89% 54%)" }}>Schedule a Consultation <ArrowRight size={16} className="ml-2" /></Link></ScrollReveal></div></section>
  </Layout>
);

export default BlockchainTrading;
