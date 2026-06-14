"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "@/components/Timeline";
import SkillGroup from "@/components/SkillGroup";
import { about, experience, education, skills } from "@/data/resume";

const frontendNames = new Set([
  "HTML 5", "CSS 3", "Javascript", "Typescript",
  "React", "Next.js", "Tailwind CSS", "Bootstrap",
]);
const backendNames = new Set(["Python", "Postgresql", "Mysql"]);
const devopsNames = new Set([
  "AWS", "EC2", "Vercel", "Heroku",
  "GitHub Actions", "Jenkins", "Linux",
]);
const toolsNames = new Set([
  "Git", "GitHub", "Figma", "Jira", "Sonarqube", "Scrum",
]);

function toSkillGroupItems(names: Set<string>) {
  return skills.skillList
    .filter((s) => names.has(s.skillName))
    .map((s) => ({ icon: s.icon, name: s.skillName }));
}

const skillGroups = [
  { groupName: "Frontend", skills: toSkillGroupItems(frontendNames) },
  { groupName: "Backend", skills: toSkillGroupItems(backendNames) },
  { groupName: "DevOps / Cloud", skills: toSkillGroupItems(devopsNames) },
  { groupName: "Tools", skills: toSkillGroupItems(toolsNames) },
];

const experienceTimeline = experience.items.map((item) => ({
  period: item.duration,
  title: item.position,
  organization: item.company,
}));

const educationTimeline = education.items.map((item) => ({
  period: item.duration,
  title: item.degree,
  organization: item.institution,
}));

const ResumeClient = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* ---- Experience Tab ---- */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-serif font-bold text-foreground">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-muted-foreground mx-auto xl:mx-0 leading-relaxed">
                  {experience.description}
                </p>
                <Timeline items={experienceTimeline} />
              </div>
            </TabsContent>

            {/* ---- Education Tab ---- */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-serif font-bold text-foreground">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-muted-foreground mx-auto xl:mx-0 leading-relaxed">
                  {education.description}
                </p>
                <Timeline items={educationTimeline} />
              </div>
            </TabsContent>

            {/* ---- Skills Tab ---- */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-serif font-bold text-foreground">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-muted-foreground mx-auto xl:mx-0 leading-relaxed">
                    {skills.description}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  {skillGroups.map((group) => (
                    <SkillGroup
                      key={group.groupName}
                      groupName={group.groupName}
                      skills={group.skills}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ---- About Me Tab ---- */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-serif font-bold text-foreground">
                  {about.title}
                </h3>
                <div className="max-w-[640px] text-muted-foreground mx-auto xl:mx-0 leading-relaxed text-base space-y-5">
                  <p>{about.description}</p>
                  <p>
                    My career began in technical support at Quintec Chile, where
                    I spent 15 years diagnosing infrastructure issues and learning
                    how systems fail — and how to keep them running. That
                    operational mindset still shapes how I build software today.
                  </p>
                  <p>
                    I later brought that experience into the classroom as a
                    teacher at DUOC UC, helping the next generation of developers
                    understand the fundamentals. Teaching sharpened my ability to
                    communicate complex ideas clearly — a skill that proves
                    valuable in every code review and architecture discussion.
                  </p>
                  <p>
                    Now I build full-stack applications with modern tools —
                    React, Next.js, TypeScript on the frontend; Python,
                    PostgreSQL, and AWS on the backend. I thrive at the
                    intersection of product thinking and technical execution,
                    where the question is never just "can we build it?" but
                    "should we, and will it last?"
                  </p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumeClient;
