"use client";

import { useEffect, useState } from "react";
import { X, AlertTriangle, Droplet } from "lucide-react";

export default function EmergencyModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-emergency-modal", handleOpen);
    return () => window.removeEventListener("open-emergency-modal", handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6 text-accent-orange">
            <AlertTriangle className="w-8 h-8" />
            <h2 className="text-2xl font-bold text-brand-900">Emergency Shut-Off Guide</h2>
          </div>
          
          <p className="text-slate-600 mb-8 text-lg">
            If you have a major leak outside our operating hours (7am – 7pm), follow these steps immediately to minimize water damage.
          </p>
          
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-xl p-4 md:p-6 bg-slate-50">
              <h3 className="font-bold text-lg text-brand-900 flex items-center gap-2 mb-2">
                <span className="bg-accent-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                Locate the Main Stopcock
              </h3>
              <p className="text-slate-600 pl-8">
                Usually found under the kitchen sink, in the hot press, or where the water pipe enters your home.
              </p>
            </div>
            
            <div className="border border-slate-200 rounded-xl p-4 md:p-6 bg-slate-50">
              <h3 className="font-bold text-lg text-brand-900 flex items-center gap-2 mb-2">
                <span className="bg-accent-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                Turn Clockwise to Close
              </h3>
              <p className="text-slate-600 pl-8">
                Turn the valve clockwise (to the right) tightly. It may be stiff if it hasn&apos;t been used recently.
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 md:p-6 bg-slate-50">
              <h3 className="font-bold text-lg text-brand-900 flex items-center gap-2 mb-2">
                <span className="bg-accent-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                Drain the System
              </h3>
              <p className="text-slate-600 pl-8">
                Turn on your cold water taps (starting from the lowest tap in the house) to drain the remaining water in the pipes.
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
            <Droplet className="w-8 h-8 text-accent-blue mx-auto mb-2" />
            <p className="font-medium text-brand-900">System secure?</p>
            <p className="text-slate-600 text-sm mt-1 mb-4">Leave us a message and we&apos;ll prioritize your call at 7am.</p>
            <button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById("booking-widget")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-900 hover:bg-brand-800 text-white font-bold px-6 py-2 rounded-lg transition-colors"
            >
              Request Priority Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
