"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Flame, Droplet, Bath, Building2, Clock, Calendar, CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

export default function BookingWidget() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    service: "",
    urgency: "",
    description: "",
    area: "",
    name: "",
    phone: "",
    preferredTime: ""
  });
  
  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    setStep(2);
  };
  
  const handleUrgencySelect = (urgency: string) => {
    setFormData({ ...formData, urgency });
    setStep(3);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate and submit here
    setStep(4);
  };

  const services = [
    { id: "plumbing", title: "Plumbing Repair / Leak", icon: Droplet },
    { id: "heating", title: "Boiler / Heating Service", icon: Flame },
    { id: "renewables", title: "Heat Pump & Renewables", icon: Wrench },
    { id: "bathroom", title: "Bathroom Renovation", icon: Bath },
    { id: "commercial", title: "Commercial", icon: Building2 },
  ];

  const urgencies = [
    { id: "immediate", title: "Immediate / Today", icon: Clock, desc: "Emergency call-out required" },
    { id: "48hours", title: "Within 48 Hours", icon: Calendar, desc: "Non-urgent repair or service" },
    { id: "planning", title: "Planning a Project", icon: Bath, desc: "Quote for future work" },
  ];

  const areas = [
    "Galway City", "Salthill", "Oranmore", "Roscam", "Athenry", "Tuam", "Loughrea", "Claregalway", "Other"
  ];

  return (
    <section id="booking-widget" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Request a Fast Quote</h2>
          <p className="text-lg text-slate-600">Tell us what you need, and we&apos;ll get back to you with an honest estimate.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-slate-100 relative overflow-hidden">
          {/* Progress Bar */}
          {step < 4 && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
              <motion.div 
                className="h-full bg-accent-blue"
                initial={{ width: `${((step - 1) / 3) * 100}%` }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-6 text-brand-900">What do you need help with?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleServiceSelect(s.title)}
                      className="flex items-center gap-4 p-4 rounded-xl border-2 border-slate-100 hover:border-accent-blue hover:bg-slate-50 transition-all text-left group"
                    >
                      <div className="bg-brand-50 p-3 rounded-lg text-accent-blue group-hover:bg-white group-hover:shadow-sm transition-all">
                        <s.icon className="w-6 h-6" />
                      </div>
                      <span className="font-semibold text-slate-800 flex-1">{s.title}</span>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-accent-blue" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-slate-500 hover:text-brand-900 mb-6 font-medium">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <h3 className="text-xl font-bold mb-6 text-brand-900">How urgent is this?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {urgencies.map((u) => (
                    <button
                      key={u.id}
                      onClick={() => handleUrgencySelect(u.title)}
                      className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all text-center ${
                        formData.urgency === u.title ? 'border-accent-blue bg-blue-50/50' : 'border-slate-100 hover:border-accent-blue hover:bg-slate-50'
                      }`}
                    >
                      <u.icon className={`w-8 h-8 ${u.id === 'immediate' ? 'text-accent-orange' : 'text-accent-blue'}`} />
                      <div>
                        <div className="font-semibold text-slate-800">{u.title}</div>
                        <div className="text-xs text-slate-500 mt-1">{u.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button onClick={() => setStep(2)} className="flex items-center gap-2 text-slate-500 hover:text-brand-900 mb-6 font-medium">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <h3 className="text-xl font-bold mb-6 text-brand-900">Final Details</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                        placeholder="08X XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Area / Eircode</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all appearance-none bg-white"
                        value={formData.area}
                        onChange={(e) => setFormData({...formData, area: e.target.value})}
                      >
                        <option value="">Select your area...</option>
                        {areas.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Brief Description (Optional)</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 outline-none transition-all"
                        placeholder="e.g. Leaking tap in kitchen"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-accent-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Request Callback
                  </button>
                  <p className="text-xs text-center text-slate-500">
                    By submitting, you agree to our terms. We will never share your details.
                  </p>
                </form>
              </motion.div>
            )}

            {/* STEP 4: Success */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-brand-900 mb-4">Request Sent!</h3>
                <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                  Thanks for reaching out, {formData.name || 'friend'}. We&apos;ve received your request and will contact you shortly at {formData.phone}.
                </p>
                <button 
                  onClick={() => {
                    setStep(1);
                    setFormData({ service: "", urgency: "", description: "", area: "", name: "", phone: "", preferredTime: "" });
                  }}
                  className="text-accent-blue font-semibold hover:underline"
                >
                  Submit another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
