import { useSection } from "../context/SectionContext";

function Sidebar() {

    const { activeSection } = useSection();

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

    return (
        <div id="sidebar" className="hidden w-0 fixed top-0 left-0 z-50 h-screen bg-blue p-8">
            <div id="back_button" className="flex items-center">
                <img src="/assets/icon/back.png" alt="" className="w-10 h-10 rounded-full" /> 
                <h1 className="text-white font-bold">Menu</h1>
            </div>
            <div className="flex flex-col mt-8 gap-2 text-white">
                {menus.map((menu, index) => (
                    <a key={ index } href={ "#" + menu.id }  className={ "w-full py-2 px-4 rounded-lg font-bold " + ( activeSection == menu.id ? "bg-black/20" : "") }>{ menu.name }</a>
                ))}
            </div>
        </div>
    )
}

export default Sidebar