import { useState } from "react";
import { User } from "lucide-react";

// Tries to load the user's real photo in multiple formats.
// Place your cutout photo at: public/taimur.png (or .jpg / .jpeg / .webp)
// Falls back to a premium monogram avatar so the site always looks pro.
// NOTE: paths are RELATIVE (no leading "/") so the photo works everywhere:
// localhost, Live Server "dist" folder, GitHub Pages, Netlify, Vercel, etc.
const PHOTO_SOURCES = ["taimur.png", "taimur.jpg", "taimur.jpeg", "taimur.webp"];

export default function ProfilePhoto({ size = "lg" }: { size?: "sm" | "lg" | "xl" }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Fully responsive sizes — fits 320px phones up to desktop
  const dims =
    size === "xl"
      ? "h-52 w-52 min-[400px]:h-60 min-[400px]:w-60 sm:h-72 sm:w-72 lg:h-[300px] lg:w-[300px] xl:h-[320px] xl:w-[320px]"
      : size === "sm"
      ? "h-16 w-16 sm:h-20 sm:w-20"
      : "h-44 w-44 min-[400px]:h-52 min-[400px]:w-52 sm:h-56 sm:w-56 md:h-64 md:w-64";

  const handleError = () => {
    if (srcIndex < PHOTO_SOURCES.length - 1) {
      setSrcIndex((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className={`relative mx-auto shrink-0 ${dims}`}>
      {/* rotating conic ring */}
      <div className="animate-spin-slow absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#10b981,#0ea5e9,#f59e0b,#10b981)] opacity-70 blur-[2px] sm:-inset-3" />
      <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,#10b981,#0ea5e9,#f59e0b,#10b981)] opacity-25 blur-xl sm:-inset-3" />
      <div className="absolute inset-0 overflow-hidden rounded-full bg-slate-950 ring-4 ring-slate-950">
        {/* inner backdrop glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.35),rgba(14,165,233,0.15)_45%,#020617_75%)]" />
        <div className="absolute inset-0 bg-grid opacity-70" />

        {!failed ? (
          <img
            key={srcIndex}
            src={PHOTO_SOURCES[srcIndex]}
            alt="Taimur Khan — Python Developer"
            onError={handleError}
            onLoad={() => setLoaded(true)}
            className={`profile-cutout absolute inset-x-0 bottom-0 top-4 mx-auto h-[92%] w-auto max-w-full object-cover object-top transition-opacity duration-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        ) : null}

        {/* Fallback monogram (shows instantly, stays under photo) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/25 via-slate-900 to-sky-500/25 shadow-[0_0_60px_rgba(16,185,129,0.35)] sm:h-24 sm:w-24 sm:rounded-3xl md:h-28 md:w-28">
            <span className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              T<span className="text-emerald-400">K</span>
            </span>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 sm:mt-3 sm:px-3">
            <User className="h-3 w-3 shrink-0 text-emerald-300" />
            <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.15em] text-slate-300 sm:text-[10px] sm:tracking-[0.2em]">
              Taimur Khan
            </span>
          </div>
        </div>

        {/* bottom fade for cutout blend */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent sm:h-16" />
      </div>

      {/* online dot */}
      <div className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 sm:bottom-4 sm:right-4 sm:h-7 sm:w-7">
        <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400 sm:h-4 sm:w-4" />
        </span>
      </div>
    </div>
  );
}
