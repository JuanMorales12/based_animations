import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './TextReveal.css'

const TextReveal = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  const words = 'Create amazing experiences with scroll-driven animations that captivate your audience'.split(' ')

  return (
    <section ref={ref} className="text-reveal-section">
      <motion.div
        className="text-reveal-container"
        style={{ opacity, scale, y }}
      >
        <h2 className="reveal-heading">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="reveal-word"
            >
              {word}{' '}
            </motion.span>
          ))}
        </h2>
      </motion.div>
    </section>
  )
}

export default TextReveal
