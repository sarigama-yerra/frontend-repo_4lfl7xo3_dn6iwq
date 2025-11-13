import { motion } from 'framer-motion'
import { Code2, Cloud, Smartphone, Shield, Cpu, Rocket, Users, Newspaper, Briefcase, Mail, MapPin, Phone } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold">About Ezioinfotech</h2>
          <p className="mt-4 text-gray-600 max-w-3xl">We are a technology company focused on crafting human-centered digital products. Our teams combine strategy, design and engineering to deliver measurable outcomes. We move fast, stay curious, and obsess over quality.</p>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: Code2, title: 'Full‑stack Engineering', desc: 'Modern web, mobile and API platforms with scalable architecture.' },
            { icon: Cloud, title: 'Cloud & DevOps', desc: 'CI/CD, observability, IaC and cost-optimized cloud infrastructure.' },
            { icon: Shield, title: 'Security by Design', desc: 'Threat modeling, secure SDLC, audits and compliance ready.' },
          ].map((c, i) => (
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border bg-gradient-to-br from-white to-slate-50">
              <c.icon className="w-6 h-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross‑platform apps with crisp UX and robust performance.' },
    { icon: Cpu, title: 'AI & Data', desc: 'LLM integrations, data pipelines, analytics dashboards and ML ops.' },
    { icon: Rocket, title: 'Product Acceleration', desc: 'MVPs in weeks, roadmap ownership, and continuous iteration.' },
    { icon: Cloud, title: 'Cloud Migration', desc: 'Replatforming, microservices, containerization and serverless.' },
    { icon: Shield, title: 'Security', desc: 'Pentests, SAST/DAST, secrets management and zero-trust patterns.' },
    { icon: Code2, title: 'Web Engineering', desc: 'React, Next.js, Node, Python, Go — optimized for speed and SEO.' },
  ]
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-1 transition-all">
              <c.icon className="w-6 h-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Product() {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Product Spotlight</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border bg-gradient-to-br from-indigo-50 to-cyan-50">
            <h3 className="font-semibold text-xl">Ezio Cloud Suite</h3>
            <p className="mt-2 text-gray-600">A modular toolkit to launch, monitor and scale services faster. Includes feature flags, analytics, auth, billing and admin UI out-of-the-box.</p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-700 list-disc pl-5">
              <li>Feature flags and experiments</li>
              <li>Unified observability</li>
              <li>Role-based access control</li>
              <li>Usage-based billing</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="aspect-video rounded-2xl border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop" alt="Product preview" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Team() {
  const people = Array.from({ length: 6 }).map((_, i) => ({
    name: `Alex Johnson ${i+1}`,
    role: ['Frontend', 'Backend', 'Designer', 'PM', 'DevOps', 'AI Engineer'][i],
    img: `https://i.pravatar.cc/300?img=${i+10}`,
  }))
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Team</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border bg-white">
              <img src={p.img} alt={p.name} className="w-20 h-20 rounded-xl object-cover" />
              <h3 className="mt-4 font-semibold">{p.name}</h3>
              <p className="text-gray-600 text-sm">{p.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Blog() {
  const posts = Array.from({ length: 3 }).map((_, i) => ({
    title: `How we ship faster with quality ${i+1}`,
    excerpt: 'Principles, processes and tools that help us move quickly without breaking things.',
    img: `https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop`,
  }))
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.a key={i} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="block rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">
              <img src={p.img} alt="Blog" className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Career() {
  const roles = [
    { title: 'Senior Frontend Engineer', type: 'Remote', location: 'Anywhere' },
    { title: 'Product Designer', type: 'Hybrid', location: 'Bengaluru' },
    { title: 'DevOps Engineer', type: 'Remote', location: 'Anywhere' },
  ]
  return (
    <section id="career" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Career</h2>
        <div className="mt-8 grid gap-4">
          {roles.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-5 rounded-2xl border bg-white flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.type} • {r.location}</p>
              </div>
              <a href="#contact" className="px-4 py-2 rounded-full bg-black text-white text-sm font-semibold">Apply</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <motion.form initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border bg-slate-50 grid gap-4">
            <input className="px-4 py-3 rounded-xl border" placeholder="Full name" />
            <input className="px-4 py-3 rounded-xl border" placeholder="Email" />
            <input className="px-4 py-3 rounded-xl border" placeholder="Company" />
            <textarea className="px-4 py-3 rounded-xl border" rows={4} placeholder="Tell us about your project" />
            <button className="px-5 py-3 rounded-full bg-black text-white font-semibold w-fit">Send</button>
          </motion.form>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border bg-white">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5" /><span>hello@ezioinfotech.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 mt-3">
              <Phone className="w-5 h-5" /><span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 mt-3">
              <MapPin className="w-5 h-5" /><span>Bengaluru, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
