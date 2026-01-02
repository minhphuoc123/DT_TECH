"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm font-semibold transition hover:opacity-90"
            style={{
                borderColor: "rgba(25,36,52,0.18)",
                color: "var(--dt-navy)",
                background: "var(--dt-muted)",
            }}
            aria-label="Đổi nền sáng/tối"
            title="Đổi nền sáng/tối"
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    );
}
