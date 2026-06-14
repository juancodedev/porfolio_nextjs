import type { ReactNode } from "react"

interface Skill {
  icon: ReactNode
  name: string
}

interface SkillGroupProps {
  groupName: string
  skills: Skill[]
}

const SkillGroup = ({ groupName, skills }: SkillGroupProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
      <h4 className="text-lg font-serif font-semibold text-foreground mb-5 pb-3 border-b border-border">
        {groupName}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-primary/5 transition-colors"
          >
            <div className="text-2xl text-primary">{skill.icon}</div>
            <span className="text-xs font-mono text-muted-foreground text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillGroup
