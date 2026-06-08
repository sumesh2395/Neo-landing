"use client";

import Image from "next/image";
import { Sparkles, Play, Award } from "lucide-react";
import { useState } from "react";

export function Gallery() {
  const images = [
    "/gallery/WhatsApp Image 2026-05-25 at 10.22.33 PM.jpeg",
    "/gallery/poster2.jpeg",
    "/gallery/poster3.jpeg",
    "/gallery/poster4.jpeg",
    "/gallery/poster5.jpeg",
    "/gallery/poster6.jpeg",
    "/gallery/poster7.jpeg",
    "/gallery/poster-8.jpg",
    "/gallery/poster-9.jpg",
    "/gallery/poster-10.jpg",
  ];

  const videos = [
    "/gallery/VID-20260525-WA0010.mp4",
    "/gallery/VID-20260525-WA0011.mp4",
    "/gallery/VID-20260525-WA0012.mp4",
    "/gallery/VID-20260525-WA0015.mp4",
    "/gallery/VID-20260525-WA0018.mp4",
    "/gallery/VID-20260525-WA0019.mp4",
  ];

  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  const handleVideoPlay = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      if (video !== e.target) {
        video.pause();
      }
    });
  };

  return (
    <section id="gallery" className="relative py-32 bg-brand-navy overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              Gallery & Achievements
            </span>
          </div>

          <h2 className="text-[2rem] md:text-[3rem] leading-[1.2] font-[800] tracking-[-0.03em] text-white max-w-4xl">
            Our <span className="text-brand-yellow">Memories & Milestones</span>
          </h2>

          <p className="text-xl text-white/80 leading-relaxed font-bold max-w-3xl">
            Explore our students' achievements and hear from our dedicated faculty.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 overflow-x-auto max-w-full no-scrollbar">
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeTab === "images"
                  ? "bg-brand-cyan text-brand-navy shadow-lg shadow-brand-cyan/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
            >
              <Award className="w-4 h-4" />
              Achievements
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeTab === "videos"
                  ? "bg-brand-cyan text-brand-navy shadow-lg shadow-brand-cyan/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
            >
              <Play className="w-4 h-4" />
              Videos
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 transition-all duration-500">
          {activeTab === "images" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-500">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0A1128] border border-brand-cyan/10 hover:border-brand-cyan/50 hover:bg-brand-cyan/[0.03] transition-all duration-500 flex items-center justify-center p-6 hover:-translate-y-2"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Achievement ${idx + 1}`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-500">
              {videos.map((src, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-[#0A1128] border border-brand-cyan/10 hover:border-brand-cyan/50 hover:bg-brand-cyan/[0.03] transition-all duration-500 flex items-center justify-center p-4 hover:-translate-y-2"
                >
                  <video
                    src={src}
                    controls
                    className="w-full h-full object-contain rounded-xl"
                    preload="metadata"
                    onPlay={handleVideoPlay}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
