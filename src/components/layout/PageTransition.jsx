import { motion } from 'framer-motion'

export function PageTransition({ children }) {
  return (
    <motion.div className="page-transition" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}
