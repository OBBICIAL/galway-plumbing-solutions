import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-slate-300 py-16 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-white text-xl font-bold mb-6">Galway Plumbing Solutions</h4>
          <p className="mb-6">
            Premier plumbing and heating contractor serving Galway City & County since 2005. Trust us for reliable, on-time service with no hidden fees.
          </p>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 text-sm text-slate-400">
              <CheckCircle className="w-4 h-4 text-accent-cyan" /> Fully Insured
            </span>
            <span className="flex items-center gap-2 text-sm text-slate-400">
              <CheckCircle className="w-4 h-4 text-accent-cyan" /> Master Craftsmen
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-white text-xl font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li>
              <a href="tel:+353851720646" className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="bg-white/10 p-2 rounded-full">
                  <Phone className="w-4 h-4 text-accent-cyan" />
                </div>
                085 172 0646
              </a>
            </li>
            <li>
              <a href="mailto:info@galwayplumbingsolutions.ie" className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="bg-white/10 p-2 rounded-full">
                  <Mail className="w-4 h-4 text-accent-cyan" />
                </div>
                info@galwayplumbingsolutions.ie
              </a>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-white/10 p-2 rounded-full shrink-0">
                <MapPin className="w-4 h-4 text-accent-cyan" />
              </div>
              <span>Roscam, Galway<br />Serving City & County within a 40km radius.</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xl font-bold mb-6">Service Area</h4>
          <div className="bg-slate-800 rounded-xl overflow-hidden aspect-video relative border border-white/10">
            {/* Map placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-50">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074" 
                alt="Map of Galway" 
                fill
              />
            </div>
            <div className="absolute inset-0 bg-brand-900/40"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-accent-orange mx-auto mb-2 drop-shadow-md" />
                <span className="font-bold text-white drop-shadow-md bg-brand-900/80 px-3 py-1 rounded-full text-sm">Roscam, Galway Base</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Galway Plumbing Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
