"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaBootstrap,
    FaPython,
    FaAws,
    FaDatabase,
    FaGitSquare,
    FaGithub,
    FaLinux,
    FaJenkins,
} from "react-icons/fa"

import { BiLogoPostgresql } from "react-icons/bi";

import {
    SiTailwindcss, SiNextdotjs,
    SiTypescript,
    SiHeroku,
    SiJira,
    SiSonarqube,
    SiVercel,
    SiMysql,
    SiAmazonec2,
    SiGithubactions
} from "react-icons/si"
import { DiScrum } from "react-icons/di";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const about = {
    title: "About Me",
    description: "Professional with more than 19 years of experience in the IT area, currently working as a systems developer. I am a resolute, dynamic professional with a great interest in developing innovative solutions through the use of technology. I have a strong capacity for diagnosing and resolving complex incidents, and I'm able to assume responsibilities and make assertive decisions. I have a great capacity to learn and apply my knowledge in professional environments.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Juan Muñoz.",
        }, {
            fieldName: "Phone",
            fieldValue: "(+56) 998 307 778",
        }, {
            fieldName: "Experience",
            fieldValue: "+3 Years",
        }, {
            fieldName: "Nationality",
            fieldValue: "Chilean",
        }, {
            fieldName: "Email",
            fieldValue: "cl.jmunoz@gmail.com",
        }, {
            fieldName: "Freelance",
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
    description: 'I am a systems developer with over 19 years of IT experience. I specialize in Python, JavaScript, and Java, with expertise in AWS Services, PostgreSQL, and Linux. I am resourceful, dynamic, and have a natural ability to learn quickly and adapt to new technologies. I enjoy challenges and always maintain a proactive, results-oriented approach. With experience in agile methodologies such as Scrum and a strong commitment to Clean Code and SOLID principles, I ensure quality and sustainability in software development. Additionally, I have experience in solution architecture design, planning, development, deployment, and production implementation.',
    items: [{
        company: "HCMFront, Santiago",
        position: "Full Stack Developer Jr.",
        duration: "2024-Oct. -> Today.",
    }, {
        company: "BST Corp., Santiago",
        position: "Full Stack Developer Jr.",
        duration: "2021-Dec. -> 2024-Mar.",
    }, {
        company: "DUOC UC, Maipú",
        position: "Teacher",
        duration: "2023-Mar. -> 2023-Ago.",
    }, {
        company: "Quintec Chile S.A.",
        position: "Technical Support",
        duration: "2003, May. -> 2018, Mar.",
    },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'My academic background includes a degree as a Network Administration Technician and a recent degree in Computer Engineering at DUOC UC. This institution has provided me with tools and knowledge in agile project management, software architecture, systems development and various programming languages such as Java, C#, Python, I am currently training in React and next.js technologies to update my knowledge.',
    items: [{
        institution: "DUOC UC, Santiago",
        degree: "Computer Engineering",
        duration: "2021",
    }, {
        institution: "DUOC UC, Santiago",
        degree: "Network Management Technician",
        duration: "2010",
    }, {
        institution: "AIEP/Sense y Fundacion Telefonica",
        degree: "Diploma in Web Design and User Experience (UX/UI)",
        duration: "90h, 2025",
    }, {
        institution: "AIEP/Sense y Fundacion Telefonica",
        degree: "Diploma in Web Design and Programming",
        duration: "100h, 2025",
    }, {
        institution: "IPCHILE/Sense y Fundacion Telefonica",
        degree: "Diploma in Entrepreneurship and Digital Management",
        duration: "90h, 2025",
    }, {
        institution: "Universidad Playa Ancha/Sense y Fundacion Telefonica",
        degree: "Diploma in Agile Project Design and Management",
        duration: "100h, 2025",
    }
    ],
}

const skills = {
    title: 'My Skills',
    description: 'I have experience in a wide range of technologies, including HTML5, CSS3, JavaScript and TypeScript, along with frameworks such as Bootstrap and Tailwind CSS. My backend experience covers Python, Django, SQL, PostgreSQL, SQLite and Redis. I am proficient in AWS, Heroku, Terraform and Jenkins for cloud and CI/CD management. My experience extends to using Git, Jira, VSCode, npm, pip, and SonarQube for version control, project management, and code quality. This diverse skill set allows me to develop robust, scalable, and efficient solutions.',
    skillList: [
        { icon: <FaHtml5 />, skillName: "HTML 5" },
        { icon: <FaCss3 />, skillName: "CSS 3" },
        { icon: <FaJs />, skillName: "Javascript" },
        { icon: <FaPython />, skillName: "Python" },
        { icon: <FaReact />, skillName: "React" },
        { icon: <SiNextdotjs />, skillName: "Next.js" },
        { icon: <SiTailwindcss />, skillName: "Tailwind CSS" },
        { icon: <FaBootstrap />, skillName: "Bootstrap" },
        { icon: <FaFigma />, skillName: "Figma" },
        { icon: <FaAws />, skillName: "AWS" },
        { icon: <SiAmazonec2 />, skillName: "EC2" },
        { icon: <FaDatabase />, skillName: "Database" },
        { icon: <FaGitSquare />, skillName: "Git" },
        { icon: <FaGithub />, skillName: "GitHub" },
        { icon: <SiGithubactions />, skillName: "GitHub Actions" },
        { icon: <SiTypescript />, skillName: "Typescript" },
        { icon: <BiLogoPostgresql />, skillName: "Postgresql" },
        { icon: <SiMysql />, skillName: "Mysql" },
        { icon: <SiHeroku />, skillName: "Heroku" },
        { icon: <SiJira />, skillName: "Jira" },
        { icon: <SiSonarqube />, skillName: "Sonarqube" },
        { icon: <SiVercel />, skillName: "Vercel" },
        { icon: <FaLinux />, skillName: "Linux" },
        { icon: <FaJenkins />, skillName: "Jenkins" },
        { icon: <DiScrum />, skillName: "Scrum" },
    ]
}

const ResumeClient = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.5,
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
                                        {experience.items.map((item, index) => (
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
                                        ))}
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
                                        {education.items.map((item, index) => (
                                            <li key={index}
                                                className="bg-[#232329] h-[200px] py-5 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left pb-2">{item.degree}</h3>
                                                <div className="flex items-center gap-3 pt-5">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
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
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300"> {skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.skillName}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default ResumeClient
