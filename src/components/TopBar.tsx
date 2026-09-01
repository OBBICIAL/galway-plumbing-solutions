"use client";

import { Info, Clock } from "lucide-react";

export default function TopBar() {
  const handleEmergencyClick = () => {
    window.dispatchEvent(new Event("open-emergency-modal"));
  };

  return (
    <div className="bg-brand-900 text-white py-2 px-4 text-xs md:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-accent-cyan" />
          <span>
            Serving Galway City & County <span className="hidden md:inline">| Master Craftsmen Certified | Transparent Call-Out: €120 (incl. 1st hour)</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-accent-orange" />
            Mon–Sun: 7am – 7pm
          </span>
          <button 
            onClick={handleEmergencyClick}
            className="text-accent-cyan hover:text-white underline decoration-accent-cyan/50 underline-offset-2 transition-colors"
          >
            Water leak outside hours? Click for shut-off guide
          </button>
        </div>
      </div>
    </div>
  );
}
