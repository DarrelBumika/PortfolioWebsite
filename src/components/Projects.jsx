import { useEffect, useRef } from "react";
import { useSection } from "../context/SectionContext";

import projects from "../data/projects.json"

function Projects() {

    const { setActiveSection } = useSection();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection("projects");
                }
            },
            { threshold: 0.6 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []); 
    
    return (
        <div id="projects" ref={ sectionRef } className="w-full flex flex-col justify-center items-center pt-16 md:pt-40 px-8">
            <h1 className="text-xl font-semibold mb-8">Projects</h1>
            <div className="w-full lg:w-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                {projects.map((project, index) => (
                    <a key={index} href={ project.url } target="." className="bg-gray md:w-full lg:w-[360px] h-52 md:h-[360px] rounded-lg flex items-end overflow-hidden relative border-blue border-2 group cursor-pointer">
                        <img src={ "src/assets/projects/" + project.image } className="w-full h-full object-cover object-left" />
                        <div className="h-[100px] flex flex-col bg-blue w-full p-4 gap-2 absolute group-hover:h-1/2 transition-all duration-300 ease-in-out">
                            <h1 className="text-white text-md md:text-xl font-bold ml-2">{ project.title }</h1>
                            <div className="flex flex-wrap gap-2 overflow-hidden">
                                {project.categories.map((category, index) => (
                                    <p key={ index } className="text-xs py-2 px-4 font-semibold bg-white/10 rounded-full text-white">{ category }</p>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <p className="mt-4 md:mt-10">More on <a href="https://github.com/DarrelBumika?tab=repositories" target="." className="text-blue font-semibold underline">GitHub</a></p>
        </div>
    );
}

export default Projects;