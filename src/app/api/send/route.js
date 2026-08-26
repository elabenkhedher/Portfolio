import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  return NextResponse.json({ message: "Resend API Route Active. Please use POST to send emails." });
}

export async function POST(req) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY environment variable is missing." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.TO_EMAIL || "elabenkedher@gmail.com";

  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      react: (
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> {email}</p>
          <p><strong>Subject:</strong> {subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style={{ whiteSpace: "pre-wrap" }}>{message}</p>
        </div>
      ),
    });

    if (data.error) {
      console.error("Resend API response error:", data.error);
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

