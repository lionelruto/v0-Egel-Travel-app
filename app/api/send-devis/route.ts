import { NextResponse } from "next/server";

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

    // Determine if this is a travel service (with destination fields)
    const travelServices = ["billetterie", "tourisme", "voyage"];
    const isTravelService = travelServices.includes(service);

    // Build the email body
    const serviceLabels: Record<string, string> = {
      billetterie: "Billetterie aerienne",
      assurance: "Assurance voyage",
      location: "Location de vehicules",
      immigration: "Immigration & Assistance",
      tourisme: "Tourisme & Voyages",
      immobilier: "Immobilier",
      evenementiel: "Evenementiel",
    };

    let emailBody = `
Nouvelle demande de devis - EGEL TRAVEL

---------------------------------------
INFORMATIONS CLIENT
---------------------------------------
Nom: ${nom}
Prenom: ${prenom}
Telephone: ${telephone}
Email: ${email}

---------------------------------------
SERVICE DEMANDE
---------------------------------------
Service: ${serviceLabels[service] || service}
`;

    if (isTravelService) {
      emailBody += `
---------------------------------------
DETAILS DU VOYAGE
---------------------------------------
Destination: ${destination || "Non specifiee"}
Date de depart: ${dateDepart || "Non specifiee"}
Date de retour: ${dateRetour || "Non specifiee"}
Nombre de passagers: ${passengers || "Non specifie"}
`;
    }

    if (message) {
      emailBody += `
---------------------------------------
MESSAGE
---------------------------------------
${message}
`;
    }

    emailBody += `
---------------------------------------
Envoye depuis le site EGEL TRAVEL
`;

    // Send using mailto link approach via nodemailer-like SMTP
    // For production, configure SMTP credentials in environment variables
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      // Use nodemailer for SMTP sending
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"EGEL TRAVEL - Site Web" <${SMTP_USER}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `Nouvelle demande de devis - ${serviceLabels[service] || service} - ${nom} ${prenom}`,
        text: emailBody,
      });

      return NextResponse.json({ success: true, method: "smtp" });
    }

    // Fallback: log the email details (for development/preview)
    console.log("=== DEMANDE DE DEVIS ===");
    console.log(`To: ${RECIPIENT_EMAIL}`);
    console.log(`Subject: Nouvelle demande de devis - ${serviceLabels[service] || service} - ${nom} ${prenom}`);
    console.log(emailBody);
    console.log("========================");

    return NextResponse.json({
      success: true,
      method: "log",
      note: "SMTP non configure. Configurez SMTP_HOST, SMTP_USER, SMTP_PASS pour envoyer de vrais emails.",
    });
  } catch (error) {
    console.error("Erreur envoi devis:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la demande" },
      { status: 500 }
    );
  }
}
