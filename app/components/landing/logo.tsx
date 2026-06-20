import Image from "next/image";

export const LOGO_SRC = "/logo_hora_util.jpeg";
export const LOGO_ALT = "Hora Útil 360";

const SIZES = {
  md: { box: "h-14 w-14 rounded-xl p-1.5", img: 56 },
  lg: { box: "h-16 w-16 rounded-2xl p-1.5", img: 64 },
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
