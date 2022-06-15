import React from 'react'
import { motion } from 'framer-motion'

export default function Title({ children }) {
  return (
    <motion.h2
      className="mb-8 text-2xl font-bold uppercase tracking-widest text-cta md:text-3xl"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {children}
    </motion.h2>
  )
}
