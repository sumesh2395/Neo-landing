import {
  Sparkles,
  UserCheck,
  GraduationCap,
  LineChart,
  ClipboardCheck,
  Users,
  Clock,
  Wallet,
  Languages,
  Target,
} from "lucide-react";

const reasons = [
  {
    title: "Personalized One-to-One Learning",
    icon: UserCheck,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10 border-brand-cyan/20",
  },
  {
    title: "Expert Subject Specialists",
    icon: GraduationCap,
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/10 border-brand-yellow/20",
  },
  {
    title: "Regular Progress Reports",
    icon: LineChart,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    title: "Weekly Tests & Assignments",
    icon: ClipboardCheck,
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
  },
  {
    title: "Parent-Teacher Meetings",
    icon: Users,
    color: "text-pink-400",
    bg: "bg-pink-400/10 border-pink-400/20",
  },
  {
    title: "Flexible Timings for UAE & India",
    icon: Clock,
    color: "text-sky-400",
    bg: "bg-sky-400/10 border-sky-400/20",
  },
  {
    title: "Affordable Fees",
    icon: Wallet,
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    title: "Bilingual Support (English & Malayalam)",
    icon: Languages,
    color: "text-teal-400",
    bg: "bg-teal-400/10 border-teal-400/20",
  },
  {
    title: "NEET & JEE Foundation Programs",
    icon: Target,
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/20",
  },
];

export const WhyParentsChoose = () => {
  return (
    <section id="why-parents-choose" className="relative py-16 md:py-24 bg-brand-navy">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header with generous space below */}
        <div className="flex flex-col items-center text-center gap-5 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              Why Parents Choose Us
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] leading-[1.25] font-[800] tracking-[-0.03em] text-white max-w-3xl">
            Why Parents Choose <span className="text-brand-cyan">Neo Home Tuition</span>
          </h2>
        </div>

        {/* 9 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-5 p-6 rounded-3xl bg-brand-cyan/[0.03] backdrop-blur-md border border-white/5 group hover:border-brand-cyan/30 hover:bg-brand-cyan/[0.06] transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${item.bg} border group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>

                <h3 className="text-base md:text-lg font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
