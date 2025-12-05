import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <h2 className="gradient-text">Ready to Deploy</h2>
          <p>This site showcases various scroll-based animation techniques</p>

          <div className="footer-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>Framer Motion</span>
            <span>GSAP</span>
            <span>Vite</span>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Scroll Animations Showcase</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
