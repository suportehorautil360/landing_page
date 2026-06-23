"use client";

import { IconArrowRight } from "./icons";
import { WHATSAPP_URL } from "./constants";
import { LogoHero } from "./logo";
import { FadeIn, Stagger, StaggerItem, motion } from "./motion";

export function Hero() {
  return (
    <section className="hero-mesh grid-pattern relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-navy-deep/80" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div className="order-2 lg:order-1">
            <FadeIn immediate>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-300">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-orange-400"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Inteligência Operacional
              </span>
            </FadeIn>

            <FadeIn immediate delay={0.1}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                <span className="text-gradient-hero">A inteligência operacional</span>
                <br />
                <span className="text-white">que a sua frota precisa</span>
              </h1>
            </FadeIn>

            <FadeIn immediate delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Gestão total de abastecimento, manutenção e pessoas numa única
                plataforma digital. Visão 360°, 100% digital e monitoramento em
                tempo real.
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-orange-500/30"
                >
                  Quero Otimizar Minha Frota
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <IconArrowRight />
                  </motion.span>
                </motion.a>
                <motion.a
                  href="#funcionalidades"
                  whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm"
                >
                  Conhecer Recursos
                </motion.a>
              </div>
            </FadeIn>

            <Stagger immediate className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
              {[
                { value: "360°", label: "Visão completa" },
                { value: "100%", label: "Digital" },
                { value: "24/7", label: "Tempo real" },
              ].map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div whileHover={{ y: -2 }}>
                    <p className="text-2xl font-extrabold text-orange-400">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <FadeIn immediate delay={0.25} direction="right" className="order-1 lg:order-2 lg:pl-2">
            <LogoHero priority />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
