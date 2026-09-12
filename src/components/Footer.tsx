
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Dev<span className="text-pink-500"> Stack</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Building exceptional digital tools and web applications that empower modern developers to scale faster.
            </p>

            <div className="flex items-center gap-4 pt-1">
              <a href="" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">GitHub</a>
              <span className="text-gray-700"></span>
              <a href="" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Twitter</a>
              <span className="text-gray-700"></span>
              <a href="" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h3>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h3>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2.5">
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Dev Stack, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}