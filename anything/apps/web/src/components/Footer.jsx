import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex mb-4 max-w-full">
              <img
                src="/images/telivai-logo.png"
                alt="TelivAI Solutions"
                className="h-80 sm:h-[21.25rem] w-auto max-w-full min-w-0 object-contain object-left"
                width={2000}
                height={340}
              />
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
              <li><a href="/products/ai-agents" className="hover:text-white transition-colors">AI Agents</a></li>
              <li><a href="/products/crm" className="hover:text-white transition-colors">CRM Platform</a></li>
              <li><a href="/products/erp" className="hover:text-white transition-colors">ERP System</a></li>
              <li><a href="/products/procurement" className="hover:text-white transition-colors">Procurement System</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/services/staffing" className="hover:text-white transition-colors">IT Staffing & Consulting</a></li>
              <li><a href="/services/ai-development" className="hover:text-white transition-colors">AI Development</a></li>
              <li><a href="/services/mobile-development" className="hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="/services/web-development" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/services/custom-software" className="hover:text-white transition-colors">Custom Software</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/careers/hiring-process" className="hover:text-white transition-colors">Hiring Process</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="/technologies" className="hover:text-white transition-colors">Technologies</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} TelivAI Solutions. All rights reserved.</p>
          <p className="text-xs text-gray-600">Visioned and Crafted by TelivAI Solutions</p>
        </div>
      </div>
    </footer>
  );
}
