import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import './StatsCounter.css'

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 50, damping: 30 })
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString())

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: 99, suffix: '%', label: 'Smooth Animations' },
    { value: 60, suffix: 'fps', label: 'Performance' },
    { value: 1000, suffix: '+', label: 'Lines of Code' },
    { value: 100, suffix: '%', label: 'Responsive' },
  ]

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="stats-title"
        >
          The Numbers <span className="gradient-text">Speak</span>
        </motion.h2>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
