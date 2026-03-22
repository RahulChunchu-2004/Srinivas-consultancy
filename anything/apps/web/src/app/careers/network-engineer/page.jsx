import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Check, MapPin, Clock, Network, DollarSign, HeartPulse, BookOpen, Shield } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers: Network Engineer — Enterprise LAN/WAN & Cloud",
    description:
      "Architect and operate enterprise networks, SD-WAN, and security appliances. Monitoring, automation, and on-call excellence at TelivAI.",
    path: "/careers/network-engineer",
  });
}

const responsibilities = [
  "Design, implement, and maintain enterprise LAN/WAN architectures across multiple data centers and offices",
  "Configure and manage network devices including routers, switches, firewalls, and load balancers",
  "Monitor network performance using tools like Nagios, PRTG, or Datadog and resolve issues proactively",
  "Plan and execute network migrations, upgrades, and capacity expansions with zero-downtime strategies",
  "Implement network security policies, VPNs, and segmentation to protect against unauthorized access",
  "Collaborate with cloud teams to design hybrid connectivity solutions using AWS Direct Connect or Azure ExpressRoute",
];

const requirements = [
  "3+ years of experience in network engineering with enterprise-grade infrastructure",
  "Strong knowledge of TCP/IP, BGP, OSPF, VLAN, and SD-WAN technologies",
  "Hands-on experience with Cisco, Juniper, or Palo Alto networking equipment",
  "Familiarity with cloud networking (AWS VPC, Azure VNet, GCP networking) and infrastructure as code",
  "Industry certifications such as CCNA, CCNP, or equivalent are highly preferred",
  "Strong troubleshooting skills with the ability to diagnose complex network issues under pressure",
];

const perks = [
  { icon: DollarSign, title: "Competitive Salary", description: "$100K – $150K base, plus equity and annual bonuses" },
  { icon: HeartPulse, title: "Health Insurance", description: "Comprehensive medical, dental, and vision plans for you and your family" },
  { icon: BookOpen, title: "Certification Support", description: "Full sponsorship for industry certifications and training programs" },
  { icon: Shield, title: "Job Security", description: "Stable, long-term role in a growing infrastructure team with clear advancement paths" },
];

export default function NetworkEngineerPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative pt-28 pb-20 px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative max-w-5xl mx-auto">
            <a href="/careers" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</a>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Network Engineer</h1>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><MapPin className="w-3 h-3 mr-1" />Hyderabad</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><Clock className="w-3 h-3 mr-1" />Full-time</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About the Role */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">About the Role</h2>
          <p className="text-zinc-400 leading-relaxed">As a Network Engineer, you will architect and manage robust network infrastructure across cloud and on-premise environments. From designing high-availability topologies to implementing zero-trust security models, you'll ensure our systems are fast, reliable, and secure. You'll partner with DevOps, security, and platform teams to build the connectivity backbone that powers everything we do.</p>
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
          <p className="text-zinc-400 mb-6">Take the next step in your career and join our network engineering team.</p>
          <a href="/careers/hiring-process" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Apply Now</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
