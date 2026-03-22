import React from "react";
import PageLayout from "@/components/PageLayout";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Blog — AI Automation & Business Insights",
    description:
      "Insights on AI automation, sales pipeline efficiency, customer support, analytics, and scaling startups with intelligent systems from TelivAI Solutions.",
    path: "/blog",
    ogType: "article",
  });
}

export default function BlogPage() {
  const posts = [
    { title: "How AI Is Reshaping Modern Business Operations", tag: "AI Automation", date: "March 15, 2026" },
    { title: "5 Ways to Automate Your Sales Pipeline Today", tag: "Sales", date: "March 10, 2026" },
    { title: "The Future of Customer Support with AI Assistants", tag: "Customer Support", date: "March 5, 2026" },
    { title: "Why Data-Driven Decisions Outperform Gut Instinct", tag: "Analytics", date: "February 28, 2026" },
    { title: "Scaling Your Startup with Intelligent Automation", tag: "Growth", date: "February 20, 2026" },
    { title: "AI in Healthcare: Reducing Errors, Saving Lives", tag: "Healthcare", date: "February 14, 2026" },
  ];

  return (
    <PageLayout>
      <section className="pt-32 pb-12 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Blog</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Insights on AI automation and business efficiency
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-[#a855f7]/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-full h-48 bg-gradient-to-br from-[#a855f7]/20 to-[#6366f1]/10 rounded-xl mb-4 group-hover:from-[#a855f7]/30 transition-all duration-300"></div>
              <div className="inline-block px-3 py-1 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full text-xs text-[#a855f7] mb-3">
                {post.tag}
              </div>
              <h2 className="text-xl font-bold mb-3 group-hover:text-[#a855f7] transition-colors">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-4">
                Discover how AI automation is transforming modern businesses and streamlining operations...
              </p>
              <p className="text-xs text-gray-600">{post.date}</p>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
