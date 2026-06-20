"use client";

import { IconCheck, IconDollar, IconDroplet, IconGears, IconUsers } from "./icons";
import { FadeIn, HoverLift, Stagger, StaggerItem, motion } from "./motion";

const FEATURES = [
  {
    icon: IconDroplet,
    title: "Consumo de Combustível com Precisão Máxima",
    description:
      "O sistema automatiza o cálculo de médias com base na leitura atualizada do horímetro ou odómetro. Evite desvios, erros e fraudes no abastecimento de campo.",
    highlights: [
      { label: "L/h (Litros por Hora)", detail: "Máquinas de construção, mineração e agrícola." },
      { label: "L/km (Litros por KM)", detail: "Camiões, carrinhas e ligeiros." },
      { label: "Controlo de Comboio", detail: "Gestão de tanques móveis e transferências." },
    ],
    span: "lg:col-span-2",
    accent: "from-orange-500/10 to-orange-100/30",
  },
  {
    icon: IconDollar,
    title: "Gestão Financeira por Frente",
    description:
      "Mantenha os custos sob controle rigoroso e evite qualquer tipo de surpresa orçamental no fecho do mês.",
    highlights: [
      { label: "Teto de Gasto", detail: "Aloque limites de crédito para frentes de trabalho ou equipamentos específicos." },
      { label: "Postos Digitais", detail: "Integração total para lançamentos imediatos e auditoria rigorosa de talões e cupons." },
    ],
    span: "",
    accent: "from-slate-500/5 to-slate-100/50",
  },
  {
    icon: IconGears,
    title: "Manutenção Preventiva Inteligente",
    description:
      "Não espere que a máquina pare para agir. Monitorize o desgaste e a utilização real dos seus ativos de forma automatizada.",
    highlights: [
      { label: "Alertas Prévios", detail: "Avisos automáticos ao atingir 80% e 90% do prazo." },
      { label: "Bloqueios de Segurança", detail: "Impeça a operação com revisões vencidas." },
      { label: "Histórico Vitalício", detail: "Registo digital completo de cada ativo." },
    ],
    span: "",
    accent: "from-blue-500/5 to-blue-100/30",
  },
  {
    icon: IconUsers,
    title: "Gestão de Operadores e Recursos Humanos",
    description:
      "Garanta a conformidade legal e certifique-se de que apenas profissionais habilitados e autorizados operam os ativos da empresa.",
    highlights: [
      { label: "Registo Mobile", detail: "Entradas e saídas com validação de geolocalização." },
      { label: "Controlo de CNH", detail: "Alertas de vencimento de documentos e categorias." },
      { label: "Análise de Produtividade", detail: "Horas de ponto vs. horas de motor ligado." },
    ],
    span: "lg:col-span-2",
    accent: "from-emerald-500/5 to-emerald-100/30",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Plataforma Completa
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Gestão Total Numa Única Plataforma
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tecnologia de ponta ponta a ponta para eliminar gargalos operacionais.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title} className={feature.span}>
              <HoverLift
                className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br ${feature.accent} p-8 transition-colors hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100/30`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                >
                  <feature.icon className="h-7 w-7" />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>

                <ul className="mt-6 space-y-3 rounded-xl bg-white/80 p-4 ring-1 ring-slate-100">
                  {feature.highlights.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex gap-3 text-sm"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <IconCheck className="h-3 w-3" />
                      </span>
                      <span>
                        <strong className="text-slate-900">{item.label}:</strong>{" "}
                        <span className="text-slate-600">{item.detail}</span>
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
