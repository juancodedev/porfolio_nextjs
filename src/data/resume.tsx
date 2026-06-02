import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma,
  FaBootstrap, FaPython, FaAws, FaDatabase,
  FaGitSquare, FaGithub, FaLinux, FaJenkins, FaServer,
} from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import {
  SiTailwindcss, SiNextdotjs, SiTypescript,
  SiHeroku, SiJira, SiSonarqubeserver, SiVercel,
  SiMysql, SiGithubactions,
} from "react-icons/si"
import { DiScrum } from "react-icons/di"
import type { ReactNode } from "react"

export const about = {
  title: "About Me",
  description: "Professional with more than 19 years of experience in the IT area, currently working as a systems developer. I am a resolute, dynamic professional with a great interest in developing innovative solutions through the use of technology. I have a strong capacity for diagnosing and resolving complex incidents, and I'm able to assume responsibilities and make assertive decisions. I have a great capacity to learn and apply my knowledge in professional environments.",
  info: [
    { fieldName: "Name", fieldValue: "Juan Muñoz." },
    { fieldName: "Phone", fieldValue: "(+56) 998 307 778" },
    { fieldName: "Experience", fieldValue: "+3 Years" },
    { fieldName: "Nationality", fieldValue: "Chilean" },
    { fieldName: "Email", fieldValue: "cl.jmunoz@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Spanish/English" },
  ],
} as const;

export const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'I am a systems developer with over 19 years of IT experience. I specialize in Python, JavaScript, and Java, with expertise in AWS Services, PostgreSQL, and Linux. I am resourceful, dynamic, and have a natural ability to learn quickly and adapt to new technologies. I enjoy challenges and always maintain a proactive, results-oriented approach. With experience in agile methodologies such as Scrum and a strong commitment to Clean Code and SOLID principles, I ensure quality and sustainability in software development. Additionally, I have experience in solution architecture design, planning, development, deployment, and production implementation.',
  items: [
    { company: "HCMFront, Santiago", position: "Full Stack Developer Jr.", duration: "2024-Oct. -> Today." },
    { company: "BST Corp., Santiago", position: "Full Stack Developer Jr.", duration: "2021-Dec. -> 2024-Mar." },
    { company: "DUOC UC, Maipú", position: "Teacher", duration: "2023-Mar. -> 2023-Ago." },
    { company: "Quintec Chile S.A.", position: "Technical Support", duration: "2003, May. -> 2018, Mar." },
  ],
} as const;

export const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'My academic background includes a degree as a Network Administration Technician and a recent degree in Computer Engineering at DUOC UC. This institution has provided me with tools and knowledge in agile project management, software architecture, systems development and various programming languages such as Java, C#, Python, I am currently training in React and next.js technologies to update my knowledge.',
  items: [
    { institution: "DUOC UC, Santiago", degree: "Computer Engineering", duration: "2021" },
    { institution: "DUOC UC, Santiago", degree: "Network Management Technician", duration: "2010" },
    { institution: "AIEP/Sense y Fundacion Telefonica", degree: "Diploma in Web Design and User Experience (UX/UI)", duration: "90h, 2025" },
    { institution: "AIEP/Sense y Fundacion Telefonica", degree: "Diploma in Web Design and Programming", duration: "100h, 2025" },
    { institution: "IPCHILE/Sense y Fundacion Telefonica", degree: "Diploma in Entrepreneurship and Digital Management", duration: "90h, 2025" },
    { institution: "Universidad Playa Ancha/Sense y Fundacion Telefonica", degree: "Diploma in Agile Project Design and Management", duration: "100h, 2025" },
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
  ],
} as const;
