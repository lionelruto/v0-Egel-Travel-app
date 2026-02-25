import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { DevisContent } from "./devis-content";

export const metadata: Metadata = {
  title: "Demande de devis | EGEL TRAVEL SARL",
  description:
    "Obtenez un devis personnalise pour votre voyage. Billetterie aerienne, assurance voyage, location de vehicules et accompagnement immigration.",
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
