import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EGEL TRAVEL SARL | Voyagez l'esprit tranquille",
  description:
    "EGEL TRAVEL SARL - Votre agence de voyage de confiance a Yaounde. Billetterie aerienne, assurance voyage, location de vehicules et accompagnement en immigration.",
  keywords:
    "agence de voyage Yaounde, billet d'avion Cameroun, assurance voyage, immigration, location vehicule Cameroun",
  icons: {
    icon: "/images/logo-egel.png",
    apple: "/images/logo-egel.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
