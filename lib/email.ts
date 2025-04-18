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
      apiKey.substring(0, 10) + "..."
    );

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
    });

    const response = await client.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully:", response);
    return { success: true, data: response };
  } catch (error) {
    console.error("Detailed email error:", error);
    return { success: false, error: error };
  }
}
