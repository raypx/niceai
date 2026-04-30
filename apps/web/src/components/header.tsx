"use client";

import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/60 bg-background/95 shadow-[0_2px_5px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo size="sm" />
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
