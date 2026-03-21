import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  X,
  Menu,
  Bot,
  Users,
  Building2,
  ShoppingCart,
  Briefcase,
  Brain,
  Smartphone,
  Globe,
  Code,
  Cpu,
  HeartPulse,
  Pill,
  Landmark,
  LineChart,
  Network,
  Lock,
  Palette,
  Database,
  Cog,
  Eye,
  Target,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      { label: "AI Agents", href: "#", icon: <Bot size={16} /> },
      { label: "CRM Platform", href: "#", icon: <Users size={16} /> },
      { label: "ERP System", href: "#", icon: <Building2 size={16} /> },
      { label: "Procurement / Purchase System", href: "#", icon: <ShoppingCart size={16} /> },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "IT Staffing & Consulting", href: "#", icon: <Briefcase size={16} /> },
      { label: "AI Development", href: "#", icon: <Brain size={16} /> },
      { label: "Mobile App Development", href: "#", icon: <Smartphone size={16} /> },
      { label: "Web Development", href: "#", icon: <Globe size={16} /> },
      { label: "Custom Software Development", href: "#", icon: <Code size={16} /> },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "IT & Engineering", href: "#", icon: <Cpu size={16} /> },
      { label: "Healthcare", href: "#", icon: <HeartPulse size={16} /> },
      { label: "Pharmaceutical", href: "#", icon: <Pill size={16} /> },
      { label: "Finance", href: "#", icon: <Landmark size={16} /> },
      { label: "Retail & E-Commerce", href: "#", icon: <ShoppingCart size={16} /> },
    ],
  },
  {
    label: "Technologies",
    children: [
      { label: "AI/ML Engineering", href: "#", icon: <Brain size={16} /> },
      { label: "Data & Analytics", href: "#", icon: <LineChart size={16} /> },
      { label: "Network Engineering", href: "#", icon: <Network size={16} /> },
      { label: "Cyber Security", href: "#", icon: <Lock size={16} /> },
      { label: "UI/UX Designer", href: "#", icon: <Palette size={16} /> },
    ],
  },
  {
    label: "Careers",
    children: [
      { label: "AI/ML Engineer", href: "#", icon: <Brain size={16} /> },
      { label: "Data Engineer", href: "#", icon: <Database size={16} /> },
      { label: "Network Engineer", href: "#", icon: <Network size={16} /> },
      { label: "Cyber Security Engineer", href: "#", icon: <Lock size={16} /> },
      { label: "UI/UX Designer", href: "#", icon: <Palette size={16} /> },
      { label: "Java Developer", href: "#", icon: <Code size={16} /> },
      { label: "Software Developer", href: "#", icon: <Cog size={16} /> },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Who We Are", href: "/about", icon: <Users size={16} /> },
      { label: "Our Vision", href: "/about", icon: <Eye size={16} /> },
      { label: "Our Mission", href: "/about", icon: <Target size={16} /> },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <span className="text-white font-black text-sm">SC</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-white tracking-tight leading-none">Srinivas</span>
            <span className="block text-[10px] text-[#a855f7] font-medium tracking-widest uppercase">Consultancy</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.href ? (
                <a href={item.href} className="px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                  {item.label}
                </a>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              )}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl animate-fadeIn">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group">
                      <span className="text-gray-500 group-hover:text-[#a855f7] transition-colors">{child.icon}</span>
                      <span className="text-sm">{child.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <a href="/contact" className="hidden lg:flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
          Get in Touch <ArrowUpRight size={16} />
        </a>

        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[80vh] overflow-y-auto animate-slideDown">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a href={item.href} className="block px-4 py-3 text-white rounded-xl hover:bg-white/5 transition-colors" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-white rounded-xl hover:bg-white/5 transition-colors"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <a key={child.label} href={child.href} className="flex items-center gap-3 px-4 py-2.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all" onClick={() => setMobileOpen(false)}>
                            <span className="text-gray-500">{child.icon}</span>
                            <span className="text-sm">{child.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="pt-4 px-4">
              <a href="/contact" className="flex items-center justify-center gap-2 bg-[#a855f7] text-white w-full py-3 rounded-xl font-semibold">
                Get in Touch <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#a855f7] to-[#7c3aed] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">SC</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight leading-none">Srinivas</span>
                <span className="block text-[10px] text-[#a855f7] font-medium tracking-widest uppercase">Consultancy</span>
              </div>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">Automate Smarter, Optimize Faster, and Grow Stronger.</p>
            <div className="flex items-center gap-2">
              <input type="email" placeholder="Join our newsletter" className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#a855f7]/50 flex-1 max-w-[200px]" />
              <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Subscribe</button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Products</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ERP System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Procurement System</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">IT Staffing & Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Software</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technologies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Srinivas Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center overflow-hidden"><div className="w-full h-full bg-[#a855f7] transform -rotate-45 translate-y-2"></div></div>
            <span className="text-xs text-gray-400">Made in Framer</span>
          </div>
          <p className="text-xs text-gray-600">Visioned and Crafted by Srinivas Consultancy</p>
        </div>
      </div>
    </footer>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#a855f7] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-12 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#a855f7]/15 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Contact Us</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Ready to transform your business? Let's start a conversation.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Mail size={20} />, label: "Email", value: "info@srinivasconsultancy.com" },
            { icon: <Phone size={20} />, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: <MapPin size={20} />, label: "Location", value: "Hyderabad, India" },
            { icon: <Clock size={20} />, label: "Hours", value: "Mon - Fri, 9am - 6pm" },
          ].map((item, i) => (
            <div key={i} className="text-center p-5 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center text-[#a855f7] mx-auto mb-3">
                {item.icon}
              </div>
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="text-white font-medium text-sm">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-8 text-center">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder-gray-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder-gray-600"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Company</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]/50 transition-colors placeholder-gray-600"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Service Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:outline-none focus:border-[#a855f7]/50 transition-colors">
                  <option value="">Select a service</option>
                  <option value="ai">AI Development</option>
                  <option value="staffing">IT Staffing & Consulting</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="web">Web Development</option>
                  <option value="custom">Custom Software</option>
                  <option value="products">AI Products (CRM/ERP/Agents)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#a855f7]/50 transition-colors resize-none placeholder-gray-600"
                placeholder="Tell us about your project or requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#a855f7] hover:bg-[#9333ea] px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
