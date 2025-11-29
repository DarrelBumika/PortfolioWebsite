'use client'

import Image from "next/image";
import logo from "../../../public/logo.svg"
import homeIcon from "../../../public/home.svg"
import darkModeIcon from "../../../public/dark_mode.svg"
import { NavBar, IconButton } from "@/components/ui";

export default function Header() {
    return (
        <header className="w-fit flex flex-col justify-center items-center gap-4 pt-4 sticky top-0">
            <Image src={logo} height={16} width={107} alt="logo"/>
            <div className="flex gap-4">
                <IconButton
                    icon={homeIcon}
                    altText="home-icon"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
                <NavBar/>
                <IconButton
                    icon={darkModeIcon}
                    altText="dark-mode-icon"
                    onClick={() => {
                        document.documentElement.classList.toggle('dark');
                    }}
                />
            </div>
        </header>
    )
}