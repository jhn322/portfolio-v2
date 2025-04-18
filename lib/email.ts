import * as SibApiV3Sdk from "@sendinblue/client";

// Initialize Brevo API client
const initBrevoClient = () => {
  const client = new SibApiV3Sdk.TransactionalEmailsApi();

  // Set API key for authentication
  client.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY || ""
  );

  return client;
};

// Define a more specific type for template parameters
interface TemplateParams {
  [key: string]: string | number | boolean | null;
}

// Interface for email data
interface SendEmailProps {
  to: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  templateId?: number; // Optional for Brevo templates
  params?: TemplateParams;
}

/**
 * Sends an email using Brevo API
 * @param emailData - Object containing email details
 * @returns Promise with the email response
 */
export async function sendEmail({
  to,
  subject,
  htmlContent,
  textContent,
  templateId,
  params,
}: SendEmailProps) {
  try {
    // Log the Brevo API key (first few characters only for security)
    const apiKey = process.env.BREVO_API_KEY || "";
    console.log(
      "Using Brevo API Key (first 10 chars):",
      apiKey.substring(0, 10) + "...",
      "Length:",
      apiKey.length
    );

    // Check if the API key is valid
    if (!apiKey || apiKey.length < 20) {
      console.error("Invalid Brevo API key - too short or missing");
      return { success: false, error: "Invalid API key configuration" };
    }

    // Log all environment variables for debugging (without showing full API key)
    console.log("Environment variables check:", {
      hasBrevoApiKey: !!process.env.BREVO_API_KEY,
      brevoApiKeyLength: (process.env.BREVO_API_KEY || "").length,
      emailRecipient: process.env.EMAIL_RECIPIENT,
      emailSender: process.env.EMAIL_SENDER,
      emailSenderName: process.env.EMAIL_SENDER_NAME,
    });

    const client = initBrevoClient();

    const sendSmtpEmail = {
      to: [{ email: to }],
      sender: {
        email: process.env.EMAIL_SENDER || "noreply@johanportfolio.com",
        name: process.env.EMAIL_SENDER_NAME || "Johan Söderlund",
      },
      subject: subject,
      htmlContent: htmlContent,
      textContent: textContent,
      templateId: templateId,
      params: params,
    };

    // Log email configuration
    console.log("Email configuration:", {
      to: sendSmtpEmail.to,
      sender: sendSmtpEmail.sender,
      subject: sendSmtpEmail.subject,
      templateId: sendSmtpEmail.templateId,
      hasHtmlContent: !!htmlContent,
      htmlContentLength: htmlContent.length,
    });

    console.log("Attempting to send email...");
    const response = await client.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", response);
    return { success: true, data: response };
  } catch (error) {
    console.error("Detailed email error:", error);

    // More detailed error logging
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }

    return {
      success: false,
      error: error,
      message:
        error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
