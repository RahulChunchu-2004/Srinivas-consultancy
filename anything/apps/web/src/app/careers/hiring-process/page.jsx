import PageLayout from "@/components/PageLayout";
import { FileText, Search, Users, Award, Rocket } from "lucide-react";
import { pageMeta } from "@/app/seo/buildPageMeta";

export function meta() {
  return pageMeta({
    title: "Hiring Process — How We Interview at TelivAI",
    description:
      "From application to offer: screening, technical conversations, culture fit, and onboarding—what to expect when you apply to TelivAI.",
    path: "/careers/hiring-process",
  });
}

const steps = [
  {
    num: "01",
    title: "Application",
    desc: "Submit your application through our careers page. Ensure your resume highlights relevant skills, experience, and accomplishments.",
    icon: <FileText size={24} />,
  },
  {
    num: "02",
    title: "Screening",
    desc: "Our HR team reviews applications to shortlist candidates based on qualifications, experience, and cultural fit.",
    icon: <Search size={24} />,
  },
  {
    num: "03",
    title: "Interview",
    desc: "Shortlisted candidates are invited for technical and behavioral interviews with our engineering and leadership teams.",
    icon: <Users size={24} />,
  },
  {
    num: "04",
    title: "Offer",
    desc: "If you are selected, we will extend a job offer detailing compensation, benefits, and terms of employment.",
    icon: <Award size={24} />,
  },
  {
    num: "05",
    title: "Onboarding",
    desc: "Our onboarding process ensures you have everything you need to succeed from day one — tools, mentorship, and team integration.",
    icon: <Rocket size={24} />,
  },
];

export default function HiringProcessPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Hiring Process at <span className="text-[#a855f7]">TelivAI Solutions</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Here's a step-by-step guide to our process:
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#a855f7]/40 via-[#a855f7]/20 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative">
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-12 h-12 rounded-full bg-[#a855f7] items-center justify-center text-white font-bold text-sm z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    {step.num}
                  </div>

                  <div className={`md:w-[45%] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <div className="group bg-zinc-900/60 border border-[#a855f7]/20 rounded-2xl p-6 md:p-8 hover:border-[#a855f7]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="md:hidden w-10 h-10 rounded-full bg-[#a855f7] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                          {step.num}
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7]">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#a855f7]">Tips for Preparation</h2>
        <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
          Practical tips to prepare for our hiring steps.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Review the Job Description", desc: "Understand the role and how your experience aligns with the requirements and responsibilities." },
            { title: "Prepare for Assessments", desc: "Brush up on relevant technical skills and problem-solving approaches for the domain." },
            { title: "Practice Interview Skills", desc: "Practice common interview questions and be ready to discuss your projects and achievements." },
            { title: "Showcase Your Passion", desc: "Demonstrate enthusiasm for the role and the company, and be ready to share your vision." },
          ].map((tip, i) => (
            <div key={i} className="bg-zinc-900/60 border border-[#a855f7]/20 rounded-2xl p-6 text-center hover:border-[#a855f7]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <h3 className="font-bold text-white mb-3">{tip.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-[#a855f7]/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Refer a Friend</h3>
            <p className="text-gray-400 text-sm mb-6">Employee referral program — share great talent.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Friend's Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Refer
              </button>
            </form>
          </div>

          <div className="bg-zinc-900/60 border border-[#a855f7]/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-2">Contact HR & Submit Resume</h3>
            <p className="text-gray-400 text-sm mb-6">Questions? Reach us or upload your resume.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors"
              />
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 text-sm focus:outline-none focus:border-[#a855f7]/50 transition-colors">
                <option value="">Position applying for (select)</option>
                <option value="ai-ml">AI/ML Engineer</option>
                <option value="data">Data Engineer</option>
                <option value="network">Network Engineer</option>
                <option value="cybersecurity">Cyber Security Engineer</option>
                <option value="ui-ux">UI/UX Designer</option>
                <option value="java">Java Developer</option>
                <option value="software">Software Developer</option>
              </select>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <span className="text-gray-600 text-sm flex-1">Upload resume...</span>
                <label className="cursor-pointer bg-white/10 hover:bg-white/20 text-gray-300 text-xs px-4 py-1.5 rounded-lg transition-colors">
                  Browse
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
              </div>
              <p className="text-xs text-gray-600">Accepted: .pdf, .doc, .docx — max 5MB</p>
              <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
                <input type="checkbox" className="mt-0.5 accent-[#a855f7]" />
                I agree to be contacted about this application and accept the privacy policy.
              </label>
              <button
                type="submit"
                className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
