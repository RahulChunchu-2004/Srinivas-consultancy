import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Landmark, UserCog, Truck } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "ERP System — Finance, HR, Inventory & Operations",
    description:
      "Unify finance, HR, inventory, and supply chain on TelivAI’s ERP—real-time reporting, compliance, and operational visibility for enterprises.",
    path: "/products/erp",
  });
}

const features = [
  {
    icon: Landmark,
    title: "Financial Management",
    description: "Real-time accounting, budgeting, and financial reporting with multi-currency support. Automate reconciliations, track cash flow, and ensure regulatory compliance effortlessly.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: UserCog,
    title: "HR & Payroll",
    description: "End-to-end employee lifecycle management — from recruitment and onboarding to payroll processing, leave tracking, and performance reviews in a unified platform.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Truck,
    title: "Supply Chain Intelligence",
    description: "End-to-end visibility across your entire supply chain. Predict demand, optimize inventory levels, and coordinate logistics with AI-driven recommendations.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop",
  },
];

const stats = [
  { value: "40%", label: "Cost Reduction" },
  { value: "200+", label: "Modules" },
  { value: "Real-time", label: "Sync" },
  { value: "Enterprise", label: "Grade" },
];

export default function ERPPage() {
  return (
    <PageLayout>
      {/* Split Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">ERP System</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">ERP System</h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Unified enterprise resource planning that connects finance, HR, inventory, and operations into one seamless system.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#a855f7]/25 transition-colors">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop" alt="ERP System" className="w-full h-full object-cover" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unify Your Enterprise Operations</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Connect every department with a single source of truth and eliminate data silos for good.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors">
              Request a Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
