"use client";

import { Info, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-brand-900 text-white py-2 px-4 text-xs sm:text-sm font-medium">
      <div className="max-w-7xl mx-auto flex justify-center sm:justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-accent-cyan" />
          <span>Serving Galway City & County</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Clock className="w-4 h-4 text-accent-orange" />
          <span>Mon–Sun: 7am – 7pm</span>
        </div>
      </div>
    </div>
  );
}
