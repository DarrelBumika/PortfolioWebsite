import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Admin",
    description: "Darrell's Portfolio Website Admin Panel",
};

export default function AdminLayout({ children } : Readonly<{
    children: ReactNode;
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