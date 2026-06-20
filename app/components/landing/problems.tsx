"use client";

import { IconBan, IconFuel, IconHourglass, IconWarning, IconWrench } from "./icons";
import { FadeIn, HoverLift, Stagger, StaggerItem, motion } from "./motion";

const PROBLEMS = [
  {
    icon: IconFuel,
    num: "01",
    title: "Falta de Controlo de Consumo",
    description:
      "Ausência de dados reais sobre o consumo exato por cada equipamento da frota.",
  },
  {
    icon: IconWrench,
    num: "02",
    title: "Manutenções Corretivas Recorrentes",
    description:
      "Paragens inesperadas e caras por pura falta de alertas preventivos automáticos.",
  },
  {
    icon: IconHourglass,
    num: "03",
    title: "Equipamentos Parados",
    description:
      "Prejuízos operacionais causados por falhas diretas na alocação de trabalho.",
  },
  {
    icon: IconBan,
    num: "04",
    title: "Inspeções sem Evidências",
    description:
      "Inexistência absoluta de registos e evidências fotográficas nas vistorias.",
  },
];

const PAIN_STATS = [
  { value: "4h+", label: "Perdidas por dia em planilhas" },
  { value: "23%", label: "Desperdício de combustível" },
  { value: "0", label: "Rastreabilidade real" },
];

export function Problems() {
  return (
    <section id="problema" className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-500/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-orange-500/8 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeIn direction="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-red-500"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                O Problema
              </span>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem]">
                Os Desafios da{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  Gestão Manual
                </span>
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Muitas operações ainda dependem de folhas de papel e folhas de
                cálculo manuais, gerando falhas invisíveis que reduzem o lucro.
              </p>
            </FadeIn>

            <Stagger className="mt-8 grid grid-cols-3 gap-3">
              {PAIN_STATS.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-slate-200/80 bg-white p-3 text-center shadow-sm"
                  >
                    <p className="text-xl font-extrabold text-red-500 md:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] leading-tight text-slate-500 md:text-[11px]">
                      {stat.label}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn direction="left" delay={0.35}>
              <div className="card-shine relative mt-8 overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-2xl shadow-slate-900/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.12),transparent_60%)]" />
                <div className="relative flex gap-4">
                  <motion.div
                    animate={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 ring-1 ring-orange-500/25"
                  >
                    <IconWarning className="h-5 w-5 text-orange-400" />
                  </motion.div>
                  <div>
                    <p className="font-bold text-white">O papel gera desperdício</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      Erros de digitação e perda de dados custam caro à sua
                      operação diariamente — e você só descobre no fecho do mês.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {PROBLEMS.map((problem, i) => (
                <StaggerItem
                  key={problem.title}
                  className={i === 0 ? "sm:col-span-2" : ""}
                >
                  <HoverLift
                    className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-red-200/80 hover:shadow-xl hover:shadow-red-100/40 ${
                      i === 0 ? "sm:flex sm:items-center sm:gap-6 sm:p-8" : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-6 -top-6 text-7xl font-black leading-none text-slate-100 transition duration-300 group-hover:text-red-50">
                      {problem.num}
                    </div>

                    <div
                      className={`relative flex gap-4 ${i === 0 ? "sm:items-center" : "flex-col sm:flex-row sm:items-start"}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                      >
                        <problem.icon />
                      </motion.div>

                      <div className="relative min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
                          Desafio {problem.num}
                        </span>
                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          {problem.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {problem.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-400"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeIn delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white/60 px-5 py-4 backdrop-blur-sm"
              >
                <div className="flex -space-x-2">
                  {PROBLEMS.slice(0, 4).map((p, i) => (
                    <motion.div
                      key={p.num}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      whileHover={{ y: -4, zIndex: 10 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-100 text-red-600"
                      style={{ zIndex: 4 - i }}
                    >
                      <p.icon className="h-3.5 w-3.5" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">4 riscos críticos</strong>{" "}
                  que a gestão manual não consegue resolver sozinha.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
