import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Brain, BarChart3, Network, Shield, Palette, Rocket, Users, Clock, HeartHandshake } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Technologies — AI/ML, Data, Networking, Security & UX",
    description:
      "Deep expertise across AI and ML, data and analytics, network engineering, cybersecurity, and UI/UX—modern stacks for enterprise-grade delivery.",
    path: "/technologies",
  });
}

const technologies = [
  { title: "AI / ML", href: "/technologies/ai-ml", icon: Brain, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop", description: "Intelligent systems powered by deep learning, NLP, and computer vision." },
  { title: "Data & Analytics", href: "/technologies/data-analytics", icon: BarChart3, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop", description: "Real-time insights through modern data engineering and BI platforms." },
  { title: "Network Engineering", href: "/technologies/network", icon: Network, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop", description: "Resilient infrastructure from SD-WAN to cloud-native networking." },
  { title: "Cyber Security", href: "/technologies/cybersecurity", icon: Shield, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop", description: "Defense-in-depth strategies, penetration testing, and zero-trust architecture." },
  { title: "UI / UX Design", href: "/technologies/ui-ux", icon: Palette, image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop", description: "Research-driven design systems that delight users and drive outcomes." },
];

const stats = [
  { label: "Projects", value: "50+", icon: Rocket },
  { label: "Technologies", value: "15+", icon: Users },
  { label: "SLA", value: "99.9%", icon: Clock },
  { label: "Support", value: "24/7", icon: HeartHandshake },
];

export default function TechnologiesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-[#a855f7]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-[#7c3aed]/10 blur-[80px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">Our Technology Stack</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Technologies</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">We leverage cutting-edge technologies to build solutions that scale, perform, and endure.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <AnimatedSection key={tech.title} delay={i * 100}>
              <a href={tech.href} className="group block bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-[#a855f7]/30 hover:-translate-y-1 transition-all duration-500">
                <div className="h-48 overflow-hidden">
                  <img src={tech.image} alt={tech.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center">
                      <tech.icon className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <h3 className="text-lg font-semibold">{tech.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{tech.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-[#a855f7] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Expertise Metrics */}
      <section className="border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-14">Our Expertise</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-5 h-5 text-[#a855f7]" />
                  </div>
                  <p className="text-3xl font-bold mb-1">{s.value}</p>
                  <p className="text-sm text-gray-400">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build with us?</h2>
            <p className="text-gray-400 mb-8">Let&apos;s discuss how our technology expertise can accelerate your business goals.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
