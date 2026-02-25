"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Plane,
  Shield,
  Car,
  FileText,
  ArrowRight,
  Calendar1,
  House,
  Map,
} from "lucide-react";
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
  {
    icon: Map,
    title: "Service tourisme & Voyages",
    description:
      "Nous concevons des experiences de voyage sur mesure adaptees aux particuliers, entreprises et clients VIP.",
    image: "./images/tourisme-voyage.jpeg",
    features: [
      "Reservation de billets d'avions (National & international)",
      "Organisation des sejours personaliés",
      "voyages de groupe",
      "Assistance visa et formalites administratives",
      "Sejours VIP et premium",
    ],
  },
  {
    icon: House,
    title: "Service Immbobilier",
    description:
      "Nous accompagnons nos clients dans la recherche, l'acquisition, la location et la valorisation de biens immobiliers.",
    image: "./images/service-immobilier.jpeg",
    features: [
      "Vente et achat de biens immobiliers",
      "Location courte et longue durée",
      "gestion locative",
      "Mise en relation avec investisseurs",
      "Conseil en investissement immobilier",
      "Recherche de biens sur mesure",
    ],
  },
  {
    icon: Calendar1,
    title: "Service Evenementiel",
    description:
      "Nous creons des evenements élegants, impactants et parfaitement orchestrés.",
    image: "./images/service-evenementiel.jpg",
    features: [
      "Evenements d'entreprise",
      "Lancements de produits",
      "Seminaires et conférences",
      "Soirées privées",
      "Mariages et celebrations",
      "Evenements premiums & VIP",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(50px) scale(0.95)",
        transitionDelay: `${index * 100}ms`,
        boxShadow: isHovered
          ? "0 20px 40px -12px rgba(2, 22, 46, 0.15), 0 0 0 1px rgba(93, 204, 249, 0.2)"
          : "none",
      }}
    >
      {/* Image section with parallax-like zoom */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: isHovered
              ? "linear-gradient(to top, rgba(2,22,46,0.7) 0%, rgba(2,22,46,0.2) 100%)"
              : "rgba(2,22,46,0.4)",
          }}
        />
        {/* Icon badge with bounce-in */}
        <div
          className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent transition-all duration-500 ease-out"
          style={{
            transform: isVisible
              ? isHovered
                ? "scale(1.15) rotate(-3deg)"
                : "scale(1) rotate(0deg)"
              : "scale(0) rotate(-45deg)",
            transitionDelay: isVisible ? `${index * 100 + 300}ms` : "0ms",
          }}
        >
          <service.icon className="h-6 w-6 text-accent-foreground" />
        </div>
      </div>

      {/* Content with staggered feature reveal */}
      <div className="p-6">
        <h3
          className="text-xl font-bold text-card-foreground transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transitionDelay: `${index * 100 + 200}ms`,
          }}
        >
          {service.title}
        </h3>
        <p
          className="mt-2 text-muted-foreground leading-relaxed transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transitionDelay: `${index * 100 + 300}ms`,
          }}
        >
          {service.description}
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {service.features.map((feature, featureIndex) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-card-foreground transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-15px)",
                transitionDelay: `${index * 100 + 400 + featureIndex * 80}ms`,
              }}
            >
              <div
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-500"
                style={{
                  transform: isVisible ? "scale(1)" : "scale(0)",
                  transitionDelay: `${index * 100 + 450 + featureIndex * 80}ms`,
                }}
              />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href="/devis"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all duration-300 hover:gap-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transitionDelay: `${index * 100 + 600}ms`,
          }}
        >
          Demander un devis
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header with staggered text reveal */}
        <div
          ref={headerRef}
          className="mx-auto max-w-2xl text-center"
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest text-accent transition-all duration-700 ease-out"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Nos services
          </p>
          <h2
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 ease-out"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(25px)",
              transitionDelay: "150ms",
            }}
          >
            Des solutions completes pour tous vos voyages
          </h2>
          <p
            className="mt-4 text-pretty text-muted-foreground leading-relaxed transition-all duration-700 ease-out"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(25px)",
              transitionDelay: "300ms",
            }}
          >
            Decouvrez notre gamme de services concus pour rendre chaque aspect
            de votre voyage simple, sur et agreable.
          </p>

          {/* Animated decorative line */}
          <div className="mt-6 flex justify-center">
            <div
              className="h-1 rounded-full bg-accent transition-all duration-1000 ease-out"
              style={{
                width: headerVisible ? "80px" : "0px",
                transitionDelay: "500ms",
              }}
            />
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
