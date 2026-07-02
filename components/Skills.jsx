'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Layout, Server, Database, Wrench } from 'lucide-react'

const skillGroups = [
  {
    category: 'Mobile',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'GetX', 'iOS', 'Android'],
  },
  {
    category: 'Frontend',
    icon: Layout,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC Pattern'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Mongoose'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 bg-white" ref={ref}>
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
            Skills
            <span className="w-8 h-0.5 bg-[#c8960c]" />
          </span>
          <h2 className="text-4xl font-extrabold text-[#1a2a4a]">
            Tech Stack
          </h2>
          <p className="text-[#5a6a8a] mt-4 max-w-xl mx-auto text-lg">
            Tools and technologies I work with across mobile and web development.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 hover:border-[#c8960c]/30 hover:shadow-sm transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <group.icon size={20} className="text-[#1a2a4a] group-hover:text-[#c8960c] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#1a2a4a] group-hover:text-[#c8960c] transition-colors">
                  {group.category}
                </h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.05 }}
                    className="text-sm bg-white text-[#1a2a4a] border border-gray-200 px-3 py-1.5 rounded-full font-medium hover:border-[#c8960c] hover:text-[#c8960c] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
