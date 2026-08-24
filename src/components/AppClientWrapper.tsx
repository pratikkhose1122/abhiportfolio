"use client";

import { useState } from "react";
import { AppDock } from "@/components/AppDock";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SpotlightSearch } from "@/components/SpotlightSearch";

export function AppClientWrapper({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  return (
    <>
      {children}

      {/* 1. Global Floating Glassmorphism App Dock (Screenshot 2) */}
      <AppDock
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      {/* 2. Global WhatsApp Chat Widget & Drawer */}
      <WhatsAppWidget
        isOpenExternal={isWhatsAppOpen}
        onCloseExternal={() => setIsWhatsAppOpen(false)}
      />

      {/* 3. Global Spotlight Search Modal (Cmd+K) */}
      <SpotlightSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
