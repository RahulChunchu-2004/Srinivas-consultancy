import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Check, MapPin, Clock, Palette, DollarSign, HeartPulse, BookOpen, Coffee } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers: UI/UX Designer — Research, Systems & Product Design",
    description:
      "Own research through handoff: flows, prototypes, design systems, and accessibility. Figma-first product design at TelivAI.",
    path: "/careers/ui-ux-designer",
  });
}

const responsibilities = [
  "Conduct user research including interviews, surveys, and usability testing to uncover pain points and opportunities",
  "Create wireframes, prototypes, and high-fidelity mockups using Figma or Sketch for web and mobile products",
  "Design and maintain a scalable design system with reusable components, tokens, and accessibility guidelines",
  "Collaborate with product managers and developers to translate business requirements into intuitive user flows",
  "Analyze user behavior data and A/B test results to iterate on designs and improve conversion metrics",
  "Champion accessibility standards (WCAG 2.1 AA) and inclusive design principles across all product surfaces",
];

const requirements = [
  "3+ years of professional UI/UX design experience with a strong portfolio of shipped digital products",
  "Expert proficiency in Figma, including auto-layout, components, variants, and prototyping features",
  "Solid understanding of user-centered design principles, information architecture, and interaction patterns",
  "Experience conducting and synthesizing qualitative and quantitative user research",
  "Working knowledge of HTML/CSS and front-end constraints to design feasible, developer-friendly solutions",
  "Strong visual design sense with attention to typography, color theory, spacing, and micro-interactions",
];

const perks = [
  { icon: DollarSign, title: "Competitive Salary", description: "$90K – $140K base, plus equity and design excellence bonuses" },
  { icon: HeartPulse, title: "Health Insurance", description: "Full medical, dental, and vision coverage for you and your family" },
  { icon: BookOpen, title: "Learning Budget", description: "$2,500 annual stipend for design conferences, tools, and courses" },
  { icon: Coffee, title: "Creative Fridays", description: "Dedicated time each week for exploration, side projects, and design experiments" },
];

export default function UiUxDesignerPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative pt-28 pb-20 px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="relative max-w-5xl mx-auto">
            <a href="/careers" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</a>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">UI/UX Designer</h1>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><MapPin className="w-3 h-3 mr-1" />Hyderabad</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><Clock className="w-3 h-3 mr-1" />Full-time</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About the Role */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">About the Role</h2>
          <p className="text-zinc-400 leading-relaxed">As a UI/UX Designer, you will craft intuitive user experiences through deep research, wireframing, and modern design systems. You'll own the end-to-end design process—from discovery and ideation to pixel-perfect handoff—ensuring every interaction feels seamless and delightful. Your designs will directly shape how thousands of users experience our products every day.</p>
        </div>
      </AnimatedSection>

      {/* Responsibilities & Requirements */}
      <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6">Key Responsibilities</h2>
          <ul className="space-y-4">
            {responsibilities.map((r, i) => (
              <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed"><Check className="w-5 h-5 text-[#a855f7] shrink-0 mt-0.5" />{r}</li>
            ))}
          </ul>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h2 className="text-2xl font-bold mb-6">Requirements</h2>
          <ul className="space-y-4">
            {requirements.map((r, i) => (
              <li key={i} className="flex gap-3 text-zinc-400 text-sm leading-relaxed"><Check className="w-5 h-5 text-[#a855f7] shrink-0 mt-0.5" />{r}</li>
            ))}
          </ul>
        </AnimatedSection>
      </section>

      {/* Perks */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <AnimatedSection><h2 className="text-2xl font-bold mb-8 text-center">What We Offer</h2></AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-6">
          {perks.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 80}>
              <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
                <p.icon className="w-8 h-8 text-[#a855f7] mb-3" />
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team Image */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 pb-16">
        <div className="relative rounded-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" alt="Our team" className="w-full h-[300px] object-cover" />
          <div className="absolute inset-0 bg-background/55 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-semibold">Join a team that values innovation</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Apply CTA */}
      <AnimatedSection className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-zinc-400 mb-6">Take the next step in your career and join our design team.</p>
          <a href="/careers/hiring-process#enrollment" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Enroll Now</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
