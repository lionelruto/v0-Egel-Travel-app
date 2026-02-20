import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EGEL TRAVEL SARL | Voyagez l'esprit tranquille",
  description:
    "EGEL TRAVEL SARL - Votre agence de voyage de confiance à Yaoundé. Billetterie aérienne, assurance voyage, location de véhicules et accompagnement en immigration.",
  keywords:
    "agence de voyage Yaoundé, billet d'avion Cameroun, assurance voyage, immigration, location véhicule Cameroun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
