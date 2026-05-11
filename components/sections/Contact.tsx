"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"

const contacts = [
  {
    label: "Email",
    value: "cabreramartinezizan@gmail.com",
    href: "mailto:cabreramartinezizan@gmail.com",
    Icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/icabrera0",
    href: "https://github.com/icabrera0",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/izancabrera",
    href: "https://linkedin.com/in/izancabrera",
    Icon: LinkedInIcon,
  },
  {
    label: "Phone",
    value: "+34 630 50 31 56",
    href: "tel:+34630503156",
    Icon: Phone,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.span
          className="text-violet-500 text-xs font-mono uppercase tracking-widest mb-4 block"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          06. Contact
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get in touch.
        </motion.h2>

        <motion.p
          className="text-white/40 mb-16 max-w-lg text-sm leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Available for new opportunities — full-time roles, contract work, or collaborations.
          Whether it&apos;s QA, automation, or AI-driven tooling, reach out and let&apos;s talk.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {contacts.map((contact, i) => {
            const { Icon } = contact
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-violet-500/20 transition-colors border border-violet-500/15">
                  <Icon className="text-violet-400" size={17} />
                </div>
                <div className="text-white/30 text-xs mb-1.5">{contact.label}</div>
                <div className="text-white/60 text-xs group-hover:text-white/90 transition-colors break-all">
                  {contact.value}
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="mailto:cabreramartinezizan@gmail.com"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            <Mail size={16} />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
