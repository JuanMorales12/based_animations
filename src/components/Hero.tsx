import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <motion.div
          className="gradient-orb orb-1"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
        <motion.div
          className="gradient-orb orb-2"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 30 }}
        />
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="gradient-text">
            Scroll-Based
            <br />
            Animations
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-subtitle"
        >
          Experience smooth, buttery animations triggered by your scroll
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mouse"
          >
            <div className="wheel" />
          </motion.div>
          <p>Scroll Down</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
