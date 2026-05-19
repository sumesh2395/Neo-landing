import { Sparkles, GraduationCap, MessageSquare, LineChart, PlayCircle, ClipboardList, Wallet } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "Female Teachers Only",
      desc: "We prioritize a comfortable and safe learning environment, guided entirely by experienced female educators.",
      icon: <GraduationCap className="w-7 h-7 text-brand-yellow" />,
      iconBg: "bg-brand-yellow/10 border-brand-yellow/20",
    },
    {
      id: "02",
      title: "Extra Caring",
      desc: "Our tutors provide personalized attention, treating every student with the patience and care they deserve.",
      icon: <MessageSquare className="w-7 h-7 text-brand-cyan" />,
      iconBg: "bg-brand-cyan/10 border-brand-cyan/20",
    },
    {
      id: "03",
      title: "Rewards for Good Scores",
      desc: "Gifts will be given if you score well! We actively motivate students to perform their best with exciting rewards.",
      icon: <Sparkles className="w-7 h-7 text-pink-400" />,
      iconBg: "bg-pink-400/10 border-pink-400/20",
    },
  ];

  return (
    <section id="why-us" className="relative py-16 md:py-32 bg-brand-navy overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] leading-[1.2] font-[800] tracking-[-0.03em] text-white ">
            Why <span className="text-brand-yellow italic">Neo Home?</span>
          </h2>

          <p className="text-lg text-white/50 leading-relaxed font-normal max-w-2xl">
            We combine the best educators with a caring environment to deliver an unmatched online learning experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.id} className="bg-brand-cyan/[0.03] backdrop-blur-md p-8 rounded-[2.5rem] border border-brand-cyan/10 relative group overflow-hidden hover:bg-brand-cyan/[0.06] transition-all duration-500">
              {/* Background Number */}
              <span className="absolute top-6 right-8 text-[5rem] font-heading font-black text-white/5 select-none transition-colors group-hover:text-white/[0.08]">
                {f.id}
              </span>

              <div className={`w-14 h-14 rounded-2xl ${f.iconBg} border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {f.icon}
              </div>

              <div className="space-y-3 relative z-10">
                <h4 className="text-xl font-bold text-white tracking-tight">{f.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
