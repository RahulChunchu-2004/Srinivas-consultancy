import { ArrowUpRight, PackageSearch, Sparkles, TrendingUp, Layers, Users, Truck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Retail & E-Commerce — Personalization, Inventory & Omnichannel",
    description:
      "Inventory AI, personalization, demand forecasting, unified commerce, and customer intelligence for modern retail brands.",
    path: "/industries/retail",
  });
}

export default function Retail() {
  const features = [
    { icon: <PackageSearch size={24} />, title: "Inventory AI", desc: "AI-driven inventory management with demand prediction, automated restocking, and warehouse optimization." },
    { icon: <Sparkles size={24} />, title: "Personalization Engine", desc: "Real-time product recommendations and personalized shopping experiences powered by machine learning." },
    { icon: <TrendingUp size={24} />, title: "Demand Forecasting", desc: "Predict consumer demand patterns with advanced analytics to optimize pricing, promotions, and stock levels." },
    { icon: <Layers size={24} />, title: "Omnichannel Solutions", desc: "Unified commerce platforms that seamlessly connect in-store, online, mobile, and social selling channels." },
    { icon: <Users size={24} />, title: "Customer Analytics", desc: "Deep customer insights through behavioral analytics, segmentation, and lifetime value prediction models." },
    { icon: <Truck size={24} />, title: "Supply Chain AI", desc: "Intelligent supply chain orchestration with route optimization, vendor management, and real-time tracking." },
  ];

  return (
    <PageLayout>
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-6">Retail &amp; E-Commerce</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Retail & E-Commerce</h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Intelligent solutions that power modern retail experiences and drive customer loyalty.</p>
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
