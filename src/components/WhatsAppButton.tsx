import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4917661263911"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2.5 px-3.5 py-3 rounded-card bg-gradient-to-b from-accent to-accent-dark text-gray-900 shadow-accent border border-black/10 hover:scale-105 transition-transform"
      aria-label="WhatsApp Chat öffnen"
    >
      <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2.5} />
      <span className="font-semibold">WhatsApp</span>
    </a>
  );
}
