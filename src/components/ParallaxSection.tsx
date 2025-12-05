import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './ParallaxSection.css'

const ParallaxSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={ref} className="parallax-section">
      <motion.div
        className="parallax-layer layer-1"
        style={{ y: y1 }}
      >
        <div className="shape shape-1" />
      </motion.div>

      <motion.div
        className="parallax-layer layer-2"
        style={{ y: y2 }}
      >
        <div className="shape shape-2" />
      </motion.div>

      <motion.div
        className="parallax-content"
        style={{ opacity, scale }}
      >
        <h2>Parallax Effect</h2>
        <p>
          Different elements move at different speeds as you scroll,
          creating a sense of depth and dimension
        </p>
      </motion.div>
    </section>
  )
}

export default ParallaxSection
