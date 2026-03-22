import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Search, ShieldCheck, Repeat, Briefcase, UserCheck, Settings } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "IT Staffing & Consulting — Vetted Technical Talent",
    description:
      "Contract, contract-to-hire, and full-time IT staffing with rigorous vetting—scale engineering, cloud, and product teams with TelivAI.",
    path: "/services/staffing",
  });
}

const bentoItems = [
  { title: "Talent Sourcing", desc: "We tap into deep networks and AI-powered screening to find the exact technical talent your team needs.", large: true, image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop" },
  { title: "Vetting & Screening", desc: "Rigorous technical interviews, background checks, and culture-fit evaluations.", icon: <ShieldCheck size={24} /> },
  { title: "Flexible Engagement", desc: "Contract, contract-to-hire, or full-time placements tailored to your needs.", icon: <Repeat size={24} /> },
  { title: "Domain Expertise", desc: "Specialists across cloud, AI/ML, DevOps, full-stack, and more.", icon: <Briefcase size={24} /> },
  { title: "Onboarding Support", desc: "Seamless integration with your team's tools, processes, and culture.", icon: <UserCheck size={24} /> },
  { title: "Ongoing Management", desc: "Continuous performance tracking, feedback loops, and retention strategies that keep your team thriving.", large: true, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop" },
];

const steps = [
  { num: "01", title: "Requirements", desc: "We learn your tech stack, team culture, and hiring goals." },
  { num: "02", title: "Sourcing", desc: "AI-assisted search across our talent network for ideal matches." },
  { num: "03", title: "Screening", desc: "Multi-stage technical and behavioral assessments." },
  { num: "04", title: "Onboarding", desc: "Smooth handoff with ongoing support and performance tracking." },
];

export default function StaffingPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 rounded-full blur-[120px] -z-10" />
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-8">
            <Search size={14} /> Staffing & Consulting
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl mx-auto mb-6 tracking-tight leading-[1.1]">
            IT Staffing &amp; Consulting
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Build high-performing engineering teams with vetted talent and strategic IT consulting — fast and friction-free.
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
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80&auto=format&fit=crop" alt="Staffing showcase" className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
              <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed italic">
                &ldquo;TelivAI placed three senior engineers on our team in under two weeks. They understood our needs from day one.&rdquo;
              </p>
              <p className="text-[#a855f7] text-sm mt-4 font-medium">— VP Engineering, Fortune 500 Client</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#a855f7]/20 via-zinc-900 to-black rounded-3xl border border-white/5 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Scale Your Team?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">Tell us what you need — we&apos;ll find the perfect fit.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Get Started <ArrowUpRight size={18} />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
