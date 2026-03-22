import { ArrowUpRight, FileHeart, Video, BarChart3, ShieldCheck, Wifi, Workflow } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Healthcare Technology — EHR, Telemedicine & HIPAA-Ready Systems",
    description:
      "EHR integration, telemedicine, patient analytics, IoMT, and workflow automation—compliant healthcare software with TelivAI.",
    path: "/industries/healthcare",
  });
}

export default function Healthcare() {
  const features = [
    { icon: <FileHeart size={24} />, title: "EHR Integration", desc: "Seamless integration with Electronic Health Record systems for unified patient data management and interoperability." },
    { icon: <Video size={24} />, title: "Telemedicine Solutions", desc: "Build secure, HIPAA-compliant telehealth platforms with real-time video, scheduling, and remote monitoring." },
    { icon: <BarChart3 size={24} />, title: "Patient Data Analytics", desc: "Leverage advanced analytics to uncover patient insights, predict outcomes, and improve care quality." },
    { icon: <ShieldCheck size={24} />, title: "HIPAA Compliance", desc: "End-to-end compliance consulting and implementation to safeguard patient data and meet regulatory standards." },
    { icon: <Wifi size={24} />, title: "Medical IoT", desc: "Connect medical devices and wearables into a unified IoT ecosystem for real-time patient monitoring." },
    { icon: <Workflow size={24} />, title: "Clinical Workflows", desc: "Optimize clinical operations with intelligent workflow automation, reducing administrative burden on care teams." },
  ];

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">Healthcare</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Healthcare</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Transforming patient care with secure, compliant digital health solutions.</p>
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
