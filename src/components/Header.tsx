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
            className="text-brand-900 font-extrabold border-2 border-brand-900 px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl hover:bg-slate-50 transition-colors text-[13px] sm:text-base md:text-lg whitespace-nowrap"
          >
            <span className="hidden lg:inline">Get a Free Quote</span>
            <span className="lg:hidden">Get Quote</span>
          </button>
          <a 
            href="tel:+353851720646" 
            className="bg-accent-orange hover:bg-orange-600 text-white font-extrabold px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl flex items-center gap-2 shadow-sm transition-transform active:scale-95 text-[13px] sm:text-base md:text-lg whitespace-nowrap"
          >
            <Phone className="w-4 h-4 md:w-6 md:h-6 animate-pulse" />
            <span className="hidden lg:inline">085 172 0646</span>
            <span className="lg:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
