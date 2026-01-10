"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalize(path: string) {
    if (!path) return "/";
    // usePathname() không có query/hash, nhưng normalize
    const p = path.split("?")[0].split("#")[0];
    // bỏ dấu / ở cuối, trừ root
    return p !== "/" ? p.replace(/\/+$/, "") : "/";
}

function isActive(pathname: string, href: string) {
    const p = normalize(pathname);
    const h = normalize(href);

    // Trang chủ: chỉ active đúng "/"
    if (h === "/") return p === "/";

    // Active cả section: /dich-vu và /dich-vu/abc
    return p === h || p.startsWith(h + "/");
}

export default function NavLink({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    const pathname = usePathname() || "/";
    const active = isActive(pathname, href);

    return (
        <Link
            href={href}
            onClick={onClick}
            className="relative text-lg font-bold transition-opacity hover:opacity-85"
            style={{ color: "var(--dt-navy)" }}
            aria-current={active ? "page" : undefined}
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
