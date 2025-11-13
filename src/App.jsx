import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Services, Product, Team, Blog, Career, Contact } from './components/Sections'

function App() {
  return (
    <div className="font-['Inter',system-ui] text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Product />
        <Team />
        <Blog />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
