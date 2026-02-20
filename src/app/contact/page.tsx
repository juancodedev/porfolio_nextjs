"use client";

import React, { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectTrigger, SelectValue, SelectContent, SelectLabel, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from 'react-hook-form'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchema, type FormSchemaType, SERVICES, type ServiceType } from "@/lib/schema"
import { useSearchParams } from "next/navigation";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+56) 998 307 778 ',
    }, {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'cl.jmunoz@gmail.com',
    },
]


// Inner component that uses useSearchParams
const ContactForm: React.FC = () => {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get('service') ?? '';

    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm<FormSchemaType>(
        {
            resolver: zodResolver(FormSchema),
            reValidateMode: 'onSubmit',
            defaultValues: {
                first_name: '',
                last_name: '',
                email_address: '',
                phone_number: '',
                services: undefined,
                message: '',
            },
        }
    )
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null)

    // Pre-select service from query param (e.g. coming from /services page)
    useEffect(() => {
        const decoded = decodeURIComponent(serviceParam);
        const matched = SERVICES.find(
            s => s.toLowerCase() === decoded.toLowerCase()
        ) as ServiceType | undefined;
        if (matched) setValue('services', matched);
    }, [serviceParam, setValue]);

    const sendDataAPI = async (dataForm: FormSchemaType) => {
        setError(null);
        setSuccess(null);
        setIsSubmitting(true);
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForm),
        }
        const urlAPI = process.env.NEXT_PUBLIC_URL || 'http://localhost:3001/sql/agregar';
        try {
            const response = await fetch(urlAPI, options)
            const resultJson = await response.json();
            if (!response.ok) throw new Error(resultJson.message);
            reset();
            setSuccess(resultJson.message || 'Message sent successfully!');
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit(sendDataAPI)}>
            {/* Feedback messages */}
            {error && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                    <span>⚠</span> {error}
                </div>
            )}
            {success && (
                <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent px-4 py-3 rounded-lg text-sm">
                    <span>✓</span> {success}
                </div>
            )}

            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">
                Let's combine our strengths to create something exceptional. Together, we can turn your ideas into reality, overcome challenges, and achieve your business goals. Reach out, and let's start building something great together.
            </p>

            {/* inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                    <Input type="text" placeholder="Firstname" id="first_name" {...register('first_name')} />
                    {errors.first_name && <p className="text-sm text-red-400">{errors.first_name.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <Input type="text" placeholder="Lastname" {...register("last_name")} />
                    {errors.last_name && <p className="text-sm text-red-400">{errors.last_name.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <Input type="email" placeholder="Email address" id="email_address" {...register('email_address')} />
                    {errors.email_address && <p className="text-sm text-red-400">{errors.email_address.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <Input type="tel" placeholder="Phone Number" id="phone_number" {...register('phone_number')} />
                    {errors.phone_number && <p className="text-sm text-red-400">{errors.phone_number.message}</p>}
                </div>
            </div>

            {/* select */}
            <Controller
                name="services"
                control={control}
                render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select a service</SelectLabel>
                                {SERVICES.map((s) => (
                                    <SelectItem key={s} value={s}>{s}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            />

            {/* textarea */}
            <Textarea
                className="h-[200px]"
                placeholder="Type your message here.."
                {...register('message')}
            />

            <Button
                size="default"
                className="max-w-40"
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
        </form>
    );
}

// Page component wraps inner form in Suspense (required for useSearchParams in Next.js)
const Contact: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.2, ease: "easeOut" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <Suspense fallback={<div className="text-white/40 text-sm">Loading form...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
