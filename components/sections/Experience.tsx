"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    role: "Software Engineer – QA",
    company: "IZERTIS",
    client: "Assigned at Telefónica",
    location: "Madrid, Spain",
    period: "05/2025 – 01/2026",
    bullets: [
      "Extended QA framework by integrating Cucumber for BDD-style scenarios, improving alignment between technical and business requirements.",
      "Automated end-to-end test suites with Python, Selenium and RobotFramework, expanding regression coverage across critical workflows.",
      "Introduced Playwright on selected UI flows to complement Selenium, improving test stability and reducing flakiness on dynamic interfaces.",
      "Designed and executed automated and manual REST API tests, validating endpoint contracts, response schemas and edge cases.",
      "Integrated GitHub Copilot into daily workflow for test script generation and documentation, reducing time on boilerplate.",
      "Tracked defects and sprint tasks in Jira within an Agile/Scrum delivery model — planning, reviews and retrospectives.",
      "Facilitated weekly code review sessions to unblock dependencies and maintain consistent quality standards.",
      "Developed and maintained reusable Python libraries to standardise automation tooling.",
    ],
    tech: ["Python", "Selenium", "RobotFramework", "Playwright", "Cucumber", "BDD", "REST API", "Jira"],
  },
  {
    role: "Software Engineer – QA",
    company: "NEORIS",
    client: "Assigned at Telefónica",
    location: "Madrid, Spain",
    period: "03/2023 – 05/2025",
    bullets: [
      "Designed and implemented automated test frameworks from scratch using Python, Selenium and RobotFramework, establishing the QA foundation.",
      "Built reusable Python libraries that standardised automation workflows and cut scaffolding time for new test cases.",
      "Designed and executed REST API test suites — manual and automated — covering functional validation, regression and edge cases.",
      "Incorporated Playwright on selected test scenarios alongside Selenium to evaluate improved reliability on complex UI flows.",
      "Used GitHub Copilot to accelerate boilerplate generation and test scaffolding, improving team throughput.",
      "Managed defects and sprint deliverables in Jira within Agile/Scrum framework with regular ceremonies and backlog grooming.",
      "Drove weekly regression cycles covering multiple software releases, tracking defects through to resolution.",
    ],
    tech: ["Python", "Selenium", "RobotFramework", "Playwright", "REST API", "GitHub Copilot", "Agile/Scrum"],
  },
  {
    role: "Software Engineer (Internship)",
    company: "FLYNCER",
    client: "Freelance tech recruiting platform",
    location: "Madrid, Spain",
    period: "03/2021 – 06/2021",
    bullets: [
      "Built the company's web platform from scratch collaborating with cross-functional teams to gather requirements and ship features.",
      "Delivered a candidate-facing job portal allowing users to browse and apply to offers from multiple companies, driving measurable user engagement at launch.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Spring Boot"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="experience" className="py-32 px-8 md:px-16 lg:px-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <motion.span
            className="text-violet-500 text-xs font-mono uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            02. Experience
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Where I&apos;ve worked.
          </motion.h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <motion.div
      ref={ref}
      className="p-8 rounded-3xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
        <div>
          <h3 className="text-white font-semibold text-xl mb-1">{exp.role}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-violet-400 font-medium">{exp.company}</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-sm">{exp.client}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-white/30 text-xs">
            <span className="flex items-center gap-1.5">
              <MapPin size={11} />
              {exp.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              {exp.period}
            </span>
          </div>
        </div>
      </div>

      <ul className="space-y-2.5 mb-6">
        {exp.bullets.map((bullet, j) => (
          <li key={j} className="text-white/45 text-sm leading-relaxed flex gap-3">
            <span className="text-violet-500/70 mt-1 flex-shrink-0 text-xs">▸</span>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
