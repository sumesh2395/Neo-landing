import Link from "next/link";
import { Smartphone, Camera, Clapperboard } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#050B1B] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-24">

          {/* Logo & Description */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tighter font-heading text-brand-cyan">
                Bright<span className="text-brand-yellow">Path</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs font-medium">
              India's most loved online tuition platform for students from Class 6 to 12. Learn from the best, achieve the rest.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Smartphone className="w-4 h-4" />, color: "text-blue-400" },
                { icon: <Camera className="w-4 h-4" />, color: "text-pink-400" },
                { icon: <Clapperboard className="w-4 h-4" />, color: "text-purple-400" },
                // { icon: <Twitter className="w-4 h-4" />, color: "text-blue-500" },
              ].map((social, i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                  <div className={social.color}>{social.icon}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 1: Classes */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Classes</h4>
            <ul className="space-y-4">
              {["Class 6 & 7", "Class 8 & 9", "Class 10 (Boards)", "Class 11 & 12", "JEE / NEET Prep"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/40 hover:text-brand-cyan transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Teachers", "Careers", "Press", "Blog"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/40 hover:text-brand-cyan transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Support</h4>
            <ul className="space-y-4">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/40 hover:text-brand-cyan transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-white/20 font-normal">
            © 2025 BrightPath Academy. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["CBSE Aligned", "ICSE Aligned", "ISO 9001"].map((tag) => (
              <div key={tag} className="px-4 py-2 rounded-full bg-brand-cyan/10 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px]" />
    </footer>
  );
};
