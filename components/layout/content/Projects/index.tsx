import { PROJECTS } from "@/constant";
import { Project } from "@/components/ui";

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full min-h-screen flex flex-col gap-16 justify-center items-center"
        >
            <h2 className="font-display font-normal text-4xl text-foreground">
                III. PROJECTS
            </h2>
            <div className="flex flex-col gap-8">
                {PROJECTS.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        year={project.year}
                        techs={project.techs}
                    />
                ))}
            </div>
        </section>
    )
}