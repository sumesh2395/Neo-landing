import { Sparkles, ArrowRight } from "lucide-react";

export const Standards = () => {
  const standards = [
    {
      num: "6th",
      subTitle: "Standard",
      subjects: ["Maths", "Science", "English", "SST"],
      gradient: "from-[#FF5C77] to-[#FF8C42]",
    },
    {
      num: "7th",
      subTitle: "Standard",
      subjects: ["Maths", "Science", "English", "SST"],
      gradient: "from-[#FFD700] to-[#FFA500]",
    },
    {
      num: "8th",
      subTitle: "Standard",
      subjects: ["Maths", "Science", "English", "SST"],
      gradient: "from-[#32CD32] to-[#ADFF2F]",
    },
    {
      num: "9th",
      subTitle: "Standard",
      subjects: ["Maths", "Physics", "Chemistry", "Bio"],
      gradient: "from-[#00FFFF] to-[#7FFF00]",
    },
    {
      num: "10th",
      subTitle: "Standard • Board",
      subjects: ["Maths", "Physics", "Chemistry", "Bio", "English"],
      gradient: "from-[#00D2FF] to-[#3A7BD5]",
    },
    {
      num: "11th",
      subTitle: "Standard + JEE/NEET",
      subjects: ["Physics", "Chemistry", "Maths", "Biology", "JEE Prep"],
      gradient: "from-[#8E2DE2] to-[#4A00E0]",
    },
    {
      num: "12th",
      subTitle: "Board + Competitive Exams",
      subjects: ["Physics", "Chemistry", "Maths", "Biology", "JEE Adv", "NEET"],
      gradient: "from-[#F00000] to-[#DC281E]",
    },
  ];

  return (
    <section id="standards" className="relative pt-10 pb-20 bg-brand-navy overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              Our Classes
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] leading-[1.2] font-[800] tracking-[-0.03em] text-white">
            Classes for every standard, <br className="hidden md:block" />
            tailored for <span className="text-brand-cyan">every student</span>
          </h2>

          <p className="text-lg text-white/50 leading-relaxed font-normal max-w-2xl">
            Comprehensive curriculum from 6th to 12th — covering CBSE, ICSE, and State Boards with dedicated JEE/NEET tracks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {standards.map((s, i) => (
            <div key={i} className="bg-brand-cyan/[0.03] backdrop-blur-md p-8 rounded-[2.5rem] border border-white/5 relative group hover:bg-brand-cyan/[0.06] transition-all duration-500 overflow-hidden">

              {/* Top Accent Border */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${s.gradient}`} />

              <div className="relative z-10 space-y-8">
                <div className="space-y-1">
                  <span className={`text-3xl font-heading font-black bg-gradient-to-br ${s.gradient} bg-clip-text text-transparent tracking-tighter`}>
                    {s.num}
                  </span>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] block pt-2">
                    {s.subTitle}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.subjects.map((sub, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60">
                      {sub}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-brand-cyan text-sm font-bold group/btn hover:gap-3 transition-all">
                  Explore Course
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
