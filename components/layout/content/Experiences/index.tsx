import { EXPERIENCES } from "@/constant";
import { Experience, Timeline } from "@/components/ui";

const experiences= EXPERIENCES.map(experience => (
    {
        content: (
            <Experience
                position={experience.position}
                company={experience.company}
                year={experience.year}
                arrangement={experience.arrangement}
                type={experience.type}
            />
        )
    }
))

export default function Experiences() {
    return (
        <section
            id="experiences"
            className="w-full min-h-screen flex flex-col justify-center items-center gap-16"
        >
            <h2 className="font-display font-normal text-4xl text-foreground">
                II. EXPERIENCES
            </h2>
            <Timeline
                data={experiences}
                gap={8}
            />
        </section>
    )
}