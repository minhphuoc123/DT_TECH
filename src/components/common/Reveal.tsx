"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    variant?: "fade" | "up" | "down" | "left" | "right";
    delay?: number;     // ms
    duration?: number;  // ms
    threshold?: number; // 0..1
    once?: boolean;
    className?: string;
};

export default function Reveal({
    children,
    variant = "up",
    delay = 0,
    duration = 650,
    threshold = 0.15,
    once = true,
    className = "",
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect reduce motion
        const reduceMotion =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion) {
            setShown(true);
            return;
        }

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    if (once) obs.disconnect();
                } else if (!once) {
                    setShown(false);
                }
            },
            { threshold }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold, once]);

    const hiddenClass = (() => {
        switch (variant) {
            case "fade":
                return "opacity-0";
            case "down":
                return "opacity-0 -translate-y-4";
            case "left":
                return "opacity-0 translate-x-4";
            case "right":
                return "opacity-0 -translate-x-4";
            case "up":
            default:
                return "opacity-0 translate-y-4";
        }
    })();

    return (
        <div
            ref={ref}
            className={[
                "will-change-transform will-change-opacity transition-all ease-out",
                shown ? "opacity-100 translate-x-0 translate-y-0" : hiddenClass,
                className,
            ].join(" ")}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
