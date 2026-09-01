"use client";

import { Phone, CalendarCheck } from "lucide-react";

export default function MobileBottomBar() {
  const scrollToBooking = () => {
    document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] pb-safe">
      <a 
        href="tel:+353851720646"
        className="flex-1 bg-accent-blue hover:bg-blue-600 text-white rounded-xl py-3.5 flex items-center justify-center gap-2 font-bold shadow-sm active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5 fill-current" />
        Call Now
      </a>
      <button 
        onClick={scrollToBooking}
        className="flex-1 bg-brand-900 hover:bg-brand-800 text-white rounded-xl py-3.5 flex items-center justify-center gap-2 font-bold shadow-sm active:scale-95 transition-transform"
      >
        <CalendarCheck className="w-5 h-5" />
        Get a Quote
      </button>
    </div>
  );
}
