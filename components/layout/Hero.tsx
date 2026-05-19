import { Button } from "@/components/ui/button";
import { Sparkles, Star, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 overflow-visible overflow-x-clip banner-gradient">
      {/* Grid Background Layer */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_550px] gap-12 items-end">
          {/* Left Content - The Massive Stacked Headline */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-brand-cyan/20 border border-white/10 backdrop-blur-md self-start">
              <span className="text-brand-yellow text-xs">✦</span>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-cyan">
                Kerala's Trusted online tuition platform
              </span>
            </div>
            <div className="flex flex-col space-y-0 md:-space-y-4">
              <h2 className="hero-headline text-white">CBSE / <span className="text-brand-cyan">STATE</span></h2>
              <h2 className="hero-headline text-white">NEET / JEE</h2>
              <h2 className="hero-headline text-brand-yellow">ICSE</h2>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2 pt-2">
              <p className="text-sm md:text-lg text-white/70 max-w-xl leading-relaxed font-medium">
                Live interactive classes • Experienced Teachers • One to one & group tuition • Flexible Timings • Affordable fees
              </p>
              <p className="text-sm font-bold text-brand-yellow italic">
                Good Expert teachers, live classes, better Results
              </p>
            </div>

            {/* Buttons section removed */}

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
              {[
                { val: "500+", label: "Students" },
                { val: "35+", label: "Teachers" },
                { val: "2+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-3xl md:text-4xl font-heading font-[800] text-brand-cyan tracking-[-0.03em]">
                    {stat.val}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold  tracking-[0.2em] text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - The High-Fidelity Live Card */}
          <div className="relative lg:mt-24 w-full max-w-[550px] justify-self-end lg:sticky lg:top-32 self-start">
            <div className="glass-card rounded-[2.5rem] p-8 
             relative overflow-hidden group">
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-pink-500/50 opacity-80" />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30">
                  <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Featured Course</span>
                </div>
              </div>

              {/* Course Title */}
              <div className="space-y-3 mb-5">
                <h3 className="text-xl md:text-2xl font-bold leading-[1.1] tracking-tight text-white">
                  NEET Intensive Batch
                </h3>
                <p className="text-white/50 text-sm font-medium tracking-wide">
                  Physics • Chemistry • Biology
                </p>
              </div>

              {/* Progress removed */}

              {/* Card Footer */}
              <div className="pt-10 flex items-center justify-between border-t border-white/5 mt-5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      { l: "A" },
                      { l: "R" },
                      { l: "S" },
                    ].map((user, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black border-[3px] border-[#050B1B] text-[#050B1B] bg-gradient-to-br from-pink-400 to-blue-400"
                      >
                        {user.l}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-[#353C54] flex items-center justify-center text-[10px] font-black border-[3px] border-[#050B1B] text-brand-cyan">
                      +
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                    248 students joined
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  <span className="text-sm font-semibold tracking-tighter text-brand-yellow">4.9</span>
                </div>
              </div>
            </div>

            {/* Decorative Ambient Glows */}
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
