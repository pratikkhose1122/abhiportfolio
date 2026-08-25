"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Camera } from "lucide-react";

// Real High-Res Photography Portfolio Images
const images = [
  { id: 1, src: "/DSC01961.jpg", title: "Royal Heritage Wedding", desc: "Sacred Pheras & Rituals", count: "120+ Photos" },
  { id: 2, src: "/DSC01985.jpg", title: "Candid Bridal Glow", desc: "Timeless Emotion & Light", count: "45+ Photos" },
  { id: 3, src: "/DSC02584.JPG", title: "Sunset Pre-Wedding", desc: "Cinematic Golden Hour", count: "80+ Photos" },
  { id: 4, src: "/DSC02691.JPG", title: "Haldi Vibrance", desc: "Joyful Colors & Celebration", count: "95+ Photos" },
  { id: 5, src: "/DSC07290 copy.jpg", title: "Aerial Drone Vista", desc: "Grand Venue Perspectives", count: "4K Cinema" },
  { id: 6, src: "/DSC07314 copy.jpg", title: "Sacred Mandap Decor", desc: "Floral Art & Heritage", count: "60+ Photos" },
];

export function PhotographyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Drag handling (touch & mouse swipe)
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-3">
            <Camera size={14} /> Creative Visuals
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight text-foreground">
            Cinematic Photography & Drone
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mt-2">
            Capturing the grandeur of royal Indian weddings and cinematic stories across Earth &amp; Sky.
          </p>
        </div>

        {/* 3D Perspective Carousel Container */}
        <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] flex items-center justify-center perspective-[1000px]">
          {images.map((img, index) => {
            const distance = index - currentIndex;
            const isCenter = distance === 0;
            const isLeft = distance === -1 || distance === -2;
            const isRight = distance === 1 || distance === 2;

            if (Math.abs(distance) > 2) return null;

            const xPos = isCenter ? 0 : isLeft ? (distance === -1 ? -170 : -290) : distance === 1 ? 170 : 290;
            const scale = isCenter ? 1.06 : isLeft ? (distance === -1 ? 0.88 : 0.74) : distance === 1 ? 0.88 : 0.74;
            const zIndex = isCenter ? 20 : 10 - Math.abs(distance);
            const opacity = isCenter ? 1 : isLeft ? (distance === -1 ? 0.75 : 0.4) : distance === 1 ? 0.75 : 0.4;
            const rotateY = isLeft ? 12 : isRight ? -12 : 0;

            return (
              <motion.div
                key={img.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{
                  x: xPos,
                  scale: scale,
                  opacity: opacity,
                  rotateY: rotateY,
                  zIndex: zIndex,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className={`absolute w-[240px] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden group select-none ${
                  isCenter ? "ring-4 ring-[#a07355] ring-offset-4 ring-offset-background" : "cursor-pointer"
                }`}
                style={{ transformOrigin: "center center" }}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(index);
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Caption (Visible on center card) */}
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#e8ded6] mb-0.5 block">
                        {img.count}
                      </span>
                      <h3 className="text-white text-lg sm:text-2xl font-bold font-serif leading-tight">
                        {img.title}
                      </h3>
                      <p className="text-white/70 text-xs mt-0.5">{img.desc}</p>
                    </div>
                    
                    <Link
                      href="/photography"
                      className="px-3.5 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 rounded-full text-white text-xs font-semibold transition-colors shrink-0 flex items-center gap-1"
                    >
                      View All
                      <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Arrow Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-background/80 dark:bg-black/60 hover:bg-background backdrop-blur-md border border-border rounded-full transition-all z-20 text-foreground shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-background/80 dark:bg-black/60 hover:bg-background backdrop-blur-md border border-border rounded-full transition-all z-20 text-foreground shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>

      </div>
    </section>
  );
}

export default PhotographyCarousel;