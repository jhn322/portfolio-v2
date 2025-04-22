import { Resend } from "resend";
import { NextResponse } from "next/server";

// Expected request body
interface RequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}
// Primary color for the email template
const PRIMARY_COLOR = "#7c3aed";
const ADMIN_EMAIL = "johan.soderlund96@gmail.com";
const EMAIL_SENDER = "Portfolio Message <onboarding@resend.dev>";

// Helper function to generate styled HTML email content
const createAdminEmailHtml = (
  name: string,
  email: string,
  subject: string,
  message: string
): string => {
  const formattedMessage = message.replace(/\n/g, "<br>");
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: ${PRIMARY_COLOR}; color: #ffffff; padding: 20px;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      <div style="padding: 20px; color: #333;">
        <p style="margin-bottom: 15px;"><strong>From:</strong> ${name} (${email})</p>
        <p style="margin-bottom: 15px;"><strong>Subject:</strong> ${subject}</p>
        <h2 style="font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Message:</h2>
        <p style="line-height: 1.6;">${formattedMessage}</p>
      </div>
      <div style="background-color: #f8fafc; padding: 15px; text-align: center; font-size: 12px; color: #64748b;">
        <p>This email was sent from your portfolio contact form.</p>
      </div>
    </div>
  `;
};

// Helper function to generate plain text email content
const createAdminEmailText = (
  name: string,
  email: string,
  subject: string,
  message: string
): string => {
  return `
New Contact Form Submission
---------------------------
From: ${name} (${email})
Subject: ${subject}
---------------------------
Message:
${message}
---------------------------
Sent from your portfolio contact form.
  `;
};

export async function POST(req: Request) {
  try {
    const { name, email, subject, message }: RequestBody = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to Admin
    const adminEmailHtml = createAdminEmailHtml(name, email, subject, message);
    const adminEmailText = createAdminEmailText(name, email, subject, message);

    await resend.emails.send({
      from: EMAIL_SENDER,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact: ${subject}`,
      html: adminEmailHtml,
      text: adminEmailText,
    });

    return NextResponse.json(
      { message: "Admin notification email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    // Error message for the client
    let clientErrorMessage = "Failed to send message.";
    if (errorMessage.includes("Missing or invalid API key")) {
      clientErrorMessage =
        "Server configuration error. Please try again later.";
    }

    return NextResponse.json({ error: clientErrorMessage }, { status: 500 });
  }
}
