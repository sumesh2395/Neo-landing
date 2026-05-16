import Image from "next/image";
import { Target, Smartphone, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden bg-brand-navy">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image & Stats Overlay (Order 2 on mobile, 1 on desktop) */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative flex items-center justify-center aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden glass-card border-white/5">
              <Image
                src="/graduate-hat.png"
                alt="About BrightPath"
                width={150}
                height={150}
                className="object-contain opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Stats Overlay - Top Left */}
              <div className="absolute top-6 left-6 glass-card p-4 rounded-2xl border-white/10 backdrop-blur-md">
                <span className="block text-2xl font-black text-brand-cyan tracking-tighter">+34%</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Avg. Score Improvement</span>
              </div>

              {/* Stats Overlay - Bottom Right */}
              <div className="absolute bottom-6 right-6 glass-card p-4 rounded-2xl border-white/10 backdrop-blur-md">
                <span className="block text-2xl font-black text-brand-cyan tracking-tighter">50,000+</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Students Taught</span>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[100px]" />
          </div>

          {/* Right Column - Content (Order 1 on mobile, 2 on desktop) */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 self-start">
              <Sparkles className="w-3 h-3 text-brand-cyan" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
                About Us
              </span>
            </div>

            <h2 className="text-[2rem] md:text-[3rem] leading-[1.1] font-[800] tracking-[-0.03em] text-white">
              Built by educators,<br />
              designed for <br />
              <span className="text-brand-cyan">students</span>
            </h2>

            <p className="text-lg text-white/50 leading-relaxed font-normal max-w-xl">
              BrightPath Academy was founded in 2019 by IIT and IIM alumni who believed every student deserves world-class education, regardless of location or background.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-4 mt-4">
              {/* Feature 1 */}
              <div className="bg-brand-cyan/[0.03] backdrop-blur-md p-6 rounded-[2rem] border border-brand-cyan/10 flex items-start gap-6 hover:bg-brand-cyan/[0.06] transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-brand-cyan" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-tight">Personalised Learning Paths</h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    AI-powered assessments that adapt to your pace and identify weak areas for targeted improvement.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-brand-cyan/[0.03] backdrop-blur-md p-6 rounded-[2rem] border border-brand-cyan/10 flex items-start gap-6 hover:bg-brand-cyan/[0.06] transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7 text-brand-cyan" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-tight">Learn Anywhere, Anytime</h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    Access recorded sessions, notes, and doubt-solving 24/7 from any device—phone, tablet, or laptop.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
