import Image from "next/image";
import Link from "next/link";



const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);


export const Footer = () => {
  return (
    <footer className="relative bg-[#050B1B] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-16 mb-24">

          {/* Logo & Description */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <Image src="/neo_logo.png" alt="Logo" className="h-auto w-[150px]" width={300} height={300} />
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs font-medium">
              Kerala's trusted online tuition platform. Learn from the best, achieve the rest.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/neohome_tuition?igsh=MTJqYmp0bDUyMTcydQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <div className="text-pink-500"><InstagramIcon className="w-4 h-4" /></div>
              </a>
            </div>
          </div>

          {/* Column 1: Classes */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Classes</h4>
            <ul className="space-y-4">
              {[
                "NEET / JEE Coaching",
                "CBSE / STATE Tuition",
                "Maths & Chemistry Special",
                "English Grammar",
                "+1 +2 Commerce & Arabic"
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/40">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "#about" },
                { name: "Why Us", href: "#why-us" },
                { name: "Reviews", href: "#reviews" },
                { name: "Our Courses", href: "#standards" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-brand-cyan transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-white/20 font-normal">
            © 2026 Neo Home. All rights reserved.
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
