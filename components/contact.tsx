import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["Yaoundé, Cameroun"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+237 6XX XXX XXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@egel.cm"],
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven : 8h - 18h", "Sam : 9h - 14h"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Restons en contact
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Notre équipe est à votre écoute pour répondre à vos questions et
              vous accompagner dans vos projets de voyage. N{"'"}hésitez pas à
              nous contacter.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl bg-card p-5 border border-border"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">
                      {item.title}
                    </h4>
                    {item.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-sm text-muted-foreground"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-[#25D366] text-[#ffffff] hover:bg-[#25D366]/90 font-semibold"
            >
              <a
                href="https://wa.me/237000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactez-nous sur WhatsApp
              </a>
            </Button>
          </div>

          {/* Map placeholder */}
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127354.23919746505!2d11.468897!3d3.866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2sYaound%C3%A9!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation EGEL TRAVEL à Yaoundé"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
