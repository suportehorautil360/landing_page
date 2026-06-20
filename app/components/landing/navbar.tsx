"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "./constants";
import { easeOut } from "./motion";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass-dark rounded-2xl px-5 py-3.5 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-2"
            >
              <motion.span
                whileHover={{ rotate: 5, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-sm font-black text-white shadow-lg shadow-orange-500/30"
              >
                360
              </motion.span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                HORA ÚTIL{" "}
                <span className="text-orange-400">360</span>
              </span>
            </motion.a>

            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="hidden rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 sm:inline-flex"
              >
                Falar com Especialista
              </motion.a>

              <motion.button
                type="button"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.92 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 md:hidden"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-4">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center text-sm font-bold text-white"
                  >
                    Falar com Especialista
                  </motion.a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
