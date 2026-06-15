import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma,
  FaBootstrap, FaPython, FaAws, FaDatabase,
  FaGitSquare, FaGithub, FaLinux, FaJenkins, FaServer,
} from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import {
  SiTailwindcss, SiNextdotjs, SiTypescript,
  SiHeroku, SiJira, SiSonarqubeserver, SiVercel,
  SiMysql, SiGithubactions, SiCloudflare, SiDrizzle,
  SiMercadopago, SiFlask,
} from "react-icons/si"
import { DiScrum } from "react-icons/di"
import type { ReactNode } from "react"

export const about = {
  title: "About Me",
  description: "For over 19 years, I have worked across the IT landscape — from technical support and network administration to software engineering and teaching at DUOC UC. The last 3+ years have been dedicated entirely to building software: full-stack applications, cloud architectures, and systems that solve real problems. I combine deep operational knowledge with modern development practices, bringing a unique perspective to every project. Whether diagnosing production incidents or designing greenfield solutions from scratch, I am driven by one question: what actually works?",
} as const;

export const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Across two decades in technology, I have built systems as a developer, solved problems as a technical support engineer, and shared knowledge as a university instructor. Each role has sharpened a different edge of my craft — from optimizing serverless pipelines that cut processing time by 30% to refactoring legacy Django codebases for maintainability.",
  items: [
    { company: "HCMFront, Santiago", position: "Full Stack Developer", duration: "2024-Oct. → Today." },
    { company: "BST Corp., Santiago", position: "Full Stack Developer", duration: "2021-Dec. → 2024-Mar." },
    { company: "DUOC UC, Maipú", position: "Teacher", duration: "2023-Mar. → 2023-Ago." },
    { company: "Quintec Chile S.A.", position: "Technical Support", duration: "2003, May. → 2018, Mar." },
  ],
} as const;

export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "My academic foundation combines network administration with computer engineering from DUOC UC. Continuous learning is central to my practice — recent specializations in UX/UI design, agile project management, and digital entrepreneurship keep me at the intersection of technology and business value.",
  items: [
    { institution: "DUOC UC, Santiago", degree: "Computer Engineering", duration: "2021" },
    { institution: "DUOC UC, Santiago", degree: "Network Management Technician", duration: "2010" },
    { institution: "AIEP/Sense y Fundacion Telefonica", degree: "Diploma in Web Design and User Experience (UX/UI)", duration: "90h, 2025" },
    { institution: "AIEP/Sense y Fundacion Telefonica", degree: "Diploma in Web Design and Programming", duration: "100h, 2025" },
    { institution: "IPCHILE/Sense y Fundacion Telefonica", degree: "Diploma in Entrepreneurship and Digital Management", duration: "90h, 2025" },
    { institution: "Universidad Playa Ancha/Sense y Fundacion Telefonica", degree: "Diploma in Agile Project Design and Management", duration: "100h, 2025" },
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
    { icon: <FaServer />, skillName: "EC2" },
    { icon: <FaDatabase />, skillName: "Database" },
    { icon: <FaGitSquare />, skillName: "Git" },
    { icon: <FaGithub />, skillName: "GitHub" },
    { icon: <SiGithubactions />, skillName: "GitHub Actions" },
    { icon: <SiTypescript />, skillName: "Typescript" },
    { icon: <BiLogoPostgresql />, skillName: "Postgresql" },
    { icon: <SiMysql />, skillName: "Mysql" },
    { icon: <SiHeroku />, skillName: "Heroku" },
    { icon: <SiJira />, skillName: "Jira" },
    { icon: <SiSonarqubeserver />, skillName: "Sonarqube" },
    { icon: <SiVercel />, skillName: "Vercel" },
    { icon: <FaLinux />, skillName: "Linux" },
    { icon: <FaJenkins />, skillName: "Jenkins" },
    { icon: <DiScrum />, skillName: "Scrum" },
    { icon: <SiCloudflare />, skillName: "Cloudflare" },
    { icon: <SiDrizzle />, skillName: "Drizzle ORM" },
    { icon: <SiMercadopago />, skillName: "Mercado Pago" },
    { icon: <SiFlask />, skillName: "Flask" },
  ],
} as const;
