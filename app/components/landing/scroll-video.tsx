"use client";

import { useEffect, useRef } from "react";
import { FadeIn, motion } from "./motion";

type ScrollVideoProps = {
  src: string;
};

export function ScrollVideo({ src }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeIn delay={0.15} direction="scale">
      <div className="flex flex-col items-center">
        <p className="mb-6 text-center text-sm text-slate-400">
          Veja como funciona no telemóvel do operador
        </p>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-orange-500/15 blur-3xl" />

          <motion.div
            ref={containerRef}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35 }}
            className="relative w-[260px] rounded-[2.25rem] border-[6px] border-slate-800 bg-slate-900 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:w-[280px]"
          >
            {/* Notch */}
            <div className="absolute left-1/2 top-3 z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-slate-900" />

            <div className="overflow-hidden rounded-[1.75rem] bg-black">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[9/19.5] w-full bg-slate-900 object-cover"
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>

            {/* Botão home indicator */}
            <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
}
