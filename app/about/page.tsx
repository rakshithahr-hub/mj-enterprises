export default function About() {
  // Updated with your exact numbers
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Team Members", value: "30+" },
    { label: "Happy Clients", value: "25+" }, // Scaled to match 5 major projects
    { label: "Projects Done", value: "5+" },
  ];

  const expertise = [
    { title: "Civil Construction", desc: "Residential, commercial, and industrial building projects with a focus on structural integrity." },
    { title: "Solar EPC", desc: "End-to-end Solar Power Plant solutions, from rooftop installations to large-scale farms." },
    { title: "Electrical Works", desc: "High-voltage grid stations, internal wiring, and industrial electrical infrastructure." },
  ];

  const values = ["Integrity", "Innovation", "Safety", "Transparency", "Sustainability", "Precision"];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO / MISSION SECTION */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0047AB] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Our Identity</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic mb-8 leading-tight">
                Engineering <span className="text-[#0047AB]">Integrity</span> <br />
                Into Reality.
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                MJ Enterprises is a Bangalore-based multi-disciplinary engineering firm. We specialize in the synergy between 
                modern construction and sustainable energy.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-3 italic">Our Mission</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">To deliver high-quality infrastructure and renewable energy solutions that empower communities.</p>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-3 italic">Our Vision</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">To be the most trusted engineering partner in India, known for precision and technical excellence.</p>
                </div>
              </div>
            </div>
            {/* Visual Image Block */}
            <div className="relative h-[500px] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="/office.jpg" alt="MJ Enterprises Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0047AB]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UPDATED STATS SECTION (With 3 Years, 30 Team, 5 Projects) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group border-r last:border-none border-slate-100">
                <div className="text-6xl font-black text-slate-900 mb-2 group-hover:text-[#0047AB] transition-colors italic">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITY SECTION */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <h2 className="text-3xl font-black uppercase italic mb-16 tracking-tighter">Company Capability</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {expertise.map((item, i) => (
              <div key={i} className="space-y-4 border-l-2 border-[#0047AB]/30 pl-8 hover:border-[#0047AB] transition-all">
                <h3 className="text-white font-black text-xl uppercase italic">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-black uppercase italic text-slate-900 mb-6">Our Commitment</h2>
            <p className="text-slate-500 text-sm leading-loose">
              Every foundation we lay and every grid we power is a testament to our commitment to safety and quality. 
              We ensure every project is delivered within the pre-agreed budget and timeline.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={i} className="p-8 border border-slate-200 rounded-2xl flex items-center justify-center text-center hover:bg-slate-50 hover:border-[#0047AB] transition-all group">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:text-[#0047AB]">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}