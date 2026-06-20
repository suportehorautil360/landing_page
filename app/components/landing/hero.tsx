"use client";

import { IconArrowRight } from "./icons";
import { WHATSAPP_URL } from "./constants";
import { FadeIn, Stagger, StaggerItem, motion } from "./motion";

function DashboardPreview() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      <div className="absolute -inset-4 rounded-3xl bg-orange-500/20 blur-3xl" />
      <div className="card-shine relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Dashboard Interativo
            </p>
            <p className="mt-0.5 text-sm font-bold text-white">Visão Geral da Frota</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Real-Time
          </span>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <p className="text-[11px] text-slate-400">Equipamentos Ativos</p>
            <p className="mt-1 text-3xl font-extrabold text-orange-400">87%</p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-700">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-300"
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <p className="text-[11px] text-slate-400">Manutenções Hoje</p>
            <p className="mt-1 text-3xl font-extrabold text-sky-400">3</p>
            <p className="mt-2 text-[10px] text-slate-500">2 preventivas · 1 corretiva</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[11px] text-slate-400">Média de Consumo da Frota</p>
            <span className="text-xs font-bold text-orange-400">74%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-700">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
              initial={{ width: 0 }}
              animate={{ width: "74%" }}
              transition={{ delay: 1.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

        <Stagger immediate className="mt-4 grid grid-cols-3 gap-2">
          {["Combustível", "Manutenção", "Operadores"].map((label, i) => (
            <StaggerItem key={label}>
              <div className="rounded-lg bg-white/5 px-2 py-2 text-center ring-1 ring-white/5">
                <p className="text-[9px] text-slate-500">{label}</p>
                <p className="text-xs font-bold text-white">{["OK", "3", "42"][i]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="hero-mesh grid-pattern relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-navy-deep/80" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
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

          <FadeIn immediate delay={0.25} direction="right" className="lg:pl-4">
            <DashboardPreview />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
