import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Contact, FileCheck2, PieChart } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Procurement & Purchase System — Vendors, POs & Spend",
    description:
      "Streamline sourcing, purchase orders, approvals, and spend analytics with TelivAI’s procurement platform built for control and speed.",
    path: "/products/procurement",
  });
}

const features = [
  {
    icon: Contact,
    title: "Vendor Management",
    description: "Centralized vendor profiles with performance tracking, compliance scoring, and contract management. Evaluate suppliers at a glance and build a reliable vendor network.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: FileCheck2,
    title: "Purchase Order Automation",
    description: "Streamlined PO creation, multi-level approval workflows, and automatic three-way matching. Reduce manual errors and accelerate procurement cycles dramatically.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: PieChart,
    title: "Spend Analytics",
    description: "Deep visibility into organizational spending with real-time dashboards, category breakdowns, and budget variance alerts that help you optimize every dollar.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
];

const stats = [
  { value: "30%", label: "Savings" },
  { value: "1000+", label: "Vendors" },
  { value: "Automated", label: "Approvals" },
  { value: "Real-time", label: "Tracking" },
];

export default function ProcurementPage() {
  return (
    <PageLayout>
      {/* Split Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">Procurement</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">Procurement System</h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              End-to-end procurement and purchase management — from vendor sourcing and purchase orders to budget tracking and spend analytics.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#a855f7]/25 transition-colors">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop" alt="Procurement System" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Alternating Features */}
      <section className="px-6 pb-24 max-w-6xl mx-auto space-y-24">
        {features.map((feature, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <AnimatedSection key={feature.title}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${!imageFirst ? "md:[direction:rtl]" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)] md:[direction:ltr]">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:[direction:ltr]">
                  <feature.icon className="w-10 h-10 text-[#a855f7] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </section>

      {/* Stats */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#a855f7] mb-1">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Take Control of Your Procurement</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Streamline purchasing, reduce costs, and gain full visibility into every transaction.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors">
              Request a Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
