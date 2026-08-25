"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Camera,
  Heart,
  Calendar,
  Maximize2,
  X,
  MessageCircle,
  Sparkles,
  Film,
  Compass,
  Check,
  Play,
  Pause,
} from "lucide-react";
import { motion, AnimatePresence, PanInfo, type Variants } from "framer-motion";
import { WeddingEnquiryForm } from "@/components/photography/WeddingEnquiryForm";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

// 🔥 IMAGES ARRAY WITH RICH DESCRIPTIONS & CATEGORIES
const images = [
  {
    id: 1,
    src: "/DSC01961.jpg",
    title: "Royal Heritage Wedding",
    desc: "Sacred pheras & royal ceremonies captured with classical elegance.",
    category: "Wedding",
  },
  {
    id: 2,
    src: "/DSC01985.jpg",
    title: "Candid Bride Portrait",
    desc: "Timeless bridal glow and emotion in pure natural light.",
    category: "Portraits",
  },
  {
    id: 3,
    src: "/DSC02584.JPG",
    title: "Sunset Pre-Wedding",
    desc: "Dreamy golden hour romance and cinematic compositions.",
    category: "Pre-Wedding",
  },
  {
    id: 4,
    src: "/DSC02691.JPG",
    title: "Haldi Vibrance & Joy",
    desc: "Colors, authentic smiles, and energetic festive rituals.",
    category: "Festivities",
  },
  {
    id: 5,
    src: "/DSC07290 copy.jpg",
    title: "Cinematic Drone Vista",
    desc: "Grand aerial perspectives capturing the full venue architecture.",
    category: "Aerial",
  },
  {
    id: 6,
    src: "/DSC07314 copy.jpg",
    title: "Sacred Mandap Moments",
    desc: "Intimate vows and royal mandap florals crafted to perfection.",
    category: "Wedding",
  },
  {
    id: 7,
    src: "/DSC07319 copy.jpg",
    title: "Grand Reception Evening",
    desc: "Stunning couple entry with modern stage lights and sparkle.",
    category: "Reception",
  },
  {
    id: 8,
    src: "/DSC07330 copy.jpg",
    title: "Editorial Couple Portrait",
    desc: "Magazine-grade posing and bespoke editorial color tones.",
    category: "Editorial",
  },
  {
    id: 9,
    src: "/DSC07363 copy.jpg",
    title: "Sangeet & Celebration",
    desc: "High-octane dance performances and heartfelt family moments.",
    category: "Festivities",
  },
  {
    id: 10,
    src: "/DSC07631 copy.jpg",
    title: "Destination Romance",
    desc: "Breathtaking backdrops across Pune, Ahilyanagar & beyond.",
    category: "Pre-Wedding",
  },
  {
    id: 11,
    src: "/DSC07674 copy.jpg",
    title: "Timeless Family Heirloom",
    desc: "Generational blessings captured with emotional depth.",
    category: "Candid",
  },
];

const CATEGORIES = ["All", "Wedding", "Pre-Wedding", "Portraits", "Festivities", "Aerial"];

