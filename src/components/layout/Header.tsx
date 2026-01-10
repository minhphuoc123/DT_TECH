"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "@/components/layout/NavLink";
import BrandLogo from "@/components/brand/BrandLogo";
import ThemeToggle from "@/components/common/ThemeToggle";


const NAV = [
    { href: "/", label: "Trang chủ" },
    { href: "/dich-vu", label: "Dịch vụ" },
    { href: "/du-an", label: "Dự án" },
    { href: "/khach-hang-doi-tac", label: "Khách hàng & Đối tác" },
    { href: "/chinh-sach-chat-luong", label: "Chính sách chất lượng" },
    { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50">
            {/* Brand strip */}
            <div className="h-1 w-full" style={{ background: "var(--dt-yellow)" }} />

            <div
                className="border-b bg-white/90 backdrop-blur"
                style={{ borderColor: "rgba(25,36,52,0.12)" }}
            >
                <div className="flex h-20 items-center justify-between px-3">
                    <Link href="/" className="flex items-center gap-3">
                        <BrandLogo height={80} />
                        <div className="leading-tight">
                            <div className="text-sm font-semibold" style={{ color: "var(--dt-navy)" }}>
                                DT-TECH
                            </div>
                            <div className="text-[11px] opacity-80" style={{ color: "var(--dt-navy)" }}>
                                Công nghệ thông minh – Giải pháp bền vững
                            </div>
                        </div>
                    </Link>



                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-6 md:flex">
                        {NAV.map((item) => (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* CTA desktop
                        <Link
                            href="/lien-he"
                            className="hidden rounded-md px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90 md:inline-flex"
                            style={{ background: "var(--dt-navy)", color: "white" }}
                        >
                            Nhận tư vấn
                        </Link> */}

                        {/* Mobile toggle */}
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm md:hidden"
                            style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                            aria-label="Mở menu"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile overlay */}
            {open && (
                <div className="fixed inset-0 z-[60] md:hidden">
                    <div
                        className="absolute inset-0"
                        style={{ background: "rgba(0,0,0,0.35)" }}
                        onClick={() => setOpen(false)}
                    />

                    <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl">
                        <div
                            className="flex items-center justify-between border-b px-4 py-4"
                            style={{ borderColor: "rgba(25,36,52,0.12)" }}
                        >
                            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                                <BrandLogo height={30} />
                            </Link>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-md border px-3 py-2 text-sm"
                                style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                                aria-label="Đóng menu"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="px-4 py-4">
                            <div className="flex flex-col gap-4">
                                {NAV.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-md px-3 py-2 text-sm font-medium"
                                        style={{
                                            color: "var(--dt-navy)",
                                            background: "rgba(25,36,52,0.04)",
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            
                            <Link
                                href="/lien-he"
                                onClick={() => setOpen(false)}
                                className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold"
                                style={{ background: "var(--dt-navy)", color: "white" }}
                            >
                                Nhận tư vấn
                            </Link>

                            <div className="mt-6 text-xs opacity-70" style={{ color: "var(--dt-navy)" }}>
                                © {new Date().getFullYear()} DT-TECH
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
