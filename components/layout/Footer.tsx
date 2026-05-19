import Link from "next/link";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
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
              <span className="text-2xl font-black tracking-tighter font-heading text-brand-cyan">
                Neo<span className="text-white ml-1">Home</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs font-medium">
              Kerala's trusted online tuition platform. Learn from the best, achieve the rest.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FacebookIcon className="w-4 h-4" />, color: "text-blue-500" },
                { icon: <InstagramIcon className="w-4 h-4" />, color: "text-pink-500" },
                { icon: <TwitterIcon className="w-4 h-4" />, color: "text-blue-400" },
                { icon: <YoutubeIcon className="w-4 h-4" />, color: "text-red-500" },
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
