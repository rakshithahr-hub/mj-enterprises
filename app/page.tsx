"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/construction.jpg",
    "/electricals.jpg",
    "/solar.jpg",
    "/tower.jpg",
    "/office.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        
        {/* Background Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ 
              backgroundImage: `url('${img}')`,
              transitionProperty: "opacity, transform" 
            }}
          >
            <div className="absolute inset-0 bg-slate-900/75"></div>
          </div>
        ))}

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-400/20">
            <span className="text-blue-400 text-[9px] font-bold uppercase tracking-[0.4em]">
              Integrity & Innovation
            </span>
          </div>

          {/* REDUCED HEADER SIZE HERE */}
          <h1 className="text-2xl md:text-4xl font-black mb-6 tracking-tight uppercase leading-tight italic text-white">
            Precision in Every <span className="text-blue-400">Foundation.</span> <br />
            Power in Every <span className="text-[#FF8C00]">Grid.</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-300 text-sm md:text-base font-medium leading-relaxed opacity-90">
            MJ Enterprises is a leading company specializing in building construction, 
            solar power plants, and electrical projects in Bangalore.
          </p>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 rounded-full ${
                  i === currentImage ? "w-6 bg-[#FF8C00]" : "w-2 bg-white/20"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CREATIVE PROCESS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-lg font-bold text-slate-900 uppercase tracking-[0.3em]">
            Our Creative Process
          </h2>
          <div className="h-1 w-10 bg-[#FF8C00] mt-2"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "PLAN & PROPOSE", desc: "Creating grand concepts and unique blueprints that align perfectly with client goals." },
            { title: "DESIGN & DRAFT", desc: "Prototyping and drafting with an obligation to refine until the vision is perfect." },
            { title: "BUILD & INSTALL", desc: "Precision installation and construction within pre-agreed costs and timelines." }
          ].map((step, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-lg transition-all group">
              <h3 className="text-[#0047AB] font-black text-lg mb-3 uppercase tracking-tight group-hover:text-blue-600">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}