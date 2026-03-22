import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Kanban, MailCheck, TrendingUp } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "CRM Platform — Pipelines, Automation & Customer Insights",
    description:
      "TelivAI CRM: pipeline management, email automation, and revenue analytics—nurture leads and grow accounts with a unified customer view.",
    path: "/products/crm",
  });
}

const features = [
  {
    icon: Kanban,
    title: "Pipeline Management",
    description: "Visual pipeline tracking with intuitive drag-and-drop stages. Monitor deals in real time, set custom milestones, and never let an opportunity slip through the cracks.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: MailCheck,
    title: "Automated Follow-ups",
    description: "Smart email sequences that engage leads at the perfect moment. Set triggers, personalize at scale, and watch your conversion rates climb without manual effort.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Advanced Reporting",
    description: "Real-time dashboards and revenue forecasts powered by AI. Track team performance, pipeline velocity, and customer health scores in a single view.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
];

const stats = [
  { value: "3x", label: "Lead Conversion" },
  { value: "10K+", label: "Active Users" },
  { value: "50+", label: "Integrations" },
  { value: "99.5%", label: "Uptime" },
];

export default function CRMPage() {
  return (
    <PageLayout>
      {/* Split Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">CRM Platform</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">CRM Platform</h1>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              A powerful customer relationship management platform to nurture leads, manage pipelines, and build lasting client relationships.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#a855f7]/25 transition-colors">
              Get Started <ArrowUpRight className="w-4 h-4" />
            </a>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop" alt="CRM Platform" className="w-full h-full object-cover" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supercharge Your Sales Pipeline</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Join thousands of teams closing more deals with our intelligent CRM platform.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors">
              Request a Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
