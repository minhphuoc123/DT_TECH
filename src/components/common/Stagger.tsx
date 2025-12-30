"use client";

import React from "react";
import Reveal from "./Reveal";

type StaggerProps = {
    children: React.ReactNode;

    /** Hướng xuất hiện mặc định cho cả nhóm */
    variant?: "fade" | "up" | "down" | "left" | "right";

    /** Delay bắt đầu của item đầu tiên (ms) */
    startDelay?: number;

    /** Khoảng cách delay giữa các item (ms) */
    step?: number;

    /** Thời gian animation (ms) */
    duration?: number;

    /** Intersection threshold */
    threshold?: number;

    /** chạy 1 lần hay vào/ra đều chạy */
    once?: boolean;

    /** wrapper cho group */
    className?: string;

    /**
     * Nếu bạn muốn custom hướng cho từng item:
     * variants[i] sẽ override variant mặc định cho item i
     */
    variants?: Array<"fade" | "up" | "down" | "left" | "right">;
};

export default function Stagger({
    children,
    variant = "up",
    startDelay = 0,
    step = 90,
    duration = 650,
    threshold = 0.15,
    once = true,
    className = "",
    variants,
}: StaggerProps) {
    const arr = React.Children.toArray(children).filter(Boolean);

    return (
        <div className={className}>
            {arr.map((child, i) => (
                <Reveal
                    key={(child as any)?.key ?? i}
                    variant={variants?.[i] ?? variant}
                    delay={startDelay + i * step}
                    duration={duration}
                    threshold={threshold}
                    once={once}
                >
                    {child as React.ReactElement}
                </Reveal>
            ))}
        </div>
    );
}
