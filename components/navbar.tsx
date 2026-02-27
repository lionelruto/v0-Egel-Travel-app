"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, t, toggleLocale } = useLanguage();

  const navLinks = [
    { href: "/#accueil", label: t.nav.home },
    { href: "/#a-propos", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/#accueil" className="flex items-center gap-2">
          <Image
            src="/images/logo-egel.png"
            alt="EGEL TRAVEL"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground leading-tight">
              EGEL TRAVEL
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">
              {t.nav.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
            aria-label={locale === "fr" ? "Switch to English" : "Passer en francais"}
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "fr" ? "EN" : "FR"}
          </button>

          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link href="/devis">{t.nav.cta}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              {locale === "fr" ? "English" : "Francais"}
            </button>

            <Button asChild className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link href="/devis" onClick={() => setIsOpen(false)}>
                {t.nav.cta}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
