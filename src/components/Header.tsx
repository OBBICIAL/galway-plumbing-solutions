"use client";

import { Phone, Droplet, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const scrollToBooking = () => {
    document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 md:px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group py-2">
          <Image 
            src="/logo.jpg" 
            alt="Galway Plumbing Solutions" 
            width={200} 
            height={80} 
            className="h-10 sm:h-12 md:h-14 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
          <Link href="#services" className="hover:text-accent-blue transition-colors">Services</Link>
          <Link href="#pricing" className="hover:text-accent-blue transition-colors">Pricing & Guarantee</Link>
          <Link href="#areas" className="hover:text-accent-blue transition-colors">Areas Served</Link>
          <Link href="#reviews" className="hover:text-accent-blue transition-colors">Reviews</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button 
            onClick={scrollToBooking}
            className="text-brand-900 font-bold border-2 border-brand-900 px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-slate-50 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            <span className="hidden md:inline">Get a Free Quote</span>
            <span className="md:hidden">Get Quote</span>
          </button>
          <a 
            href="tel:+353851720646" 
            className="bg-accent-orange hover:bg-orange-600 text-white font-bold px-3 py-2 md:px-5 md:py-2.5 rounded-lg flex items-center gap-1.5 md:gap-2 shadow-sm transition-transform active:scale-95 text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 md:w-5 md:h-5 animate-pulse" />
            <span className="hidden md:inline">085 172 0646</span>
            <span className="md:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
