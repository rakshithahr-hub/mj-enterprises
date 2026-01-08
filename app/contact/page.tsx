"use client";
import React, { useState, useRef } from "react";
import { sendContactEmail } from "@/app/actions/sendEmail";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("sending");
    const result = await sendContactEmail(formData);
    
    if (result.success) {
      setStatus("success");
      formRef.current?.reset(); // Clear the form after success
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic">Contact Us</h1>
          <p className="mt-6 text-slate-600 max-w-xl mx-auto text-sm font-semibold leading-relaxed">
            Partner with MJ Enterprises for precision-led engineering and sustainable power solutions.
          </p>
        </div>
      </section>

      {/* 2. CONTACT & LOCATION GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: CONTACT FORM */}
          <div className="space-y-8 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 uppercase italic mb-6">Send a Message</h3>
            
            <form ref={formRef} action={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-700 block ml-1">Your Full Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 text-sm font-medium placeholder:text-slate-400 transition-all" 
                  />
                </div>
                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-700 block ml-1">Email Address</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 text-sm font-medium placeholder:text-slate-400 transition-all" 
                  />
                </div>
              </div>

              {/* PHONE */}
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-700 block ml-1">Phone Number</label>
                <input 
                  name="phone"
                  required
                  type="tel" 
                  placeholder="+91 63617 33065" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 text-sm font-medium placeholder:text-slate-400 transition-all" 
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-700 block ml-1">How can we help?</label>
                <textarea 
                  name="message"
                  required
                  rows={4} 
                  placeholder="Describe your project or inquiry..." 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none text-slate-900 text-sm font-medium placeholder:text-slate-400 resize-none transition-all"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button 
                type="submit"
                disabled={status === "sending"}
                className={`w-full text-white font-black uppercase tracking-[0.3em] text-[10px] py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3
                  ${status === "sending" ? "bg-slate-400 cursor-not-allowed" : "bg-[#0047AB] hover:bg-slate-900 hover:shadow-blue-200"}
                `}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    Processing...
                  </>
                ) : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100 animate-in fade-in slide-in-from-bottom-2">
                  <CheckCircle2 size={18} />
                  <p className="text-[10px] font-black uppercase tracking-widest">Message Sent Successfully!</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                  <AlertCircle size={18} />
                  <p className="text-[10px] font-black uppercase tracking-widest">Failed to send. Please try again.</p>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT COLUMN: MAP & ADDRESS */}
          <div className="flex flex-col gap-8">
            <div className="w-full h-[350px] rounded-[2rem] overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6416625895315!2d77.4815467750768!3d12.99475478732247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8745339f4d%3A0xc3f17d7454271811!2sByadrahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-10 bg-[#0047AB] rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors"></div>
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-12 h-12 bg-white text-[#0047AB] flex items-center justify-center rounded-2xl font-black italic shrink-0 text-xl shadow-lg">MJ</div>
                <div>
                  <h4 className="font-black text-xl uppercase tracking-tight italic mb-3 text-white">Registered Office</h4>
                  <address className="not-italic text-sm text-blue-100 leading-relaxed font-medium">
                    #94, 12th Cross, Income Tax Layout,<br />
                    Bharath Nagar 1st Stage, Byadrahalli,<br />
                    Bangalore-560091.
                  </address>
                  
                  <div className="mt-8 flex flex-col gap-4">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-200 opacity-70">Email Support</p>
                      <p className="text-sm font-bold mt-1">mjenterprises179@gmail.com</p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-200 opacity-70">GST Identification</p>
                      <p className="text-xs font-mono text-[#FF8C00] font-black mt-1 bg-white/10 inline-block px-2 py-1 rounded">29BFRPH2421B1ZP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}