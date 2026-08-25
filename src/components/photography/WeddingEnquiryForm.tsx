"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check, Sparkles, Calendar, MapPin, IndianRupee, Heart, Send, Copy, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

const EVENT_OPTIONS = [
  "Haldi",
  "Mehendi",
  "Sangeet",
  "Wedding",
  "Reception",
  "Engagement",
  "Prewedding",
  "Other",
];

const SERVICE_OPTIONS = ["Photography", "Films", "Both"];

export function WeddingEnquiryForm() {
  const [formData, setFormData] = useState({
    groomName: "",
    brideName: "",
    phone: "",
    startDate: "",
    endDate: "",
    events: [] as string[],
    budget: "",
    location: "",
    serviceType: "Both",
    thoughts: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEventToggle = (eventName: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventName);
      if (exists) {
        return { ...prev, events: prev.events.filter((e) => e !== eventName) };
      } else {
        return { ...prev, events: [...prev.events, eventName] };
      }
    });
  };

  const constructWhatsAppMessage = () => {
    const eventsStr = formData.events.length > 0 ? formData.events.join(", ") : "Not specified";
    return `👑 *NEW WEDDING SHOOT ENQUIRY* 👑

🤵 *Groom:* ${formData.groomName || "N/A"}
👰 *Bride:* ${formData.brideName || "N/A"}
📞 *Contact Phone:* ${formData.phone || "N/A"}
📅 *Event Dates:* ${formData.startDate || "N/A"} ${formData.endDate ? `to ${formData.endDate}` : ""}
🎉 *Selected Events:* ${eventsStr}
💰 *Estimated Budget:* ${formData.budget ? `₹${formData.budget}` : "Not specified"}
📍 *Event Location:* ${formData.location || "N/A"}
🎥 *Service Required:* ${formData.serviceType}

💭 *Vision & Thoughts:*
${formData.thoughts || "Looking forward to hearing from you!"}

---
Sent via Portfolio Wedding Booking Form`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = constructWhatsAppMessage();
    window.open(getWhatsAppUrl(message), "_blank");
    setIsSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(constructWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="enquiry-form" className="relative z-10 w-full max-w-4xl mx-auto my-12 md:my-20 px-2 sm:px-4">
      {/* Luxury Form Card - Styled to match Screenshot 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-[#fcfaf7] border border-[#e8ded6] rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_20px_50px_rgba(183,140,122,0.12)] relative overflow-hidden"
      >
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#b78c7a]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#a57753]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Form Title & Logo */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-[#b78c7a]/15 text-[#a07355]">
            <Heart size={22} className="fill-[#b78c7a]/40 text-[#a07355]" />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#a07355] font-normal tracking-tight mb-2">
            Wedding Enquiry Form
          </h2>
          <p className="text-[#7d6b60] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Share your dates, vision, and special moments with us. We'll craft a personalized proposal and reach out immediately.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7 relative z-10">
          {/* Row 1: Groom Name & Bride Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38]">
                Groom Name
              </label>
              <input
                type="text"
                value={formData.groomName}
                onChange={(e) => setFormData({ ...formData, groomName: e.target.value })}
                placeholder="e.g. Rahul"
                className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] placeholder:text-[#a89c93] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38]">
                Bride Name
              </label>
              <input
                type="text"
                value={formData.brideName}
                onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                placeholder="e.g. Ananya"
                className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] placeholder:text-[#a89c93] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm"
              />
            </div>
          </div>

          {/* Row 2: Phone Number */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38] flex items-center justify-between">
              <span>Phone Number *</span>
              <span className="text-[11px] text-[#25D366] font-sans font-medium flex items-center gap-1">
                <MessageCircle size={12} /> WhatsApp Enabled
              </span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] placeholder:text-[#a89c93] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm"
            />
          </div>

          {/* Row 3: Event Start Date & Event End Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38]">
                Event Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38]">
                Event End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Row 4: Select Your Events (Tick all that apply) */}
          <div className="space-y-2.5">
            <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38] block">
              Select Your Events (Tick all that apply)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {EVENT_OPTIONS.map((event) => {
                const isSelected = formData.events.includes(event);
                return (
                  <button
                    type="button"
                    key={event}
                    onClick={() => handleEventToggle(event)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm font-sans transition-all text-left ${
                      isSelected
                        ? "bg-[#a07355] text-white border-[#a07355] shadow-sm font-medium"
                        : "bg-white text-[#5c4f46] border-[#ded3ca] hover:border-[#a07355]/60"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        isSelected ? "bg-white border-white" : "border-[#bdafa4]"
                      }`}
                    >
                      {isSelected && <Check size={12} className="text-[#a07355] stroke-[3]" />}
                    </div>
                    <span>{event}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 5: Your Estimate Budget for Event */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38]">
              Your Estimate Budget for Event
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="e.g. 200000 or ₹2,50,000"
                className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] placeholder:text-[#a89c93] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm"
              />
            </div>
          </div>

          {/* Row 6: Location of Event */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38]">
              Location of Event
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Pune, Ahilyanagar, Mumbai, Destination..."
                className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] placeholder:text-[#a89c93] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm"
              />
            </div>
          </div>

          {/* Row 7: What service are you looking for? */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38] block">
              What service are you looking for?
            </label>
            <div className="flex flex-wrap gap-3">
              {SERVICE_OPTIONS.map((service) => {
                const isSelected = formData.serviceType === service;
                return (
                  <button
                    type="button"
                    key={service}
                    onClick={() => setFormData({ ...formData, serviceType: service })}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-sans transition-all ${
                      isSelected
                        ? "bg-[#a07355] text-white border-[#a07355] shadow-sm font-medium"
                        : "bg-white text-[#5c4f46] border-[#ded3ca] hover:border-[#a07355]/60"
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-white" : "bg-[#ded3ca]"}`} />
                    {service}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 8: Tell us more about your wedding thoughts */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-serif font-medium text-[#4a3f38]">
              Tell us more about your wedding thoughts
            </label>
            <textarea
              rows={4}
              value={formData.thoughts}
              onChange={(e) => setFormData({ ...formData, thoughts: e.target.value })}
              placeholder="Share your vision, preferences, special cultural traditions, or any specific requirements..."
              className="w-full px-4 py-3 bg-white border border-[#ded3ca] rounded-xl text-[#2c2a28] placeholder:text-[#a89c93] focus:outline-none focus:border-[#a07355] focus:ring-2 focus:ring-[#a07355]/20 transition-all text-sm resize-none"
            />
          </div>

          {/* Submit Button (Matching Screenshot 1) */}
          <div className="pt-3 space-y-3">
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#a57753] hover:bg-[#916544] text-white rounded-xl font-serif text-base sm:text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <MessageCircle size={20} className="fill-white/30" />
              Submit Enquiry via WhatsApp
            </button>

            <div className="flex items-center justify-between text-xs text-[#7d6b60] px-1">
              <span>Direct WhatsApp: <strong>{SITE_CONFIG.whatsappFormatted}</strong></span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 hover:text-[#a07355] transition-colors"
              >
                {copied ? <CheckCircle2 size={13} className="text-emerald-600" /> : <Copy size={13} />}
                {copied ? "Copied to clipboard!" : "Copy details"}
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
