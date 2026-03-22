import { ArrowUpRight, BrainCircuit, ClipboardList, Scale, Truck, FlaskRound, Eye } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Pharmaceutical & Life Sciences — R&D, Trials & Compliance",
    description:
      "AI-assisted discovery, clinical trial systems, regulatory compliance, supply chain traceability, and quality analytics for pharma.",
    path: "/industries/pharmaceutical",
  });
}

export default function Pharmaceutical() {
  const features = [
    { icon: <BrainCircuit size={24} />, title: "Drug Discovery AI", desc: "Accelerate drug discovery with AI-driven molecular analysis, target identification, and compound screening." },
    { icon: <ClipboardList size={24} />, title: "Clinical Trial Management", desc: "Streamline clinical trial operations with real-time data capture, patient recruitment, and regulatory tracking." },
    { icon: <Scale size={24} />, title: "Regulatory Compliance", desc: "Automate FDA, EMA, and global regulatory submissions with intelligent document management and audit trails." },
    { icon: <Truck size={24} />, title: "Supply Chain Optimization", desc: "Optimize pharmaceutical supply chains with demand forecasting, cold-chain monitoring, and distribution analytics." },
    { icon: <FlaskRound size={24} />, title: "Lab Automation", desc: "Digitize laboratory workflows with LIMS integration, automated data capture, and intelligent experiment tracking." },
    { icon: <Eye size={24} />, title: "Pharmacovigilance", desc: "AI-powered adverse event detection, signal management, and safety reporting for post-market surveillance." },
  ];

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">Pharmaceutical</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Pharmaceutical</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Accelerating drug development and ensuring compliance with intelligent pharma solutions.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 hover:border-[#a855f7]/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7] mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black rounded-[2rem] border border-white/5 p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">Let&apos;s discuss how we can help transform your business.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all">Contact Us <ArrowUpRight size={18} /></a>
        </div>
      </section>
    </PageLayout>
  );
}
