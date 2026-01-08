"use client";
import { useState } from "react"; // Added for menu toggle
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react"; // Import Icons for the menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-[100] border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between h-20 md:h-24 items-center">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 focus:outline-none">
          <div className="relative w-12 h-12 md:w-20 md:h-20">
            <Image 
              src="/image/logo-removebg-preview.png" 
              alt="MJ Enterprises Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-tighter text-sm md:text-xl text-slate-900 leading-none">
              MJ ENTERPRISES
            </span>
            <span className="text-[7px] md:text-[9px] tracking-[0.2em] text-[#0047AB] uppercase font-black">
              Engineering Excellence
            </span>
          </div>
        </Link>
        
        {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                pathname === link.href ? "text-[#0047AB]" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE: AUTH + HAMBURGER */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-[10px] font-black uppercase px-3">Login</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* THE THREE LINES (HAMBURGER BUTTON) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 p-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={`block text-xs font-black uppercase tracking-[0.2em] ${
                pathname === link.href ? "text-[#0047AB]" : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-50 flex flex-col gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-left text-xs font-black uppercase tracking-widest text-[#0047AB]">Login</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#0047AB] text-white p-3 rounded-lg text-xs font-black uppercase text-center">Sign Up</button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
}