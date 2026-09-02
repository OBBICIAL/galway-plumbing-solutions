"use client";

import { Phone, ShieldCheck, Star, BadgeCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";
import Image from "next/image";

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-900">
        <Image 
          src="/hero_bg.jpg" 
          alt="Plumbing Background"
          fill
          priority
          className="object-cover opacity-40 md:opacity-50 object-center mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-brand-900/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent-cyan"></span>
            Serving Galway since 2005
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white drop-shadow-sm">
            Reliable Plumbing & Heating in Galway - <span className="text-accent-cyan">Fixed Right, On Time.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            Run by Tom Murphy with 20+ years of trusted local service. From emergency burst pipes and boiler servicing to heat pump upgrades and full bathroom refits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="tel:+353851720646"
              className="bg-accent-orange hover:bg-orange-500 text-white text-lg font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              Call Tom Now (085 172 0646)
            </a>
            <button 
              onClick={scrollToBooking}
              className="bg-white/10 hover:bg-white/20 text-white text-lg font-bold px-8 py-4 rounded-xl backdrop-blur-md border border-white/20 transition-all active:scale-95"
            >
              Request a Free Quote
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center gap-2 text-center text-sm font-medium text-slate-300">
              <ShieldCheck className="w-8 h-8 text-accent-cyan drop-shadow-sm" />
              <span>Fully Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm font-medium text-slate-300">
              <BadgeCheck className="w-8 h-8 text-accent-cyan drop-shadow-sm" />
              <span>Master Craftsmen</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm font-medium text-slate-300">
              <CheckCircle className="w-8 h-8 text-accent-cyan drop-shadow-sm" />
              <span>100% Upfront Pricing</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center text-sm font-medium text-slate-300">
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
              <span>5-Star Local Rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video md:aspect-[4/3] bg-slate-800 mt-8 lg:mt-0"
        >
          <ImageWithFallback 
            src="/service_drain.jpg" 
            alt="Professional Plumber at Work"
            fill
            priority
          />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl text-brand-900 font-semibold shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 rounded-full p-2 shrink-0">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-slate-500">Available Today</div>
                <div className="text-sm md:text-lg">Rapid Response Team Active</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
