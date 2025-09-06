import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .substring(0, 1000); // Limit length
}

function sanitizeEmail(email: string): string {
  return email
    .replace(/[<>]/g, '')
    .trim()
    .toLowerCase()
    .substring(0, 255);
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  try {
    // Sanitize all inputs to prevent injection attacks
    const sanitizedName = sanitizeInput(params.name);
    const sanitizedEmail = sanitizeEmail(params.email);
    const sanitizedMessage = sanitizeInput(params.message);

    // Simple email configuration that works with most SendGrid setups
    await mailService.send({
      to: 'info@techeduvate.com',
      from: 'info@techeduvate.com', // Use your verified sender email
      subject: `Contact Form: ${sanitizedName}`,
      text: `New contact form submission:

Name: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
Sent via Tech EduVate contact form`,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${sanitizedName}</p>
<p><strong>Email:</strong> ${sanitizedEmail}</p>
<p><strong>Message:</strong></p>
<div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0;">
${sanitizedMessage.replace(/\n/g, '<br>')}
</div>
<hr>
<small>Sent via Tech EduVate contact form</small>
      `
    });
    
    return true;
  } catch (error: any) {
    console.error('SendGrid email error details:', {
      message: error.message,
      code: error.code,
      response: error.response?.body || error.response
    });
    return false;
  }
}