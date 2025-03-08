import { useEffect, useRef } from "react";
import { useSection } from "../context/SectionContext";

function Contact() {

    const { setActiveSection } = useSection();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection("contact");
                }
            },
            { threshold: 0.6 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="contact" ref={ sectionRef } className="w-full flex flex-col md:flex-row justify-center items-center gap-20 py-16 md:py-40 px-8">
            <img src="/assets/img/test.png" alt="" className="hidden xl:flex" />
            <div className="w-full md:w-auto flex flex-col justify-center">
                <h1 className="text-sm md:text-xl font-semibold md:mb-2">Contact Me</h1>
                <h1 className="text-blue font-extrabold text-xl md:text-5xl mb-2">GET IN TOUCH WITH ME</h1>
                <form className="flex flex-col gap-2" action="mailto:ashilpa.darrel@gmail.com" method="post" encType="text/plain">
                    <input type="text" placeholder="Name" className="w-full h-12 border-2 border-gray-300 rounded-md p-2 mb-2" />
                    <input type="email" placeholder="Email" className="w-full h-12 border-2 border-gray-300 rounded-md p-2 mb-2" />
                    <textarea placeholder="Message" className="w-full h-32 border-2 border-gray-300 rounded-md p-2 mb-2"></textarea>
                    <button className="w-auto h-12 bg-blue text-white text-xl font-semibold rounded-md hover:bg-blue/90">SEND MESSAGE</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;