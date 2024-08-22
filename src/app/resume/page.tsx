"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs
} from "react-icons/fa"
import {
    SiTailwindcss, SiNextdotjs
} from "react-icons/si"

const about = {
    title: "About Me",
    description: "Professional with more than 19 years of experience in the IT area, currently systems developer, highly motivated and eager to grow. developer, highly motivated and eager to grow. I am a resolute, dynamic professional with a great interest in the development of great interest in the development of innovative solutions through the use of technologies. great capacity for the diagnosis and resolution of incidents, able to assume responsibilities and make assertive decisions. assertive decisions, I also have a great capacity to learn and apply my knowledge to the professional field. to learn and apply my knowledge to the professional environment.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Juan Muñoz.",
        }, {
            fieldName: "Phone",
            fieldValue: "(56 9) 983 077 78",
        }, {
            fieldName: "Experience",
            fieldValue: "+2 Years",
        // }, {
        //     fieldName: "Skype",
        //     fieldValue: "skype.demo",
        }, {
            fieldName: "Nationality",
            fieldValue: "Chilean",
        }, {
            fieldName: "Email",
            fieldValue: "cl.jmunoz@gmail.com",
        }, {
            fieldName: "Frelance",
            fieldValue: "Available",
        }, {
            fieldName: "Languages",
            fieldValue: "Spanish/English",
        },

    ]
}
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ipsum euismod, bibendum lectus eget, posuere ligula. Sed vel libero non neque gravida lobortis.',
    items: [{
        company: "BST Corp. - Santiago",
        position: "FUll Stack Developer Jr.",
        duration: "2021-Dec. -> 2024-Mar.",
    }, {
        company: "company 2",
        position: "FUll Stack Developer",
        duration: "2020 - 2022",
    }, {
        company: "company 3",
        position: "FUll Stack Developer",
        duration: "2020 - 2022",
    }, {
        company: "company 4",
        position: "FUll Stack Developer",
        duration: "2020 - 2022",
    }, {
        company: "company 5",
        position: "FUll Stack Developer",
        duration: "2020 - 2022",
    }, {
        company: "company 6",
        position: "FUll Stack Developer",
        duration: "2020 - 2022",
    }, {
        company: "company 7",
        position: "FUll Stack Developer",
        duration: "2020 - 2022",
    },


    ]

}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ipsum euismod, bibendum lectus eget, posuere ligula. Sed vel libero non neque gravida lobortis.',
    items: [{
        institution: "Educations n1",
        degree: "FUll Stack Developer",
        duration: "2023",
    }, {
        institution: "Educations n1",
        degree: "FUll Stack Developer",
        duration: "2023",
    }, {
        institution: "Educations n1",
        degree: "FUll Stack Developer",
        duration: "2023",
    }, {
        institution: "Educations n1",
        degree: "FUll Stack Developer",
        duration: "2023",
    }, {
        institution: "Educations n1",
        degree: "FUll Stack Developer",
        duration: "2023",
    }, {
        institution: "Educations n1",
        degree: "FUll Stack Developer",
        duration: "2023",
    }, {
        institution: "Educations n1",
        degree: "FUll Stack Developer",
        duration: "2023",
    },


    ],

}

const skills = {
    title: 'My Skills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ipsum euismod, bibendum lectus eget, posuere ligula. Sed vel libero non neque gravida lobortis.',
    skillList: [
        {
            icon: <FaHtml5 />,
            skillName: "html 5",
        }, {
            icon: <FaCss3 />,
            skillName: "css 3",
        }, {
            icon: <FaJs />,
            skillName: "javascript",
        }, {
            icon: <FaReact />,
            skillName: "react",
        }, {
            icon: <SiNextdotjs />,
            skillName: "next.js",
        }, {
            icon: <SiTailwindcss />,
            skillName: "tailwind css",
        }, {
            icon: <FaNodeJs />,
            skillName: "Node js",
        }, {
            icon: <FaFigma />,
            skillName: "figma",
        }
    ]
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';


const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description} </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description} </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title} </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description} </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index} className="flex items-center gap-2">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip >
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300"> {skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.skillName}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>

                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,idex)=> {
                                        return <li key={idex} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60" >{item.fieldName}</span>
                                            <span className="text-xl" >{item.fieldValue}</span>
                                            </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>

                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume