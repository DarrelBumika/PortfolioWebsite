import { EXPERIENCES } from "@/constant";
import { Experience } from "@/components/ui";

export default function Experiences() {
    return (
        <section
            id="experiences"
            className="w-full min-h-screen flex flex-col justify-center items-center gap-16"
        >
            <h2 className="font-display font-normal text-4xl text-foreground">
                II. EXPERIENCES
            </h2>
            <div className="flex flex-col gap-8">
                {EXPERIENCES.map((experience) => (
                    <Experience
                        key={experience.position + experience.company}
                        position={experience.position}
                        company={experience.company}
                        year={experience.year}
                        arrangement={experience.arrangement}
                        type={experience.type}
                    />
                ))}
            </div>
        </section>
    )
}