import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, MessageCircle } from "lucide-react";
import { LINKS, PROFILE } from "../config";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass border-b border-white/10 shadow-lg shadow-black/30" : "bg-slate-950/60 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a href="#home" onClick={() => setOpen(false)} className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-sky-600 font-display text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.45)] sm:h-11 sm:w-11 sm:rounded-xl sm:text-lg">
            TK
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-300 sm:h-3 sm:w-3" />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="font-display truncate text-[15px] font-bold tracking-tight text-white sm:text-[17px]">
              Taimur <span className="text-emerald-400">Khan</span>
            </p>
            <p className="flex items-center gap-1 font-mono text-[10px] text-slate-400 sm:text-[11px]">
              <Terminal className="h-3 w-3 shrink-0 text-emerald-400" />
              <span className="truncate">python_dev --secure</span>
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white xl:px-4"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="shine ml-3 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(16,185,129,0.4)] transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10 active:scale-95 sm:p-2.5 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain border-b border-white/10 sm:max-h-[calc(100vh-72px)] lg:hidden"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] font-medium text-slate-200 transition hover:bg-white/5 active:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-3.5 text-[15px] font-bold text-slate-950 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                Contact on WhatsApp
              </a>
              <p className="break-all px-2 pt-3 text-center font-mono text-[11px] leading-relaxed text-slate-500">
                {PROFILE.email}
              </p>
              <p className="pb-1 pt-1 text-center font-mono text-[11px] text-emerald-400/80">
                WhatsApp: +92 308 9342404
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
