import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Database, Activity, PieChart, BarChart3, GitBranch, ShieldCheck, Check, ArrowRight } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Data & Analytics — Warehousing, Real-Time BI & Governance",
    description:
      "Data warehousing, streaming analytics, BI, ETL/ELT, and governance—modern data platforms engineered by TelivAI.",
    path: "/technologies/data-analytics",
  });
}

const capabilities = [
  { icon: Database, title: "Data Warehousing", description: "Scalable, cloud-native data warehouses optimized for analytical workloads and cost efficiency." },
  { icon: Activity, title: "Real-time Analytics", description: "Stream processing and event-driven architectures for instant insight delivery." },
  { icon: PieChart, title: "Business Intelligence", description: "Interactive dashboards and self-service BI platforms for every stakeholder." },
  { icon: BarChart3, title: "Data Visualization", description: "Clear, compelling visual storytelling that turns complex data into executive action." },
  { icon: GitBranch, title: "ETL Pipelines", description: "Reliable extract-transform-load pipelines that keep data fresh and trusted." },
  { icon: ShieldCheck, title: "Data Governance", description: "Policies, lineage tracking, and quality frameworks to ensure data integrity." },
];

const techStack = ["Apache Spark", "Snowflake", "Tableau", "Power BI", "Airflow", "dbt", "PostgreSQL", "Redshift"];

export default function DataAnalyticsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-12 left-20 w-48 h-48 bg-[#a855f7]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-8 right-12 w-36 h-36 bg-[#7c3aed]/10 blur-[80px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">Technology</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Data &amp; Analytics</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Turning raw data into strategic advantage through modern engineering and analytics.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop" alt="Data & Analytics" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-400 mb-4">We transform raw data into strategic insights. Our data engineering and analytics solutions enable real-time decision making, predictive forecasting, and deep business intelligence.</p>
            <p className="text-gray-400 mb-6">Whether you need a lakehouse, streaming analytics, or executive dashboards, we architect systems that scale with your ambitions.</p>
            <ul className="space-y-3">
              {["Cloud-native data platforms", "Real-time streaming pipelines", "Self-service analytics for every team"].map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock the power of your data</h2>
            <p className="text-gray-400 mb-8">Let our data engineers build the foundation for smarter, faster decisions.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
