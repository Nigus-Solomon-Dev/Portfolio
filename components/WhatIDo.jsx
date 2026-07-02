'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Globe, Server } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Cross-platform iOS & Android apps built with Flutter and GetX — fast, clean, and production-ready.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Full-stack web apps with Next.js, React, Node.js, and Express — from UI to database.',
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    desc: 'RESTful APIs and database design with MongoDB and PostgreSQL, built for scale and reliability.',
  },
]

export default function WhatIDo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="what-i-do" className="py-24 bg-[#f8f9fa]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#c8960c] font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-[#c8960c]" />
            What I Do
            <span className="w-8 h-0.5 bg-[#c8960c]" />
          </span>
          <h2 className="text-4xl font-extrabold text-[#1a2a4a]">
            Building Digital Solutions
          </h2>
          <p className="text-[#5a6a8a] mt-4 max-w-xl mx-auto text-lg">
            I turn ideas into polished, functional products — whether it's a mobile app or a full-stack web platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#1a2a4a]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c8960c]/10 transition-colors">
                <s.icon size={26} className="text-[#1a2a4a] group-hover:text-[#c8960c] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2a4a] mb-3">{s.title}</h3>
              <p className="text-[#5a6a8a] leading-relaxed">{s.desc}</p>
              <div className="mt-6 w-8 h-0.5 bg-[#c8960c] group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
