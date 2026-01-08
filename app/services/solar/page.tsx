import { Sun, PanelsTopLeft, Settings, Zap, CheckCircle2, BarChart3 } from "lucide-react";

export default function SolarService() {
  const deepDetails = [
    {
      title: "Solar Installation",
      description: "We provide aesthetically pleasing solar panel installations that seamlessly blend with your architecture. These systems convert incident sunlight into usable energy for residential, commercial, and industrial buildings alike.",
      features: ["Residential Rooftop", "Commercial Arrays", "Industrial Power Plants"]
    },
    {
      title: "Solar EPC Solutions",
      description: "From start to finish, our expert team handles the Engineering, Procurement, and Construction. we deliver fully integrated, exemplary solar solutions that are custom-engineered for your specific energy requirements.",
      features: ["Site Assessment", "System Engineering", "Full Construction"]
    },
    {
      title: "Operation & Maintenance",
      description: "Experience a hassle-free journey to clean energy. Our highly skilled team undertakes all O&M tasks, ensuring maximum uptime and providing detailed performance data reporting as requested.",
      features: ["Real-time Monitoring", "Preventative Cleaning", "Data Analytics"]
    },
    {
      title: "Turnkey Solar Planning",
      description: "Beyond standard setups, we offer comprehensive solar panel planning and distribution. We manage the entire project lifecycle, including electrical integration and grid-connectivity works.",
      features: ["Grid Integration", "Load Distribution", "Custom Planning"]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 py-24 px-6 text-white rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <Sun className="text-[#0047AB]" size={32} />
              <span className="text-[#0047AB] font-black text-[10px] uppercase tracking-[0.5em]">Solar Vertical</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">
              Sustainable <br /><span className="text-[#0047AB]">Energy</span> Solutions
            </h1>
          </div>
          <div className="md:w-1/3 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
             <p className="text-slate-400 text-sm leading-relaxed italic">
               "Promoting environmental sustainability through the design and installation of top-tier solar power plants."
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
        <div className="bg-[#0047AB] rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-900/20">
          <h2 className="text-2xl font-black uppercase italic mb-6">Ready to Switch to Solar?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-sm uppercase tracking-wider font-bold">
            Reduce your carbon footprint and energy costs with our expert EPC solutions.
          </p>
          <button className="bg-white text-[#0047AB] px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all">
            Get Free Solar Consultation
          </button>
        </div>
      </section>
    </main>
  );
}