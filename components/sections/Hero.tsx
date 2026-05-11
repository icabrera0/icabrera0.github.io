"use client"

import { motion, type Variants } from "framer-motion"
import { Mail, ArrowDown } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import { ShaderBackground } from "@/components/ui/hero-shader"

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Hero() {
  return (
    <section id="hero">
      <ShaderBackground>
        <motion.div
          className="flex flex-col justify-end min-h-screen pb-24 px-8 md:px-16 lg:px-24 relative z-20"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mb-6"
          >
            Izan
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-violet-700">
              Cabrera
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white/50 text-lg md:text-xl font-light mb-3 tracking-wide"
          >
            Software Engineer · QA Specialist
          </motion.p>

          <motion.p
            variants={item}
            className="text-white/30 text-sm max-w-sm md:max-w-md mb-10 leading-relaxed"
          >
            3+ years automating quality at Telefónica. Python, Playwright, AI-driven tools.
            Building the future of software testing with Claude and agent swarms.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-4 flex-wrap mb-10">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-white/20 text-white/70 text-sm font-light hover:bg-white/5 hover:border-white/40 transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6">
            <a
              href="https://github.com/icabrera0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="mailto:cabreramartinezizan@gmail.com"
              className="text-white/30 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/izancabrera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </ShaderBackground>
    </section>
  )
}
