import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { Brain, Cpu, MessageSquare, Eye, Gamepad2, Settings2, Sparkles, Check, ArrowRight } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "AI & Machine Learning Engineering — Deep Learning, NLP & Vision",
    description:
      "Deep learning, NLP, computer vision, generative AI, and MLOps—production-grade ML systems from TelivAI’s engineering practice.",
    path: "/technologies/ai-ml",
  });
}

const capabilities = [
  { icon: Brain, title: "Deep Learning", description: "Neural networks for complex pattern recognition, from CNNs to transformers at scale." },
  { icon: MessageSquare, title: "NLP", description: "Language understanding, sentiment analysis, summarization, and conversational AI." },
  { icon: Eye, title: "Computer Vision", description: "Object detection, image segmentation, and real-time visual processing pipelines." },
  { icon: Gamepad2, title: "Reinforcement Learning", description: "Agents that learn optimal strategies through reward-driven exploration." },
  { icon: Settings2, title: "MLOps", description: "Automated model training, versioning, monitoring, and deployment at enterprise scale." },
  { icon: Sparkles, title: "Generative AI", description: "LLM fine-tuning, RAG architectures, and creative content generation systems." },
];

const techStack = ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "AWS SageMaker", "Kubernetes", "MLflow"];

export default function AiMlPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-16 right-16 w-48 h-48 bg-[#a855f7]/10 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 left-24 w-32 h-32 bg-[#7c3aed]/10 blur-[80px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">Technology</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">AI/ML Engineering</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Building intelligent systems that learn, adapt, and deliver measurable business impact.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.15)]">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop" alt="AI/ML Engineering" className="w-full h-full object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-gray-400 mb-4">Our AI/ML engineering team builds intelligent systems that learn, adapt, and evolve. From predictive models to generative AI, we deliver solutions that transform raw data into actionable intelligence.</p>
            <p className="text-gray-400 mb-6">We follow rigorous MLOps practices to ensure every model is reproducible, scalable, and production-grade from day one.</p>
            <ul className="space-y-3">
              {["Production-ready ML models", "End-to-end MLOps pipelines", "Custom training on proprietary data"].map((item) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s build intelligence together</h2>
            <p className="text-gray-400 mb-8">From concept to production — our AI/ML team is ready to accelerate your next breakthrough.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white font-medium transition-colors">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
