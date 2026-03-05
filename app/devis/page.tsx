import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { DevisContent } from "./devis-content";

export const metadata: Metadata = {
  title: "Demande de devis | EGEL TRAVEL SARL",
  description:
    "Obtenez un devis personnalisé pour votre voyage. Billetterie aérienne, assurance voyage, location de véhicules et accompagnement immigration.",
};

export default function DevisPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <DevisContent />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
