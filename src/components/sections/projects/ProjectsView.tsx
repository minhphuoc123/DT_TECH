"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import Stagger from "@/components/common/Stagger";

import ProjectCard from "@/components/sections/projects/ProjectCard";
import { PROJECTS_PAGE } from "@/content/projects";
import type { ProjectCategory, ProjectItem } from "@/types/project";

type CategoryFilter = (typeof PROJECTS_PAGE.categories)[number];

function GlowBackdrop() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
                className="absolute -left-28 -top-28 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(253,202,2,0.20)" }}
            />
            <div
                className="absolute -right-24 top-16 h-96 w-96 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(25,36,52,0.12)" }}
            />
            <div
                className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(29,78,160,0.10)" }}
            />
        </div>
    );
}

export default function ProjectsView() {
    const c = PROJECTS_PAGE;

    const [q, setQ] = useState("");
    const [cat, setCat] = useState<CategoryFilter>("Tất cả");

    const { featured, filtered } = useMemo(() => {
        const norm = q.trim().toLowerCase();

        const byText = (p: ProjectItem) => {
            if (!norm) return true;
            const hay = [p.title, p.category].join(" ").toLowerCase();
            return hay.includes(norm);
        };

        const byCat = (p: ProjectItem) => (cat === "Tất cả" ? true : p.category === cat);

        const all = c.projects.filter((p) => byText(p) && byCat(p));
        const hot = c.projects.filter((p) => p.featured);

        return { featured: hot, filtered: all };
    }, [q, cat, c.projects]);

    const countsByCategory = useMemo(() => {
        const map = new Map<string, number>();
        for (const p of c.projects) map.set(p.category, (map.get(p.category) ?? 0) + 1);
        return map;
    }, [c.projects]);

    return (
        <main className="bg-[var(--dt-bg)]">
            {/* HERO */}
            <section className="relative overflow-hidden border-b">
                <GlowBackdrop />
                <Container className="relative py-14 md:py-20">
                    <div className="max-w-4xl">
                        <Reveal variant="fade">
                            <p className="text-sm font-semibold text-neutral-500">{c.hero.badge}</p>
                        </Reveal>

                        <Reveal variant="up" delay={70}>
                            <h1 className="mt-2 text-4xl font-black leading-tight text-[var(--dt-navy)] md:text-6xl">
                                <span style={{ color: "var(--dt-yellow)" }}>{c.hero.title}{" "}</span>
                                <span>{c.hero.subtitle}</span>
                            </h1>
                        </Reveal>

                        <Stagger className="mt-8 flex flex-wrap gap-3" variant="up" startDelay={230} step={90}>
                            <a
                                href={c.hero.primaryCta.href}
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                                style={{ backgroundColor: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                            >
                                {c.hero.primaryCta.label}
                            </a>

                            <a
                                href={c.hero.secondaryCta.href}
                                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:bg-[var(--dt-muted)]"
                                style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                            >
                                {c.hero.secondaryCta.label}
                            </a>
                        </Stagger>
                    </div>
                </Container>
            </section>

            {/* FEATURED */}
            <section id="noi-bat" className="bg-[var(--dt-muted)]">
                <Container className="py-12 md:py-16">
                    <Reveal variant="up">
                        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                            <div>
                                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--dt-navy)] md:text-3xl">
                                    {c.featuredTitle}
                                </h2>
                            </div>

                            <a
                                href="#tat-ca"
                                className="mt-3 inline-flex w-fit items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition hover:bg-white md:mt-0"
                                style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                            >
                                Xem tất cả ↓
                            </a>
                        </div>
                    </Reveal>

                    <Stagger className="mt-8 grid gap-6 lg:grid-cols-3" variant="up" step={110}>
                        {featured.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </Stagger>
                </Container>
            </section>

            {/* ALL + FILTER */}
            <section id="tat-ca" className="bg-[var(--dt-bg)]">
                <Container className="py-12 md:py-16">
                    <Reveal variant="up">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight text-[var(--dt-navy)] md:text-3xl">
                                    Tất cả dự án
                                </h2>
                            </div>

                            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
                                <div
                                    className="flex items-center gap-2 rounded-xl border bg-white px-3 py-2"
                                    style={{ borderColor: "rgba(25,36,52,0.12)" }}
                                >
                                    <span className="text-xs font-semibold text-neutral-500">Tìm</span>
                                    <input
                                        value={q}
                                        onChange={(e) => setQ(e.target.value)}
                                        placeholder="VD: VSAT, AI, Solar..."
                                        className="w-full bg-transparent text-sm outline-none md:w-64"
                                        style={{ color: "var(--dt-navy)" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <Stagger className="flex flex-wrap gap-2" variant="fade" step={50}>
                            {c.categories.map((x) => {
                                const active = x === cat;
                                const count =
                                    x === "Tất cả" ? c.projects.length : countsByCategory.get(x as ProjectCategory) ?? 0;

                                return (
                                    <button
                                        key={x}
                                        type="button"
                                        onClick={() => setCat(x)}
                                        className="rounded-full px-4 py-2 text-sm font-semibold transition"
                                        style={{
                                            background: active ? "var(--dt-yellow)" : "var(--dt-muted)",
                                            color: "var(--dt-navy)",
                                            opacity: count === 0 ? 0.5 : 1,
                                        }}
                                        disabled={count === 0}
                                        aria-pressed={active}
                                    >
                                        {x} <span className="opacity-70">({count})</span>
                                    </button>
                                );
                            })}
                        </Stagger>
                    </div>

                    <Stagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" variant="up" step={90}>
                        {filtered.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </Stagger>

                    {/* CTA */}
                    <Reveal variant="up" delay={120}>
                        <div
                            className="mt-12 rounded-2xl border p-6 md:p-8"
                            style={{ borderColor: "rgba(25,36,52,0.12)", background: "rgba(253,202,2,0.14)" }}
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--dt-navy)]">{c.cta.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-700">{c.cta.desc}</p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href={c.cta.primary.href}
                                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                                        style={{ backgroundColor: "var(--dt-navy)", color: "white" }}
                                    >
                                        {c.cta.primary.label}
                                    </Link>

                                    {c.cta.secondary ? (
                                        <Link
                                            href={c.cta.secondary.href}
                                            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:bg-white"
                                            style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                                        >
                                            {c.cta.secondary.label}
                                        </Link>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </main>
    );
}
