import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Contact form submission received");

    // Parse JSON body
    let body;
    try {
      body = await req.json();
      console.log("Request body parsed:", body);
    } catch (e) {
      console.error("Failed to parse request body:", e);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields:", { name, email, message });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("Preparing email content");

    // Create HTML content for user confirmation
    const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #282828;">
        <div style="padding: 2rem; border-radius: 12px; border: 1px solid #E4E4E4; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); margin-bottom: 1.5rem;">
          <h1 style="color: #282828; font-size: 24px; margin-bottom: 1.5rem;">Thank you for contacting me!</h1>
          <p style="margin-bottom: 1rem;">I have received your message and will get back to you shortly.</p>
          
          <h2 style="font-size: 18px; margin-top: 2rem; margin-bottom: 1rem;">Your message details:</h2>
          <p style="margin-bottom: 0.5rem;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Subject:</strong> ${subject}</p>
          <p style="margin-bottom: 2rem;"><strong>Message:</strong> ${message}</p>
          
          <p style="margin-bottom: 0.5rem;">Kind regards,</p>
          <p style="font-weight: bold; margin-bottom: 0.5rem;">Johan Söderlund</p>
        </div>

        <footer style="background-color: #F1F1F1; border-top: 1px solid #E4E4E4; padding: 1.5rem; border-radius: 8px;">
          <div style="font-size: 14px; color: #555555; text-align: center;">
            <p style="margin-bottom: 1rem;">
              <a href="https://johanportfolio.com/" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Portfolio</a> | 
              <a href="https://github.com/johansoderlund" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">GitHub</a> | 
              <a href="https://linkedin.com/in/johansoderlund" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">LinkedIn</a>
            </p>
            <p style="margin-bottom: 0.5rem;">Copyright ${new Date().getFullYear()} | Johan Söderlund</p>
          </div>
        </footer>
      </div>
    `;

    const userPlainTextContent = `
      Thank you for contacting me!

      I have received your message and will get back to you shortly.

      Your message details:
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}

      Kind regards,
      Johan Söderlund

      Copyright ${new Date().getFullYear()} | Johan Söderlund
    `;

    // Create HTML content for admin notification
    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #282828;">
        <div style="padding: 2rem; border-radius: 12px; border: 1px solid #E4E4E4; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); margin-bottom: 1.5rem;">
          <h1 style="color: #6a5acd; font-size: 24px; margin-bottom: 1.5rem;">New Contact Form Submission</h1>
          <p style="margin-bottom: 1rem;">A new contact form has been submitted on your portfolio website.</p>
          
          <h2 style="font-size: 18px; margin-top: 2rem; margin-bottom: 1rem;">Contact Details:</h2>
          <p style="margin-bottom: 0.5rem;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Subject:</strong> ${subject}</p>
          <p style="margin-bottom: 2rem;"><strong>Message:</strong> ${message}</p>
          
          <p style="margin-bottom: 0.5rem;">This is an automated notification.</p>
        </div>

        <footer style="background-color: #F1F1F1; border-top: 1px solid #E4E4E4; padding: 1.5rem; border-radius: 8px;">
          <div style="font-size: 14px; color: #555555; text-align: center;">
            <p style="margin-bottom: 0.5rem;">Copyright ${new Date().getFullYear()} | Johan Söderlund</p>
          </div>
        </footer>
      </div>
    `;

    const adminPlainTextContent = `
      New Contact Form Submission

      A new contact form has been submitted on your portfolio website.

      Contact Details:
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}

      This is an automated notification.

      Copyright ${new Date().getFullYear()} | Johan Söderlund
    `;

    console.log("Sending confirmation email to user:", email);

    // Send confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: "Thank you for contacting me",
      htmlContent: userHtmlContent,
      textContent: userPlainTextContent,
    });

    console.log("User email result:", userEmailResult);
    console.log("Sending notification email to admin");

    // Define admin email
    const adminEmail =
      process.env.EMAIL_RECIPIENT || "johan.soderlund96@gmail.com";
    console.log("Admin email address:", adminEmail);

    // Send notification email to admin
    const adminEmailResult = await sendEmail({
      to: adminEmail,
      subject: `New Contact Form Submission: ${subject}`,
      htmlContent: adminHtmlContent,
      textContent: adminPlainTextContent,
    });

    console.log("Admin email result:", adminEmailResult);

    if (!userEmailResult.success || !adminEmailResult.success) {
      console.error("Email sending failed:", {
        userEmail: userEmailResult,
        adminEmail: adminEmailResult,
      });

      return NextResponse.json(
        {
          error: "Failed to send email",
          userEmailError: userEmailResult.message,
          adminEmailError: adminEmailResult.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error("Error details:", {
      message: errorMessage,
      stack: errorStack,
    });

    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    );
  }
}
