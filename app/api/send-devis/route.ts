import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "contact@egel.cm";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nom,
      prenom,
      telephone,
      email,
      service,
      destination,
      dateDepart,
      dateRetour,
      passengers,
      message,
    } = body;

    if (!nom || !prenom || !telephone || !email || !service) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const travelServices = ["billetterie", "tourisme", "voyage"];
    const isTravelService = travelServices.includes(service);

    const serviceLabels: Record<string, string> = {
      billetterie: "Billetterie aérienne",
      assurance: "Assurance voyage",
      location: "Location de véhicules",
      immigration: "Immigration & Assistance",
      tourisme: "Tourisme & Voyages",
      immobilier: "Immobilier",
      evenementiel: "Événementiel",
    };

    let emailBody = `Nouvelle demande de devis - EGEL TRAVEL\n`;
    emailBody += `\n---------------------------------------`;
    emailBody += `\nINFORMATIONS CLIENT`;
    emailBody += `\n---------------------------------------`;
    emailBody += `\nNom: ${nom}`;
    emailBody += `\nPrénom: ${prenom}`;
    emailBody += `\nTéléphone: ${telephone}`;
    emailBody += `\nEmail: ${email}`;
    emailBody += `\n\n---------------------------------------`;
    emailBody += `\nSERVICE DEMANDÉ`;
    emailBody += `\n---------------------------------------`;
    emailBody += `\nService: ${serviceLabels[service] || service}`;

    if (isTravelService) {
      emailBody += `\n\n---------------------------------------`;
      emailBody += `\nDETAILS DU VOYAGE`;
      emailBody += `\n---------------------------------------`;
      emailBody += `\nDestination: ${destination || "Non spécifiée"}`;
      emailBody += `\nDate de départ: ${dateDepart || "Non spécifiée"}`;
      emailBody += `\nDate de retour: ${dateRetour || "Non spécifiée"}`;
      emailBody += `\nNombre de passagers: ${passengers || "Non spécifié"}`;
    }

    if (message) {
      emailBody += `\n\n---------------------------------------`;
      emailBody += `\nMESSAGE`;
      emailBody += `\n---------------------------------------`;
      emailBody += `\n${message}`;
    }

    emailBody += `\n\n---------------------------------------`;
    emailBody += `\nEnvoyé depuis le site EGEL TRAVEL`;

    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error("Variables manquantes - GMAIL_USER:", !!GMAIL_USER, "GMAIL_APP_PASSWORD:", !!GMAIL_APP_PASSWORD);

      return NextResponse.json(
        { error: "Configuration email manquante. Veuillez contacter l'administrateur." },
        { status: 500 }
      );
    }

    console.log("Tentative d'envoi via Gmail SMTP...");
    console.log("GMAIL_USER:", GMAIL_USER);
    console.log("Destinataire:", RECIPIENT_EMAIL);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    // Verify connection first
    await transporter.verify();
    console.log("Connexion SMTP vérifiée avec succès");

    const info = await transporter.sendMail({
      from: `"EGEL TRAVEL - Site Web" <${GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nouvelle demande de devis - ${serviceLabels[service] || service} - ${nom} ${prenom}`,
      text: emailBody,
    });

    console.log("Email envoyé avec succès, messageId:", info.messageId);

    return NextResponse.json({ success: true, method: "smtp", messageId: info.messageId });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Erreur inconnue";
    const errStack = error instanceof Error ? error.stack : "";
    console.error("Erreur envoi devis:", errMessage);
    console.error("Stack:", errStack);

    return NextResponse.json(
      { error: `Erreur lors de l'envoi: ${errMessage}` },
      { status: 500 }
    );
  }
}
