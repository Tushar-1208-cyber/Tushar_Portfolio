import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
    } else if (resendApiKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [process.env.CONTACT_EMAIL || "tushargupta1208@gmail.com"],
          subject: subject || `Portfolio Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        }),
      });
    }

    return NextResponse.json(
      { success: true, message: "Transmission received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
