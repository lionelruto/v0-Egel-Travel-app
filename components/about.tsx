import Image from "next/image";
import { Award, Heart, Scale } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Engagement",
    description:
      "Nous nous engageons à fournir un service d'excellence à chacun de nos clients.",
  },
  {
    icon: Heart,
    title: "Qualité",
    description:
      "Chaque détail compte. Nous sélectionnons les meilleures options pour vos voyages.",
  },
  {
    icon: Scale,
    title: "Éthique",
    description:
      "Transparence totale dans nos tarifs et nos démarches. Aucun frais caché.",
  },
];

export function About() {
  return (
    <section id="a-propos" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-team.jpg"
                alt="Équipe EGEL TRAVEL"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-xl sm:-right-6">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm text-primary-foreground/80">
                Années d{"'"}expérience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Qui sommes-nous ?
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Votre partenaire de voyage de confiance à Yaoundé
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              EGEL TRAVEL SARL est une agence de voyage basée à Yaoundé. Notre
              mission est de vous offrir un service professionnel et sécurisé
              pour tous vos projets de déplacement. Nous accompagnons
              particuliers, familles, étudiants et entreprises avec la même
              rigueur et le même dévouement.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Forts de notre expertise en billetterie aérienne, assurance
              voyage, location de véhicules et immigration, nous sommes votre
              guichet unique pour voyager l{"'"}esprit tranquille.
            </p>

            {/* Values */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="text-center sm:text-left">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 sm:mx-0">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
