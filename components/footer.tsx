"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t.footer.navigation,
      links: [
        { href: "#accueil", label: t.nav.home },
        { href: "#a-propos", label: t.nav.about },
        { href: "#services", label: t.nav.services },
        { href: "#contact", label: t.nav.contact },
      ],
    },
    {
      title: t.footer.servicesTitle,
      links: t.footer.serviceLinks.map((label) => ({
        href: "#services",
        label,
      })),
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#accueil" className="flex items-center gap-2">
              <Image
                src="/images/logo-egel.png"
                alt="EGEL TRAVEL"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-primary-foreground leading-tight">
                  EGEL TRAVEL
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/60 leading-tight">
                  {t.footer.tagline}
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} EGEL TRAVEL SARL &ndash;{" "}
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
