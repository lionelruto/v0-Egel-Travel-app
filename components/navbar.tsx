"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#devis", label: "Devis" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#accueil" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Plane className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground leading-tight">
              EGEL TRAVEL
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground leading-tight">
              Voyagez l{"'"}esprit tranquille
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
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link href="#devis">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
            <Button asChild className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link href="#devis" onClick={() => setIsOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
