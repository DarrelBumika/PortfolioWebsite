import { useEffect, useRef } from "react";
import { useSection } from "../context/SectionContext";

function Hero() {

    const { setActiveSection } = useSection();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection("home");
                }
            },
            { threshold: 0.6 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="home" ref={ sectionRef } className='h-screen w-full flex justify-center items-center md:-translate-y-20'>
            <div className="flex flex-col gap-12 xl:gap-24 items-center xl:flex-row">
                <img src="/assets/img/hero.png" alt="" className="w-80 md:w-auto"/>
                <div className="flex flex-col gap-4">
                    <div className='flex flex-col font-extrabold text-3xl md:text-4xl lg:text-6xl'>
                        <h1 className="text-center xl:text-left">HELLO THERE!</h1>
                        <h1 className="text-center xl:text-left">MY NAME IS <span className="text-blue">DARREL</span></h1>
                    </div> 
                    <div className='flex flex-col text-sm md:text-xl lg:text-2xl font-tiny font-medium'>
                        <h1 className="text-center xl:text-left">I am a <span className="text-blue font-bold">Software Developer</span></h1>
                        <h1 className="text-center xl:text-left">and a <span className="text-blue font-bold">Graphic Designer</span></h1>
                    </div> 
                    <div className="flex gap-1 md:gap-4 items-center justify-center xl:justify-start">
                        <a href="https://www.linkedin.com/in/ashilpadarrel/" target="/" className="bg-blue p-3 rounded-full hover:bg-blue/90"><img src="/assets/img/linkedin.png" alt="" className="w-8 h-8" /></a>
                        <a href="https://www.github.com/darrelbumika/" target="/" className="bg-blue p-3 rounded-full hover:bg-blue/90"><img src="/assets/img/github.png" alt="" className="w-8 h-8" /></a>
                        <a href="https://www.instagram.com/aslpadarrell/" target="/" className="bg-blue p-3 rounded-full hover:bg-blue/90"><img src="/assets/img/instagram.png" alt="" className="w-8 h-8" /></a>
                        <a href="https://www.fiverr.com/ashilpadarrel/" target="/" className="bg-blue p-3 rounded-full hover:bg-blue/90"><img src="/assets/img/fiverr.png" alt="" className="w-8 h-8" /></a>
                        <a href="https://www.letterboxd.com/vexxz/" target="/" className="bg-blue p-3 rounded-full hover:bg-blue/90"><img src="/assets/img/letterboxd.png" alt="" className="w-8 h-8" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
