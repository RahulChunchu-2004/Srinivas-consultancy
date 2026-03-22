import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Brain, Database, Shield, Network, Palette, Code2, Monitor, TrendingUp, Lightbulb, Heart } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers — Join TelivAI Solutions",
    description:
      "Open roles in AI/ML, data engineering, networking, cybersecurity, design, and software development. Learn our culture and hiring process in Hyderabad and beyond.",
    path: "/careers",
  });
}

const positions = [
  { icon: Brain, title: "AI/ML Engineer", location: "Hyderabad", type: "Full-time", href: "/careers/ai-ml-engineer", description: "Design intelligent systems using machine learning, NLP, and computer vision to solve complex problems at scale." },
  { icon: Database, title: "Data Engineer", location: "Hyderabad", type: "Full-time", href: "/careers/data-engineer", description: "Build scalable data pipelines, warehouses, and real-time processing systems that power critical business decisions." },
  { icon: Network, title: "Network Engineer", location: "Hyderabad", type: "Full-time", href: "/careers/network-engineer", description: "Architect and manage robust network infrastructure across cloud and on-premise environments." },
  { icon: Shield, title: "Cyber Security Engineer", location: "Remote", type: "Full-time", href: "/careers/cybersecurity-engineer", description: "Protect our systems through penetration testing, incident response, and comprehensive security audits." },
  { icon: Palette, title: "UI/UX Designer", location: "Hyderabad", type: "Full-time", href: "/careers/ui-ux-designer", description: "Craft intuitive user experiences through research, wireframes, and modern design systems." },
  { icon: Code2, title: "Java Developer", location: "Hyderabad", type: "Full-time", href: "/careers/java-developer", description: "Develop enterprise applications with Spring Boot, microservices, and high-performance REST APIs." },
  { icon: Monitor, title: "Software Developer", location: "Remote", type: "Full-time", href: "/careers/software-developer", description: "Build full-stack applications using React, Node.js, and modern development practices." },
];

const benefits = [
  { icon: TrendingUp, title: "Growth Opportunities", description: "Clear career paths, mentorship programs, and leadership tracks to help you reach your full potential." },
  { icon: Lightbulb, title: "Cutting-Edge Tech", description: "Work with the latest technologies, frameworks, and tools—from AI/ML to cloud-native architectures." },
  { icon: Heart, title: "Collaborative Culture", description: "A supportive, inclusive environment where diverse perspectives are valued and every voice matters." },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80&auto=format&fit=crop",
];

export default function CareersPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="pt-32 pb-16 px-6 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Join Our Team</h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">We're looking for passionate people who want to make an impact. Explore open roles and find where you belong.</p>
        </section>
        <div className="relative w-full max-w-6xl mx-auto px-6 mb-16 rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" alt="Team collaboration" className="w-full h-[340px] object-cover rounded-2xl" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl mx-6">
            <p className="text-2xl md:text-3xl font-semibold text-white">Build the future with us</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Open Positions</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((pos, i) => (
            <AnimatedSection key={pos.title} delay={i * 80}>
              <a href={pos.href} className="group block bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-[#a855f7]/30 transition-all">
                <pos.icon className="w-8 h-8 text-[#a855f7] mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#a855f7] transition-colors">{pos.title}</h3>
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-400">{pos.location}</span>
                  <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-400">{pos.type}</span>
                </div>
                <p className="text-sm text-zinc-400 mb-4">{pos.description}</p>
                <span className="inline-flex items-center text-sm text-[#a855f7] font-medium">View Details <ArrowUpRight className="w-4 h-4 ml-1" /></span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Work With Us</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 100}>
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-8 text-center">
                <b.icon className="w-10 h-10 text-[#a855f7] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-zinc-400">{b.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Culture Image Strip */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-3 gap-4">
          {cultureImages.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <img src={src} alt={`Team culture ${i + 1}`} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-zinc-400 mb-6">We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future openings.</p>
          <a href="/contact" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Get In Touch</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
