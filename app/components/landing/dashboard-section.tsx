"use client";

import { FadeIn, HoverLift, Stagger, StaggerItem, motion } from "./motion";

export function DashboardSection() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <FadeIn direction="left">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
                Controlo Centralizado
              </span>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Aceda aos indicadores mais críticos a partir de qualquer lugar
              </h2>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                O Dashboard do Hora Útil 360 resume a saúde da sua frota numa única
                tela intuitiva. Tome decisões rápidas e assertivas baseadas em dados
                consolidados em tempo real, eliminando a necessidade de compilar
                relatórios no fim do mês.
              </p>
            </FadeIn>

            <Stagger className="mt-8 space-y-4">
              {[
                {
                  title: "Disponibilidade",
                  description: "Status de equipamentos ativos e parados em tempo real.",
                  accent: "bg-orange-500",
                },
                {
                  title: "Financeiro",
                  description: "Monitoramento rigoroso de custos diretos de toda a frota.",
                  accent: "bg-slate-900",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <HoverLift className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-orange-200 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className={`mt-0.5 h-10 w-1 shrink-0 rounded-full ${item.accent}`} />
                      <div>
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverLift>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <FadeIn direction="right" delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-orange-500/10 to-slate-900/5 blur-2xl" />
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl"
              >
                <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="ml-2 text-xs font-semibold text-slate-500">
                      horautil360.app/dashboard
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-emerald-400">
                    ● Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="rounded-xl bg-slate-800/80 p-5 ring-1 ring-white/5"
                  >
                    <p className="text-xs text-slate-400">Equipamentos Ativos</p>
                    <p className="mt-2 text-4xl font-black text-orange-400">87%</p>
                    <div className="mt-3 flex items-end gap-1">
                      {[65, 80, 72, 87, 90, 87].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-sm bg-orange-500/20"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h * 0.4}px` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <div className="h-full w-full rounded-sm bg-orange-500" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="rounded-xl bg-slate-800/80 p-5 ring-1 ring-white/5"
                  >
                    <p className="text-xs text-slate-400">Manutenções Hoje</p>
                    <p className="mt-2 text-4xl font-black text-sky-400">3</p>
                    <div className="mt-4 space-y-2">
                      {["Preventiva — Escavadeira", "Preventiva — Camião", "Corretiva — Gerador"].map(
                        (item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-2 text-[10px] text-slate-400"
                          >
                            <span className="h-1 w-1 rounded-full bg-sky-400" />
                            {item}
                          </motion.div>
                        ),
                      )}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 rounded-xl bg-slate-800/80 p-5 ring-1 ring-white/5"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs text-slate-400">Média de Consumo da Frota</p>
                    <span className="text-sm font-bold text-orange-400">74 L/h</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-700">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "74%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] text-slate-500">
                    <span>Meta: 68 L/h</span>
                    <span className="text-orange-400">+8.8% acima</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
