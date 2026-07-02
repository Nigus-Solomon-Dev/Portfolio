'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center gap-5 pt-16">

        <motion.p {...fadeUp(0.1)} className="text-[#c8960c] font-semibold text-sm uppercase tracking-widest">
          Full-Stack Developer · Addis Ababa, Ethiopia
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-6xl font-extrabold text-[#1a2a4a] leading-tight"
        >
          {"Hi, I'm Nigus Solomon"}
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-[#5a6a8a] text-lg leading-relaxed">
          I build clean, fast web and mobile apps — from flight booking to e-commerce — that solve real problems.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="flex gap-4 pt-2">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#1a2a4a] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#c8960c] transition-colors duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-[#1a2a4a] text-[#1a2a4a] font-semibold px-8 py-3 rounded-full hover:border-[#c8960c] hover:text-[#c8960c] transition-colors duration-300"
          >
            Contact Me
          </button>
        </motion.div>

      </div>
    </section>
  )
}
