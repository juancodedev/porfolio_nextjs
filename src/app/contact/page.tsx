"use client";

import React, { useState, ChangeEvent, FormEvent } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectGroup, SelectTrigger, SelectValue, SelectContent, SelectLabel, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from 'react-hook-form'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod"
// import { FormSchemaType } from "@/lib/schema";
import { FormSchema, type FormSchemaType } from "@/lib/schema"
require('dotenv').config()

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
    // {
    //   icon: <FaMapMarkerAlt />,
    //   title: 'Address',
    //   description: 'Calle siempre viva 1234',
    // },
]
type ApiResponse = {
    status: string;
    message?: string;
    data?: any;
};


const Contact: React.FC = () => {
    const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm<FormSchemaType>(
        {
            resolver: zodResolver(FormSchema),
            reValidateMode: 'onSubmit',
            defaultValues: {
                first_name: '',
                last_name: '',
                email_address: '',
                phone_number: '',
                services: '',
                message: '',
            },
        }
    )
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null)
    const [data, setData] = React.useState({})

    const sendDataAPI = async (dataForm: FormSchemaType) => {

        setError(null);
        setSuccess(null);
        setIsSubmitting(true);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                dataForm
            ),
        }
        const urlAPI = process.env.NEXT_PUBLIC_URL || 'http://localhost:3001/sql/agregar';
        try {
            const response = await fetch(urlAPI, options)
            console.log('ok', response.ok)
            const resultJson = await response.json();

            if (!response.ok) {
                console.log('Respuesta API:', resultJson);

                throw new Error(resultJson.message);
            }
            if (response.ok) {
                setData(resultJson.data)
                console.log(resultJson.data)
                reset();
                setSuccess(resultJson.message || 'Datos enviados correctamente');
            }


        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit(sendDataAPI)}>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {success && <p style={{ color: 'green' }}>{success}</p>}
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">
                                Let's combine our strengths to create something exceptional. Together, we can turn your ideas into reality, overcome challenges, and achieve your business goals. Reach out, and let's start building something great together.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname" id="first_name" {...register('first_name')} />
                                {errors.first_name && (<p className="text-sm text-red-400">{errors.first_name.message} </p>)}
                                <Input type="lastname" placeholder="Lastname" {...register("last_name")} />
                                {errors.last_name && (<p className="text-sm text-red-400">{errors.last_name.message} </p>)}
                                <Input type="email" placeholder="Email address" id="email_address" {...register('email_address')} />
                                {errors.email_address && (<p className="text-sm text-red-400">{errors.email_address.message} </p>)}
                                <Input type="phone" placeholder="Phone Number" id="phone_number" {...register('phone_number')} />
                                {errors.phone_number && (<p className="text-sm text-red-400">{errors.phone_number.message} </p>)}
                            </div>
                            {/* select */}
                            <Controller
                                name="services"
                                control={control}
                                defaultValue="Select a Service"
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-full">
                                            {/* <SelectValue placeholder="Select a Service" /> */}
                                            <SelectValue placeholder={field.value || "Select a Service"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Select a service</SelectLabel>
                                                <SelectItem value="Web Development">Web Development</SelectItem>
                                                <SelectItem value="Systems Integration">Systems Integration</SelectItem>
                                                <SelectItem value="Technology Consulting">Technology Consulting</SelectItem>
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
                            <Button size="md" className="max-w-40" type="submit">Send message</Button>
                        </form>
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
                                        <p className="text-white/60">{item.title} </p>
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

