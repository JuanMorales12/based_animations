import { useEffect } from 'react'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import FadeInSection from './components/FadeInSection'
import StatsCounter from './components/StatsCounter'
import TextReveal from './components/TextReveal'
import StickyScroll from './components/StickyScroll'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="app">
      <Hero />
      <ParallaxSection />
      <FadeInSection />
      <StatsCounter />
      <TextReveal />
      <StickyScroll />
      <Footer />
    </div>
  )
}

export default App
