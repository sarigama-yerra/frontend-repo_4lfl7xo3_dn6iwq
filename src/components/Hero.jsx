import { motion } from 'framer-motion'

const gallery = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
]

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">Tech Partner for Ambitious Brands</span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              Building Bold Digital Products with <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Ezioinfotech</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              From idea to impact — we design, build and scale web, mobile and cloud solutions that users love.
            </p>
            <div className="mt-8 flex items-center gap-3 justify-center md:justify-start">
              <a href="/services" className="px-5 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition">Explore Services</a>
              <a href="/contact" className="px-5 py-3 rounded-full border border-gray-300 font-semibold hover:border-gray-400 transition">Start a Project</a>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-3 gap-3"
            >
              {gallery.map((src, idx) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.15 }}
                  className={`aspect-[3/4] rounded-2xl overflow-hidden border bg-white shadow-sm ${idx === 1 ? 'translate-y-6' : ''}`}
                >
                  <img src={src} alt="Culture" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur border shadow-sm text-sm"
            >
              People • Process • Impact
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
