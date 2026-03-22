import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Network, Wifi, Cloud, ShieldCheck, Activity, RotateCcw, Check, ArrowRight } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Network Engineering — Architecture, SD-WAN & Cloud Networking",
    description:
      "Enterprise network design, SD-WAN, cloud connectivity, automation, monitoring, and disaster recovery from TelivAI.",
    path: "/technologies/network",
  });
}

const capabilities = [
  { icon: Network, title: "Network Architecture", description: "End-to-end network design with high availability, redundancy, and future-proof topology." },
  { icon: Wifi, title: "SD-WAN", description: "Software-defined wide-area networking for agile, cost-effective branch connectivity." },
  { icon: Cloud, title: "Cloud Networking", description: "Multi-cloud networking with VPC peering, transit gateways, and hybrid connectivity." },
  { icon: ShieldCheck, title: "Network Security", description: "Firewalls, micro-segmentation, and intrusion detection integrated into every layer." },
  { icon: Activity, title: "Performance Monitoring", description: "Real-time observability, traffic analysis, and proactive capacity planning." },
  { icon: RotateCcw, title: "Disaster Recovery", description: "Automated failover, geo-redundant topologies, and tested DR runbooks." },
];

const techStack = ["Cisco", "Juniper", "AWS VPC", "Azure vNet", "Palo Alto", "Wireshark", "Terraform", "Ansible"];

export default function NetworkPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-44 h-44 bg-[#a855f7]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-12 left-16 w-32 h-32 bg-[#7c3aed]/10 blur-[80px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">Technology</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Network Engineering</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Designing resilient infrastructure that keeps your enterprise connected, everywhere.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop" alt="Network Engineering" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-400 mb-4">We design, build, and manage robust network infrastructure that forms the backbone of modern enterprise operations. From SD-WAN to cloud networking, we ensure seamless connectivity.</p>
            <p className="text-gray-400 mb-6">Our engineers bring deep vendor expertise and cloud-native networking skills to every engagement.</p>
            <ul className="space-y-3">
              {["Multi-cloud network design", "Zero-downtime migration strategies", "24/7 network operations support"].map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build a network that never sleeps</h2>
            <p className="text-gray-400 mb-8">Talk to our network engineers about designing infrastructure that scales with you.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
