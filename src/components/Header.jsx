import { useSection } from "../context/SectionContext";
import { useRef, useEffect, useState } from "react";

function Header() {

    const menus = [
        {
            name: "Home",
            id: "home"
        },
        {
            name: "About Me",
            id: "about"
        },
        {
            name: "Projects",
            id: "projects"
        },
        {
            name: "Contact Me",
            id: "contact"
        }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const openSidebar = () => setIsOpen(!isOpen);  
    const closeSidebar = () => setIsOpen(false);

    const { activeSection } = useSection();

    return (
        <div className="sticky top-0 z-40">
            <div className="flex justify-center items-center bg-gray/50 backdrop-blur-lg py-2 md:py-6">
                <div className="w-full md:hidden flex items-center px-8">
                    <img src="/assets/icon/menu.png" className="h-8 left-0" onClick={ openSidebar } />
                    <h1 className="text-black font-bold absolute left-1/2 -translate-x-1/2">A. <span className="text-blue">DARREL</span> B.</h1>
                </div>
                <div className="hidden md:flex gap-16 text-lg text-black">
                    {menus.map((menu, index) => (
                        <a key={ index } href={ "#" + menu.id } className={ activeSection == menu.id ? "text-blue font-extrabold" : "hover:text-black/70" }>{ menu.name }</a>
                    ))}
                </div>
            </div>

            <div id="sidebar" className={ `md:hidden fixed top-0 left-0 z-50 h-screen bg-blue p-4 ease-in-out transition-all duration-200 ${isOpen ? "w-5/6" : "hidden w-0"}` }>
                <div className="flex items-center" onClick={ closeSidebar }>
                    <img src="/assets/icon/back.png" alt="" className="h-8 rounded-full" /> 
                    <h1 className="text-white font-bold">Menu</h1>
                </div>
                <div className="flex flex-col mt-8 gap-2 text-white">
                    {menus.map((menu, index) => (
                        <a key={ index } href={ "#" + menu.id } className={ `w-full py-2 px-4 rounded-lg font-bold ${ activeSection == menu.id ? "bg-black/20" : ""}` } onClick={ closeSidebar }>{ menu.name }</a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;