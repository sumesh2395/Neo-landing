import { Sparkles, Users } from "lucide-react";

export const Results = () => {
  const results = [
    {
      class: "Class 10 CBSE",
      score: "85 - 100%",
      students: 9,
      gradient: "from-[#FFD700] to-[#FFA500]", // Yellow
    },
    {
      class: "Class 10 CBSE",
      score: "80%+",
      students: 10,
      gradient: "from-[#00FFFF] to-[#7FFF00]", // Cyan
    },
    {
      class: "Class 10 CBSE",
      score: "60 - 70%",
      students: 14,
      gradient: "from-[#FF1493] to-[#FF69B4]", // Pink
    },
    {
      class: "Class 10 State",
      score: "70 - 85%",
      students: 19,
      gradient: "from-[#32CD32] to-[#ADFF2F]", // Green
    },
    {
      class: "Class 9 CBSE",
      score: "60 - 75%",
      students: 23,
      gradient: "from-[#00D2FF] to-[#3A7BD5]", // Blue
    }
  ];

  return (
    <section id="results" className="relative pt-10 pb-20 bg-brand-navy overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              Our Achievements
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] leading-[1.2] font-[800] tracking-[-0.03em] text-white">
            Outstanding <span className="text-brand-cyan italic">Results</span>
          </h2>

          <p className="text-lg text-white/50 leading-relaxed font-normal max-w-2xl">
            We are proud of our students' exceptional performance across various boards and classes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {results.map((r, i) => (
            <div key={i} className="bg-brand-cyan/[0.03] backdrop-blur-md p-6 rounded-[2rem] border border-white/5 relative group hover:bg-brand-cyan/[0.06] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[180px] shadow-lg">
              
              {/* Top Accent Border */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${r.gradient}`} />

              <div className="relative z-10 space-y-6 flex flex-col flex-grow">
                
                <div>
                  <h4 className="text-xs font-bold text-white/50 uppercase tracking-[0.1em] mb-3">
                    {r.class}
                  </h4>
                  <div className="text-[2rem] font-semibold text-white tracking-tight leading-none">
                    {r.score}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-white/70">
                    <Users className="w-4 h-4 text-white/50" />
                    <span className="text-sm font-medium">{r.students} Students</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
