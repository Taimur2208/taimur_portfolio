import { useEffect, useRef } from "react";

// Subtle animated matrix / particles canvas + gradient orbs
export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const cols = Math.floor(w / 22);
    const drops: number[] = Array(cols).fill(0).map(() => Math.random() * -100);
    const chars = "01<>[]{}#$+-*/=pyTK".split("");

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(2,6,23,0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "13px JetBrains Mono, monospace";
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 22;
        const y = drops[i] * 22;
        const grad = ctx.createLinearGradient(x, y - 60, x, y);
        grad.addColorStop(0, "rgba(16,185,129,0)");
        grad.addColorStop(1, "rgba(16,185,129,0.5)");
        ctx.fillStyle = grad;
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.35;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-[0.35]" />
      {/* gradient orbs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-emerald-500/15 blur-[130px]" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-sky-500/12 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[620px] rounded-full bg-amber-500/[0.07] blur-[130px]" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
    </div>
  );
}
