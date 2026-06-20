"use client";

import { AnimatedCounter } from "./animated-counter";
import { FadeIn, HoverLift, Stagger, StaggerItem, motion } from "./motion";

const RESULTS = [
  {
    value: 20,
    prefix: "-",
    suffix: "%",
    title: "Custos Diretos",
    description:
      "Redução média imediata nos gastos e desperdícios de combustível em campo.",
    accent: true,
  },
  {
    value: 15,
    prefix: "+",
    suffix: "%",
    title: "Vida Útil dos Ativos",
    description:
      "Aumento da durabilidade de camiões e máquinas através do plano preventivo.",
    accent: false,
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    title: "Agilidade",
    description:
      "Relatórios gerenciais e vistorias que demoravam dias ficam prontos em segundos.",
    accent: true,
  },
];

export function Results() {
  return (
    <section id="resultados" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Impacto Comprovado
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Resultados Reais na Operação
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            O impacto financeiro e estratégico que a sua empresa percebe logo
            nas primeiras semanas.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-3">
          {RESULTS.map((result) => (
            <StaggerItem key={result.title}>
              <HoverLift className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-colors hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/40">
                <motion.div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                  style={{ originX: 0 }}
                />
                <p
                  className={`text-5xl font-black tracking-tight md:text-6xl ${
                    result.accent ? "text-orange-500" : "text-slate-900"
                  }`}
                >
                  <AnimatedCounter
                    value={result.value}
                    prefix={result.prefix}
                    suffix={result.suffix}
                  />
                </p>
                <h4 className="mt-3 text-lg font-bold text-slate-900">
                  {result.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {result.description}
                </p>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
