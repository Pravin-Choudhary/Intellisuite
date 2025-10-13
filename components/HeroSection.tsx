"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import AvatarGroupTooltip from './Avatar';
import { ChartLineDots } from './LineChart';
import { ChartAreaIcons } from './AreaChart';
import { MarqueeVertical } from './MarqueeCards';



export default function HeroSection() {
  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border bg-[#f3f4f6] rounded-xl p-1 px-2 shadow-sm ">
              <Badge className="bg-black text-white hover:bg-black px-2 py-1 text-sm font-medium rounded-2xl">
                Power BI-Powered
              </Badge>
              <span className="text-gray-600 text-sm">Solution for client-facing businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Transforming Client Engagement in Professional Services
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              In today's fast-paced business landscape, effective client engagement is vital for success in professional services. Our innovative approach redefines how professionals connect with their clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base font-medium"
              >
                Get Started for Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base font-medium"
              >
                Live Demo
              </Button>
            </div>

            {/* Reviews Section */}
            <div className="flex items-center gap-4 pt-4">
             <div>
                <AvatarGroupTooltip/>
             </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-orange-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">From 4000+ Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Cards */}
          <MarqueeVertical/>
        </div>
      </div>
    </div>
  );
}