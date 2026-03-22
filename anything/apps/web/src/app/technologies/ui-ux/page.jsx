import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Palette, Users, PenTool, Layers, MousePointerClick, FlaskConical, Component, Check, ArrowRight } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "UI/UX Design — Research, Design Systems & Usability",
    description:
      "User research, prototyping, visual design, interaction design, usability testing, and scalable design systems.",
    path: "/technologies/ui-ux",
  });
}

const capabilities = [
  { icon: Users, title: "User Research", description: "Interviews, surveys, and analytics that uncover real user needs and pain points." },
  { icon: PenTool, title: "Wireframing & Prototyping", description: "Low- and high-fidelity prototypes to validate concepts before a single line of code." },
  { icon: Layers, title: "Visual Design", description: "Brand-aligned interfaces with polished typography, color, and spatial hierarchy." },
  { icon: MousePointerClick, title: "Interaction Design", description: "Micro-interactions, transitions, and motion that make interfaces feel alive." },
  { icon: FlaskConical, title: "Usability Testing", description: "Moderated and unmoderated tests that surface friction and drive iterative improvement." },
  { icon: Component, title: "Design Systems", description: "Scalable component libraries with tokens, guidelines, and developer handoff docs." },
];

const techStack = ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "Storybook", "Tailwind CSS", "React"];

export default function UiUxPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-24 left-8 w-48 h-48 bg-[#a855f7]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-6 right-14 w-36 h-36 bg-[#7c3aed]/10 blur-[80px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">Technology</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">UI/UX Design</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Crafting digital experiences that delight users and drive measurable business outcomes.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format&fit=crop" alt="UI/UX Design" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-400 mb-4">We craft digital experiences that delight users and drive business outcomes. Our design process is rooted in research, validated through testing, and refined for pixel-perfect execution.</p>
            <p className="text-gray-400 mb-6">From discovery workshops to production-ready design systems, we embed design thinking into every stage of the product lifecycle.</p>
            <ul className="space-y-3">
              {["Research-driven design decisions", "Accessible, inclusive interfaces", "Scalable design system delivery"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#a855f7] shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-14">Capabilities</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 100}>
              <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-[#a855f7]/30 hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-[#a855f7]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-400">{cap.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-10">Tools &amp; Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">{t}</span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design experiences that matter</h2>
            <p className="text-gray-400 mb-8">Partner with our design team to create products your users will love.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
