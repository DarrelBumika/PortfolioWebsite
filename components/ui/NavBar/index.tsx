'use client'

import {useEffect, useState} from "react";
import { MENUS } from "@/constant";
import Link from "next/link";

export default function NavBar() {
    const [activeMenu, setActiveMenu] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            MENUS.forEach((menu) => {
                const section = document.getElementById(menu.slug);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveMenu(menu.slug)
                    }
                }
            });
        }

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    })

    const scrollToSection = (menuId: string) => {
        const section = document.getElementById(menuId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <nav className="bg-foreground p-2 rounded-2xl">
            <ul className="flex justify-center gap-4 font-sans font-normal text-base">
                {MENUS.map((menu) => (
                    <Link
                        key={menu.slug}
                        href={`#${menu.slug}`}
                        onClick={() => scrollToSection(menu.slug)}
                        className={`${activeMenu === menu.slug ? `text-active outline-1 outline-background rounded-lg` : `text-inactive` } hover:cursor-pointer text-background px-2 py-0.5`}
                    >
                        {menu.label}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}