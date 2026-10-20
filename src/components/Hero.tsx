import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Award,
  ShieldCheck,
  Brain,
  ChevronDown,
  MapPin,
  BadgeCheck,
  FileBadge,
  Code2,
} from "lucide-react";
import ProfilePhoto from "./ProfilePhoto";
import { LINKS, PROFILE } from "../config";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = deleting ? 38 : 72;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, idx, deleting, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(PROFILE.roles);

  return (
    <section id="home" className="relative overflow-hidden pt-[64px] sm:pt-[72px]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-8 sm:gap-12 sm:px-6 sm:pb-16 sm:pt-10 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-24">
        {/* LEFT */}
        <div className="min-w-0 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 sm:px-4"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate text-[12px] font-semibold text-emerald-300 sm:text-[13px]">
              {PROFILE.availability}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-5 font-mono text-[13px] text-sky-300 sm:mt-6 sm:text-sm"
          >
            {"// Hello World, I am"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="font-display mt-2 break-words text-4xl font-bold leading-[1.05] tracking-tight text-white min-[400px]:text-5xl sm:text-6xl lg:text-7xl"
          >
            Taimur{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300 bg-clip-text text-transparent">
              Khan
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 flex min-h-[36px] items-start justify-center sm:min-h-[44px] sm:items-center sm:justify-start"
          >
            <span className="mr-2 shrink-0 font-mono text-base text-emerald-400 sm:text-lg">&gt;_</span>
            <span className="typing-caret break-words font-display text-lg font-semibold leading-snug text-slate-100 min-[400px]:text-xl sm:text-2xl">
              {typed}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:mx-0 sm:mt-5 sm:text-base"
          >
            I build powerful things with{" "}
            <span className="font-semibold text-amber-300">Python</span> and protect
            systems with{" "}
            <span className="font-semibold text-emerald-300">Cyber Security</span>{" "}
            skills. Certified in{" "}
            <span className="text-slate-200">Critical Infrastructure Protection (ICIP)</span>{" "}
            with a verified <span className="text-slate-200">128 IQ</span> — I solve
            problems fast, clean and professionally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
          >
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="shine group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#062e1c] shadow-[0_0_40px_rgba(37,211,102,0.4)] transition hover:brightness-110 active:scale-[0.98] sm:w-auto sm:px-7 sm:py-4 sm:text-[15px]"
            >
              <MessageCircle className="h-5 w-5 shrink-0 transition group-hover:scale-110" />
              Contact on WhatsApp
            </a>
            <a
              href={LINKS.email}
              className="shine inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-sky-400/50 hover:bg-sky-400/10 active:scale-[0.98] sm:w-auto sm:px-7 sm:py-4 sm:text-[15px]"
            >
              <Mail className="h-5 w-5 shrink-0 text-sky-300" />
              Contact via Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="mt-5 flex flex-col items-center gap-2 text-[12px] text-slate-400 sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-x-5 sm:gap-y-2 sm:text-[13px]"
          >
            <span className="inline-flex items-center gap-1.5 text-center">
              <MapPin className="h-4 w-4 shrink-0 text-emerald-400" />
              <span className="break-words">{PROFILE.location}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 shrink-0 text-sky-400" /> 2 Verified Certificates
            </span>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44 }}
            className="mx-auto mt-6 grid max-w-xl grid-cols-3 gap-2 sm:mx-0 sm:mt-8 sm:gap-3"
          >
            {[
              { icon: Brain, value: "128", label: "Verified IQ", color: "text-amber-300" },
              { icon: FileBadge, value: "02", label: "Certificates", color: "text-emerald-300" },
              { icon: Code2, value: "100%", label: "Dedication", color: "text-sky-300" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-center backdrop-blur transition hover:border-emerald-400/40 hover:bg-emerald-400/5 sm:rounded-2xl sm:p-4"
              >
                <s.icon className={`mx-auto h-4 w-4 sm:h-5 sm:w-5 ${s.color}`} />
                <p className="font-display mt-1 text-xl font-bold text-white sm:text-2xl">{s.value}</p>
                <p className="text-[9px] font-medium uppercase tracking-wider text-slate-500 min-[400px]:text-[10px] sm:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="glass relative overflow-hidden rounded-[20px] border border-white/10 p-5 shadow-2xl shadow-black/50 min-[400px]:p-6 sm:rounded-[28px] sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-500/20 blur-[70px]" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-500/20 blur-[70px]" />

            {/* terminal header */}
            <div className="relative mb-5 flex items-center gap-2 sm:mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
              <span className="ml-2 truncate font-mono text-[10px] text-slate-500 sm:text-[11px]">
                taimur@portfolio:~$
              </span>
            </div>

            <div className="relative flex justify-center py-2">
              <ProfilePhoto size="xl" />
            </div>

            <div className="relative mt-5 text-center sm:mt-6">
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Taimur Khan
              </h3>
              <p className="mt-1 break-words font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-300 min-[400px]:text-[11px] sm:text-[12px] sm:tracking-[0.18em]">
                Python Developer • Cyber Security
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 sm:mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-200 sm:px-3 sm:text-[12px]">
                  <ShieldCheck className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" /> ICIP Certified
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-semibold text-amber-200 sm:px-3 sm:text-[12px]">
                  <Award className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" /> 128 IQ
                </span>
              </div>
            </div>

            {/* code strip */}
            <div className="relative mt-5 overflow-x-auto rounded-xl border border-white/10 bg-slate-950/80 p-3 font-mono text-[11px] leading-relaxed sm:mt-6 sm:text-[12px]">
              <p className="whitespace-nowrap"><span className="text-fuchsia-400">def</span> <span className="text-sky-300">hire_taimur</span><span className="text-slate-400">():</span></p>
              <p className="whitespace-nowrap pl-4"><span className="text-fuchsia-400">return</span> <span className="text-emerald-300">"clean_code + security + speed"</span></p>
              <p className="whitespace-nowrap text-slate-500"># ready_to_help = True<span className="animate-blink text-emerald-400">_</span></p>
            </div>
          </div>

          {/* floating badges — desktop only to avoid overflow */}
          <div className="animate-float-y absolute -left-8 top-16 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur xl:block">
            <p className="font-mono text-[11px] text-amber-300">🐍 python</p>
            <p className="text-[13px] font-bold text-white">Automation Expert</p>
          </div>
          <div className="animate-float-y-delay absolute -right-6 bottom-24 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur xl:block">
            <p className="font-mono text-[11px] text-emerald-300">🛡 secure</p>
            <p className="text-[13px] font-bold text-white">Cyber Specialist</p>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="mx-auto mb-6 flex w-fit flex-col items-center gap-1 text-slate-500 transition hover:text-emerald-300 sm:mb-8"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] sm:text-[11px]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
