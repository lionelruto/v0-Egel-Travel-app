"use client";

import { useState } from "react";
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
import { Send, CheckCircle } from "lucide-react";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="devis" className="bg-background py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
            <CheckCircle className="h-8 w-8 text-accent" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-foreground">
            Demande envoyée avec succès !
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Merci pour votre demande. Notre équipe vous contactera rapidement
            pour vous proposer la meilleure solution.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Nouvelle demande
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="devis" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Demande de devis
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Obtenez votre devis personnalisé
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Remplissez le formulaire ci-dessous et notre équipe vous
              contactera rapidement pour vous proposer la solution la plus
              adaptée à vos besoins.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                {
                  step: "01",
                  title: "Remplissez le formulaire",
                  desc: "Indiquez vos besoins et la destination souhaitée",
                },
                {
                  step: "02",
                  title: "Recevez votre devis",
                  desc: "Notre équipe vous envoie une proposition adaptée",
                },
                {
                  step: "03",
                  title: "Confirmez et voyagez",
                  desc: "Validez votre réservation et préparez votre voyage",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nom" className="text-card-foreground">Nom</Label>
                  <Input
                    id="nom"
                    placeholder="Votre nom"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="prenom" className="text-card-foreground">Prénom</Label>
                  <Input
                    id="prenom"
                    placeholder="Votre prénom"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="telephone" className="text-card-foreground">Téléphone</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="+237 6XX XXX XXX"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
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
                <Label htmlFor="service" className="text-card-foreground">Service souhaité</Label>
                <Select required>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Choisissez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="billetterie">
                      Billetterie aérienne
                    </SelectItem>
                    <SelectItem value="assurance">Assurance voyage</SelectItem>
                    <SelectItem value="location">
                      Location de véhicules
                    </SelectItem>
                    <SelectItem value="immigration">
                      Immigration & Assistance
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="destination" className="text-card-foreground">Destination</Label>
                <Input
                  id="destination"
                  placeholder="Ex: Paris, Dubaï, New York..."
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-card-foreground">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet de voyage..."
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
