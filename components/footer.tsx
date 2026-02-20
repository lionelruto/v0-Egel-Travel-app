import Link from "next/link";
import { Plane } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { href: "#accueil", label: "Accueil" },
      { href: "#a-propos", label: "À propos" },
      { href: "#services", label: "Services" },
      { href: "#devis", label: "Devis" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#services", label: "Billetterie aérienne" },
      { href: "#services", label: "Assurance voyage" },
      { href: "#services", label: "Location de véhicules" },
      { href: "#services", label: "Immigration" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#accueil" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <Plane className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-primary-foreground leading-tight">
                  EGEL TRAVEL
                </span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/60 leading-tight">
                  Voyagez l{"'"}esprit tranquille
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70 leading-relaxed">
              EGEL TRAVEL SARL accompagne vos projets de voyage avec
              transparence et sérénité. Votre agence de voyage de confiance à
              Yaoundé, Cameroun.
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
            © {new Date().getFullYear()} EGEL TRAVEL SARL – Tous droits
            réservés. Voyagez l{"'"}esprit tranquille.
          </p>
        </div>
      </div>
    </footer>
  );
}
