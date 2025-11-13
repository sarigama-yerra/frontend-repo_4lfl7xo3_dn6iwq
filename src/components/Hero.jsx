import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">Tech Partner for Ambitious Brands</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            Building Bold Digital Products with <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Ezioinfotech</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From idea to impact — we design, build and scale web, mobile and cloud solutions that users love.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#services" className="px-5 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition">Explore Services</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-gray-300 font-semibold hover:border-gray-400 transition">Start a Project</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
