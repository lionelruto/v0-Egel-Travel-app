"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <Image
        src="./images/hero-travel.jpg"
        alt={t.hero.badge}
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
        <p className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
          {t.hero.badge}
        </p>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/80 leading-relaxed">
          {t.hero.description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8"
          >
            <Link href="/devis">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-base px-8"
          >
            <a
              href="https://wa.me/237000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-accent sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
