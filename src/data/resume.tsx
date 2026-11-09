import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma,
  FaBootstrap, FaPython, FaAws, FaDatabase,
  FaGitSquare, FaGithub, FaLinux, FaJenkins, FaServer,
} from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import {
  SiTailwindcss, SiNextdotjs, SiTypescript,
  SiJira, SiSonarqubeserver, SiVercel,
  SiMysql, SiGithubactions, SiCloudflare, SiDrizzle,
  SiDjango, SiRedux,
} from "react-icons/si"
import { GrHeroku } from "react-icons/gr"
import { DiScrum } from "react-icons/di"
import type { ReactNode } from "react"

export const about = {
  title: "About Me",
  description: "I am a Full Stack Developer with 4 years building and maintaining production systems with Python, Django, React, Redux, and PostgreSQL. At Hcmfront, an HCM SaaS, I work on the payroll module for Chile and Ecuador: payroll calculations, Chile's pension reform (Ley 21.735), AFP, IESS, and Excel and PDF reports. My focus is ORM optimization and modernizing legacy code with targeted changes: understand the root cause first, then touch as little as possible. Before that, I spent more than 15 years in IT support, and I also taught web and mobile development at DUOC UC.",
} as const;

export const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Across two decades in technology, I have built systems as a developer, solved problems as a technical support engineer, and shared knowledge as a university instructor. Each role has sharpened a different edge of my craft — from an AWS serverless pipeline (Lambda, Step Functions, S3, Textract, API Gateway) that cut calculation and data delivery from 1.5 days to about 20 minutes, to implementing Chile's pension reform on a legacy Django payroll platform.",
  items: [
    { company: "HCMFront, Santiago", position: "Full Stack Developer", duration: "Oct 2024 – Present" },
    { company: "BST Corp., Santiago", position: "Full Stack Developer", duration: "Dec 2021 – Mar 2024" },
    { company: "DUOC UC, Maipú", position: "Web & Mobile Development Instructor", duration: "Mar 2023 – Aug 2023" },
    { company: "Quintec Chile S.A.", position: "Technical Support", duration: "May 2003 – Mar 2018" },
  ],
} as const;

export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "My academic foundation combines network administration with computer engineering from DUOC UC. Continuous learning is central to my practice — recent specializations in UX/UI design, agile project management, and digital entrepreneurship keep me at the intersection of technology and business value. Winner of the 2020 CITT challenge for AI-based fake news detection.",
  items: [
    { institution: "DUOC UC, Santiago", degree: "Computer Engineering", duration: "2021" },
    { institution: "DUOC UC, Santiago", degree: "Network Management Technician", duration: "2010" },
  ],
} as const;

export const certifications = {
  icon: '/assets/resume/badge.svg',
  title: 'Certifications',
  description: 'Continuous learning is the foundation of my practice. These recent specializations bridge technology, design, and business — keeping me at the intersection where value is created.',
  items: [
    { institution: "AIEP / Fundación Telefónica", degree: "Diploma in Web Design and UX/UI", duration: "90h, 2025" },
    { institution: "AIEP / Fundación Telefónica", degree: "Diploma in Web Design and Programming", duration: "100h, 2025" },
    { institution: "IPCHILE / Fundación Telefónica", degree: "Diploma in Entrepreneurship and Digital Management", duration: "90h, 2025" },
    { institution: "Universidad Playa Ancha / Fundación Telefónica", degree: "Diploma in Agile Project Design and Management", duration: "100h, 2025" },
  ],
} as const;

export interface Skill {
  icon: ReactNode;
  skillName: string;
}

export const skills = {
  title: 'My Skills',
  description: 'I have experience in a wide range of technologies, including HTML5, CSS3, JavaScript and TypeScript, along with frameworks such as Bootstrap and Tailwind CSS. My backend experience covers Python, Django, SQL, PostgreSQL, SQLite and Redis, and my frontend work includes React and Redux. I am proficient in AWS, Heroku, Terraform and Jenkins for cloud and CI/CD management. My experience extends to using Git, Jira, VSCode, npm, pip, and SonarQube for version control, project management, and code quality. This diverse skill set allows me to develop robust, scalable, and efficient solutions.',
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
    { icon: <FaServer />, skillName: "EC2" },
    { icon: <FaDatabase />, skillName: "Database" },
    { icon: <FaGitSquare />, skillName: "Git" },
    { icon: <FaGithub />, skillName: "GitHub" },
    { icon: <SiGithubactions />, skillName: "GitHub Actions" },
    { icon: <SiTypescript />, skillName: "Typescript" },
    { icon: <BiLogoPostgresql />, skillName: "Postgresql" },
    { icon: <SiMysql />, skillName: "Mysql" },
    { icon: <GrHeroku />, skillName: "Heroku" },
    { icon: <SiJira />, skillName: "Jira" },
    { icon: <SiSonarqubeserver />, skillName: "Sonarqube" },
    { icon: <SiVercel />, skillName: "Vercel" },
    { icon: <FaLinux />, skillName: "Linux" },
    { icon: <FaJenkins />, skillName: "Jenkins" },
    { icon: <DiScrum />, skillName: "Scrum" },
    { icon: <SiCloudflare />, skillName: "Cloudflare" },
    { icon: <SiDrizzle />, skillName: "Drizzle ORM" },
    { icon: <SiDjango />, skillName: "Django" },
    { icon: <SiRedux />, skillName: "Redux" },
    { icon: <FaAws />, skillName: "AWS Step Functions" },
  ],
} as const;
