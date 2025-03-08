import Header from "/src/components/Header.jsx"
import Hero from "/src/components/Hero.jsx"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { SectionProvider } from "./context/SectionContext";

function App() {

  return (
    <SectionProvider className="relative w-full h-full justify-center items-center">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </SectionProvider>
  )
}

export default App
