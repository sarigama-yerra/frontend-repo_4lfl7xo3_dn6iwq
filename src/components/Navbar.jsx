import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Product', href: '#product' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400" />
            <span className="font-bold text-lg tracking-tight">Ezioinfotech</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-black transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition-colors">Let's talk</a>
          </nav>
          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-700 hover:text-black py-2">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition-colors">Let's talk</a>
          </div>
        </div>
      )}
    </header>
  )
}
