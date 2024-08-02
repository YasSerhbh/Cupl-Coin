import './App.css'
import About from './components/About'
import Community from './components/Community'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Community />
        <Footer />
        <Analytics />
    </div>
  )
}

export default App