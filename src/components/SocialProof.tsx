"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { Star, MapPin, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ImageWithFallback from "./ImageWithFallback";

export default function SocialProof() {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Our Work Gallery */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Recent Work</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse some of our latest projects across Galway, from full bathroom refits to high-efficiency boiler installations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { img: "/portfolio_bathroom.jpg", title: "Luxury Bathroom Fit-Out", tag: "Bathroom", area: "Galway City" },
            { img: "/portfolio_boiler.jpg", title: "Worcester Boiler Upgrade", tag: "Heating", area: "County Galway" },
            { img: "/portfolio_underfloor.jpg", title: "Underfloor Heating Manifold", tag: "Plumbing", area: "Galway City" },
          ].map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <ImageWithFallback src={project.img} alt={project.title} fill className="group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-brand-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.tag}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-brand-900 text-lg mb-1 group-hover:text-accent-blue transition-colors">{project.title}</h4>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan" /> {project.area}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16 mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Trusted by Galway Homeowners</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what your neighbours have to say about our service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { name: "Sarah M.", area: "Galway City", text: "Tom was brilliant. Showed up exactly when he said he would, fixed the leak under the sink quickly, and left the place spotless. Honest pricing too." },
            { name: "Declan O.", area: "Oranmore", text: "Got our old boiler swapped out for a new efficient model. The lads were professional, polite, and explained everything clearly. Highly recommend!" },
            { name: "Fiona C.", area: "Knocknacarra", text: "Had an emergency burst pipe on a Sunday. They guided me on how to turn off the water over the phone and were out first thing Monday morning." },
            { name: "Mark K.", area: "Claregalway", text: "Full bathroom renovation. The attention to detail was fantastic and they managed all the trades perfectly. No stress at all." },
          ].map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative flex flex-col h-full"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-100" />
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed flex-grow">&quot;{review.text}&quot;</p>
              <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                <span className="font-bold text-brand-900 flex items-center gap-2">
                  {review.name} <CheckCircle2 className="w-4 h-4 text-green-500" />
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3 h-3 text-accent-cyan" /> {review.area}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Showcase */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-2">Transformations</h3>
          <p className="text-slate-600">Drag the slider to see the difference.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <ImageSlider 
            before="/bathroom_before.jpg" 
            after="/bathroom_after.jpg"
            title="Recent Bathroom Renovation"
          />
          <ImageSlider 
            before="/boiler_before.jpg" 
            after="/boiler_after.jpg"
            title="Recent Boiler Replacement"
          />
        </div>
      </div>
    </section>
  );
}

function ImageSlider({ before, after, title }: { before: string, after: string, title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div>
      <h4 className="font-bold text-brand-900 mb-4">{title}</h4>
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-slate-200"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        {/* After Image (Background) */}
        <ImageWithFallback src={after} alt="After" fill className="pointer-events-none" />
        
        {/* Before Image (Foreground overlay) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <ImageWithFallback src={before} alt="Before" fill />
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-lg z-20"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] flex items-center justify-center pointer-events-none">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-slate-300 rounded-full"></div>
              <div className="w-1 h-3 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-brand-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none z-30">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 bg-accent-cyan/80 backdrop-blur-sm text-brand-900 text-xs font-bold px-3 py-1 rounded-full pointer-events-none z-30">
          AFTER
        </div>
      </div>
    </div>
  );
}
