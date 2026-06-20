"use client";

import { SITE_DISPLAY, SITE_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "./constants";
import { IconWhatsApp } from "./icons";
import { FadeIn, motion } from "./motion";

export function FooterCta() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-24">
      <div className="hero-mesh grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn direction="left">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-300">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-orange-400"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Próximo Passo
                </span>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                  Vamos otimizar{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                    a sua frota?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
                  Transforme a gestão operacional da sua empresa hoje mesmo.
                  Fale com um especialista e descubra como reduzir custos e
                  aumentar a disponibilidade da frota.
                </p>
              </FadeIn>
            </div>

            <FadeIn direction="right" delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-brand-navy-deep/80 p-8 shadow-2xl"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Fale com um consultor especialista
                </p>

                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0.35)",
                      "0 0 0 14px rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 text-lg font-bold text-white md:text-xl"
                >
                  <IconWhatsApp className="h-7 w-7" />
                  {WHATSAPP_DISPLAY}
                </motion.a>

                <div className="mt-5 flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                  <span className="text-xs text-slate-500">Resposta em até 1 hora útil</span>
                  <a
                    href={SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-orange-400 transition hover:text-orange-300"
                  >
                    {SITE_DISPLAY} →
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
