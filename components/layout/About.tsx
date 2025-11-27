import Image from "next/image";
import picture from "@/public/picture.png"
import { ExternalLink } from "@/components/ui";

export default function About() {
    return (
        <section
            id="about"
            className="w-full min-h-screen flex justify-center items-center gap-8 px-4"
        >
            <Image src={picture} alt={"Profile Picture"} />
            <div className="max-w-[500px] flex flex-col gap-8">
                <h2 className="font-display font-normal text-4xl text-foreground">I. ABOUT</h2>
                <h3 className="font-display font-normal text-9xl text-foreground">I LOVE TO CODE.</h3>
                <div className="flex flex-col gap-6">
                    <p className="font-sans font-normal text-xl text-foreground">
                        I am {" "}
                        <span className="font-semibold">Ashilpa Darrel Bumika</span>, {" "}
                        undergraduate {" "}
                        <span className="font-semibold">BE (Information Technology)</span> {" "}
                        at {" "}
                        <span className="font-semibold">Universitas Negeri Yogyakarta.</span> {" "}
                        A {" "}
                        <span className="font-semibold">Fullstack Software Engineer</span> {" "}
                        and {" "}
                        <span className="font-semibold">AI/ML enthusiast.</span>
                    </p>
                    <div className="flex gap-6">
                        <ExternalLink title="GITHUB" url="https://www.github.com/" />
                        <ExternalLink title="LINKEDIN" url="https://www.linkedin.com/" />
                    </div>
                </div>
            </div>
        </section>
    )
}