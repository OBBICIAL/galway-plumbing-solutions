"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "353851720646";
  const message = "Hey Tom, I need help with...";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center group animate-breathe hover:animate-none hover:scale-110 transition-transform duration-300"
      aria-label="Contact us on WhatsApp"
    >
      {/* Neon Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-60 animate-neon-ping"></span>
      
      {/* Main Button Box */}
      <span className="relative bg-green-500 text-white p-3.5 md:p-4 rounded-full shadow-2xl shadow-green-500/50 hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
        <MessageCircle className="w-8 h-8 md:w-9 md:h-9 fill-white/20" />
      </span>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-brand-900 font-bold px-3 py-1.5 rounded-lg text-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap hidden md:block">
        Chat with Tom
        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-l-4 border-l-white border-y-4 border-y-transparent"></span>
      </span>
    </a>
  );
}
