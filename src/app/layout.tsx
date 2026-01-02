import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "@/styles/globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";

const beVietnam = Be_Vietnam_Pro({
    subsets: ["latin", "vietnamese"],
    variable: "--font-be-vietnam",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: {
        default: "DT-TECH",
        template: "%s | DT-TECH",
    },
    description: "Công ty CP Thương mại và Công nghệ DT-TECH",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className={`${beVietnam.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
