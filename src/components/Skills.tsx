import { motion } from "framer-motion";
import {
  Code2, ShieldCheck, Network, TerminalSquare, Brain, Bug,
  FileCode2, Globe, Database, Lock, Cpu, Wrench,
} from "lucide-react";

const bars = [
  { name: "Python Development", level: 92, color: "from-amber-400 to-yellow-300", icon: Code2 },
  { name: "Problem Solving & Logic (128 IQ)", level: 96, color: "from-fuchsia-400 to-purple-400", icon: Brain },
  { name: "Cyber Security Fundamentals", level: 86, color: "from-emerald-400 to-teal-300", icon: ShieldCheck },
  { name: "Critical Infrastructure Protection", level: 82, color: "from-sky-400 to-cyan-300", icon: Lock },
  { name: "Networking Basics", level: 78, color: "from-blue-400 to-indigo-300", icon: Network },
  { name: "Debugging & Support", level: 90, color: "from-orange-400 to-red-300", icon: Bug },
];

const tools = [
  { icon: FileCode2, label: "Python" },
  { icon: TerminalSquare, label: "Linux / Terminal" },
  { icon: Globe, label: "Web Scraping" },
  { icon: Database, label: "Data Handling" },
  { icon: ShieldCheck, label: "OPSWAT / ICIP" },
  { icon: Network, label: "Networks" },
  { icon: Cpu, label: "Automation" },
  { icon: Wrench, label: "Troubleshooting" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs text-emerald-400 sm:text-sm">{"// 02 — my_skills"}</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white min-[400px]:text-4xl sm:text-5xl">
            Skills & <span className="text-emerald-400">Expertise</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
            A powerful mix of coding + security — built for real-world help and projects.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          {/* bars */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass min-w-0 rounded-[20px] border border-white/10 p-5 sm:rounded-[24px] sm:p-7 lg:p-8"
          >
            <h3 className="font-display text-base font-bold text-white sm:text-lg">Core Strengths</h3>
            <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
              {bars.map((b, i) => (
                <div key={b.name} className="min-w-0">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span className="flex min-w-0 flex-1 items-start gap-2 text-[13px] font-semibold leading-snug text-slate-200 sm:text-[14px]">
                      <b.icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="break-words">{b.name}</span>
                    </span>
                    <span className="shrink-0 font-mono text-[12px] font-bold text-emerald-300 sm:text-[13px]">{b.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10 sm:h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${b.color} shadow-[0_0_12px_rgba(16,185,129,0.5)]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* tools + python card */}
          <div className="flex min-w-0 flex-col gap-5 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative min-w-0 overflow-hidden rounded-[20px] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-slate-900 to-sky-500/10 p-5 sm:rounded-[24px] sm:p-7 lg:p-8"
            >
              <div className="absolute -right-10 -top-10 select-none font-display text-[100px] font-bold leading-none text-white/[0.04] sm:text-[120px]">
                {"{;}"}
              </div>
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-amber-400 font-display text-lg font-bold text-slate-950 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                  λ
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-white sm:text-lg">Python First</h3>
                  <p className="font-mono text-[11px] text-amber-300 sm:text-xs">clean • fast • powerful</p>
                </div>
              </div>
              <p className="relative mt-3 text-[13px] leading-relaxed text-slate-300 sm:mt-4 sm:text-[14px]">
                From small scripts to full automation — I write Python code that is simple,
                readable and solves your problem. Web scraping, file handling, bots, logic
                tasks and learning support.
              </p>
              <div className="relative mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                {["Scripts", "Automation", "Scraping", "Bots", "Logic", "APIs"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300 sm:px-3 sm:text-[12px]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass min-w-0 rounded-[20px] border border-white/10 p-5 sm:rounded-[24px] sm:p-7 lg:p-8"
            >
              <h3 className="font-display text-base font-bold text-white sm:text-lg">Tools & Areas</h3>
              <div className="mt-4 grid grid-cols-2 gap-2.5 min-[480px]:grid-cols-4 sm:mt-5 sm:gap-3">
                {tools.map((t) => (
                  <div key={t.label} className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center transition hover:border-sky-400/40 hover:bg-sky-400/5 sm:rounded-2xl sm:p-4">
                    <t.icon className="mx-auto h-5 w-5 text-sky-300 transition group-hover:scale-110 group-hover:text-emerald-300 sm:h-6 sm:w-6" />
                    <p className="mt-1.5 break-words text-[11px] font-semibold leading-tight text-slate-300 sm:mt-2 sm:text-[12px]">{t.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
