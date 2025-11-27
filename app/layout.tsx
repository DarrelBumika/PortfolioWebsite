import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Darrell",
    description: "Darrell's Portfolio Website",
};

export default function RootLayout({ children } : Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="w-full min-h-screen flex flex-col items-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
            >
                { children }
            </body>
        </html>
    );
}
