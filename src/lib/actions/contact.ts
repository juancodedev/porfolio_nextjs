"use server";

import { Resend } from "resend";
import { FormSchema, type FormSchemaType } from "@/lib/schema";

export async function sendContactEmail(data: FormSchemaType) {
  const validated = FormSchema.parse(data);

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
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
