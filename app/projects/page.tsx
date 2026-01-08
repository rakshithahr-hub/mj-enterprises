"use client";

import { ExternalLink, MapPin, Quote, Building2, Zap, Sun, Shield } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Commercial Building Construction",
      category: "Civil",
      location: "Bangalore",
      description: "Full-scale structural development and civil works for a multi-story commercial complex.",
      image: "/civil.jpg", 
    },
    {
      title: "Industrial Solar EPC",
      category: "Solar",
      location: "Karnataka",
      description: "Design and installation of a grid-connected solar power plant for an industrial facility.",
      image: "/solars.jpg",
    },
    {
      title: "High-Voltage Substation",
      category: "Electrical",
      location: "Bangalore",
      description: "Complete electrification, HT panel installation, and KPTCL liaisoning for power sanction.",
      image: "/electricals.jpg",
    },
    {
      title: "Residential Turnkey Project",
      category: "Civil",
      location: "Bangalore",
      description: "End-to-end design and construction of a luxury residential villa including electrical and solar integration.",
      image: "/p4.jpg",
    },
    {
      title: "Corporate Electrical AMC",
      category: "Electrical",
      location: "Bangalore",
      description: "Ongoing maintenance and testing of transformers and generators for a major IT park.",
      image: "/p5.jpg",
    }
  ];

  const clients = [
    { name: "Tata Power Solar", src: "/Tata_Power_Solar_logo.png" },
    { name: "Adani Energy Solutions", src: "/adani.jpg" },
    { name: "Sterling & Wilson", src: "/Sterling_&_Wilson_logo.png" },
    { name: "Amara Raja", src: "/Amara_raja_group.png" },
  ];

  return (
    <main className="bg-white min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <section className="py-24 bg-slate-900 text-white rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#0047AB] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">
            Engineering <br /><span className="text-[#0047AB]">Excellence</span> Delivered
          </h1>
          <p className="mt-8 text-slate-400 max-w-xl text-sm uppercase tracking-widest font-bold leading-relaxed">
            Showcasing our 5+ successfully delivered projects across Karnataka, ranging from civil infrastructure to renewable energy.
          </p>
        </div>
      </section>

      {/* 2. PROJECTS GRID - ALL 5 PROJECTS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl">
                <div className="absolute inset-0 bg-[#0047AB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                   <div className="bg-white p-4 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                      <ExternalLink className="text-[#0047AB]" />
                   </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              <div className="mt-8 space-y-3 px-4">
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0047AB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin size={10} />
                    <span className="text-[9px] font-black uppercase tracking-widest">{project.location}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase italic text-slate-900 group-hover:text-[#0047AB] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CLIENTS SECTION - PDF STYLE */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 whitespace-nowrap">
              Our Clients
            </h2>
            <div className="h-[1px] w-full bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {clients.map((client, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4 group">
                <div className="h-24 w-full relative flex items-center justify-center">
                  <img 
                    src={client.src} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                </div>
                <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#0047AB] transition-colors text-center">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QUALITY GUARANTEE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] p-12 border-l-8 border-[#0047AB] relative overflow-hidden">
          <Quote className="absolute top-8 right-12 text-slate-200 opacity-50" size={100} />
          <div className="relative z-10">
            <h4 className="text-[#0047AB] font-black text-[10px] uppercase tracking-[0.4em] mb-6">Quality Assurance</h4>
            <p className="text-slate-700 text-2xl md:text-3xl font-medium italic leading-relaxed">
              "Customer satisfaction is our <span className="text-[#0047AB] font-black">top priority</span>, and we work closely with our clients throughout every stage of the project to ensure we meet their requirements."
            </p>
            <p className="mt-8 text-slate-400 text-[10px] font-black uppercase tracking-widest">— MJ Enterprises Acknowledgment</p>
          </div>
        </div>
      </section>

      {/* 5. SUMMARY STATS & CTA */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#0047AB] opacity-10 blur-3xl rounded-full"></div>
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-2xl font-black uppercase italic">Reliable Engineering</h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-2">Successful execution since 2023</p>
          </div>
          <div className="flex gap-12 relative z-10">
             <div className="text-center">
                <div className="text-4xl font-black text-[#0047AB] italic">5+</div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Projects</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-black text-[#0047AB] italic">30+</div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Team Size</div>
             </div>
          </div>
          <Link href="/contact" className="bg-[#0047AB] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#0047AB] transition-all relative z-10">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}