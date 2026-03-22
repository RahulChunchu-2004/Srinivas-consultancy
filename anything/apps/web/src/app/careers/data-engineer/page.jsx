import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Check, MapPin, Clock, Database, DollarSign, HeartPulse, BookOpen, Wifi } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers: Data Engineer — Pipelines, Warehousing & Streaming",
    description:
      "Design ETL/ELT, warehouses, and real-time data systems with TelivAI. Kafka, Spark, dbt, and cloud data stacks.",
    path: "/careers/data-engineer",
  });
}

const responsibilities = [
  "Design and maintain scalable ETL/ELT pipelines that process terabytes of data daily with high reliability",
  "Architect data warehouse schemas optimized for analytics, reporting, and machine learning workloads",
  "Build real-time streaming solutions using Kafka, Spark Streaming, or Flink for event-driven architectures",
  "Implement data quality frameworks including validation, monitoring, and anomaly detection systems",
  "Optimize query performance and storage costs across cloud data platforms and distributed databases",
  "Create comprehensive documentation, data catalogs, and lineage tracking for all data assets",
];

const requirements = [
  "3+ years of professional experience in data engineering or a closely related data-intensive role",
  "Advanced SQL skills and strong proficiency in Python for data processing and automation",
  "Hands-on experience with Apache Spark, Airflow, or equivalent orchestration and processing tools",
  "Familiarity with cloud data services (AWS Redshift, GCP BigQuery, Azure Synapse, or Snowflake)",
  "Strong understanding of data modeling concepts including star schema, normalization, and slowly changing dimensions",
  "Analytical mindset with excellent problem-solving skills and attention to data accuracy",
];

const perks = [
  { icon: DollarSign, title: "Competitive Salary", description: "$110K – $160K base, plus equity and performance bonuses" },
  { icon: HeartPulse, title: "Health Insurance", description: "Full medical, dental, and vision plans for you and your dependents" },
  { icon: BookOpen, title: "Learning Budget", description: "$2,500 annual budget for certifications, courses, and conferences" },
  { icon: Wifi, title: "Remote Work", description: "Flexible hybrid model with the option to work fully remote" },
];

export default function DataEngineerPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative pt-28 pb-20 px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative max-w-5xl mx-auto">
            <a href="/careers" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</a>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Data Engineer</h1>
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
          <p className="text-zinc-400 leading-relaxed">As a Data Engineer, you will design and build scalable data pipelines, warehouses, and real-time processing systems that form the backbone of our analytics and AI capabilities. You'll collaborate with data scientists, analysts, and product teams to ensure high-quality, reliable data flows from dozens of sources into actionable insights. Your work will directly influence how the organization makes decisions at every level.</p>
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
          <p className="text-zinc-400 mb-6">Take the next step in your career and join our data engineering team.</p>
          <a href="/careers/hiring-process" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Apply Now</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
