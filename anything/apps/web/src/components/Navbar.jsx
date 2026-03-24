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
  Eye,
  Target,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      { label: "AI Agents", href: "/products/ai-agents", icon: <Bot size={16} /> },
      { label: "CRM Platform", href: "/products/crm", icon: <Users size={16} /> },
      { label: "ERP System", href: "/products/erp", icon: <Building2 size={16} /> },
      { label: "Procurement / Purchase System", href: "/products/procurement", icon: <ShoppingCart size={16} /> },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "IT Staffing & Consulting", href: "/services/staffing", icon: <Briefcase size={16} /> },
      { label: "AI Development", href: "/services/ai-development", icon: <Brain size={16} /> },
      { label: "Mobile App Development", href: "/services/mobile-development", icon: <Smartphone size={16} /> },
      { label: "Web Development", href: "/services/web-development", icon: <Globe size={16} /> },
      { label: "Custom Software Development", href: "/services/custom-software", icon: <Code size={16} /> },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "IT & Engineering", href: "/industries/it-engineering", icon: <Cpu size={16} /> },
      { label: "Healthcare", href: "/industries/healthcare", icon: <HeartPulse size={16} /> },
      { label: "Pharmaceutical", href: "/industries/pharmaceutical", icon: <Pill size={16} /> },
      { label: "Finance", href: "/industries/finance", icon: <Landmark size={16} /> },
      { label: "Retail & E-Commerce", href: "/industries/retail", icon: <ShoppingCart size={16} /> },
    ],
  },
  {
    label: "Technologies",
    children: [
      { label: "AI/ML Engineering", href: "/technologies/ai-ml", icon: <Brain size={16} /> },
      { label: "Data & Analytics", href: "/technologies/data-analytics", icon: <LineChart size={16} /> },
      { label: "Network Engineering", href: "/technologies/network", icon: <Network size={16} /> },
      { label: "Cyber Security", href: "/technologies/cybersecurity", icon: <Lock size={16} /> },
      { label: "UI/UX Designer", href: "/technologies/ui-ux", icon: <Palette size={16} /> },
    ],
  },
  { label: "Careers", href: "/careers" },
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

export default function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-visible px-6 py-4">
        <a href="/" className="flex h-14 shrink-0 items-center overflow-visible pr-1 sm:pr-6 md:pr-10 lg:pr-12">
          <img
            src="/images/TelivAI.png"
            alt="TelivAI Solutions"
            className="block h-14 w-auto max-w-[340px] object-contain object-left origin-left scale-[2.95] sm:max-w-[380px] sm:scale-[3.15] md:max-w-[420px] md:scale-[3.3] lg:scale-[3.45]"
            width={420}
            height={72}
          />
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
                <a href={item.href} className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all">
                  {item.label}
                </a>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all">
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
              )}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-2 shadow-2xl animate-fadeIn">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all group">
                      <span className="text-muted-foreground/80 group-hover:text-[#a855f7] transition-colors">{child.icon}</span>
                      <span className="text-sm">{child.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <a href="/contact" className="flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button type="button" className="text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border max-h-[80vh] overflow-y-auto animate-slideDown">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a href={item.href} className="block px-4 py-3 text-foreground rounded-xl hover:bg-muted/40 transition-colors" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-foreground rounded-xl hover:bg-muted/40 transition-colors"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <a key={child.label} href={child.href} className="flex items-center gap-3 px-4 py-2.5 text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/40 transition-all" onClick={() => setMobileOpen(false)}>
                            <span className="text-muted-foreground/80">{child.icon}</span>
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
}
