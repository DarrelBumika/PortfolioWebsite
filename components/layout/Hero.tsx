import { NAME } from "@/constant";

export default function Hero() {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex flex-col justify-center items-center gap-8"
        >
            <h1 className="font-bold text-foreground mb-4 font-display text-center text-9xl">
                {NAME.FIRST.toUpperCase()} <br />
                {NAME.MIDDLE.toUpperCase()} <br />
                {NAME.LAST.toUpperCase()}
            </h1>
            <p className="text-base text-foreground max-w-96 text-center font-sans">
                I am a <span className="font-bold">full-stack software developer</span> and an <span className="font-bold">AI/ML enthusiast</span>.
            </p>
        </section>
    )
}