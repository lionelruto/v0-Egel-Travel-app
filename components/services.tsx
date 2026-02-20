import Image from "next/image";
import { Plane, Shield, Car, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Plane,
    title: "Billetterie aérienne",
    description:
      "Vente de billets pour toutes destinations avec accompagnement personnalisé. Nous comparons les meilleures offres pour vous garantir les tarifs les plus compétitifs.",
    image: "./images/service-flight.jpg",
    features: [
      "Toutes compagnies aériennes",
      "Meilleurs tarifs garantis",
      "Accompagnement personnalisé",
    ],
  },
  {
    icon: Shield,
    title: "Assurance voyage",
    description:
      "Couverture santé, annulation, bagages et assistance. Voyagez en toute sérénité avec nos solutions d'assurance complètes et adaptées.",
    image: "./images/service-insurance.jpg",
    features: [
      "Couverture santé internationale",
      "Assurance annulation",
      "Assistance 24h/24",
    ],
  },
  {
    icon: Car,
    title: "Location de véhicules",
    description:
      "Avec ou sans chauffeur pour déplacements professionnels ou personnels. Large gamme de véhicules adaptés à tous vos besoins.",
    image: "./images/service-car.jpg",
    features: [
      "Avec ou sans chauffeur",
      "Large gamme de véhicules",
      "Tarifs compétitifs",
    ],
  },
  {
    icon: FileText,
    title: "Immigration & Assistance",
    description:
      "Accompagnement légal pour visas et démarches administratives, 100% conforme à la loi. Notre équipe d'experts simplifie vos procédures.",
    image: "./images/service-immigration.jpg",
    features: [
      "Demande de visa",
      "Démarches administratives",
      "100% conforme à la loi",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Nos services
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Des solutions complètes pour tous vos voyages
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Découvrez notre gamme de services conçus pour rendre chaque aspect
            de votre voyage simple, sûr et agréable.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-card-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#devis"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
