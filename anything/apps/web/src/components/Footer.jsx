import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
          <div className="flex max-w-sm shrink-0 flex-col sm:max-w-md lg:max-w-[min(100%,500px)]">
            <a href="/" className="mb-3 inline-flex overflow-visible pr-1">
              <img
                src="/images/TelivAI.png"
                alt="TelivAI Solutions"
                className="h-24 w-auto max-w-[min(100%,480px)] origin-left object-contain object-left sm:h-28 sm:max-w-[520px] md:h-32 md:max-w-[580px] lg:h-[8.5rem] lg:max-w-[640px]"
                width={640}
                height={140}
              />
            </a>
            <p className="text-sm leading-snug text-muted-foreground">
              Automate Smarter, Optimize Faster, and Grow Stronger.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2 sm:mt-10 lg:mt-auto lg:pt-10">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="min-w-0 flex-1 rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#a855f7]/50 focus:outline-none sm:max-w-[200px]"
              />
              <button
                type="button"
                className="shrink-0 rounded-lg bg-[#a855f7] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#9333ea]"
              >
                Subscribe
              </button>
            </div>
          </div>

          <nav
            className="grid min-w-0 flex-1 grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 sm:gap-x-10 lg:max-w-2xl lg:justify-items-stretch xl:max-w-none"
            aria-label="Footer"
          >
            <div>
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/products/ai-agents" className="transition-colors hover:text-foreground">
                    AI Agents
                  </a>
                </li>
                <li>
                  <a href="/products/crm" className="transition-colors hover:text-foreground">
                    CRM Platform
                  </a>
                </li>
                <li>
                  <a href="/products/erp" className="transition-colors hover:text-foreground">
                    ERP System
                  </a>
                </li>
                <li>
                  <a href="/products/procurement" className="transition-colors hover:text-foreground">
                    Procurement System
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/services/staffing" className="transition-colors hover:text-foreground">
                    IT Staffing & Consulting
                  </a>
                </li>
                <li>
                  <a href="/services/ai-development" className="transition-colors hover:text-foreground">
                    AI Development
                  </a>
                </li>
                <li>
                  <a href="/services/mobile-development" className="transition-colors hover:text-foreground">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="/services/web-development" className="transition-colors hover:text-foreground">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/services/custom-software" className="transition-colors hover:text-foreground">
                    Custom Software
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-2.5 text-sm font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="/careers" className="transition-colors hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/careers/hiring-process" className="transition-colors hover:text-foreground">
                    Hiring Process
                  </a>
                </li>
                <li>
                  <a href="/contact" className="transition-colors hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/industries" className="transition-colors hover:text-foreground">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="/technologies" className="transition-colors hover:text-foreground">
                    Technologies
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TelivAI Solutions. All rights reserved.</p>
          <p className="text-center sm:text-right">Visioned and Crafted by TelivAI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
