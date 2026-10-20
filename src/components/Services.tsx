import { motion } from "framer-motion";
import { Bot, ShieldCheck, Bug, GraduationCap, FileCode2, LockKeyhole, ArrowRight } from "lucide-react";
import { LINKS } from "../config";

const services = [
  {
    icon: Bot,
    title: "Python Automation",
    desc: "Repetitive work? I automate it — files, Excel, messages, scraping & custom bots that save hours daily.",
    tag: "Most Popular",
    color: "from-amber-400 to-orange-400",
  },
  {
    icon: FileCode2,
    title: "Scripts & Small Projects",
    desc: "Need a Python script, tool or mini-project? Clean code, explained simply, delivered fast.",
    tag: "Python",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security Guidance",
    desc: "Learn how to stay safe online, secure accounts & understand basics of ethical security.",
    tag: "Security",
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: LockKeyhole,
    title: "Critical Infrastructure Basics",
    desc: "ICIP-certified guidance on CIP concepts — perfect for students starting a security career.",
    tag: "ICIP",
    color: "from-fuchsia-400 to-purple-500",
  },
  {
    icon: Bug,
    title: "Bug Fixing & Code Help",
    desc: "Stuck with an error? Send your code — I'll debug it, fix it and explain the solution.",
    tag: "Fast Help",
    color: "from-red-400 to-rose-500",
  },
  {
    icon: GraduationCap,
    title: "Learning & Mentorship",
    desc: "New to Python or cyber security? I explain in simple words (English / Urdu) step-by-step.",
    tag: "1-on-1",
    color: "from-cyan-400 to-emerald-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs text-emerald-400 sm:text-sm">{"// 04 — how_i_help"}</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white min-[400px]:text-4xl sm:text-5xl">
            What I Can <span className="text-emerald-400">Do For You</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
            Got a problem? A project? Or just want to learn? Pick a service and message me directly.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group relative min-w-0 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] active:scale-[0.99] sm:rounded-[22px] sm:p-7"
            >
              <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-2xl transition group-hover:opacity-25`} />
              <div className="relative flex items-start justify-between gap-2">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-lg sm:h-12 sm:w-12 sm:rounded-2xl`}>
                  <s.icon className="h-5 w-5 text-slate-950 sm:h-6 sm:w-6" />
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-300 sm:px-3 sm:text-[10px]">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display relative mt-4 break-words text-lg font-bold text-white sm:mt-5 sm:text-xl">{s.title}</h3>
              <p className="relative mt-1.5 text-[13px] leading-relaxed text-slate-400 sm:mt-2 sm:text-[14px]">{s.desc}</p>
              <span className="relative mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-emerald-300 transition group-hover:gap-3 sm:mt-5 sm:text-[14px]">
                Get this help <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
