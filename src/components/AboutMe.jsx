import { useEffect, useRef } from "react";
import { useSection } from "../context/SectionContext";

import skills from "../data/skills.json";
import certifications from "../data/certifications.json";

function AboutMe() {

    const { setActiveSection } = useSection();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection("about");
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="about" ref={ sectionRef } className="w-full bg-blue flex justify-center items-center py-16 md:py-40 px-8">
            <div className="w-full md:w-4/5 flex flex-col justify-center items-center gap-20">
                <div className="w-full md:w-4/5 flex flex-col justify-center items-center">
                    <h1 className="text-sm md:text-base lg:text-xl font-semibold">About Me</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-4 md:mb-8">I LOVE TO CODE.</h1>
                    <p className="text-center text-white text-sm md:text-lg lg:text-xl font-semibold mb-4">
                        Hello There, My Name is Ashilpa Darrel Bumika, or just Darrel :) 
                        I am currently studying in Universitas Negeri Yogyakarta, majoring IT degree. 
                        Like i said before, i really love to code, i have learn many programming languages 
                        such as Java, C++, Python, PHP, JavaScript, etc.
                        Then, software development is my passion now. I like to make something that other people can use.
                        I also have interest in Data and Machine Learning field.
                        Let’s connect with me at GitHub and LinkedIn!
                    </p>
                    <div className="flex gap-2">
                        <a href="https://www.github.com/darrelbumika/" target="." className="flex items-center gap-4 bg-black rounded-2xl py-4 px-8 md:px-12 text-xl font-semibold text-white hover:bg-black/90 ease-in-out transition-all">
                            <h1 className="hidden md:flex text-base lg:text-xl">Darrel at GitHub</h1>
                            <h1 className="md:hidden text-base lg:text-xl">Darrel</h1>
                            <img src="src/assets/img/github.png" alt="github" className="w-8 h-8"/>
                        </a>
                        <a href="https://www.linkedin.com/in/ashilpadarrel/" target="." className="flex items-center gap-4 bg-black rounded-2xl py-4 px-8 md:px-12 text-xl font-semibold text-white hover:bg-black/90 ease-in-out transition-all">
                            <h1 className="hidden md:flex text-base lg:text-xl">Darrel at LinkedIn</h1>
                            <h1 className="md:hidden text-base lg:text-xl">Darrel</h1>
                            <img src="src/assets/img/linkedin.png" alt="github" className="w-8 h-8"/>
                        </a>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 justify-center gap-8 md:gap-32">
                    <div className="w-4/5 md:w-auto flex flex-col justify-between">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl lg:leading-[64px] font-extrabold text-white mb-4 md:mb-8">I LOVE TO PLAY AND WATCH.</h1>
                        <p className="text-white text-sm md:text-lg lg:text-xl font-semibold mb-4">
                        Let’s talk about my hobbies! I really love playing video
                        games, especially story-driven ones. Playing board
                        games is also one of my comfort hobbies.
                        I also enjoy watching movies and series—sci-fi is my
                        favorite genre. Let’s connect on Letterboxd!
                        </p>
                        <a  href="https://www.letterboxd.com/vexxz/" target="." className="flex gap-2">
                            <div className="flex items-center gap-4 bg-black rounded-2xl py-4 px-8 md:px-12 text-xl font-semibold text-white hover:bg-black/90 ease-in-out transition-all">
                                <h1 className="hidden xl:flex text-base lg:text-xl">Darrel at Letterboxd</h1>
                                <h1 className="xl:hidden text-base lg:text-xl">Darrel</h1>
                                <img src="src/assets/img/letterboxd.png" alt="github" className="w-8 h-8"/>
                            </div>
                        </a>
                    </div>
                    <div className="w-4/5 md:w-auto justify-self-end flex flex-col items-end justify-between">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl lg:leading-[64px] text-end font-extrabold text-white mb-4 md:mb-8">5 YEARS OF DESIGNING.</h1>
                        <p className="text-end text-white text-sm md:text-lg lg:text-xl font-semibold mb-4">
                        I started freelancing as a logo designer on  
                        Fiverr when I was in high school. 
                        I completed 130+ orders from 24 different 
                        countries around the world. 
                        Now, I’m taking it one step further by 
                        establishing my studio, Eunoia.
                        </p>
                        <a href="https://www.fiverr.com/ashilpadarrel/" target="blank" className="flex gap-2">
                            <div className="flex items-center gap-4 bg-black rounded-2xl py-4 px-8 sm:px-12 text-xl font-semibold text-white hover:bg-black/90 ease-in-out transition-all">
                                <h1 className="hidden xl:flex text-base lg:text-xl">Eunoia at Fiverr</h1>
                                <h1 className="xl:hidden text-base lg:text-xl">Eunoia</h1>
                                <img src="src/assets/img/fiverr.png" alt="github" className="w-8 h-8"/>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-center items-center" >
                    <h1 className="text-sm md:text-xl font-semibold mb-4 md:mb-8 text-white">Skills & Certifications</h1>
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="w-full xl:w-auto grid grid-cols-center-3 lg:grid-cols-center-4 xl:grid-cols-center-5 gap-2 md:gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex bg-gray rounded-lg items-center overflow-hidden hover:scale-105 ease-in-out transition-all">
                                    <div className="hidden md:flex bg-black p-2">
                                        <img src={ "src/assets/icon/" + skill + ".png" } alt={ skill } className="w-10 h-10" />
                                    </div>
                                    <div className="flex-1 juscify-center items-center mx-4 my-2 md:mx-6">
                                        <h1 className="flex justify-center text-sm md:text-base font-semibold">{ skill }</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full xl:w-auto grid md:grid-cols-2 2xl:grid-cols-center-3 gap-2 sm:gap-4 mt-8 ">
                            {certifications.map((certification, index) => (
                                <a key={ index } href={ certification.url } target="." className="bg-gray w-full xl:w-[360px] h-52 rounded-lg flex items-end overflow-hidden relative hover:scale-105 ease-in-out transition-all">
                                    <img src={ "src/assets/certif/" + certification.image } className="w-full h-full object-cover object-top" />
                                    <div className="bg-black w-full flex items-center p-5 absolute">
                                        <p className="text-white text-base font-bold line-clamp-1">{ certification.title }</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;