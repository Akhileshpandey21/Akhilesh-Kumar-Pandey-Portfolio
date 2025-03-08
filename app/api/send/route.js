import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
  }

  const { email, subject, message } = await req.json();

  // Transporter setup (Use your email provider's SMTP settings)
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can change this (e.g., Outlook, Yahoo)
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // App password (not your actual password)
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Custom sender name
    to: process.env.EMAIL_USER, // Replace with the recipient's email
    subject: `📩 New Message from ${email} - ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
        <h2 style="color: #0073e6;">📨 New Message from Your Portfolio</h2>
        <p><strong>From:</strong> <a href="mailto:${email}" style="color: #0073e6;">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="border: 1px solid #ddd; padding: 15px; background: #f9f9f9; border-radius: 5px;">
          <p style="margin: 0;">${message}</p>
        </div>
        <p style="margin-top: 15px;">📬 <strong>Reply directly:</strong> <a href="mailto:${email}" style="color: #0073e6;">Reply Now</a></p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <footer style="font-size: 12px; color: #777;">
          <p>🚀 Portfolio Contact System | Do not share this email with anyone.</p>
        </footer>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
