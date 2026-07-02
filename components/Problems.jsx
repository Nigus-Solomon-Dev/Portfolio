'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Cpu, Database } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    problem: 'Slow, frustrating booking flows',
    solution: 'Streamlined to 3-4 steps, completed in under 2 minutes',
    tag: 'Travel Value App',
  },
  {
    icon: Cpu,
    problem: 'Manual, error-prone processes',
    solution: 'Replaced with digital mobile and web apps that automate the workflow',
    tag: 'Mobile & Web',
  },
  {
    icon: Database,
    problem: 'Complex data handling and storage',
    solution: 'Clean full-stack architecture with MongoDB and PostgreSQL',
    tag: 'Backend Systems',
  },
]

export default function Problems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="problems" className="py-24 bg-white" ref={ref}>
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
            Problems I Solve
            <span className="w-8 h-0.5 bg-[#c8960c]" />
          </span>
          <h2 className="text-4xl font-extrabold text-[#1a2a4a]">
            Real Problems, Real Solutions
          </h2>
          <p className="text-[#5a6a8a] mt-4 max-w-xl mx-auto text-lg">
            Every project starts with a problem worth solving. Here's how I approach them.
          </p>
        </motion.div>

        {/* Problem-Solution pairs */}
        <div className="flex flex-col gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 hover:border-[#c8960c]/30 hover:shadow-sm transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 shrink-0 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <item.icon size={24} className="text-[#1a2a4a]" />
              </div>

              {/* Problem */}
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#c8960c] mb-1">
                  Problem
                </p>
                <p className="text-[#1a2a4a] font-semibold text-lg">{item.problem}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex w-10 h-10 shrink-0 items-center justify-center">
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.3 }}
                  className="text-[#c8960c] text-2xl font-bold"
                >
                  →
                </motion.span>
              </div>

              {/* Solution */}
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#1a2a4a]/50 mb-1">
                  Solution
                </p>
                <p className="text-[#5a6a8a] text-lg">{item.solution}</p>
              </div>

              {/* Tag */}
              <span className="shrink-0 text-xs bg-[#1a2a4a] text-white px-3 py-1.5 rounded-full font-medium">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
