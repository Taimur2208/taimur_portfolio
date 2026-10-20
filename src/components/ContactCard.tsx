import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle, Mail, Copy, Check, Clock, MapPin,
  ShieldCheck, Zap, ChevronRight,
} from "lucide-react";
import ProfilePhoto from "./ProfilePhoto";
import { LINKS, PROFILE } from "../config";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs text-emerald-400 sm:text-sm">{"// 05 — get_in_touch"}</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white min-[400px]:text-4xl sm:text-5xl">
            Let's <span className="text-emerald-400">Work Together</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
            One click and you're chatting with me directly. I reply fast and help with full dedication.
          </p>
        </motion.div>

        {/* ===== PROFESSIONAL CONTACT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-8 overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 shadow-[0_30px_100px_rgba(0,0,0,0.6)] sm:mt-12 sm:rounded-[28px]"
        >
          {/* top glow line */}
          <div className="h-1.5 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300" />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-[90px]" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-500/15 blur-[90px]" />

          <div className="relative grid gap-6 p-5 min-[400px]:p-6 sm:gap-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-12">
            {/* left: identity */}
            <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
              <ProfilePhoto size="lg" />
              <h3 className="font-display mt-4 break-words text-2xl font-bold text-white sm:mt-5 sm:text-3xl">Taimur Khan</h3>
              <p className="mt-1 break-words font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-300 min-[400px]:text-[11px] sm:text-[12px] sm:tracking-[0.18em]">
                Python Developer • Cyber Security
              </p>
              <div className="mt-3 w-full space-y-2 text-[12px] text-slate-400 sm:mt-4 sm:text-[13px]">
                <p className="flex items-center justify-center gap-2 lg:justify-start">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="break-words">{PROFILE.location}</span>
                </p>
                <p className="flex items-center justify-center gap-2 lg:justify-start">
                  <Clock className="h-4 w-4 shrink-0 text-sky-400" />
                  <span>{PROFILE.responseTime}</span>
                </p>
                <p className="flex items-center justify-center gap-2 lg:justify-start">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-amber-300" />
                  <span>ICIP Certified • 128 IQ Verified</span>
                </p>
              </div>
            </div>

            {/* right: actions */}
            <div className="flex min-w-0 flex-col justify-center">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                  Direct message preview
                </p>
                <div className="mt-2.5 max-w-md rounded-2xl rounded-tl-sm bg-[#005c4b] p-3.5 text-[13px] leading-relaxed text-white shadow-lg sm:mt-3 sm:p-4 sm:text-[14px]">
                  "{PROFILE.whatsappMessage}"
                  <span className="mt-1 block text-right text-[11px] text-emerald-200/70">✓✓ auto-filled on click</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 min-[560px]:grid-cols-2 sm:mt-5 sm:gap-3">
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="shine group flex min-w-0 items-center gap-3 rounded-2xl bg-[#25D366] p-3.5 text-left shadow-[0_0_36px_rgba(37,211,102,0.35)] transition hover:brightness-110 active:scale-[0.98] sm:gap-4 sm:p-4 sm:pr-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/20 sm:h-12 sm:w-12">
                    <MessageCircle className="h-5 w-5 text-[#062e1c] sm:h-6 sm:w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold leading-tight text-[#062e1c] sm:text-[15px]">
                      Contact on WhatsApp
                    </span>
                    <span className="mt-0.5 block text-[11px] font-medium text-[#062e1c]/70 sm:text-[12px]">
                      Opens direct chat instantly
                    </span>
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-[#062e1c] transition group-hover:translate-x-1" />
                </a>

                <a
                  href={LINKS.email}
                  className="shine group flex min-w-0 items-center gap-3 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-500/20 to-blue-600/10 p-3.5 text-left transition hover:border-sky-400/60 hover:bg-sky-500/25 active:scale-[0.98] sm:gap-4 sm:p-4 sm:pr-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 sm:h-12 sm:w-12">
                    <Mail className="h-5 w-5 text-sky-300 sm:h-6 sm:w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-extrabold leading-tight text-white sm:text-[15px]">
                      Contact via Email
                    </span>
                    <span className="mt-0.5 block truncate text-[11px] font-medium text-sky-200/70 sm:text-[12px]">
                      {PROFILE.email}
                    </span>
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-sky-300 transition group-hover:translate-x-1" />
                </a>
              </div>

              {/* copy email row */}
              <button
                onClick={copyEmail}
                className="mt-2.5 flex min-w-0 items-center justify-between gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-3 text-left transition hover:border-emerald-400/40 hover:bg-emerald-400/5 sm:mt-3 sm:gap-3 sm:px-5 sm:py-3.5"
              >
                <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-slate-300 sm:text-[13px]">{PROFILE.email}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-[11px] font-bold text-white sm:px-3 sm:text-[12px]">
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>

              <p className="mt-3 flex items-start gap-2 text-[12px] leading-relaxed text-slate-500 sm:mt-4 sm:items-center sm:text-[13px]">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-amber-300 sm:mt-0" />
                <span>Available now — message me and get a professional reply.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
