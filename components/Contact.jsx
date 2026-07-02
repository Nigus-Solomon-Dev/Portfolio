'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Link, GitBranch } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'niguss50@gmail.com',
    href: 'mailto:niguss50@gmail.com',
    desc: 'Best way to reach me',
  },
  {
    icon: Link,
    label: 'LinkedIn',
    value: 'nigus-solomon-047308393',
    href: 'https://linkedin.com/in/nigus-solomon-047308393',
    desc: "Let's connect professionally",
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'Nigus-Solomon-Dev',
    href: 'https://github.com/Nigus-Solomon-Dev',
    desc: 'See my code and projects',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 bg-[#f8f9fa]" ref={ref}>
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
            Contact
            <span className="w-8 h-0.5 bg-[#c8960c]" />
          </span>
          <h2 className="text-4xl font-extrabold text-[#1a2a4a]">
            {"Let's Work Together"}
          </h2>
          <p className="text-[#5a6a8a] mt-4 max-w-xl mx-auto text-lg">
            {"Have a project in mind or want to collaborate? I'm open to opportunities — reach out anytime."}
          </p>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#1a2a4a] rounded-3xl p-10 md:p-14 text-center mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8960c]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <p className="text-white/60 text-sm uppercase tracking-widest mb-3">Based in Addis Ababa, Ethiopia</p>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to build something <span className="text-[#c8960c]">great?</span>
          </h3>
          <a
            href="mailto:niguss50@gmail.com"
            className="inline-flex items-center gap-2 bg-[#c8960c] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#e8b422] transition-colors duration-300 text-lg"
          >
            Send me an email
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#c8960c]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-3"
            >
              <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center group-hover:bg-[#c8960c]/10 transition-colors">
                <link.icon size={22} className="text-[#1a2a4a] group-hover:text-[#c8960c] transition-colors" />
              </div>
              <div>
                <p className="text-xs text-[#5a6a8a] font-medium uppercase tracking-widest mb-0.5">
                  {link.label}
                </p>
                <p className="text-[#1a2a4a] font-semibold text-sm truncate">{link.value}</p>
                <p className="text-[#5a6a8a] text-xs mt-1">{link.desc}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-[#c8960c] text-sm font-medium">
                <span>Open</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
