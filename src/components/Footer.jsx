export default function Footer(){
  return (
    <footer className="py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400" />
          <p className="mt-4 text-sm text-white/70">Ezioinfotech — crafting reliable, delightful digital experiences.</p>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-white/70 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#team" className="hover:text-white">Team</a></li>
            <li><a href="#career" className="hover:text-white">Career</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2 text-white/70 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#product" className="hover:text-white">Product</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-white/70 text-sm">hello@ezioinfotech.com</p>
          <p className="text-white/70 text-sm">+91 98765 43210</p>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-white/60">© {new Date().getFullYear()} Ezioinfotech. All rights reserved.</div>
      </div>
    </footer>
  )
}
