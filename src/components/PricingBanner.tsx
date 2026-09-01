import { ShieldAlert, Euro, Clock, ThumbsUp } from "lucide-react";

export default function PricingBanner() {
  return (
    <section id="pricing" className="py-16 bg-brand-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-accent-cyan" />
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              We believe in honest, upfront pricing. No hidden fees, no surprise callout traps. Just reliable service from local experts.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg mt-1">
                  <Clock className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Standard Call-Out: €140</h4>
                  <p className="text-slate-400">Includes the first full hour of on-site diagnostic & repair work (plus VAT & materials).</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg mt-1">
                  <ThumbsUp className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Honest Advice</h4>
                  <p className="text-slate-400">We don&apos;t upsell. We fix what&apos;s broken and advise on the most cost-effective solutions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white text-brand-900 rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent-orange text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
              NO SURPRISES
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-50 text-red-500 p-3 rounded-xl">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">The &quot;Cowboy&quot; Guarantee</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Tired of tradesmen who don&apos;t show up or change the price halfway through the job? 
            </p>
            <ul className="space-y-3 font-medium text-slate-800">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> We show up when we say we will.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> We protect your home and clean up after.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> We stand over all our work 100%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
