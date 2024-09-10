import {z} from "zod"

export const FormSchema = z.object(
{
    message: z.string().min(1, { message: "Message are required" }),
    email_address: z.string().min(1, { message: "Email address is required" }),
    first_name: z.string().min(1, { message: "Name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    services: z.string().min(1, { message: "Services are required" }),
}
)

export type FormSchemaType = z.infer<typeof FormSchema>