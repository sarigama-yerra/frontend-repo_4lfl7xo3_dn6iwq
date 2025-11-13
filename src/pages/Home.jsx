import Hero from '../components/Hero'
import { About, Services, Product, Team, Blog, Career, Contact } from '../components/Sections'

export default function Home(){
  return (
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
  )
}
