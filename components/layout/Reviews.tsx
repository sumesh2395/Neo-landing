"use client";
import { Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Reviews = () => {
  const reviews = [
    {
      name: "Ananya Sharma",
      info: "Class 12 - Boards (96%)",
      text: '"BrightPath\'s chemistry teacher made organic reactions feel like storytelling. I went from 58% to 96% in just 6 months!"',
    },
    {
      name: "Rohan Mehta",
      info: "Class 10 - Rank 1",
      text: '"The weekly tests and doubt sessions helped me identify gaps I never knew I had. Absolutely worth every rupee!"',
    },
    {
      name: "Priya Nair",
      info: "Class 11 - JEE Aspirant",
      text: '"The JEE-focused maths batches are incredible. Concepts are explained with examples I actually understand. Love it!"',
    },
    {
      name: "Sneha Gupta",
      info: "Class 12 - NEET Aspirant",
      text: '"The biology diagrams and memory techniques are a life-saver. I feel much more confident about my medical entrance now."',
    },
    {
      name: "Aryan Khanna",
      info: "Class 9 - NTSE Scholar",
      text: '"The foundation courses are perfect for competitive exams. The logic and mental ability sessions are my favourite!"',
    },
    {
      name: "Meera Reddy",
      info: "Class 10 - 98.4% CBSE",
      text: '"Personalised attention even in group classes is what sets them apart. They truly care about every student\'s growth."',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = Math.ceil(reviews.length / 3);

  const next = () => setActiveIndex((prev) => (prev + 1) % totalPages);
  const prev = () => setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section id="reviews" className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              Student Reviews
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] leading-[1.2] font-[800] tracking-[-0.03em] text-white max-w-4xl">
            Stories that <span className="text-[#FF5C77]">inspire</span>
          </h2>

          <p className="text-lg text-white/50 leading-relaxed font-normal max-w-2xl">
            Hear from students who transformed their grades and confidence with BrightPath Academy.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group md:px-12">
          {/* Arrows - Desktop Only Side Positioning */}
          <button 
            onClick={prev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-brand-navy/50 backdrop-blur-md hidden md:flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-navy hover:border-brand-cyan transition-all z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-brand-navy/50 backdrop-blur-md hidden md:flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-navy hover:border-brand-cyan transition-all z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {/* Group reviews into pages of 3 for desktop, or show all for mobile carousel logic */}
              {[...Array(totalPages)].map((_, pageIdx) => (
                <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews.slice(pageIdx * 3, (pageIdx + 1) * 3).map((r, i) => (
                    <div key={i} className="bg-brand-cyan/[0.03] backdrop-blur-md p-8 rounded-[2.5rem] border border-brand-cyan/10 flex flex-col justify-between h-full hover:bg-brand-cyan/[0.06] transition-all">
                      <div className="space-y-6">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                          ))}
                        </div>
                        <p className="text-base text-white/70 leading-relaxed font-medium italic italic-font">
                          {r.text}
                        </p>
                      </div>
                      
                      <div className="pt-8 border-t border-white/5 mt-auto">
                        <h4 className="text-lg font-bold text-white tracking-tight">{r.name}</h4>
                        <span className="text-brand-cyan text-xs font-bold uppercase tracking-wider">{r.info}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination & Mobile Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-brand-cyan" : "w-2 bg-white/10"}`}
                />
              ))}
            </div>
            <button onClick={next} className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
