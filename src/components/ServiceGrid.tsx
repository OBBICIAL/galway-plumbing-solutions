"use client";

import { useState } from "react";
import { Droplets, Flame, Wind, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

export default function ServiceGrid() {
  const [activeTab, setActiveTab] = useState<"plumbing" | "heating">("plumbing");

  const scrollToBooking = () => {
    document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = {
    plumbing: [
      { title: "Burst Pipes & Leak Detection", icon: Droplets, desc: "Fast response to minimize water damage.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
      { title: "Shower Replacements", icon: Droplets, desc: "Power and electric showers supplied and fitted.", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800" },
      { title: "Booster Pumps", icon: Droplets, desc: "Increase water pressure throughout your home.", img: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=800" },
      { title: "Tap Repairs & Upgrades", icon: Droplets, desc: "Fix dripping taps or install modern mixers.", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800" },
      { title: "Kitchen Plumbing", icon: Droplets, desc: "Appliance installation and sink plumbing.", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" },
      { title: "Blocked Drains", icon: Droplets, desc: "Rapid clearing of interior and exterior blockages.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" },
    ],
    heating: [
      { title: "Oil Boiler Servicing", icon: Flame, desc: "Annual diagnostics, tuning, and repairs.", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" },
      { title: "Heat Pump Maintenance", icon: Wind, desc: "Air-to-Water & Geothermal system servicing.", img: "https://images.unsplash.com/photo-1616422285623-14bf929f170c?auto=format&fit=crop&q=80&w=800" },
      { title: "Underfloor Heating", icon: Flame, desc: "Balancing, manifold repairs, and flushing.", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
      { title: "Power Flushing", icon: Droplets, desc: "Clean your heating system for maximum efficiency.", img: "https://images.unsplash.com/photo-1584622781867-1baa58e9915f?auto=format&fit=crop&q=80&w=800" },
      { title: "Radiator Replacements", icon: Flame, desc: "Upgrade to high-output modern radiators.", img: "https://images.unsplash.com/photo-1585704032644-245eddbbfaf2?auto=format&fit=crop&q=80&w=800" },
      { title: "Solid Fuel Stoves", icon: Flame, desc: "Safe installation and plumbing connection.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
    ]
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From emergency repairs to energy-efficient upgrades, we provide comprehensive plumbing and heating solutions.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab("plumbing")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "plumbing" ? "bg-brand-900 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            General Plumbing
          </button>
          <button 
            onClick={() => setActiveTab("heating")}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === "heating" ? "bg-brand-900 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Heating & Renewables
          </button>
        </div>
        
        {activeTab === "heating" && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-center mb-8 bg-orange-50 border border-orange-100 rounded-xl p-4 max-w-2xl mx-auto"
          >
            <p className="text-brand-900 font-medium">
              <span className="font-bold">Note:</span> We do not service or repair Gas Boilers. We cover oil, air-to-water, geothermal, and all other heating systems.
            </p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services[activeTab].map((service, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent-blue hover:shadow-lg transition-all group overflow-hidden flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden">
                  <ImageWithFallback 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-xl flex items-center justify-center text-accent-blue shadow-sm">
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{service.desc}</p>
                  <button 
                    onClick={scrollToBooking}
                    className="text-accent-blue font-bold flex items-center gap-2 hover:text-blue-700 transition-colors mt-auto"
                  >
                    Book This Service <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
