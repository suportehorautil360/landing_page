import Image from "next/image";

export const LOGO_SRC = "/logo_hora_util.jpeg";
export const LOGO_ALT = "Hora Útil 360";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#0a1628] p-1 shadow-lg shadow-orange-500/20 ring-1 ring-white/10 ${className ?? ""}`}
    >
      <Image
        src={LOGO_SRC}
        alt={LOGO_ALT}
        width={36}
        height={36}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
