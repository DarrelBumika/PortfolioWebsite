import { ExternalLink } from "@/components/ui";

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full min-h-screen flex flex-col justify-center items-center gap-8"
        >
            <h2 className="font-display font-normal text-4xl text-foreground">
                IV. CONTACT
            </h2>
            <div className="flex gap-16">
                <ExternalLink title="GITHUB" url="https://www.github.com/" />
                <ExternalLink title="GITHUB" url="https://www.github.com/" />
                <ExternalLink title="GITHUB" url="https://www.github.com/" />
            </div>
        </section>
    )
}