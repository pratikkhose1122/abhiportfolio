"use client";

import { useState } from "react";
import { X, Send, CheckCheck, Sparkles, Phone, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, WHATSAPP_PROMPTS, getWhatsAppUrl } from "@/lib/constants";

interface WhatsAppWidgetProps {
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
}

export function WhatsAppWidget({ isOpenExternal, onCloseExternal }: WhatsAppWidgetProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [customMessage, setCustomMessage] = useState("");

  const isOpen = isOpenExternal !== undefined ? isOpenExternal : internalOpen;
  const toggleOpen = () => {
    if (onCloseExternal && isOpenExternal !== undefined) {
      if (isOpenExternal) onCloseExternal();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const handleSend = () => {
    const finalMsg = customMessage.trim() || selectedPrompt || "Hi Abhijit, I want to connect with you regarding a project!";
    window.open(getWhatsAppUrl(finalMsg), "_blank");
    if (onCloseExternal) onCloseExternal();
    else setInternalOpen(false);
  };

  const handlePromptClick = (msg: string) => {
    setSelectedPrompt(msg);
    setCustomMessage(msg);
  };

  return (
    <>
      {/* Floating Circular Green WhatsApp Button (Visible on Desktop only, hidden on mobile since bottom bar has WhatsApp) */}
      <div className="hidden md:block fixed md:bottom-8 md:right-8 z-40">
        <motion.button
          onClick={toggleOpen}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.7)] transition-all duration-300 relative group cursor-pointer border-2 border-white/30"
          aria-label="Direct WhatsApp Chat"
        >
          <FaWhatsapp className="w-9 h-9 text-white drop-shadow-md" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-200 rounded-full animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-white border-2 border-[#25D366] rounded-full" />
        </motion.button>
      </div>

      {/* Interactive WhatsApp Chat Drawer / Modal Card */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 md:p-8 pointer-events-none">
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleOpen}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs pointer-events-auto sm:hidden"
            />

            {/* Chat Box Container */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="relative w-full sm:w-[380px] bg-background/95 dark:bg-[#111318]/95 backdrop-blur-2xl border border-border/80 sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[85vh]"
            >
              {/* Header with WhatsApp Branding & Profile */}
              <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/Abhi.jpg"
                      alt={SITE_CONFIG.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/80 shadow-md"
                    />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-sm tracking-wide text-white">{SITE_CONFIG.name}</h3>
                      <Sparkles size={13} className="text-yellow-300" />
                    </div>
                    <div className="text-[11px] text-emerald-100 flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 bg-emerald-300 rounded-full" />
                      Online • Typically replies in 5 min
                    </div>
                  </div>
                </div>

                <button
                  onClick={toggleOpen}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-4 space-y-4 overflow-y-auto flex-1 bg-secondary/30 dark:bg-black/20">
                {/* Simulated Incoming Message */}
                <div className="flex flex-col gap-1 items-start max-w-[85%]">
                  <div className="bg-white dark:bg-zinc-800 text-foreground p-3.5 rounded-2xl rounded-tl-sm shadow-sm text-xs md:text-sm leading-relaxed border border-border/40">
                    <p className="font-medium">Namaste! 🙏</p>
                    <p className="mt-1 text-muted-foreground">
                      How can I help you today? Select a topic below or type your message to chat directly on WhatsApp!
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground pl-1">
                    <span>Just now</span>
                    <CheckCheck size={12} className="text-emerald-500" />
                  </div>
                </div>

                {/* Quick Prompts Chips */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-muted-foreground pl-1">
                    Quick Inquiry Options:
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {WHATSAPP_PROMPTS.map((prompt) => (
                      <button
                        key={prompt.id}
                        onClick={() => handlePromptClick(prompt.message)}
                        className={`text-left text-xs p-2.5 rounded-xl border transition-all flex items-center gap-2.5 ${
                          selectedPrompt === prompt.message
                            ? "bg-emerald-500/10 border-emerald-500 text-foreground font-medium"
                            : "bg-background dark:bg-zinc-900 border-border hover:border-emerald-400/60 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="text-base">{prompt.icon}</span>
                        <span className="truncate">{prompt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Number Display */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 flex items-center justify-between text-xs text-foreground">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp: <strong>{SITE_CONFIG.whatsappFormatted}</strong></span>
                  </div>
                  <a
                    href={`tel:+${SITE_CONFIG.whatsappNumber}`}
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold text-[11px]"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-3 bg-background border-t border-border flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type a message to Abhijit..."
                    className="flex-1 bg-secondary dark:bg-zinc-900 border border-border rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-emerald-500 transition-colors"
                  />
                  <button
                    onClick={handleSend}
                    className="p-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center shrink-0"
                    title="Send via WhatsApp"
                  >
                    <Send size={16} />
                  </button>
                </div>

                <button
                  onClick={handleSend}
                  className="w-full py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-opacity"
                >
                  <FaWhatsapp size={16} />
                  Open WhatsApp Chat
                  <ExternalLink size={13} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
