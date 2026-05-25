"use client";
import Image from "next/image";
import { Sparkles, ChevronLeft, ChevronRight, User } from "lucide-react";
import { useState } from "react";
import facultyData from "@/data/faculty.json";

export default function Faculty() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Use 2 cards per page for a wider, horizontal card layout on desktop
  const itemsPerPage = 2;
  const totalPages = Math.ceil(facultyData.length / itemsPerPage);

  const next = () => setActiveIndex((prev) => (prev + 1) % totalPages);
  const prev = () => setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section id="faculty" className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              World-Class Educators
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] leading-[1.2] font-[800] tracking-[-0.03em] text-white max-w-4xl">
            Meet Our <span className="text-brand-yellow">Expert Faculty</span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed font-bold max-w-3xl">
            Learn from the best minds who bring years of experience and passion to help you succeed.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative md:px-8 lg:px-12">
          {/* Arrows */}
          <button 
            onClick={prev}
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-brand-navy/50 backdrop-blur-md hidden md:flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-navy hover:border-brand-cyan transition-all z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-brand-navy/50 backdrop-blur-md hidden md:flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-navy hover:border-brand-cyan transition-all z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden pb-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {[...Array(totalPages)].map((_, pageIdx) => (
                <div key={pageIdx} className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-6 px-2">
                  {facultyData.slice(pageIdx * itemsPerPage, (pageIdx + 1) * itemsPerPage).map((faculty, i) => (
                    <div 
                      key={i} 
                      className="bg-brand-cyan/[0.03] backdrop-blur-md rounded-[2.5rem] border border-brand-cyan/10 flex flex-col sm:flex-row overflow-hidden hover:bg-brand-cyan/[0.06] hover:border-brand-cyan/30 hover:-translate-y-2 transition-all duration-300 group h-full"
                    >
                      {/* Image Container - Now on the left side */}
                      <div className="relative w-full sm:w-[40%] shrink-0 h-64 sm:h-auto bg-[#0A1128] overflow-hidden flex items-center justify-center border-b sm:border-b-0 sm:border-r border-white/5">
                        {faculty.image ? (
                          <Image 
                            src={faculty.image} 
                            alt={faculty.name} 
                            fill 
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <User className="w-16 h-16 text-white/20" />
                        )}
                        {/* No gradient overlay needed here since it's a clean split layout! */}
                      </div>
                      
                      {/* Details Section */}
                      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-brand-navy/30 justify-center">
                        {/* Name & Subject */}
                        <div className="mb-6">
                          <h4 className="text-2xl font-bold text-white tracking-tight leading-tight">{faculty.name}</h4>
                          <span className="text-brand-cyan text-sm font-bold uppercase tracking-widest mt-1 block">
                            {faculty.subject}
                          </span>
                        </div>

                        <div className="flex flex-col gap-4">
                          {faculty.experience && (
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Experience</span>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-xs font-bold">
                                  {faculty.experience}
                                </span>
                              </div>
                            </div>
                          )}
                          
                          {(faculty.classes || faculty.syllabus) && (
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Expertise</span>
                              <div className="flex flex-wrap gap-2">
                                {faculty.classes && (
                                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold">
                                    {faculty.classes}
                                  </span>
                                )}
                                {faculty.syllabus && (
                                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold">
                                    {faculty.syllabus}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                          {faculty.languages && (
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Languages</span>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan/90 text-xs font-semibold">
                                  {faculty.languages}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination & Mobile Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button onClick={prev} className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white active:bg-brand-cyan active:text-brand-navy transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-brand-cyan" : "w-2 bg-white/10 hover:bg-white/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white active:bg-brand-cyan active:text-brand-navy transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
