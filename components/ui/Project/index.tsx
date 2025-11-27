import { ProjectProps } from "@/types";

export default function Project(
    { title, year, techs }: ProjectProps
) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-baseline">
                <h3 className="font-display font-normal text-[64px] text-foreground leading-16">{title}</h3>
                <span className="font-sans font-normal text-4xl text-foreground">{year}</span>
            </div>
            <div className="flex gap-4">
                {techs.map((tech) => (
                    <span
                        key={tech}
                        className="font-sans font-normal text-2xl text-foreground"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}