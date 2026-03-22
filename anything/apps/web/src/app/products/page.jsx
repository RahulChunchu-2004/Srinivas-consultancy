import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight, Bot, Users, Building2, ShoppingCart, Zap, Brain, Plug } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Enterprise Products — AI Agents, CRM, ERP & Procurement",
    description:
      "Explore TelivAI product suites: AI agents, CRM, ERP, and procurement platforms built for automation, scale, and enterprise operations.",
    path: "/products",
  });
}

const products = [
  {
    title: "AI Agents",
    href: "/products/ai-agents",
    icon: Bot,
    description: "Intelligent agents that automate customer interactions and business workflows using cutting-edge AI.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "CRM Platform",
    href: "/products/crm",
    icon: Users,
    description: "Nurture leads, manage pipelines, and build lasting client relationships with powerful automation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "ERP System",
    href: "/products/erp",
    icon: Building2,
    description: "Unify finance, HR, inventory, and operations into one seamless enterprise platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Procurement System",
    href: "/products/procurement",
    icon: ShoppingCart,
    description: "End-to-end procurement management from vendor sourcing to spend analytics.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
  },
];

const benefits = [
  { icon: Zap, title: "Scalable Architecture", description: "Built to grow with your business — from startup to enterprise scale without re-platforming." },
  { icon: Brain, title: "AI-Powered Intelligence", description: "Every product is infused with machine learning to surface insights and automate decisions." },
  { icon: Plug, title: "Seamless Integration", description: "Connect with your existing tools through robust APIs and 200+ pre-built integrations." },
];

export default function ProductsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 mb-6">
            Product Suite
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.1]">Our Products</h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Enterprise-grade solutions designed to streamline operations, enhance productivity, and accelerate growth.
          </p>
        </AnimatedSection>
      </section>

      {/* Product Cards */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <AnimatedSection key={product.title} delay={i * 100}>
              <a href={product.href} className="group block bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-[#a855f7]/30 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <product.icon className="w-6 h-6 text-[#a855f7]" />
                      <h3 className="text-xl font-semibold">{product.title}</h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[#a855f7] transition-colors" />
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{product.description}</p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Why Choose Our Products</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 100}>
              <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#a855f7]/10 flex items-center justify-center mx-auto mb-5">
                  <b.icon className="w-7 h-7 text-[#a855f7]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{b.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="rounded-3xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Get started with a free demo and see how our products can drive real results.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-[#7c3aed] font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors">
              Request a Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>
    </PageLayout>
  );
}