// 🔥 ANIMATION VARIANTS
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function PhotographyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<(typeof images)[0] | null>(null);

  // Auto-play carousel timer (pauses if dragging or lightbox open)
  useEffect(() => {
    if (!isAutoPlay || lightboxImage !== null) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlay, lightboxImage]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  const filteredImages =
    selectedFilter === "All"
      ? images
      : images.filter((img) => img.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <div className="relative min-h-screen w-full bg-[#f7f3f0] overflow-hidden flex flex-col items-center pt-14 md:pt-24 pb-28 px-3 sm:px-6 md:px-12">
      {/* 🔥 BLURRED BACKGROUND AMBIENT IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentIndex].src}
              alt="Blurred Background"
              className="w-full h-full object-cover blur-[60px] opacity-20 scale-110"
            />
            <div className="absolute inset-0 bg-[#f7f3f0]/85" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✅ SECTION 1: HEADER CAPTION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto w-full text-center mb-6 md:mb-12"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-5 flex-wrap"
        >
          <span className="w-6 md:w-10 h-px bg-[#2c2a28]/30" />
          <span className="text-[9px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#2c2a28]/70 font-sans">
            Photography & Cinematography
          </span>
          <span className="text-[9px] md:text-xs text-[#b78c7a] font-semibold tracking-[0.2em] uppercase font-sans">
            Ahilyanagar • Pune, India
          </span>
          <span className="w-6 md:w-10 h-px bg-[#2c2a28]/30" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-serif leading-[1.15] md:leading-[1.08] text-[#2c2a28] drop-shadow-sm tracking-tight"
        >
          Capturing Life's <br />
          Grandest Moments <br />
          from <span className="text-[#a07355] italic font-serif">Earth & Sky</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-[#6b5b50] text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mt-4 md:mt-6 px-2"
        >
          Royal weddings, cinematic drone films, and editorial portraits — composed with the grandeur of Indian heritage and the precision of aerial craft.
        </motion.p>

        {/* Quick Action Pills */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mt-6 flex-wrap">
          <a
            href="#enquiry-form"
            className="px-6 py-2.5 bg-[#a07355] text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#8b5e34] transition-all shadow-md flex items-center gap-2"
          >
            <Calendar size={15} />
            Book Your Wedding Shoot
          </a>
          <a
            href={getWhatsAppUrl("Hi Abhijit, I want to book a photography / cinematography shoot!")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#25D366] text-white rounded-full text-xs sm:text-sm font-medium hover:bg-[#20bd5a] transition-all shadow-md flex items-center gap-2"
          >
            <MessageCircle size={15} className="fill-white" />
            WhatsApp Direct Inquiry
          </a>
        </motion.div>
      </motion.div>

      {/* ✅ SECTION 2: 3D INTERACTIVE CAROUSEL SLIDER */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-0 md:px-4 my-4"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] flex items-center justify-center perspective-[1200px]">
          {/* Wheel Scroll Support */}
          <div
            className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
            onWheel={(e) => {
              if (e.deltaY > 0) handleNext();
              else if (e.deltaY < 0) handlePrev();
            }}
          />

          {images.map((img, index) => {
            const distance = index - currentIndex;
            const isCenter = distance === 0;
            const isLeft = distance === -1 || distance === -2;
            const isRight = distance === 1 || distance === 2;

            if (Math.abs(distance) > 2) return null;

            const xPos = isCenter ? 0 : isLeft ? (distance === -1 ? -160 : -280) : distance === 1 ? 160 : 280;
            const scale = isCenter ? 1.05 : isLeft ? (distance === -1 ? 0.88 : 0.75) : distance === 1 ? 0.88 : 0.75;
            const zIndex = isCenter ? 20 : 10 - Math.abs(distance);
            const opacity = isCenter ? 1 : isLeft ? (distance === -1 ? 0.75 : 0.4) : distance === 1 ? 0.75 : 0.4;
            const rotateY = isLeft ? 12 : isRight ? -12 : 0;

            return (
              <motion.div
                key={img.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                animate={{
                  x: xPos,
                  scale: scale,
                  opacity: opacity,
                  rotateY: rotateY,
                  zIndex: zIndex,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
                className={`absolute w-[220px] sm:w-[320px] md:w-[420px] aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden group select-none ${isCenter ? "ring-4 ring-[#a07355] ring-offset-4 ring-offset-[#f7f3f0]" : "cursor-pointer"
                  }`}
                style={{ transformOrigin: "center center" }}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(index);
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Category Badge (Top Right) */}
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/20">
                    {img.category}
                  </span>
                </div>

                {/* Lightbox Trigger on Center */}
                {isCenter && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxImage(img);
                    }}
                    className="absolute top-4 left-4 p-2 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full text-white/90 border border-white/20 transition-all cursor-pointer"
                    title="View Full Resolution"
                  >
                    <Maximize2 size={15} />
                  </button>
                )}

                {/* Caption on Center Card */}
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between gap-3"
                  >
                    <div className="text-left">
                      <h3 className="text-white text-base sm:text-xl md:text-2xl font-serif font-bold mb-0.5">
                        {img.title}
                      </h3>
                      <p className="text-white/80 text-[11px] sm:text-xs line-clamp-2 max-w-xs">{img.desc}</p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(img);
                      }}
                      className="px-3 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-white text-xs font-medium shrink-0 transition-colors cursor-pointer"
                    >
                      View
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Controls & Dot Indicators */}
        <div className="flex items-center justify-between mt-6 px-4">
          {/* Arrow Left */}
          <button
            onClick={handlePrev}
            className="p-2.5 sm:p-3 bg-white/90 hover:bg-white backdrop-blur-sm border border-[#e2d8d1] rounded-full transition-all text-[#2c2a28] shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator Strip */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${idx === currentIndex ? "w-6 sm:w-8 h-2 bg-[#a07355]" : "w-2 h-2 bg-[#2c2a28]/25 hover:bg-[#2c2a28]/50"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrow Right */}
          <button
            onClick={handleNext}
            className="p-2.5 sm:p-3 bg-white/90 hover:bg-white backdrop-blur-sm border border-[#e2d8d1] rounded-full transition-all text-[#2c2a28] shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ✅ SECTION 3: WEDDING ENQUIRY FORM (Screenshot 1) */}
      <WeddingEnquiryForm />

      {/* ✅ SECTION 4: FEATURED PORTFOLIO GRID WITH CATEGORY FILTERS */}
      <div className="relative z-10 w-full max-w-6xl mt-12 md:mt-20 pt-10 border-t border-[#e2d8d1]">
        <div className="text-center mb-8 md:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a07355] block mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2c2a28] mb-3">
            Featured Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#a07355] mx-auto rounded-full mb-6" />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${selectedFilter === cat
                    ? "bg-[#a07355] text-white shadow-md font-semibold"
                    : "bg-white/80 border border-[#ded3ca] text-[#5c4f46] hover:bg-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setLightboxImage(img)}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 md:p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8ded6] mb-1">
                  {img.category}
                </span>
                <h3 className="text-white text-lg sm:text-xl font-serif font-bold leading-snug">
                  {img.title}
                </h3>
                <p className="text-white/70 text-xs mt-1 line-clamp-2">{img.desc}</p>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/15">
                  <span className="text-[11px] text-white/90 flex items-center gap-1">
                    <Maximize2 size={12} /> Click to View
                  </span>
                  <span className="text-[11px] text-[#25D366] font-medium flex items-center gap-1">
                    <MessageCircle size={12} /> Inquire
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ SECTION 5: GRADIENT CTA BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mt-14 md:mt-24"
      >
        <div className="w-full bg-gradient-to-r from-[#4F1A81] via-[#1A4A8A] to-[#00C2FF] rounded-3xl flex items-center justify-center px-6 md:px-12 py-12 md:py-16 shadow-2xl">
          <div className="flex flex-col items-center justify-center gap-4 text-center max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              Let's Create Magic Together
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide font-heading leading-tight">
              Ready to Capture Your Story?
            </h2>
            <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl">
              From grand royal weddings in Pune to destination drone shoots, let's preserve your most precious moments forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-3 w-full max-w-md">
              <a
                href="#enquiry-form"
                className="px-7 py-3.5 bg-white text-[#1A4A8A] rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-md text-sm md:text-base flex items-center justify-center gap-2"
              >
                Fill Booking Form
              </a>
              <a
                href={getWhatsAppUrl("Hi Abhijit, I want to discuss a photography package with you.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#25D366] text-white rounded-xl font-bold hover:bg-[#20bd5a] transition-all duration-300 shadow-md text-sm md:text-base flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} className="fill-white" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ✅ SECTION 6: ABOUT THE PHOTOGRAPHER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-14 md:mt-24 pt-8 md:pt-14 border-t border-[#e2d8d1]"
      >
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2a28] mb-2">About the Photographer</h2>
          <div className="w-14 h-0.5 bg-[#a07355] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-sm mx-auto w-full bg-white rounded-3xl overflow-hidden border border-[#ded3ca] shadow-xl"
          >
            <img src="/Abhi.jpg" alt="Abhijit Mungase" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="font-serif font-bold text-xl">{SITE_CONFIG.name}</div>
                <div className="text-xs text-white/80">Software Developer & Photographer  </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <p className="text-[#6b5b50] text-sm md:text-base leading-relaxed">
              I am a passionate photographer and cinematographer based in Ahilyanagar & Pune. With over 4 years of experience capturing life's most precious occasions, I specialize in royal wedding photography, cinematic drone films, and timeless portraits.
            </p>

            <p className="text-[#6b5b50] text-sm md:text-base leading-relaxed">
              My philosophy: <span className="text-[#2c2a28] font-serif font-bold italic">"Every picture is a sacred heirloom of love."</span> I blend state-of-the-art Sony cinema cameras and DJI drones with authentic Indian emotion.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="bg-white border border-[#ded3ca] rounded-2xl p-4 text-center shadow-xs">
                <Camera className="mx-auto mb-1.5 text-[#a07355]" size={20} />
                <div className="text-xl font-bold text-[#2c2a28]">250+</div>
                <div className="text-[9px] uppercase tracking-wider text-[#6b5b50] mt-0.5">Shoots</div>
              </div>
              <div className="bg-white border border-[#ded3ca] rounded-2xl p-4 text-center shadow-xs">
                <Heart className="mx-auto mb-1.5 text-[#a07355]" size={20} />
                <div className="text-xl font-bold text-[#2c2a28]">100%</div>
                <div className="text-[9px] uppercase tracking-wider text-[#6b5b50] mt-0.5">Smiles</div>
              </div>
              <div className="bg-white border border-[#ded3ca] rounded-2xl p-4 text-center shadow-xs">
                <Calendar className="mx-auto mb-1.5 text-[#a07355]" size={20} />
                <div className="text-xl font-bold text-[#2c2a28]">4+</div>
                <div className="text-[9px] uppercase tracking-wider text-[#6b5b50] mt-0.5">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ✅ LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl">
            <div className="absolute inset-0" onClick={() => setLightboxImage(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#121318] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 text-white">
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg">{lightboxImage.title}</h4>
                  <span className="text-xs text-white/60">{lightboxImage.category}</span>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image Viewer */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[480px] bg-black flex items-center justify-center p-2">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
                />
              </div>

              {/* Footer with WhatsApp Inquire */}
              <div className="p-4 bg-[#181a20] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
                <p className="text-xs sm:text-sm text-white/80">{lightboxImage.desc}</p>
                <a
                  href={getWhatsAppUrl(`Hi Abhijit, I love this shot: "${lightboxImage.title}" (${lightboxImage.category}). Can you share package details for a similar shoot?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xs font-bold flex items-center gap-2 shrink-0 shadow-md transition-colors"
                >
                  <MessageCircle size={15} className="fill-white" />
                  Inquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}