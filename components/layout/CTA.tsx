import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center gap-8">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
          <Sparkles className="w-3 h-3 text-brand-cyan" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
            Limited Seats Available
          </span>
        </div>

        <h2 className="text-[2rem] md:text-[3rem] leading-[1.1] font-[800] tracking-[-0.03em] text-white max-w-5xl">
          Start your <span className="text-brand-cyan">free 3-days <br className="hidden md:block" /> demo class</span> today
        </h2>

        <div className="flex flex-col items-center gap-6 pt-8">
          <Button className="h-16 px-12 rounded-full bg-gradient-to-r from-brand-cyan to-[#3A7BD5] text-brand-navy font-medium text-base hover:scale-105 transition-all  group">
            Get Started Free
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-2" />
          </Button>

        </div>

        {/* Massive Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-cyan/10 blur-[150px] -z-10 rounded-full" />
      </div>
    </section>
  );
};
