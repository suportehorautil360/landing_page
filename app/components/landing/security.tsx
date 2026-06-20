"use client";

import { IconCamera, IconLocation, IconShield } from "./icons";
import { FadeIn, HoverLift, Stagger, StaggerItem, motion } from "./motion";
import { ScrollVideo } from "./scroll-video";

const SECURITY_FEATURES = [
  {
    icon: IconLocation,
    title: "Estampa de GPS",
    description:
      "Registo geográfico obrigatório no momento exato da inspeção.",
  },
  {
    icon: IconCamera,
    title: "Evidências Fotográficas",
    description:
      "Obrigatoriedade de anexar fotos para itens classificados como não conformes.",
  },
  {
    icon: IconShield,
    title: "Triagem de Risco",
    description:
      "Algoritmo classifica o risco (Baixo, Médio, Alto) e notifica os gestores na hora.",
  },
];

export function Security() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-deep py-24 text-white">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Segurança Absoluta
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Checklists Digitais e Auditoria contra Fraudes
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Substitua os blocos de papel por inspeções digitais rápidas e
            padronizadas no telemóvel ou tablet antes de iniciar o turno.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {SECURITY_FEATURES.map((item) => (
            <StaggerItem key={item.title}>
              <HoverLift className="card-shine group h-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:border-orange-500/30 hover:bg-white/10">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/20 transition-colors group-hover:bg-orange-500 group-hover:text-white"
                >
                  <item.icon className="h-7 w-7" />
                </motion.div>
                <h4 className="text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14">
          <ScrollVideo src="/video_landing_page.mp4" />
        </div>
      </div>
    </section>
  );
}
