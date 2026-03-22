import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Users, Brain, Smartphone, Globe, Code2, Zap, Trophy, Handshake } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "IT Services — Staffing, AI, Mobile, Web & Custom Software",
    description:
      "IT staffing, AI development, mobile and web engineering, and custom software from TelivAI Solutions—delivery-focused teams for enterprise and growth-stage companies.",
    path: "/services",
  });
}

const services = [
  {
    title: "IT Staffing & Consulting",
    desc: "Access top-tier talent and strategic consulting to scale your engineering teams with confidence.",
    icon: <Users size={22} />,
    href: "/services/staffing",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "AI Development",
    desc: "Custom machine learning models, NLP, computer vision, and intelligent automation solutions.",
    icon: <Brain size={22} />,
    href: "/services/ai-development",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications with exceptional user experiences.",
    icon: <Smartphone size={22} />,
    href: "/services/mobile-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Web Development",
    desc: "Full-stack web applications, responsive sites, and scalable e-commerce platforms.",
    icon: <Globe size={22} />,
    href: "/services/web-development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Custom Software",
    desc: "Enterprise-grade custom software tailored to your unique business workflows and goals.",
    icon: <Code2 size={22} />,
    href: "/services/custom-software",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
  },
];

const benefits = [
  { icon: <Zap size={24} />, title: "Rapid Delivery", desc: "We ship production-ready solutions in weeks, not months — without compromising quality." },
  { icon: <Trophy size={24} />, title: "Proven Quality", desc: "Battle-tested engineering practices with rigorous QA at every stage of development." },
  { icon: <Handshake size={24} />, title: "True Partnership", desc: "We embed with your team, align with your vision, and treat your goals as our own." },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a855f7]/15 rounded-full blur-[120px] -z-10" />
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#a855f7] mb-8">
            What We Do
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl mx-auto mb-6 tracking-tight leading-[1.1]">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            End-to-end technology solutions — from staffing and AI to mobile, web, and custom software development.
          </p>
        </AnimatedSection>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <a href={s.href} className="group block bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-[#a855f7]/30 transition-all duration-500 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a855f7]">{s.icon}</div>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-1 text-[#a855f7] text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why TelivAI Solutions */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6">Why Us</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why TelivAI Solutions</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We combine deep technical expertise with a client-first approach to deliver solutions that matter.</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div className="group bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:border-[#a855f7]/30 transition-all duration-500 h-full">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#a855f7] transition-colors mb-6">{b.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#a855f7]/20 via-zinc-900 to-black rounded-3xl border border-white/5 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#a855f7]/10 blur-[100px] -z-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Build Something Great?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">Let&apos;s discuss how we can bring your vision to life.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              Get in Touch <ArrowUpRight size={18} />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
