"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'I can help transform your online venture with a professional, functional website. With experience in web development and modern technologies, I\'ll create a secure, fast, and adaptable platform tailored to your needs. While you focus on your business, I\'ll handle the tech.',
        href: "/contact?service=Web+Development"
    }, {
        num: '02',
        title: 'Backend Developer',
        description: 'I\'ll develop a robust and scalable backend to support all your business operations. With experience in Python, Java, and AWS, I\'ll create efficient and secure solutions, optimizing your system\'s performance so you can focus on growing your business.',
        href: "/contact?service=Systems+Integration"
    }, {
        num: '03',
        title: 'Systems Integration',
        description: 'I\'ll help you seamlessly integrate your systems and tools, ensuring smooth communication between them. My experience in integration guarantees that your tech infrastructure works in harmony, improving efficiency and reducing costs.',
        href: "/contact?service=Systems+Integration"
    }, {
        num: '04',
        title: 'Technology Consulting',
        description: 'I offer specialized consulting to help you choose and use the best technologies for your business. Together, we\'ll implement solutions that maximize performance and keep you competitive in a constantly evolving market.',
        href: "/contact?service=Technology+Consulting"
    }
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.6,
                            duration: 0.4,
                            ease: "easeIn"
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* TOP */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            {/* description */}
                            <p className="text-white/60">{service.description}</p>
                            {/* border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default Services