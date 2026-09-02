import { ShieldAlert, Euro, Clock, ThumbsUp, CheckCircle2 } from "lucide-react";

export default function PricingBanner() {
  return (
    <section id="pricing" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Honest Pricing, Guaranteed Quality</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe in upfront pricing and exceptional workmanship. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Pricing Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-50 text-accent-blue p-3 rounded-xl">
                <Euro className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900">Transparent Pricing</h3>
            </div>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-2 rounded-lg mt-1 border border-slate-100">
                  <Clock className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-900">Standard Call-Out: €140</h4>
                  <p className="text-slate-600 mt-1">Includes the first full hour of on-site diagnostic & repair work (plus VAT & materials).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-slate-50 p-2 rounded-lg mt-1 border border-slate-100">
                  <ThumbsUp className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-900">Honest Advice</h4>
                  <p className="text-slate-600 mt-1">We don't upsell. We fix what's broken and advise on the most cost-effective long-term solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Promise Card */}
          <div className="bg-brand-900 text-white rounded-2xl p-8 shadow-xl border border-brand-800 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
              GUARANTEED
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 text-green-400 p-3 rounded-xl">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Our Quality Promise</h3>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed">
              We know it's hard to find a reliable tradesman. That's why our entire business is built on trust, punctuality, and workmanship you can count on.
            </p>
            <ul className="space-y-4 font-medium mt-auto">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> 
                <span><strong className="text-white">20+ Years Experience</strong> & Fully Insured.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> 
                <span><strong className="text-white">RGI & OFTEC</strong> Registered Installers.</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> 
                <span>We protect your home and <strong className="text-white">always clean up after.</strong></span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
