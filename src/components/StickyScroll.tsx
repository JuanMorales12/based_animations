import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './StickyScroll.css'

const items = [
  {
    title: 'Performance Optimized',
    description: 'All animations are GPU-accelerated for silky smooth 60fps performance',
  },
  {
    title: 'Responsive Design',
    description: 'Looks perfect on desktop, tablet, and mobile devices',
  },
  {
    title: 'Modern Stack',
    description: 'Built with React, TypeScript, Framer Motion, and GSAP',
  },
  {
    title: 'Easy to Deploy',
    description: 'Ready to deploy on Vercel, Netlify, or any static hosting',
  },
]

const StickyScroll = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={ref} className="sticky-section">
      <div className="sticky-container">
        <div className="sticky-content">
          <motion.div className="sticky-text">
            <h2>Why Choose This?</h2>

            <div className="sticky-items">
              {items.map((item, index) => {
                const start = index / items.length
                const end = (index + 1) / items.length

                const opacity = useTransform(
                  scrollYProgress,
                  [start, start + 0.1, end - 0.1, end],
                  [0, 1, 1, 0]
                )

                return (
                  <motion.div
                    key={index}
                    className="sticky-item"
                    style={{ opacity }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div className="sticky-spacer" />
      </div>
    </section>
  )
}

export default StickyScroll
