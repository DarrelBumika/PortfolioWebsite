import Image from "next/image";
import { LogoIcon } from "@/components/icons";
import { MENUS } from "@/constant";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col gap-8 bg-foreground p-32">
            <div className="w-full flex justify-between">
                <LogoIcon color="#FFFFFF" />
                <p className="max-w-[300px] text-background font-sans font-semibold text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur vitae elit nec pellentesque.
                    <br />
                    <br />
                    Sed in efficitur risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc elit ligula, pellentesque non scelerisque eu, feugiat eget urna.
                    <br />
                    <br />
                    Nam tincidunt pharetra sem in scelerisque.
                </p>
            </div>
            <hr className="h-0.5 bg-background" />
            <div className="w-full flex justify-between">
                <nav>
                    <ul className="flex gap-8">
                        {
                            MENUS.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-background font-sans font-semibold text-xs hover:underline hover:cursor-pointer">
                                        <Link
                                            href={`#${item.slug}`}>
                                            {item.label}
                                        </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <p className="text-background font-sans font-normal text-xs">
                    &copy;2025 by <span className="font-semibold">Ashilpa Darrrel Bumika</span>.
                </p>
            </div>
        </footer>
    );
}