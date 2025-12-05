import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './FadeInSection.css'

const features = [
  {
    title: 'Smooth Transitions',
    description: 'Buttery smooth 60fps animations that feel natural and responsive',
    icon: '⚡',
  },
  {
    title: 'Scroll Triggered',
    description: 'Animations activate precisely when elements enter the viewport',
    icon: '📜',
  },
  {
    title: 'Performance First',
    description: 'Optimized animations using GPU acceleration and will-change',
    icon: '🚀',
  },
  {
    title: 'Mobile Ready',
    description: 'Fully responsive animations that work beautifully on all devices',
    icon: '📱',
  },
]

const FadeInSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="fade-section">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Fade In <span className="gradient-text">On Scroll</span>
        </motion.h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FadeInSection
