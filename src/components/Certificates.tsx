import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Brain, X, BadgeCheck, Calendar,
  Hash, Award, Eye, QrCode, Building2,
} from "lucide-react";
import { CERTIFICATES } from "../config";

type CertKey = "icip" | "iq" | null;

export default function Certificates() {
  const [open, setOpen] = useState<CertKey>(null);

  return (
    <section id="certificates" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs sm:text-sm text-emerald-400">{"// 03 — verified_credentials"}</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white min-[400px]:text-4xl sm:text-5xl">
            My <span className="text-emerald-400">Certificates</span>
          </h2>
          <p className="mt-3 text-sm sm:mt-4 sm:text-base text-slate-400">
            100% real & verifiable. Click any certificate to view full details.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          {/* ===== CERT 1 — OPSWAT ICIP (Pre-Security) ===== */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="shine group relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl shadow-black/40 sm:rounded-[24px]"
          >
            <div className="relative bg-gradient-to-r from-[#0b1e3a] via-[#2a0f45] to-[#3b0f4f] p-5 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-600 to-fuchsia-500" />
              <div className="flex flex-col gap-4 min-[520px]:flex-row min-[520px]:items-start min-[520px]:gap-5">
                <div className="flex h-24 w-20 shrink-0 items-center justify-center self-start overflow-hidden rounded-xl border-2 border-sky-400/70 bg-gradient-to-b from-[#1b2a5a] to-[#0d1633] shadow-[0_0_30px_rgba(56,189,248,0.35)] min-[520px]:h-24 min-[520px]:w-20">
                  <div className="text-center">
                    <p className="font-mono text-[7px] font-bold leading-tight text-sky-200">INTRODUCTION TO<br/>CRITICAL<br/>INFRASTRUCTURE<br/>PROTECTION</p>
                    <p className="font-display mt-1 text-xl font-black tracking-widest text-white">ICIP</p>
                    <p className="mt-1 bg-sky-500 py-0.5 font-mono text-[7px] font-bold text-white">OPSWAT.</p>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 sm:px-3 sm:text-[11px]">
                    <ShieldCheck className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" /> Pre-Security • Verified
                  </span>
                  <h3 className="font-display mt-2 text-lg font-bold leading-snug text-white min-[400px]:text-xl sm:text-2xl">
                    Introduction to Critical Infrastructure Protection
                  </h3>
                  <p className="mt-1 font-mono text-[11px] sm:text-[12px] text-slate-400">{CERTIFICATES.icip.cpe}</p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="grid grid-cols-1 gap-2.5 text-[13px] min-[480px]:grid-cols-2 sm:gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]"><Building2 className="h-3 w-3 shrink-0"/> Issuer</p>
                  <p className="mt-1 text-sm font-bold text-white">OPSWAT Academy</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]"><Hash className="h-3 w-3 shrink-0"/> Cert ID</p>
                  <p className="mt-1 break-all font-mono text-sm font-bold text-emerald-300">{CERTIFICATES.icip.id}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]"><Calendar className="h-3 w-3 shrink-0"/> Issued</p>
                  <p className="mt-1 text-sm font-bold text-white">{CERTIFICATES.icip.issued}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]"><BadgeCheck className="h-3 w-3 shrink-0"/> Expires</p>
                  <p className="mt-1 text-sm font-bold text-white">{CERTIFICATES.icip.expires}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-5">
                <button
                  onClick={() => setOpen("icip")}
                  className="shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110 active:scale-[0.98]"
                >
                  <Eye className="h-4 w-4 shrink-0" /> View Full Certificate
                </button>
              </div>
            </div>
          </motion.article>

          {/* ===== CERT 2 — myIQ 128 ===== */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="shine group relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl shadow-black/40 sm:rounded-[24px]"
          >
            <div className="relative bg-gradient-to-r from-slate-100 via-white to-sky-100 p-5 text-slate-900 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-fuchsia-500" />
              <div className="flex flex-col gap-4 min-[520px]:flex-row min-[520px]:items-start min-[520px]:justify-between">
                <div className="min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 sm:px-3 sm:text-[11px]">
                    <Brain className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" /> High IQ • Verified
                  </span>
                  <h3 className="font-display mt-2 text-lg font-bold leading-snug min-[400px]:text-xl sm:text-2xl">
                    General Intelligence Quotient Certificate
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-slate-500 sm:text-[12px]">awarded to <span className="font-bold text-slate-800">Taimur Khan</span></p>
                </div>
                <div className="flex shrink-0 flex-row items-center justify-between gap-3 rounded-2xl border border-blue-200 bg-white px-4 py-2.5 shadow-lg min-[520px]:w-auto min-[520px]:flex-col min-[520px]:justify-center min-[520px]:gap-0 min-[520px]:px-5 min-[520px]:py-3">
                  <span className="font-display text-4xl font-black text-blue-600 sm:text-5xl">128</span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">IQ Score</span>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-7">
              <div className="grid grid-cols-1 gap-2.5 text-[13px] min-[480px]:grid-cols-2 sm:gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]"><Building2 className="h-3 w-3 shrink-0"/> Issuer</p>
                  <p className="mt-1 text-sm font-bold text-white">myIQ Official</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]"><Hash className="h-3 w-3 shrink-0"/> Cert ID</p>
                  <p className="mt-1 font-mono text-sm font-bold text-amber-300">{CERTIFICATES.iq.id}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]"><Calendar className="h-3 w-3 shrink-0"/> Date</p>
                  <p className="mt-1 text-sm font-bold text-white">{CERTIFICATES.iq.date}</p>
                </div>
                <div className="rounded-xl border border-amber-400/25 bg-amber-400/10 p-3">
                  <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-amber-400 sm:text-[11px]"><Award className="h-3 w-3 shrink-0"/> Level</p>
                  <p className="mt-1 text-sm font-bold text-amber-200">Superior • Top 3%</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-5">
                <button
                  onClick={() => setOpen("iq")}
                  className="shine inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110 active:scale-[0.98]"
                >
                  <Eye className="h-4 w-4 shrink-0" /> View Full Certificate
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      {/* ============ MODAL ============ */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-4"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-2xl shadow-2xl sm:max-h-[90vh] sm:rounded-[20px]"
            >
              {open === "icip" ? <IcipFull /> : <IqFull />}
              <div className="sticky bottom-0 flex items-center justify-center border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur sm:justify-end sm:p-4">
                <button onClick={() => setOpen(null)} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-[0.98] sm:w-auto">
                  <X className="h-4 w-4" /> Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ---- Full recreated ICIP certificate ----
function IcipFull() {
  return (
    <div className="cert-paper text-slate-800">
      <div className="h-2 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 sm:h-3" />
      <div className="bg-gradient-to-r from-[#0b1e3a] via-[#231040] to-[#3b0f4f] p-5 text-white sm:p-8 lg:p-10">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
          <div className="flex h-36 w-28 shrink-0 items-center justify-center rounded-xl border-[3px] border-sky-400 bg-gradient-to-b from-[#22336b] to-[#0b1533] text-center shadow-[0_0_40px_rgba(56,189,248,0.4)] sm:h-40 sm:w-32">
            <div>
              <p className="px-2 font-mono text-[7px] font-bold leading-tight text-sky-200 sm:text-[8px]">INTRODUCTION TO CRITICAL INFRASTRUCTURE PROTECTION</p>
              <div className="mx-3 my-2 h-px bg-white/60" />
              <p className="font-display text-2xl font-black tracking-[0.2em] sm:text-3xl">ICIP</p>
              <div className="mx-3 my-2 h-px bg-white/60" />
              <p className="bg-sky-500 py-1 font-mono text-[8px] font-bold sm:text-[9px]">OPSWAT.</p>
            </div>
          </div>
          <div className="min-w-0 pt-1 sm:pt-2">
            <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">Introduction to Critical Infrastructure Protection</h3>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-300 sm:mt-3 sm:text-[12px] sm:tracking-[0.2em]">CPE Credits: 0.50</p>
          </div>
        </div>
      </div>
      <div className="p-5 text-center sm:p-8 lg:p-10">
        <p className="font-display break-words text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">Taimur Khan</p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-[15px]">
          has successfully completed the standards and requirements and is recognized as a
          graduate of the Introduction to CIP program.
        </p>
        <div className="mt-6 grid gap-5 text-left sm:mt-8 sm:grid-cols-3 sm:gap-6">
          <div className="rounded-xl bg-slate-50 p-3 font-mono text-[11px] leading-relaxed text-slate-600 sm:bg-transparent sm:p-0 sm:text-[12px]">
            <p className="break-words"><span className="font-bold">Issued:</span> 10/11/2026</p>
            <p className="break-words"><span className="font-bold">Certificate ID:</span> NyfUMDlGzA</p>
            <p><span className="font-bold">Expiration:</span> 10/11/2027</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl italic text-slate-800 sm:text-3xl" style={{ fontFamily: "cursive" }}>B. Czarny</p>
            <div className="mx-auto mt-1 h-px w-32 bg-slate-400 sm:w-40" />
            <p className="mt-1 text-[12px] font-semibold">Benny Czarny</p>
            <p className="text-[11px] text-slate-500">CEO & Founder, OPSWAT</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl italic text-slate-800 sm:text-3xl" style={{ fontFamily: "cursive" }}>I. Shakeel</p>
            <div className="mx-auto mt-1 h-px w-32 bg-slate-400 sm:w-40" />
            <p className="mt-1 text-[12px] font-semibold">Irfan Shakeel</p>
            <p className="text-[11px] text-slate-500">VP Training & Certification</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-4 sm:flex-row">
          <p className="max-w-full break-all font-mono text-[10px] text-blue-600 sm:truncate sm:text-[11px]">learn.opswatacademy.com/certificate/NyfUMDlGzA</p>
          <p className="whitespace-nowrap font-display text-base font-bold tracking-widest text-slate-800 sm:text-lg">OPSWAT <span className="font-light text-fuchsia-900">academy.</span></p>
        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-[#0b1e3a] to-[#3b0f4f] sm:h-3" />
    </div>
  );
}

// ---- Full recreated IQ certificate ----
function IqFull() {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-sky-100 p-3 sm:p-4 lg:p-6">
      <div className="cert-paper rounded-2xl border border-slate-200 p-5 shadow-xl sm:rounded-3xl sm:p-8 lg:p-12">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <Brain className="h-6 w-6 shrink-0 text-slate-800 sm:h-8 sm:w-8" />
            <span className="font-display whitespace-nowrap text-2xl font-bold text-slate-800 sm:text-3xl"><em className="font-light">my</em>IQ</span>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-1">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-slate-200 bg-white sm:h-24 sm:w-24">
              <QrCode className="h-10 w-10 text-slate-700 sm:h-16 sm:w-16" />
            </div>
            <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-widest text-slate-500 sm:text-[9px]">Scan to verify</span>
          </div>
        </div>
        <div className="mt-5 text-center sm:mt-6">
          <p className="text-sm text-slate-500 sm:text-lg">General Intelligence Quotient</p>
          <p className="font-display mt-1 text-2xl font-light tracking-[0.15em] text-slate-600 min-[400px]:text-3xl min-[400px]:tracking-[0.2em] sm:text-4xl sm:tracking-[0.3em] lg:text-5xl">CERTIFICATE</p>
          <p className="mt-4 text-sm text-slate-500 sm:mt-6 sm:text-base">awarded to</p>
          <p className="font-display mt-2 break-words text-3xl font-bold text-slate-900 min-[400px]:text-4xl sm:text-5xl lg:text-6xl" style={{ fontFamily: "Georgia, serif" }}>Taimur khan</p>
          <p className="mx-auto mt-3 max-w-lg text-[13px] text-slate-500 sm:mt-4 sm:text-[14px]">
            in recognition of successful completion of the myIQ Test with the following score:
          </p>
          <div className="mt-3 flex items-center gap-3 sm:mt-4 sm:gap-6">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="font-display text-6xl font-black text-blue-600 sm:text-7xl">128</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <p className="mt-3 text-base font-semibold text-slate-800 sm:mt-4 sm:text-lg">October 1, 2026</p>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:mt-8 sm:flex-row sm:items-end">
            <p className="text-[13px] text-slate-500 sm:text-[14px]">Certificate ID <span className="whitespace-nowrap font-bold text-slate-800">746 068</span></p>
            <div className="text-center">
              <p className="text-2xl italic text-slate-800 sm:text-3xl" style={{ fontFamily: "cursive" }}>J. Taylor</p>
              <div className="h-px w-40 bg-slate-300 sm:w-48" />
              <p className="mt-1 text-[12px] text-slate-500 sm:text-[13px]">Director of Assessments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
