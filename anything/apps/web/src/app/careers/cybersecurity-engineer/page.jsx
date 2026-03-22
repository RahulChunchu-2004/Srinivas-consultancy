import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Check, MapPin, Clock, Shield, DollarSign, HeartPulse, BookOpen, Home } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers: Cyber Security Engineer — AppSec & Incident Response",
    description:
      "Pentesting, hardening, and IR at TelivAI. Help clients meet SOC 2 / ISO 27001 expectations with hands-on security engineering.",
    path: "/careers/cybersecurity-engineer",
  });
}

const responsibilities = [
  "Conduct penetration testing and vulnerability assessments across web applications, APIs, and infrastructure",
  "Lead incident response efforts including threat containment, forensic analysis, and post-mortem reporting",
  "Design and enforce security policies, access controls, and compliance frameworks (SOC 2, ISO 27001)",
  "Monitor SIEM platforms and threat intelligence feeds to detect and respond to emerging threats in real time",
  "Perform code reviews and security audits to identify vulnerabilities before they reach production",
  "Develop security awareness training programs and mentor engineering teams on secure coding practices",
];

const requirements = [
  "3+ years of experience in cybersecurity engineering, penetration testing, or security operations",
  "Proficiency with security tools such as Burp Suite, Metasploit, Nessus, or Splunk",
  "Strong understanding of OWASP Top 10, CVE databases, and common attack vectors",
  "Experience with cloud security (AWS Security Hub, Azure Sentinel, or GCP Security Command Center)",
  "Relevant certifications such as CISSP, CEH, OSCP, or CompTIA Security+ preferred",
  "Exceptional analytical thinking with the ability to stay calm and methodical during active incidents",
];

const perks = [
  { icon: DollarSign, title: "Competitive Salary", description: "$120K – $170K base, plus equity and threat-response bonuses" },
  { icon: HeartPulse, title: "Health Insurance", description: "Premium medical, dental, and vision coverage for you and your family" },
  { icon: BookOpen, title: "Certification Budget", description: "$4,000 annual stipend for security certifications and training" },
  { icon: Home, title: "Remote Flexibility", description: "Work from anywhere with occasional on-site collaboration sessions" },
];

export default function CybersecurityEngineerPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative pt-28 pb-20 px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative max-w-5xl mx-auto">
            <a href="/careers" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</a>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Cyber Security Engineer</h1>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><MapPin className="w-3 h-3 mr-1" />Remote</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><Clock className="w-3 h-3 mr-1" />Full-time</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About the Role */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">About the Role</h2>
          <p className="text-zinc-400 leading-relaxed">As a Cyber Security Engineer, you will protect our systems and customer data through penetration testing, incident response, and comprehensive security audits. You'll work at the intersection of engineering and risk management—building automated defenses, hardening infrastructure, and shaping the security culture across the organization. Your expertise will be the shield that keeps our platform and users safe.</p>
        </div>
      </AnimatedSection>

      {/* Responsibilities & Requirements */}
      <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6">Key Responsibilities</h2>
          <ul className="space-y-4">
            {responsibilities.map((r, i) => (
              <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed"><Check className="w-5 h-5 text-[#a855f7] shrink-0 mt-0.5" />{r}</li>
            ))}
          </ul>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h2 className="text-2xl font-bold mb-6">Requirements</h2>
          <ul className="space-y-4">
            {requirements.map((r, i) => (
              <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed"><Check className="w-5 h-5 text-[#a855f7] shrink-0 mt-0.5" />{r}</li>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      {/* Perks */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <AnimatedSection><h2 className="text-2xl font-bold mb-8 text-center">What We Offer</h2></AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
          {perks.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 80}>
              <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
                <p.icon className="w-8 h-8 text-[#a855f7] mb-3" />
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team Image */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 pb-16">
        <div className="relative rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" alt="Our team" className="w-full h-[300px] object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-semibold">Join a team that values innovation</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Apply CTA */}
      <AnimatedSection className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-zinc-400 mb-6">Take the next step in your career and join our cybersecurity team.</p>
          <a href="/careers/hiring-process" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Apply Now</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
