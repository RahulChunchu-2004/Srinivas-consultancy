import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Check, MapPin, Clock, Monitor, DollarSign, HeartPulse, BookOpen, Wifi } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers: Software Developer — Full-Stack React, Node & Quality",
    description:
      "Ship features across React, Next.js, and Node with strong testing culture. Join TelivAI’s product engineering team in Hyderabad.",
    path: "/careers/software-developer",
  });
}

const responsibilities = [
  "Build and ship full-stack features using React, Next.js, and Node.js across web and mobile platforms",
  "Design and implement RESTful and GraphQL APIs with proper authentication, rate limiting, and documentation",
  "Write clean, maintainable code with comprehensive test coverage using Jest, Cypress, and Playwright",
  "Collaborate with designers and product managers to translate Figma mockups into responsive, accessible interfaces",
  "Optimize front-end performance through code splitting, lazy loading, and efficient state management",
  "Contribute to infrastructure decisions including database schema design, caching layers, and deployment pipelines",
];

const requirements = [
  "3+ years of full-stack development experience with modern JavaScript/TypeScript frameworks",
  "Strong proficiency in React or Next.js for front-end and Node.js or Express for back-end development",
  "Experience with databases (PostgreSQL, MongoDB) and ORM tools (Prisma, Sequelize, or Mongoose)",
  "Familiarity with CI/CD workflows, Git branching strategies, and containerization with Docker",
  "Understanding of web fundamentals including HTTP, browser APIs, accessibility, and responsive design",
  "Self-motivated learner who thrives in fast-paced environments and enjoys tackling ambiguous problems",
];

const perks = [
  { icon: DollarSign, title: "Competitive Salary", description: "$95K – $150K base, plus equity and annual performance bonuses" },
  { icon: HeartPulse, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage for you and your family" },
  { icon: BookOpen, title: "Learning Budget", description: "$2,500 annual stipend for courses, conferences, and skill development" },
  { icon: Wifi, title: "Remote Work", description: "Fully remote position with optional access to co-working spaces worldwide" },
];

export default function SoftwareDeveloperPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative pt-28 pb-20 px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative max-w-5xl mx-auto">
            <a href="/careers" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</a>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Software Developer</h1>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><MapPin className="w-3 h-3 mr-1" />Remote</span>
              <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-zinc-300 inline-flex items-center"><Clock className="w-3 h-3 mr-1" />Full-time</span>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About the Role */}
      <AnimatedSection className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">About the Role</h2>
          <p className="text-zinc-400 leading-relaxed">As a Software Developer, you will build full-stack applications using React, Node.js, and modern development practices. From crafting pixel-perfect UIs to designing robust API layers, you'll own features end-to-end and ship code that reaches thousands of users. You'll work in a collaborative, agile environment where quality, speed, and user experience are equally valued.</p>
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
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-xl md:text-2xl font-semibold">Join a team that values innovation</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Apply CTA */}
      <AnimatedSection className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-[#a855f7]/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-zinc-400 mb-6">Take the next step in your career and join our software development team.</p>
          <a href="/careers/hiring-process" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Apply Now</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
