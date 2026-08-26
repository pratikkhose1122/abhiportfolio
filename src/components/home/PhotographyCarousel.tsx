"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Camera } from "lucide-react";

// Real High-Res Photography Portfolio Images
const images = [
  { id: 1, src: "/DSC01961.jpg", title: "Royal Heritage Wedding", desc: "Sacred Pheras & Royal Traditions" },
  { id: 2, src: "/DSC01985.jpg", title: "Candid Bridal Glow", desc: "Timeless Emotion & Natural Light" },
  { id: 3, src: "/DSC02584.JPG", title: "Sunset Pre-Wedding", desc: "Cinematic Golden Hour Romance" },
  { id: 4, src: "/DSC02691.JPG", title: "Haldi Festivities", desc: "Joyful Colors & Authentic Rituals" },
  { id: 5, src: "/DSC07290 copy.jpg", title: "Cinematic Drone Vista", desc: "Grand Venue Perspectives & Aerials" },
  { id: 6, src: "/DSC07314 copy.jpg", title: "Sacred Mandap Moments", desc: "Intimate Vows & Floral Art" },
  { id: 7, src: "/DSC07319 copy.jpg", title: "Grand Reception Evening", desc: "Modern Stage Lights & Couple Entry" },
  { id: 8, src: "/DSC07330 copy.jpg", title: "Editorial Couple Portrait", desc: "Magazine-Grade Composition & Tones" },
  { id: 9, src: "/DSC07363 copy.jpg", title: "Sangeet & Celebration", desc: "High-Octane Energy & Family Dance" },
  { id: 10, src: "/DSC07631 copy.jpg", title: "Destination Romance", desc: "Breathtaking Heritage Backdrops" },
  { id: 11, src: "/DSC07674 copy.jpg", title: "Timeless Family Heirloom", desc: "Generational Blessings & Love" },
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
                  decoding="async"
                />
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

        {/* Bottom Action Link */}
        <div className="text-center mt-8">
          <Link
            href="/photography"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#a07355] hover:bg-[#8b5e34] text-white rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Full Photography Portfolio
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PhotographyCarousel;