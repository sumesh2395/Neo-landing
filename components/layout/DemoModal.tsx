"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendDemoRequestEmail } from "@/app/actions/sendEmail";

export const openDemoModal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-demo-modal"));
  }
};

export const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-demo-modal", handleOpen);
    return () => window.removeEventListener("open-demo-modal", handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await sendDemoRequestEmail(formData);
      
      if (response.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
        }, 3000);
      } else {
        alert("Failed to send request. Please try again later.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050B1B]/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-brand-navy rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="p-8 text-center relative border-b border-white/5">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 text-white/40 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <Sparkles className="w-3 h-3 text-brand-cyan" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-cyan">
              Free Trial
            </span>
          </div>

          <h2 className="text-2xl font-[800] tracking-tight text-white">Book Free Demo</h2>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 pt-6">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-brand-cyan" />
              <h3 className="text-2xl font-bold text-white">Request Sent!</h3>
              <p className="text-white/60">We will contact you shortly to schedule your demo class.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <input
                  type="text"
                  name="Student Name"
                  required
                  placeholder="Student Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white placeholder:text-white/40 font-medium border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all text-sm"
                />
              </div>

              <div>
                <select
                  name="Class"
                  required
                  defaultValue=""
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white font-medium border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none appearance-none transition-all text-sm [&>option]:bg-brand-navy [&>option]:text-white"
                >
                  <option value="" disabled>Select Class</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11 (+1)</option>
                  <option value="Class 12">Class 12 (+2)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <select
                  name="Subject"
                  required
                  defaultValue=""
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white font-medium border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none appearance-none transition-all text-sm [&>option]:bg-brand-navy [&>option]:text-white"
                >
                  <option value="" disabled>Select Subject</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="English">English</option>
                  <option value="All Subjects">All Subjects</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="Parent Phone / WhatsApp"
                  required
                  placeholder="Parent Phone / WhatsApp"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white placeholder:text-white/40 font-medium border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all text-sm"
                />
              </div>

              <div>
                <select
                  name="Country"
                  required
                  defaultValue=""
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white font-medium border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none appearance-none transition-all text-sm [&>option]:bg-brand-navy [&>option]:text-white"
                >
                  <option value="" disabled>Select Country</option>
                  <option value="India">India</option>
                  <option value="UAE">UAE</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Oman">Oman</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="Preferred Time"
                  required
                  placeholder="Preferred Time (e.g. 5 PM GST)"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/5 text-white placeholder:text-white/40 font-medium border border-white/10 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all text-sm"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-cyan hover:bg-[#00B8E6] text-brand-navy font-bold text-sm h-14 rounded-xl transition-all"
                >
                  {isSubmitting ? "Sending..." : "Book Your Free Demo Class Today"}
                </Button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
