import { ArrowUpRight, Laptop, Cloud, GitBranch, RefreshCw, BrainCircuit, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "IT & Engineering Solutions — Cloud, DevOps & Security",
    description:
      "Digital transformation, cloud migration, DevOps, AI integration, and secure SDLC for technology and engineering organizations.",
    path: "/industries/it-engineering",
  });
}

export default function ITEngineering() {
  const features = [
    { icon: <Laptop size={24} />, title: "Digital Transformation", desc: "Modernize legacy systems and business processes with cutting-edge digital strategies that drive efficiency and innovation." },
    { icon: <Cloud size={24} />, title: "Cloud Migration", desc: "Seamlessly migrate infrastructure to AWS, Azure, or GCP with zero-downtime strategies and optimized cost management." },
    { icon: <GitBranch size={24} />, title: "DevOps Automation", desc: "Implement CI/CD pipelines, infrastructure as code, and automated testing for faster, more reliable deployments." },
    { icon: <RefreshCw size={24} />, title: "Software Modernization", desc: "Transform monolithic applications into scalable microservices with modern frameworks and cloud-native architectures." },
    { icon: <BrainCircuit size={24} />, title: "AI Integration", desc: "Embed intelligent automation and machine learning capabilities into your existing technology stack." },
    { icon: <ShieldCheck size={24} />, title: "Quality Engineering", desc: "End-to-end quality assurance with automated testing frameworks, performance testing, and security validation." },
  ];

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">IT &amp; Engineering</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">IT & Engineering</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Comprehensive technology solutions to accelerate your digital evolution and engineering excellence.</p>
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
