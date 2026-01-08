"use client";

import { ShieldCheck, FileText, Scale } from "lucide-react";

export default function LegalPage() {
  return (
    <main className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic italic">
            Legal <span className="text-[#0047AB]">Information</span>
          </h1>
          <p className="mt-4 text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            Privacy Policy & Terms of Service
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-20">
        
        {/* PRIVACY POLICY SECTION */}
        <section id="privacy" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="text-[#0047AB]" size={32} />
            <h2 className="text-3xl font-black uppercase italic text-slate-900">Privacy Policy</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 font-medium space-y-6">
            <p>At **MJ Enterprises**, we value your privacy. This policy outlines how we handle data for our civil, solar, and electrical engineering operations.</p>
            
            <h3 className="text-slate-900 font-bold uppercase text-sm">1. Data Collection</h3>
            <p>We collect name, email, and contact details only when voluntarily submitted via our contact forms for project inquiries.</p>

            <h3 className="text-slate-900 font-bold uppercase text-sm">2. Data Usage</h3>
            <p>Your information is used strictly for project communication, government liaisoning (KPTCL/BESCOM), and service delivery. We do not sell your data to third parties.</p>

            <h3 className="text-slate-900 font-bold uppercase text-sm">3. Security</h3>
            <p>We implement physical and digital security measures to protect sensitive project blueprints and client data.</p>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* TERMS & CONDITIONS SECTION */}
        <section id="terms" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <Scale className="text-[#0047AB]" size={32} />
            <h2 className="text-3xl font-black uppercase italic text-slate-900">Terms & Conditions</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 font-medium space-y-6">
            <p>By engaging with **MJ Enterprises**, you agree to the following professional terms:</p>

            <h3 className="text-slate-900 font-bold uppercase text-sm">1. Service Scope</h3>
            <p>All engineering works (Civil, Solar, Electrical) are performed according to the agreed-upon Quotation and Work Order.</p>

            <h3 className="text-slate-900 font-bold uppercase text-sm">2. Compliance</h3>
            <p>We ensure all installations meet Indian Electricity Rules (IER) and local building codes. Clients are responsible for providing clear site access.</p>

            <h3 className="text-slate-900 font-bold uppercase text-sm">3. Payment & Timeline</h3>
            <p>Project timelines are estimates based on standard working conditions and timely government approvals.</p>
          </div>
        </section>

      </div>
    </main>
  );
}