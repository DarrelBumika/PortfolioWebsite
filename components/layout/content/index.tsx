import Hero from "@/components/layout/content/Hero";
import About from "@/components/layout/content/About";
import Experiences from "@/components/layout/content/Experiences";
import Projects from "@/components/layout/content/Projects";
import Contact from "@/components/layout/content/Contact";

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
