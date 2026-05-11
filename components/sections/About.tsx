"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "2", label: "Telecom Contracts" },
  { value: "150K+", label: "Matches Automated" },
  { value: "AI", label: "First Developer" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.span
          className="text-violet-500 text-xs font-mono uppercase tracking-widest mb-4 block"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          01. About
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Engineering quality<br />at scale.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/50 leading-relaxed mb-5 text-sm md:text-base">
              Software Engineer with 3+ years embedded within Telefónica&apos;s engineering
              teams. I build and maintain Python-based automation frameworks — Selenium,
              RobotFramework, Cucumber/BDD, Playwright — design REST API test suites, and
              drive quality in fast-moving Agile/Scrum environments.
            </p>
            <p className="text-white/50 leading-relaxed text-sm md:text-base">
              Outside of work I develop AI-driven tools using Claude and systematic prompt
              engineering. My current project is a fully autonomous prediction market trading bot
              built end-to-end with an AI-first workflow — treating Claude Code as the primary
              development engine, not a support tool.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-white/35 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
