"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/237000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#ffffff] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label={t.whatsapp.ariaLabel}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
