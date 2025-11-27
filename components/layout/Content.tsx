import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import Experiences from "@/components/layout/Experiences";
import Projects from "@/components/layout/Projects";
import Contact from "@/components/layout/Contact";

export default function Content() {
    return (
        <main className="top-0">
            <Hero />
            <About />
            <Experiences />
            <Projects />
            <Contact />
        </main>
    )
}
