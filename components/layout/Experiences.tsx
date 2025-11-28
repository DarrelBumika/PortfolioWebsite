import { EXPERIENCES } from "@/constant";
import { Experience } from "@/components/ui";
import { Timeline } from "antd"

const experiences = EXPERIENCES.map((experience) => (
    {
        content: (
            <Experience
                position={experience.position}
                company={experience.company}
                year={experience.year}
                arrangement={experience.arrangement}
                type={experience.type}
            />
        ),
        icon: (
            <div className="min-w-6 h-6 bg-black rounded-full border-4 border-background" />
        )
    }
));

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
                <Timeline
                    items={experiences}
                    variant="filled"
                />
            </div>
        </section>
    )
}