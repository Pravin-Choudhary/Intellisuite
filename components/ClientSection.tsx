import React from 'react';
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star } from 'lucide-react';
import Image from 'next/image';

const agencies = [
  { name: "Clearwater", logo: "C" },
  { name: "CLIX", logo: "CLIX" },
  { name: "EDGE", logo: "EDGE" },
  { name: "GLOBITAL", logo: "G" },
  { name: "Amplitude", logo: "A" },
  { name: "Brand Co", logo: "BC" },
  { name: "Creative", logo: "CR" },
  { name: "Digital", logo: "D" },
  { name: "Elite", logo: "E" },
  { name: "Fusion", logo: "F" },
];

const AgencyCard = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div
      className={cn(
        "relative h-24 w-48 cursor-pointer overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md",
        "border-gray-200/80"
      )}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          {logo.length > 2 ? (
            <span className="font-black">{logo}</span>
          ) : (
            <span className="flex items-center gap-1">
              <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-base">
                {logo}
              </span>
              <span className="ml-2">{name}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function AgencyHeroSection() {
  const firstRow = agencies.slice(0, 5);
  const secondRow = agencies.slice(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Helping{" "}
              <span className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg">
                7,000+
              </span>{" "}
              marketing agencies simplify client reporting and scale faster
            </h1>

            {/* Reviews */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-red-500 text-xl font-bold">G</span>
                <span className="font-semibold text-gray-900">4.7</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">▼</span>
                <span className="font-semibold text-gray-900">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <div className="text-gray-600">
                Based on 500+ Reviews
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Cloud background */}
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 scale-110"></div>
              {/* Person illustration */}
                <Image src='/featuredPerson.svg' width={400} height={120} alt='personImage' priority/>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b py-12">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((agency) => (
              <AgencyCard key={agency.name} {...agency} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div>
      </div>
    </div>
  );
}