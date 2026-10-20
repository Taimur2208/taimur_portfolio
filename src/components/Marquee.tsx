import { ShieldCheck, Code2, Brain, FileBadge, Zap, Lock, Terminal, Cpu } from "lucide-react";

const items = [
  { icon: Code2, text: "Python Development" },
  { icon: ShieldCheck, text: "Cyber Security" },
  { icon: Lock, text: "Critical Infrastructure Protection" },
  { icon: Brain, text: "128 Verified IQ" },
  { icon: FileBadge, text: "OPSWAT ICIP Certified" },
  { icon: Zap, text: "Automation & Scripting" },
  { icon: Terminal, text: "Problem Solving" },
  { icon: Cpu, text: "Fast & Reliable Help" },
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-slate-950/70 py-3 backdrop-blur sm:py-4">
      <div className="animate-marquee flex w-max items-center gap-2.5 sm:gap-3">
        {row.map((it, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 sm:gap-2.5 sm:px-5 sm:py-2.5"
          >
            <it.icon className="h-3.5 w-3.5 shrink-0 text-emerald-400 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap text-[13px] font-semibold text-slate-200 sm:text-sm">
              {it.text}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />
    </div>
  );
}
