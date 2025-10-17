import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Instagram, Facebook, Linkedin, Youtube, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white">  

      {/* Footer Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Logo and Badges */}
           <Image src='/intellisuiteLogo.png' width={400} height={400} alt='intellisuiteLogo'/>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-400">Product</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Platform features</a></li>
                <li><a href="#" className="hover:text-white transition">Agency solutions</a></li>
                <li><a href="#" className="hover:text-white transition">Data integrations</a></li>
                <li><a href="#" className="hover:text-white transition">Compare platforms</a></li>
                <li><a href="#" className="hover:text-white transition">Reviews</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-400">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li>
                  <a href="#" className="hover:text-white transition inline-flex items-center gap-2">
                    Careers
                    <Badge className="bg-blue-600 hover:bg-blue-700 text-xs">Hiring</Badge>
                  </a>
                </li>
                <li><a href="#" className="hover:text-white transition">Media Kit</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Get Started Links */}
            <div>
              <h3 className="font-semibold mb-4 text-gray-400">Get Started</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Start Free Trial</a></li>
                <li><a href="#" className="hover:text-white transition">Book a Demo</a></li>
                <li><a href="#" className="hover:text-white transition">Quick Start Guide</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2025 Intellisuite pvt. 
              </div>

              {/* Right Links */}
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy</a>
                <button className="flex items-center gap-2 border border-gray-700 rounded-full px-4 py-2 text-sm hover:border-gray-600 transition">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}