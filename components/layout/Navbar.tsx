"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { openDemoModal } from "@/components/layout/DemoModal";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Why Us", "Reviews", "Faculty", "Standards"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#080E21] border-b border-white/5 backdrop-blur-md">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/neo_logo.png" alt="Logo" className="h-auto w-[150px]" width={300} height={300} />

        </Link>

        {/* Desktop Nav & CTA */}
        <div className="flex items-center gap-12">
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold tracking-widest text-white/70 hover:text-brand-cyan transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button onClick={openDemoModal} className="bg-brand-cyan hover:bg-[#00B8E6] text-brand-navy font-medium tracking-wider rounded-full px-7 h-12 text-sm transition-all">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] z-[9999] bg-brand-navy opacity-100 animate-in slide-in-from-right duration-300">
          <div className="flex flex-col p-8 gap-8 bg-brand-navy h-screen border-t border-white/5">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold tracking-tight text-white/90 hover:text-brand-cyan transition-all active:scale-95"
              >
                {item}
              </Link>
            ))}
            <div className="pt-8 border-t border-white/5">
              <Button
                className="w-full bg-brand-cyan hover:bg-[#00B8E6] text-brand-navy font-bold tracking-wider rounded-2xl h-14 text-lg transition-all"
                onClick={() => {
                  setIsOpen(false);
                  openDemoModal();
                }}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
