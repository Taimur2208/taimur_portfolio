import { Terminal, MessageCircle, Mail, ShieldCheck, Brain, ArrowUp, MapPin, ChevronRight } from "lucide-react";
import { LINKS, PROFILE, CERTIFICATES } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-sky-600 font-display text-base font-bold text-slate-950 sm:h-11 sm:w-11 sm:text-lg">
                TK
              </div>
              <div className="min-w-0">
                <p className="font-display break-words text-base font-bold leading-tight text-white sm:text-lg">
                  Taimur Khan <span className="text-slate-500">|</span>{" "}
                  <span className="text-emerald-400">Python Developer</span>
                </p>
                <p className="mt-0.5 flex items-center gap-1 font-mono text-[10px] text-slate-500 sm:text-[11px]">
                  <Terminal className="h-3 w-3 shrink-0" /> python + cyber_security
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-slate-400 sm:mt-4 sm:text-[14px]">
              Python Developer & Cyber Security Enthusiast. ICIP Certified with a verified
              128 IQ — helping people with code, security and smart solutions.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-[13px] font-bold text-[#062e1c] transition hover:brightness-110 active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={LINKS.email}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-bold text-white transition hover:border-sky-400/50 hover:bg-sky-400/10 active:scale-[0.98]"
              >
                <Mail className="h-4 w-4 text-sky-300" /> Email
              </a>
            </div>
          </div>

          {/* quick links */}
          <div className="min-w-0">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white sm:text-[15px]">Quick Links</h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] sm:mt-4 sm:block sm:space-y-2.5 sm:text-[14px] lg:grid-cols-1">
              {[
                ["Home", "#home"],
                ["About Me", "#about"],
                ["Skills", "#skills"],
                ["Certificates", "#certificates"],
                ["Services", "#services"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="group inline-flex items-center gap-1 text-slate-400 transition hover:text-emerald-300">
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-emerald-400" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* credentials */}
          <div className="min-w-0">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white sm:text-[15px]">Credentials</h4>
            <ul className="mt-3 space-y-3 text-[13px] sm:mt-4 sm:text-[14px]">
              <li className="flex items-start gap-2.5 text-slate-400">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span className="min-w-0 break-words">
                  <span className="font-semibold text-slate-200">ICIP</span> — OPSWAT Academy
                  <span className="block break-all font-mono text-[11px] text-slate-500">ID: {CERTIFICATES.icip.id}</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <Brain className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                <span className="min-w-0 break-words">
                  <span className="font-semibold text-slate-200">128 IQ</span> — myIQ Verified
                  <span className="block font-mono text-[11px] text-slate-500">ID: {CERTIFICATES.iq.id}</span>
                </span>
              </li>
              <li>
                <a href="#certificates" className="font-mono text-[12px] text-emerald-300 hover:underline">
                  → View my certificates
                </a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div className="min-w-0">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white sm:text-[15px]">Contact Info</h4>
            <ul className="mt-3 space-y-3 text-[13px] text-slate-400 sm:mt-4 sm:text-[14px]">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                <a href={LINKS.email} className="min-w-0 break-all hover:text-white">{PROFILE.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
                  WhatsApp — Chat Directly
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                <span className="break-words">{PROFILE.location}</span>
              </li>
            </ul>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-[13px] font-bold text-white transition hover:border-emerald-400/50 hover:bg-emerald-400/10 active:scale-[0.98] sm:mt-5 sm:w-auto"
            >
              <ArrowUp className="h-4 w-4 text-emerald-300" /> Back to Top
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2.5 border-t border-white/10 pt-5 text-center sm:mt-12 sm:flex-row sm:gap-3 sm:pt-6 sm:text-left">
          <p className="font-display text-[13px] font-bold text-white sm:text-[14px]">
            Taimur Khan <span className="text-slate-600">|</span>{" "}
            <span className="text-emerald-400">Python Developer</span>
          </p>
          <p className="font-mono text-[11px] text-slate-500 sm:text-[12px]">
            © {year} Taimur Khan • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
