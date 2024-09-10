"use server"

import {FormSchema, type FormSchemaType } from '@/lib/schema'

export async function sendForm(data: FormSchemaType) {
    const parsedData = FormSchema.safeParse(data)

    if(!parsedData.success){
        return parsedData.error.format()
    }
    return parsedData.data;
}