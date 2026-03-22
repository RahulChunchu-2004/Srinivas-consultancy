import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Check, MapPin, Clock, Code2, DollarSign, HeartPulse, BookOpen, Users } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers: Java Developer — Spring Boot, Microservices & APIs",
    description:
      "Enterprise Java with Spring Boot, cloud-native patterns, and Kafka. TelivAI builds mission-critical backends for global clients.",
    path: "/careers/java-developer",
  });
}

const responsibilities = [
  "Design and develop enterprise-grade microservices using Spring Boot, Spring Cloud, and Java 17+",
  "Build and maintain RESTful APIs and event-driven architectures with Kafka and RabbitMQ",
  "Write comprehensive unit and integration tests achieving 80%+ code coverage with JUnit and Mockito",
  "Optimize application performance through profiling, caching strategies, and database query tuning",
  "Participate in code reviews, architectural discussions, and agile ceremonies to maintain high engineering standards",
  "Implement CI/CD pipelines and containerize services with Docker and Kubernetes for reliable deployments",
];

const requirements = [
  "3+ years of professional Java development experience with Spring Boot and the Spring ecosystem",
  "Strong understanding of OOP principles, design patterns, and SOLID architecture practices",
  "Experience with relational databases (PostgreSQL, MySQL) and ORM frameworks like Hibernate/JPA",
  "Familiarity with message brokers (Kafka, RabbitMQ) and asynchronous processing patterns",
  "Working knowledge of Docker, Kubernetes, and cloud platforms (AWS, GCP, or Azure)",
  "Excellent collaboration skills with experience working in cross-functional agile teams",
];

const perks = [
  { icon: DollarSign, title: "Competitive Salary", description: "$100K – $155K base, plus equity and quarterly performance bonuses" },
  { icon: HeartPulse, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage for you and your family" },
  { icon: BookOpen, title: "Learning Budget", description: "$3,000 annual stipend for conferences, certifications, and online courses" },
  { icon: Users, title: "Team Events", description: "Regular hackathons, tech talks, and team off-sites to foster collaboration" },
];

export default function JavaDeveloperPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative pt-28 pb-20 px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative max-w-5xl mx-auto">
            <a href="/careers" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</a>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Java Developer</h1>
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
          <p className="text-zinc-400 leading-relaxed">As a Java Developer, you will develop enterprise applications with Spring Boot, microservices, and REST APIs that serve millions of requests daily. You'll work on greenfield projects and evolve existing systems—designing for scalability, resilience, and maintainability. From distributed caching to event-driven pipelines, you'll tackle challenging problems with a team that values clean code and pragmatic engineering.</p>
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
          <p className="text-zinc-400 mb-6">Take the next step in your career and join our Java engineering team.</p>
          <a href="/careers/hiring-process" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Apply Now</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
