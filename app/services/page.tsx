import Link from "next/link";
import { Building2, Zap, Sun, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Civil Engineering",
      href: "/services/civil",
      image: "/civil.jpg", // Make sure this exists in public/ folder
      icon: <Building2 className="text-[#0047AB]" size={40} />,
      description: "Bringing your vision to life with the highest standards of quality and structural integrity.",
      subServices: ["Structural Designing", "Construction", "Turnkey Solutions"]
    },
    {
      title: "Electrical Engineering",
      href: "/services/electrical",
      image: "/electricals.jpg", // Make sure this exists in public/ folder
      icon: <Zap className="text-[#0047AB]" size={40} />,
      description: "High-quality services enhancing the functionality and safety of industrial electrical systems.",
      subServices: ["HT & LT Distribution", "Earthing Protection", "Liaisoning"]
    },
    {
      title: "Solar Services",
      href: "/services/solar",
      image: "/solars.jpg", // Make sure this exists in public/ folder
      icon: <Sun className="text-[#0047AB]" size={40} />,
      description: "Top-tier solar energy solutions helping clients reduce their environmental footprint.",
      subServices: ["Solar Installation", "EPC Solutions", "O&M Services"]
    }
  ];

  return (
    <main className="bg-white min-h-screen pb-20">
      <section className="py-24 bg-slate-50 border-b border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#0047AB] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic">Core Services</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {serviceCategories.map((category, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
            
            {/* CONTENT BLOCK */}
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                {category.icon}
                <h2 className="text-3xl font-black uppercase italic text-slate-900">{category.title}</h2>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {category.description}
              </p>
              
              <Link 
                href={category.href} 
                className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-lg"
              >
                View Full Details <ArrowRight size={14} />
              </Link>

              <div className="flex flex-wrap gap-3 pt-4">
                {category.subServices.map((sub, sIdx) => (
                  <span key={sIdx} className="px-4 py-2 bg-slate-100 text-slate-600 text-[9px] font-black uppercase tracking-widest rounded-full border border-slate-200">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE BLOCK */}
            <Link href={category.href} className="md:w-1/2 w-full group overflow-hidden rounded-[3rem] shadow-2xl h-[450px] relative">
              {/* Blue Overlay Effect */}
              <div className="absolute inset-0 bg-[#0047AB]/20 group-hover:bg-[#0047AB]/0 transition-all duration-500 z-10"></div>
              
              {/* Actual Image */}
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Corner Tag */}
              <div className="absolute top-8 left-8 z-20">
                <span className="bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-xl">
                  {category.title.split(' ')[0]} Project
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}