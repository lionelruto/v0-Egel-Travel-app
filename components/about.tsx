"use client";

import Image from "next/image";
import { Award, Heart, Scale } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const valueIcons = [Award, Heart, Scale];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="./images/about-team.jpg"
                alt={t.about.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-xl sm:-right-6">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm text-primary-foreground/80">
                {t.about.experience}
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t.about.tag}
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.about.description1}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t.about.description2}
            </p>

            {/* Values */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {t.about.values.map((value, index) => {
                const Icon = valueIcons[index];
                return (
                  <div key={value.title} className="text-center sm:text-left">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 sm:mx-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
