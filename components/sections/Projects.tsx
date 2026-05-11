"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Users } from "lucide-react"
import { GitHubIcon } from "@/components/icons"

const projects = [
  {
    title: "Polymarket Autonomous Paper Trading Bot",
    period: "01/2026 – Present",
    status: "Active",
    statusColor: "green",
    description:
      "Fully autonomous paper trading system for Polymarket prediction markets. Ingests real-time news from NewsAPI, GDELT and Telegram, runs it through Claude/Ollama to estimate outcome probabilities, spots mispriced contracts and simulates trades under strict configurable risk rules — without touching real funds.",
    highlights: [
      "LLM analysis layer with structured JSON prompt templates returning probability, price edge, sentiment score, and recommendation in one shot.",
      "Agent swarm architecture: Team Lead coordinates domain-specific Worker agents (news, risk, trading logic, testing).",
      "Modular pipeline orchestrated with APScheduler — scans markets every 5 min, re-evaluates positions every 15 min.",
      "Kelly criterion position sizing, stop-loss/take-profit, three-tier exits via single YAML config.",
      "Real-time Streamlit dashboard + daily Excel reports across 5 sheets: Executive Summary, Trades, LLM Analyses, Decisions Log, Balance Curve.",
      "Full pytest suite with unit and integration tests; Pydantic v2 enforces strict data validation throughout.",
    ],
    tech: [
      "Python",
      "Claude API",
      "Prompt Engineering",
      "Agent Swarms",
      "Streamlit",
      "SQLite",
      "pytest",
      "Pydantic v2",
      "APScheduler",
      "Plotly",
    ],
    github: "https://github.com/icabrera0/Polymarket-paper-trader",
    Icon: Zap,
    featured: true,
  },
  {
    title: "Discord Ranked Matchmaking Bot",
    period: "06/2021 – 08/2022",
    status: "Shipped",
    statusColor: "white",
    description:
      "Competitive matchmaking bot for a 2,000-member gaming community. 150,000+ matches played with a flexible ELO engine, dynamic post-match coefficient adjustments, 1v1/2v2 skill-based pairing and live leaderboards. Continuously iterated based on community feedback.",
    highlights: [
      "150,000+ matches facilitated for 2,000 active community members.",
      "Custom ELO engine with dynamic post-match adjustments and decay.",
      "1v1 and 2v2 skill-based pairing algorithm minimising wait time.",
      "Live leaderboard with rank tiers, continuously refined from community feedback.",
    ],
    tech: ["Java", "JDA (Java Discord API)", "ELO Algorithm"],
    github: "https://github.com/icabrera0/RankedDiscordBot",
    Icon: Users,
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <motion.span
            className="text-violet-500 text-xs font-mono uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            03. Projects
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Things I&apos;ve built.
          </motion.h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })
  const { Icon } = project

  return (
    <motion.div
      ref={ref}
      className={`relative p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
        project.featured
          ? "border-violet-500/25 bg-violet-950/20 hover:border-violet-500/50 hover:bg-violet-950/30"
          : "border-white/8 bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {project.featured && (
        <div className="absolute top-0 right-0 px-4 py-1.5 text-xs text-violet-400 bg-violet-500/10 rounded-bl-2xl rounded-tr-3xl border-l border-b border-violet-500/20">
          Featured
        </div>
      )}

      <div className="flex items-start gap-5 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center flex-shrink-0 border border-violet-500/20">
          <Icon className="text-violet-400" size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-white/30 text-sm">{project.period}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs border ${
                    project.statusColor === "green"
                      ? "bg-green-500/10 text-green-400 border-green-500/25"
                      : "bg-white/5 text-white/40 border-white/10"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-200 flex-shrink-0 mt-1"
              aria-label="View on GitHub"
            >
              <GitHubIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-white/45 text-sm leading-relaxed mb-6">{project.description}</p>

      <ul className="space-y-2.5 mb-6">
        {project.highlights.map((h, j) => (
          <li key={j} className="text-white/35 text-sm flex gap-3">
            <span className="text-violet-500/60 mt-1 flex-shrink-0 text-xs">▸</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs bg-white/5 text-white/45 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
