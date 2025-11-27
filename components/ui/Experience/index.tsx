import { ExperienceProps } from "@/types";

export default function Experience(
    {
        position,
        company,
        year,
        arrangement,
        type,
    }: ExperienceProps
) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-baseline">
                <h3 className="font-display font-normal text-[64px] text-foreground leading-16">{position}</h3>
                <span className="font-sans font-normal text-4xl text-foreground">at</span>
                <span className="font-sans font-semibold text-4xl text-foreground">{company}</span>
            </div>
            <div className="flex gap-4">
                <h4 className="font-sans font-normal text-2xl text-foreground">{year}</h4>
                <h4 className="font-sans font-normal text-2xl text-foreground">{arrangement}</h4>
                <h4 className="font-sans font-normal text-2xl text-foreground">{type}</h4>
            </div>
        </div>
    )
}