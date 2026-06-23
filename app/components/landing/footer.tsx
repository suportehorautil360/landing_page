"use client";

import {
  FOOTER_FEATURE_LINKS,
  FOOTER_LEGAL_LINKS,
  NAV_LINKS,
  SITE_DISPLAY,
  SITE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "./constants";
import { IconWhatsApp } from "./icons";
import { Logo } from "./logo";
import { FadeIn, Stagger, StaggerItem, motion } from "./motion";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
      className="text-sm text-slate-400 transition-colors hover:text-orange-400"
    >
      {children}
    </motion.a>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
        {title}
      </h3>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-brand-navy-deep text-white">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Marca */}
          <FadeIn direction="left" className="lg:col-span-4">
            <div className="inline-flex">
              <Logo size="lg" />
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Plataforma 100% digital para gestão total de abastecimento,
              manutenção e operadores — com visão 360° em tempo real.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["360°", "Tempo Real", "Anti-Fraude"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Navegação + Funcionalidades */}
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <StaggerItem>
              <FooterColumn title="Navegação">
                {NAV_LINKS.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </FooterColumn>
            </StaggerItem>

            <StaggerItem>
              <FooterColumn title="Funcionalidades">
                {FOOTER_FEATURE_LINKS.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </FooterColumn>
            </StaggerItem>
          </Stagger>

          {/* Contacto */}
          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <FooterColumn title="Contacto">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/15"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                  <IconWhatsApp className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400/80">
                    WhatsApp
                  </p>
                  <p className="text-sm font-bold text-white">
                    {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </motion.a>

              <p className="text-xs leading-relaxed text-slate-500">
                Atendimento comercial de segunda a sexta, das 8h às 18h.
              </p>
            </FooterColumn>
          </FadeIn>
        </div>

        {/* Barra inferior */}
        <FadeIn delay={0.2}>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Hora Útil 360. Todos os direitos
              reservados.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>

            <p className="text-xs text-slate-600">
              Feito para operações que não param.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
