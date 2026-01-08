"use client";

import Link from "next/link";
import Image from "next/image"; // Added Image import
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  MessageCircle, 
  Clock, 
  ShieldCheck 
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy & Terms", href: "/legal" }, 
  ];

  const whatsappNumber = "916361733065";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND & CONTACT */}
          <div className="space-y-6">
            {/* LOGO UPDATED HERE */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-20 h-20 overflow-hidden rounded-full">
                <Image 
                  src="/image/logo-removebg-preview.png" 
                  alt="MJ Enterprises Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter uppercase italic leading-none">MJ Enterprises</span>
                <span className="text-[7px] tracking-[0.3em] text-[#0047AB] uppercase font-bold">Engineering Excellence</span>
              </div>
            </Link>
            
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4 group">
                <MapPin className="w-5 h-5 text-[#0047AB] mt-1 shrink-0 stroke-[2.5px]" />
                <p className="text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                  #94, 12th Cross, Income Tax Layout, Bharath Nagar 1st Stage, Byadrahalli, Bangalore-560091
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <Phone className="w-5 h-5 text-[#0047AB] shrink-0 stroke-[2.5px]" />
                <a href={`tel:+${whatsappNumber}`} className="text-gray-400 group-hover:text-white font-bold tracking-wider transition-colors">
                  +91 63617 33065
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <Mail className="w-5 h-5 text-[#0047AB] shrink-0 stroke-[2.5px]" />
                <a href="mailto:mjenterprises179@gmail.com" className="text-gray-400 group-hover:text-white font-bold transition-colors">
                  mjenterprises179@gmail.com
                </a>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 pt-2">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp" 
                className="p-3 bg-white/5 border border-gray-800 rounded-full hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all group"
              >
                <MessageCircle size={22} className="text-[#25D366] stroke-[2.5px]" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0047AB]">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[11px] text-gray-500 hover:text-white transition-all uppercase tracking-[0.2em] font-bold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: BUSINESS HOURS */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#0047AB] stroke-[2.5px]" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0047AB]">Working Hours</h4>
            </div>
            <div className="space-y-4 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
              <div className="flex justify-between border-b border-gray-900 pb-2">
                <span className="text-gray-500">Monday — Friday</span>
                <span className="text-white">09:00 — 19:00</span>
              </div>
              <div className="flex justify-between border-b border-gray-900 pb-2">
                <span className="text-gray-500">Saturday</span>
                <span className="text-white">09:00 — 16:00</span>
              </div>
              <div className="flex justify-between pb-2 opacity-30">
                <span className="text-gray-600">Sunday</span>
                <span className="italic">Closed</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: CERTIFICATION & GST */}
          <div className="space-y-6 bg-[#0047AB]/5 p-8 rounded-3xl border border-[#0047AB]/10">
            <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-white stroke-[2.5px]" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Certification</h4>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-widest">
              An ISO certified engineering firm specializing in renewable and civil energy infrastructure.
            </p>
            <div className="pt-2">
              <p className="text-[9px] text-gray-600 uppercase tracking-widest mb-2">GST Registration</p>
              <div className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-center">
                <p className="text-xs font-mono text-[#0047AB] font-bold uppercase tracking-widest">29BFRPH2421B1ZP</p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-900 text-center">
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.5em] font-black">
            © 2026 MJ Enterprises | Bangalore, Karnataka
          </p>
        </div>
      </div>
    </footer>
  );
}