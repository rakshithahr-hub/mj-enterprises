import { Building2, HardHat, Ruler, ShieldCheck, CheckCircle2, Briefcase } from "lucide-react";

export default function CivilService() {
  const deepDetails = [
    {
      title: "Structural Designing",
      description: "Our core strength lies in designing perfectly strong structures using modern concepts and rigorous engineering procedures[cite: 121, 122]. We ensure every design meets the highest architectural and safety integrity.",
      features: ["Modern Design Concepts", "RCC Structures", "Load-Bearing Analysis"]
    },
    {
      title: "Construction & Civil Works",
      description: "We deliver exceptional building construction services, ensuring every project meets the highest standards of quality, safety, and efficiency. Our team manages the entire build process with technical precision.",
      features: ["Residential Construction", "Commercial Hubs", "Industrial Infrastructure"]
    },
    {
      title: "Contract Works",
      description: "Our contract services encompass a wide range of engineering and construction projects. We are dedicated to ensuring top-quality execution from the initial start to the final finish[cite: 126].",
      features: ["Project Management", "Site Execution", "Quality Audits"]
    },
    {
      title: "Turnkey Solutions",
      description: "Our turnkey solutions are tailored to meet the specific needs of our clients[cite: 127, 128]. We provide seamless integration and efficient delivery of projects from the very first conception to final completion[cite: 128].",
      features: ["Concept to Completion", "Material Procurement", "Budget Optimization"]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 py-24 px-6 text-white rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-[#0047AB]" size={32} />
              <span className="text-[#0047AB] font-black text-[10px] uppercase tracking-[0.5em]">Civil Vertical</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">
              Exceptional <br /><span className="text-[#0047AB]">Engineering</span> Standards
            </h1>
          </div>
          <div className="md:w-1/3 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
             <p className="text-slate-400 text-sm leading-relaxed italic">
               "Bringing your vision to life with the highest standards of quality, safety, and sustainability[cite: 107]."
             </p>
          </div>
        </div>
      </section>

      {/* DETAILED EXPLANATION SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid gap-20">
          {deepDetails.map((service, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-12 items-start border-b border-slate-100 pb-20 last:border-0">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-black uppercase italic text-slate-900">{service.title}</h3>
                <div className="h-1 w-20 bg-[#0047AB] mt-4"></div>
              </div>
              <div className="md:w-2/3 space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-slate-500">
                      <CheckCircle2 size={16} className="text-[#0047AB]" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto mb-20">
        <div className="bg-[#0047AB] rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-2xl font-black uppercase italic mb-6">Discuss Your Project</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm uppercase tracking-wider font-bold">
            From civil works to large-scale contracts, our expert engineers are ready to deliver excellence[cite: 58, 110].
          </p>
          <button className="bg-white text-[#0047AB] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all">
            Get a Detailed Proposal
          </button>
        </div>
      </section>
    </main>
  );
}