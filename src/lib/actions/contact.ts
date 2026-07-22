"use server";

import { Resend } from "resend";
import { FormSchema, type FormSchemaType } from "@/lib/schema";

const WORKER_URL = "https://turnstile-siteverify-porfolio-nextjs.cl-jmunoz.workers.dev";

export async function sendContactEmail(
  data: FormSchemaType & { turnstileToken: string },
) {
  const validated = FormSchema.parse(data);

  // Verify Turnstile token via the siteverify Worker
  try {
    const verifyRes = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: data.turnstileToken }),
    });
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      console.warn("Turnstile verification failed:", verifyData["error-codes"]);
      return {
        success: false,
        message: "Security verification failed. Please try again.",
      };
    }
  } catch (error) {
    console.error("Turnstile Worker unreachable:", error);
    return {
      success: false,
      message: "Security check unavailable. Please try again later.",
    };
  }

  // Token is valid — proceed with email
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Juan Muñoz <noreply@juancode.dev>",
      to: "jmunoz@juancode.dev",
      subject: `New Contact: ${validated.first_name} ${validated.last_name} — ${validated.services}`,
      text: [
        `Name: ${validated.first_name} ${validated.last_name}`,
        `Email: ${validated.email_address}`,
        `Service: ${validated.services}`,
        "",
        "Message:",
        validated.message,
      ].join("\n"),
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
