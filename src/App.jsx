import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeIn' } },
}

export default function App() {
  const location = useLocation()
  return (
    <div className="font-['Inter',system-ui] text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.main key={location.pathname} variants={variants} initial="initial" animate="animate" exit="exit">
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
