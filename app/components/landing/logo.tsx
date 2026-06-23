"use client";

import Image from "next/image";
import { motion } from "./motion";

export const LOGO_SRC = "/logo_hora_util.jpeg";
export const LOGO_ALT = "Hora Útil 360";

const SIZES = {
  sm: { box: "h-8 w-8 rounded-lg p-0.5", img: 32 },
  nav: { box: "h-11 w-11 rounded-xl p-1", img: 44 },
  md: { box: "h-16 w-16 rounded-xl p-1.5", img: 64 },
  lg: {
    box: "h-16 w-16 rounded-xl p-1.5 sm:h-20 sm:w-20 sm:rounded-2xl sm:p-2 md:h-24 md:w-24",
    img: 96,
  },
} as const;

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: keyof typeof SIZES;
};

export function Logo({ className, priority = false, size = "md" }: LogoProps) {
  const { box, img } = SIZES[size];

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-[#0a1628] shadow-lg shadow-orange-500/20 ring-1 ring-white/10 ${box} ${className ?? ""}`}
    >
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={img}
        height={img}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

type LogoHeroProps = {
  className?: string;
  priority?: boolean;
};

export function LogoHero({ className, priority = false }: LogoHeroProps) {
  return (
    <div className={`relative flex justify-center lg:justify-end ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-40 w-40 rounded-full bg-orange-500/30 blur-3xl sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
      </div>

      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-3xl"
      >
        <Image
          src={LOGO_SRC}
          alt={LOGO_ALT}
          width={560}
          height={140}
          priority={priority}
          className="h-auto w-full max-w-[min(100%,320px)] rounded-3xl object-contain sm:max-w-[400px] lg:max-w-[480px] xl:max-w-[540px]"
        />
      </motion.div>
    </div>
  );
}
