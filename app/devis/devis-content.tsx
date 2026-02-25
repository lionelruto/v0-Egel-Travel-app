"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  CheckCircle,
  Plane,
  Shield,
  Car,
  FileText,
  Map,
  House,
  Calendar1,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Remplissez le formulaire",
    desc: "Indiquez vos besoins et la destination souhaitee",
  },
  {
    step: "02",
    title: "Recevez votre devis",
    desc: "Notre equipe vous envoie une proposition adaptee",
  },
  {
    step: "03",
    title: "Confirmez et voyagez",
    desc: "Validez votre reservation et preparez votre voyage",
  },
];

const serviceOptions = [
  { value: "billetterie", label: "Billetterie aerienne", icon: Plane },
  { value: "assurance", label: "Assurance voyage", icon: Shield },
  { value: "location", label: "Location de vehicules", icon: Car },
  { value: "immigration", label: "Immigration & Assistance", icon: FileText },
  { value: "tourisme", label: "Tourisme & Voyages", icon: Map },
  { value: "immobilier", label: "Immobilier", icon: House },
  { value: "evenementiel", label: "Evenementiel", icon: Calendar1 },
];

export function DevisContent() {
  const [submitted, setSubmitted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger header animation on mount with slight delay
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="bg-background py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 transition-all duration-700"
            style={{
              opacity: 1,
              transform: "scale(1)",
              animation: "bounceIn 0.6s ease-out",
            }}
          >
            <CheckCircle className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-foreground">
            Demande envoyee avec succes !
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Merci pour votre demande. Notre equipe vous contactera rapidement
            pour vous proposer la meilleure solution.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Nouvelle demande
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Retour a l{"'"}accueil</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page header */}
        <div ref={headerRef} className="mx-auto max-w-2xl text-center">
          <nav className="mb-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              style={{
                opacity: headerVisible ? 1 : 0,
                transition: "opacity 0.5s ease-out",
              }}
            >
              {"< Retour a l'accueil"}
            </Link>
          </nav>
          <p
            className="text-sm font-semibold uppercase tracking-widest text-accent transition-all duration-700 ease-out"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Demande de devis
          </p>
          <h1
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl transition-all duration-700 ease-out"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(25px)",
              transitionDelay: "150ms",
            }}
          >
            Obtenez votre devis personnalise
          </h1>
          <p
            className="mt-4 text-pretty text-muted-foreground leading-relaxed transition-all duration-700 ease-out"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(25px)",
              transitionDelay: "300ms",
            }}
          >
            Remplissez le formulaire ci-dessous et notre equipe vous contactera
            rapidement pour vous proposer la solution la plus adaptee a vos
            besoins.
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

        {/* Steps + Form */}
        <div ref={formRef} className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Left: Steps */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 transition-all duration-600 ease-out"
                  style={{
                    opacity: formVisible ? 1 : 0,
                    transform: formVisible
                      ? "translateX(0)"
                      : "translateX(-30px)",
                    transitionDelay: `${index * 150}ms`,
                    transitionDuration: "600ms",
                  }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service icons grid */}
            <div className="mt-12 grid grid-cols-4 gap-4">
              {serviceOptions.map((service, index) => (
                <div
                  key={service.value}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-3 transition-all duration-500 ease-out hover:border-accent/50 hover:shadow-sm"
                  style={{
                    opacity: formVisible ? 1 : 0,
                    transform: formVisible
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.9)",
                    transitionDelay: `${450 + index * 80}ms`,
                  }}
                >
                  <service.icon className="h-5 w-5 text-accent" />
                  <span className="text-[10px] text-center text-muted-foreground leading-tight">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-700 ease-out"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible
                ? "translateY(0) scale(1)"
                : "translateY(30px) scale(0.98)",
              transitionDelay: "200ms",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nom" className="text-card-foreground">
                    Nom
                  </Label>
                  <Input
                    id="nom"
                    placeholder="Votre nom"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="prenom" className="text-card-foreground">
                    Prenom
                  </Label>
                  <Input
                    id="prenom"
                    placeholder="Votre prenom"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="telephone" className="text-card-foreground">
                    Telephone
                  </Label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="service" className="text-card-foreground">
                  Service souhaite
                </Label>
                <Select required>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Choisissez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="destination" className="text-card-foreground">
                  Destination
                </Label>
                <Input
                  id="destination"
                  placeholder="Ex: Paris, Dubai, New York..."
                  className="bg-background"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date-depart" className="text-card-foreground">
                    Date de depart
                  </Label>
                  <Input
                    id="date-depart"
                    type="date"
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="date-retour"
                    className="text-card-foreground"
                  >
                    Date de retour
                  </Label>
                  <Input
                    id="date-retour"
                    type="date"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="passengers" className="text-card-foreground">
                  Nombre de passagers
                </Label>
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  placeholder="1"
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-card-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Decrivez votre projet de voyage..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Send className="mr-2 h-4 w-4" />
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
