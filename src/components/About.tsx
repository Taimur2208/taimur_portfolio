import { motion } from "framer-motion";
import { GraduationCap, Target, HeartHandshake, Rocket, CheckCircle2 } from "lucide-react";

const points = [
  "Python programming — scripts, automation, scraping & logic building",
  "Cyber security fundamentals with Critical Infrastructure Protection (ICIP)",
  "Verified 128 IQ — fast learning, sharp analysis & smart solutions",
  "Clean communication, honest work and on-time help",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="min-w-0"
          >
            <p className="font-mono text-xs text-emerald-400 sm:text-sm">{"// 01 — about_me"}</p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white min-[400px]:text-4xl sm:text-5xl">
              Who is <span className="text-emerald-400">Taimur Khan?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:mt-5 sm:text-base">
              I'm a passionate <span className="font-semibold text-white">Python Developer</span> and{" "}
              <span className="font-semibold text-white">Cyber Security Enthusiast</span> from
              Pakistan. I love writing code that works, and securing systems that matter.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">
              My journey combines <span className="text-amber-300">development</span> +{" "}
              <span className="text-emerald-300">security</span> — so you get help from someone
              who understands both how software is built <em>and</em> how it can be attacked
              and protected.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 sm:mt-8 sm:gap-3">
              {[
                { icon: GraduationCap, t: "ICIP Graduate", d: "OPSWAT Academy" },
                { icon: Target, t: "128 IQ Score", d: "myIQ Verified" },
                { icon: HeartHandshake, t: "Friendly Help", d: "Beginner to Pro" },
                { icon: Rocket, t: "Fast Delivery", d: "Quick Response" },
              ].map((c) => (
                <div
                  key={c.t}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-emerald-400/40 hover:bg-emerald-400/5 min-[480px]:block sm:p-4"
                >
                  <c.icon className="h-6 w-6 shrink-0 text-emerald-400" />
                  <div className="min-w-0">
                    <p className="mt-0 font-display text-sm font-bold text-white min-[480px]:mt-2 sm:text-[15px]">{c.t}</p>
                    <p className="text-[12px] text-slate-500">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="glass min-w-0 rounded-[20px] border border-white/10 p-5 shadow-2xl shadow-black/40 sm:rounded-[24px] sm:p-7 lg:p-9"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 sm:h-3 sm:w-3" />
              <span className="ml-2 truncate font-mono text-[11px] text-slate-500 sm:text-xs">about_taimur.py</span>
            </div>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-slate-950/90 p-4 font-mono text-[11px] leading-[1.8] sm:mt-5 sm:rounded-2xl sm:p-5 sm:text-[13px]">
              <code className="whitespace-pre">
                <span className="text-slate-500"># ── profile ──────────</span>{"\n"}
                <span className="text-fuchsia-400">name</span><span className="text-slate-400"> = </span><span className="text-emerald-300">"Taimur Khan"</span>{"\n"}
                <span className="text-fuchsia-400">role</span><span className="text-slate-400"> = </span><span className="text-emerald-300">"Python Developer"</span>{"\n"}
                <span className="text-fuchsia-400">focus</span><span className="text-slate-400"> = </span><span className="text-emerald-300">"Cyber Security"</span>{"\n"}
                <span className="text-fuchsia-400">iq_score</span><span className="text-slate-400"> = </span><span className="text-amber-300">128</span>{"  "}
                <span className="text-slate-500"># verified ✓</span>{"\n"}
                <span className="text-fuchsia-400">certified</span><span className="text-slate-400"> = </span><span className="text-sky-300">True</span>{"  "}
                <span className="text-slate-500"># ICIP</span>{"\n\n"}
                <span className="text-slate-500"># ── mission ──────────</span>{"\n"}
                <span className="text-fuchsia-400">def</span>{" "}<span className="text-sky-300">mission</span><span className="text-slate-400">():</span>{"\n"}
                {"    "}<span className="text-fuchsia-400">return</span>{" "}<span className="text-emerald-300">"Help people + secure"</span>
              </code>
            </pre>

            <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13px] text-slate-300 sm:gap-3 sm:text-[14px]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400 sm:h-5 sm:w-5" />
                  <span className="min-w-0 break-words leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
