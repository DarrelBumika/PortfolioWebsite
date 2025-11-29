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
            <div className="flex flex-col">
                <h3 className="text-8xl font-display font-normal text-foreground">
                    ASHILPA.DARREL@GMAIL.COM
                </h3>
                <div className="w-full flex justify-between">
                    <ExternalLink
                        title="GITHUB"
                        url="https://www.github.com/darrelbumika/"/>
                    <ExternalLink
                        title="LINKEDIN"
                        url="https://www.linkedin.com/in/ashilpadarrel/"/>
                    <ExternalLink
                        title="WEBSITE"
                        url="https://ashilpadarrelbumika.vercel.app/"/>
                </div>
            </div>
        </section>
    )
}