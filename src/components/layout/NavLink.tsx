"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative text-sm font-medium transition-opacity hover:opacity-85"
            style={{ color: "var(--dt-navy)" }}
        >
            {children}
            <span
                className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full transition-opacity"
                style={{
                    background: "var(--dt-yellow)",
                    opacity: active ? 1 : 0,
                }}
            />
        </Link>
    );
}
