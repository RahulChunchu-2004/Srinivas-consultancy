import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Check, MapPin, Clock, Brain, DollarSign, HeartPulse, BookOpen, Timer } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Careers: AI/ML Engineer — Hyderabad, Full-Time",
    description:
      "Build production ML, NLP, and computer vision systems at TelivAI. Strong Python, TensorFlow/PyTorch, and MLOps experience preferred.",
    path: "/careers/ai-ml-engineer",
  });
}

const responsibilities = [
  "Design and develop production-ready ML models for classification, regression, and recommendation systems",
  "Build and optimize NLP pipelines for text analysis, sentiment detection, and language generation",
  "Implement computer vision solutions for image recognition, object detection, and video analytics",
  "Perform advanced feature engineering and data preprocessing to maximize model performance",
  "Establish MLOps practices including CI/CD pipelines, model versioning, and automated retraining",
  "Conduct research on state-of-the-art techniques and translate findings into actionable engineering solutions",
];

const requirements = [
  "3+ years of hands-on experience in machine learning engineering or applied AI research",
  "Strong proficiency in Python with TensorFlow, PyTorch, or JAX frameworks",
  "Demonstrated experience building NLP systems or working with large language models",
  "Familiarity with cloud ML platforms (AWS SageMaker, GCP Vertex AI, or Azure ML)",
  "Bachelor's or Master's degree in Computer Science, Mathematics, or a related field",
  "Excellent communication skills with the ability to explain complex concepts to non-technical stakeholders",
];

const perks = [
  { icon: DollarSign, title: "Competitive Salary", description: "$120K – $180K base, plus equity and annual bonuses" },
  { icon: HeartPulse, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage for you and your family" },
  { icon: BookOpen, title: "Learning Budget", description: "$3,000 annual stipend for conferences, courses, and certifications" },
  { icon: Timer, title: "Flexible Hours", description: "Core hours with flexibility to work when you're most productive" },
];

export default function AiMlEngineerPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <AnimatedSection>
        <section className="relative pt-28 pb-20 px-6 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="relative max-w-5xl mx-auto">
            <a href="/careers" className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-8 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" />Back to Careers</a>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">AI/ML Engineer</h1>
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
          <p className="text-zinc-400 leading-relaxed">As an AI/ML Engineer, you will design and build intelligent systems using machine learning, natural language processing, and computer vision. You'll work closely with product and data teams to develop models that power real-time recommendations, automate workflows, and unlock insights from complex datasets. This is a high-impact role where your work directly shapes the products our customers rely on every day.</p>
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
          <p className="text-zinc-400 mb-6">Take the next step in your career and join our AI/ML team.</p>
          <a href="/careers/hiring-process#enrollment" className="inline-block bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-8 py-3 rounded-full transition-colors">Enroll Now</a>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
