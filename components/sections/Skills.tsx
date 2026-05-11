"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillGroups = [
  {
    category: "QA & Testing",
    skills: ["Selenium", "RobotFramework", "Playwright", "Cucumber", "BDD", "Gherkin", "Manual Testing", "Regression Testing", "pytest"],
    pill: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  {
    category: "API Testing",
    skills: ["REST API", "Postman", "Contract Testing"],
    pill: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    category: "Languages",
    skills: ["Python", "Java (Spring)", "TypeScript", "SQL", "JavaScript", "HTML/CSS"],
    pill: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  {
    category: "AI & Tooling",
    skills: ["GitHub Copilot", "Claude API", "Claude Code", "Prompt Engineering", "Agent Swarms", "Ollama", "Pydantic v2"],
    pill: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
  },
  {
    category: "Data & Async",
    skills: ["SQLite", "APScheduler", "Streamlit", "Plotly", "openpyxl", "Loguru", "Tenacity"],
    pill: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    category: "Methodologies",
    skills: ["Agile", "Scrum", "Jira", "Sprint Planning", "Defect Management"],
    pill: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    category: "DevOps",
    skills: ["Git", "GitHub Actions", "CI/CD Pipelines"],
    pill: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  },
  {
    category: "Architecture",
    skills: ["REST APIs", "Event-driven Microservices", "Angular"],
    pill: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="skills" className="py-32 px-8 md:px-16 lg:px-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <motion.span
            className="text-violet-500 text-xs font-mono uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            04. Skills
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What I work with.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, groupIndex) => (
            <SkillGroup key={group.category} group={group} groupIndex={groupIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({
  group,
  groupIndex,
}: {
  group: (typeof skillGroups)[0]
  groupIndex: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-2xl border border-white/8 bg-white/[0.02]"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: groupIndex * 0.07 }}
    >
      <h3 className="text-white/60 font-medium text-xs uppercase tracking-widest mb-4">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            className={`px-3 py-1 rounded-full text-xs border ${group.pill}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: groupIndex * 0.07 + i * 0.04 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
