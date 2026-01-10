import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "@/styles/globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import FloatingContact from "@/components/common/FloatingContact";

const beVietnam = Be_Vietnam_Pro({
    subsets: ["latin", "vietnamese"],
    variable: "--font-be-vietnam",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: {
        default: "Công ty CP Thương mại và Công nghệ DT-TECH",
        template: "%s | DT-TECH",
    },
    description: "Công ty CP Thương mại và Công nghệ DT-TECH",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body
                className={`${beVietnam.variable} antialiased min-h-screen flex flex-col`}
            >
                <Header />

                <main className="flex-1">
                    {children}
                </main>
                <FloatingContact />

                <Footer />
            </body>
        </html>
    );
}
