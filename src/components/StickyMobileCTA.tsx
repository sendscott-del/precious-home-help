"use client";

import { MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 md:hidden z-40">
      <a
        href="sms:8722359880"
        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-sm rounded-full py-3 px-6 shadow-lg transition-colors duration-250"
      >
        <MessageCircle className="w-4 h-4" />
        Text (872) 235-9880
      </a>
    </div>
  );
}
