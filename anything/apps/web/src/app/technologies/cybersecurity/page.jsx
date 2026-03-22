import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Search, ClipboardCheck, AlertTriangle, Lock, FileCheck, Radar, Check, ArrowRight } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Cyber Security — Pentesting, Zero Trust & Incident Response",
    description:
      "Penetration testing, audits, SOC workflows, zero-trust architecture, and compliance-aligned security engineering.",
    path: "/technologies/cybersecurity",
  });
}

const capabilities = [
  { icon: Search, title: "Penetration Testing", description: "Ethical hacking and red-team exercises to uncover vulnerabilities before attackers do." },
  { icon: ClipboardCheck, title: "Security Audits", description: "Comprehensive assessments of your infrastructure, code, and processes against industry benchmarks." },
  { icon: AlertTriangle, title: "Incident Response", description: "Rapid containment, forensic analysis, and recovery playbooks for security events." },
  { icon: Lock, title: "Zero Trust Architecture", description: "Identity-centric access control with continuous verification at every network boundary." },
  { icon: FileCheck, title: "Compliance (SOC2/ISO)", description: "Gap analysis, remediation guidance, and audit-readiness for major compliance frameworks." },
  { icon: Radar, title: "Threat Intelligence", description: "Proactive monitoring of threat feeds, dark-web signals, and attack-surface changes." },
];

const techStack = ["Splunk", "CrowdStrike", "Nessus", "Metasploit", "AWS Security Hub", "Vault", "Snort", "OWASP"];

export default function CybersecurityPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-10 left-14 w-40 h-40 bg-[#a855f7]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-16 right-20 w-48 h-48 bg-[#7c3aed]/10 blur-[80px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">Technology</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Cyber Security</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Protecting your digital assets with defense-in-depth strategies and proactive threat management.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop" alt="Cyber Security" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-400 mb-4">We protect your digital assets with comprehensive security solutions. From threat detection to compliance, our security engineers build defense-in-depth strategies.</p>
            <p className="text-gray-400 mb-6">Our approach combines automated scanning, manual testing, and continuous monitoring for complete coverage.</p>
            <ul className="space-y-3">
              {["Continuous vulnerability assessment", "Regulatory compliance readiness", "Managed detection & response"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#a855f7] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-14">Capabilities</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 100}>
              <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-[#a855f7]/30 hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-[#a855f7]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-400">{cap.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-10">Tools &amp; Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">{t}</span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure your business today</h2>
            <p className="text-gray-400 mb-8">Our security experts are ready to assess, protect, and monitor your entire digital surface.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
