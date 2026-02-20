import { z } from "zod"

export const SERVICES = ["Web Development", "Systems Integration", "Technology Consulting"] as const;
export type ServiceType = typeof SERVICES[number];

export const FormSchema = z.object({
    first_name: z.string().min(1, { message: "First name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    email_address: z.string().email({ message: "Enter a valid email address" }),
    phone_number: z.string().min(6, { message: "Enter a valid phone number" }),
    services: z.enum(SERVICES, { message: "Please select a service" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type FormSchemaType = z.infer<typeof FormSchema>