import { MessageCircle } from "lucide-react";
import { LINKS } from "../config";

export default function FloatingButtons() {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-4 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition hover:scale-110 active:scale-95 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
      <MessageCircle className="relative h-6 w-6 text-[#062e1c] sm:h-7 sm:w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-[13px] font-bold text-white opacity-0 shadow-xl transition group-hover:opacity-100 md:block">
        Chat with Taimur 💬
      </span>
    </a>
  );
}
