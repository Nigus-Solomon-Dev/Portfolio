'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1a2a4a] text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <div className="text-xl font-extrabold tracking-tight">
            NS<span className="text-[#c8960c]">.</span>
          </div>

          {/* Copy */}
          <p className="text-white/50 text-sm text-center">
            © {year} Nigus Solomon. Built with{' '}
            <span className="text-[#c8960c]">Next.js</span> &{' '}
            <span className="text-[#c8960c]">Tailwind CSS</span>.
          </p>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Nigus-Solomon-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#c8960c] transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nigus-solomon-047308393"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#c8960c] transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:niguss50@gmail.com"
              className="text-white/50 hover:text-[#c8960c] transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
