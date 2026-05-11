"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="education" className="py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.span
          className="text-violet-500 text-xs font-mono uppercase tracking-widest mb-4 block"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          05. Education
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Where I studied.
        </motion.h2>

        <motion.div
          className="p-8 rounded-3xl border border-white/8 bg-white/[0.02] flex flex-col md:flex-row gap-6 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center flex-shrink-0 border border-violet-500/20">
            <GraduationCap className="text-violet-400" size={24} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-xl mb-2">
              Higher Vocational Education in Software Development
            </h3>
            <p className="text-violet-400 mb-4 text-sm font-medium">Inmaculada Padre Escolapios</p>
            <div className="flex flex-wrap gap-5 text-white/35 text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                Madrid, Spain
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                09/2019 – 06/2023
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 p-8 rounded-3xl border border-white/8 bg-white/[0.02]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-white/50 text-xs uppercase tracking-widest mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-white font-medium text-sm">Spanish</span>
              <span className="text-white/30 text-xs">Native</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              <span className="text-white font-medium text-sm">English</span>
              <span className="text-white/30 text-xs">Native</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
