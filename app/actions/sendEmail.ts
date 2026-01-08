"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name")?.toString();
  const userEmail = formData.get("email")?.toString(); // The User's Email
  const phone = formData.get("phone")?.toString();
  const message = formData.get("message")?.toString();

  try {
    await resend.emails.send({
      // 1. THE TECHNICAL SENDER (The "Postman")
      // We must use this address so the email doesn't get blocked as spam.
      from: `${name} <onboarding@resend.dev>`, 

      // 2. THE RECEIVER (Your Company)
      to: ["mjenterprises179@gmail.com"], 

      // 3. THE ACTUAL SENDER (The User)
      // This is the magic line. When you click 'Reply' in your inbox, 
      // it will automatically address the email to the USER, not resend.
      replyTo: userEmail, 

      subject: `New Service Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0047AB;">New Inquiry from ${name}</h2>
          <p><strong>User Email:</strong> ${userEmail}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}