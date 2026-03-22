import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Code2, Cloud, RefreshCw, Link2, ShieldCheck, HeartHandshake } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Custom Software Development — Enterprise & Cloud-Native",
    description:
      "Bespoke enterprise applications, microservices, integrations, and legacy modernization on AWS, Azure, or GCP with TelivAI.",
    path: "/services/custom-software",
  });
}

const bentoItems = [
  { title: "Enterprise Apps", desc: "Robust, scalable applications designed for complex business workflows and high-volume operations.", large: true, image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop" },
  { title: "Cloud-Native Solutions", desc: "Microservices, containers, and serverless architectures on AWS, Azure, or GCP.", icon: <Cloud size={24} /> },
  { title: "Legacy Modernization", desc: "Migrate aging systems to modern stacks without disrupting operations.", icon: <RefreshCw size={24} /> },
  { title: "Integration Services", desc: "Connect your tools with custom APIs, middleware, and data pipelines.", icon: <Link2 size={24} /> },
  { title: "Quality Assurance", desc: "Automated testing, load testing, and security audits at every stage.", icon: <ShieldCheck size={24} /> },
  { title: "Ongoing Support", desc: "Dedicated maintenance, feature updates, SLA-backed support, and proactive monitoring to keep your software evolving.", large: true, image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop" },
];

const steps = [
  { num: "01", title: "Analysis", desc: "Deep-dive into your requirements, constraints, and business goals." },
  { num: "02", title: "Architecture", desc: "System design, tech stack selection, and infrastructure planning." },
  { num: "03", title: "Build", desc: "Iterative development with sprint demos and continuous feedback." },
  { num: "04", title: "Evolve", desc: "Production deployment, monitoring, and continuous improvement." },
];

export default function CustomSoftwarePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 rounded-full blur-[120px] -z-10" />
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-8">
            <Code2 size={14} /> Custom Software
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl mx-auto mb-6 tracking-tight leading-[1.1]">
            Custom Software Development
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade software engineered for your unique workflows — from cloud-native platforms to legacy modernization.
          </p>
        </AnimatedSection>
      </section>

      {/* Bento Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What We Offer</h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-4 gap-4">
          {bentoItems.map((item, i) => (
            <AnimatedSection key={i} delay={i * 80} className={item.large ? "md:col-span-2" : ""}>
              {item.large ? (
                <div className="relative rounded-2xl overflow-hidden h-64 group">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 h-full hover:border-[#a855f7]/30 transition-all duration-500">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a855f7] mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Our Process</h2>
        </AnimatedSection>
        <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/50 to-transparent" />
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150} className="flex-1 text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#a855f7] text-white font-bold text-sm flex items-center justify-center mx-auto mb-4 relative z-10">{s.num}</div>
              <h3 className="text-white font-semibold mb-1">{s.title}</h3>
              <p className="text-gray-400 text-sm max-w-[200px] mx-auto">{s.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop" alt="Custom software showcase" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic">
                &ldquo;TelivAI replaced our legacy ERP with a modern cloud-native platform — zero downtime, 50% faster workflows.&rdquo;
              </p>
              <p className="text-[#a855f7] text-sm mt-4 font-medium">— COO, Enterprise Logistics Company</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#a855f7]/20 via-zinc-900 to-black rounded-3xl border border-white/5 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Build Software That Grows With You</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">Custom solutions designed for today — architected for tomorrow.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Let&apos;s Talk <ArrowUpRight size={18} />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
