"use client";

import Link from "next/link";
import { qualityPolicyContent as c } from "@/content/qualityPolicy";

import Reveal from "@/components/common/Reveal";
import Stagger from "@/components/common/Stagger";

import GlowBackdrop from "@/components/common/GlowBackdrop";

function SectionTitle({
    eyebrow,
    title,
    desc,
    id,
}: {
    eyebrow?: string;
    title: string;
    desc?: string;
    id?: string;
}) {
    return (
        <Reveal variant="up" className="scroll-mt-28" >
            <div id={id}>
                {eyebrow ? (
                    <p className="text-sm font-semibold tracking-wide text-neutral-500">{eyebrow}</p>
                ) : null}
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--dt-navy)] md:text-3xl">
                    {title}
                </h2>
                {desc ? <p className="mt-3 max-w-3xl text-neutral-600">{desc}</p> : null}
            </div>
        </Reveal>
    );
}

function Card({
    title,
    desc,
    badge,
}: {
    title: string;
    desc: string;
    badge?: string;
}) {
    return (
        <div
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            style={{ borderColor: "rgba(25,36,52,0.12)" }}
        >
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-[var(--dt-navy)]">{title}</h3>
                {badge ? (
                    <span
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                        style={{ backgroundColor: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                    >
                        {badge}
                    </span>
                ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
        </div>
    );
}

export default function QualityPolicyView() {
    return (
        <main className="bg-[var(--dt-bg)]">
            {/* HERO */}
            <section className="relative overflow-hidden border-b">
                
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <div className="max-w-3xl">
                        <Reveal variant="fade">
                            <p className="text-sm font-semibold text-neutral-500">{c.hero.brand}</p>
                        </Reveal>

                        <Reveal variant="up" delay={60}>
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--dt-navy)] md:text-5xl">
                                {c.hero.title}
                            </h1>
                        </Reveal>

                        <Reveal variant="up" delay={120}>
                            <p className="mt-5 text-neutral-600 md:text-lg">{c.hero.desc}</p>
                        </Reveal>

                        {/* CTA */}
                        <Stagger
                            className="mt-8 flex flex-wrap gap-3"
                            variant="up"
                            startDelay={180}
                            step={90}
                        >
                            <Link
                                href={c.hero.primaryCta.href}
                                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                                style={{ backgroundColor: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                            >
                                {c.hero.primaryCta.label}
                            </Link>

                            <a
                                href={c.hero.secondaryCta.href}
                                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:bg-[var(--dt-muted)]"
                                style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                            >
                                {c.hero.secondaryCta.label}
                            </a>
                        </Stagger>

                        {/* Anchor pills */}
                        <Stagger
                            className="mt-10 flex flex-wrap gap-3 text-sm"
                            variant="fade"
                            startDelay={220}
                            step={60}
                        >
                            {c.hero.anchors.map((a) => (
                                <a
                                    key={a.href}
                                    href={a.href}
                                    className="rounded-full px-4 py-2 font-medium transition hover:opacity-90"
                                    style={{ backgroundColor: "var(--dt-muted)", color: "var(--dt-navy)" }}
                                >
                                    {a.label}
                                </a>
                            ))}
                        </Stagger>
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div
                        className="absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
                        style={{ backgroundColor: "rgba(253,202,2,0.18)" }}
                    />
                    <div
                        className="absolute -right-24 top-24 h-72 w-72 rounded-full blur-3xl"
                        style={{ backgroundColor: "rgba(25,36,52,0.10)" }}
                    />
                </div>
            </section>

            {/* CAM KẾT */}
            <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                <SectionTitle
                    id="cam-ket"
                    eyebrow={c.commitments.eyebrow}
                    title={c.commitments.title}
                    desc={c.commitments.desc}
                />

                <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" variant="up">
                    {c.commitments.items.map((it) => (
                        <Card key={it.title} title={it.title} desc={it.desc} />
                    ))}
                </Stagger>
            </section>

            {/* MỤC TIÊU */}
            <section className="bg-[var(--dt-muted)]">
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <SectionTitle
                        id="muc-tieu"
                        eyebrow={c.objectives.eyebrow}
                        title={c.objectives.title}
                        desc={c.objectives.desc}
                    />

                    <Stagger className="mt-10 grid gap-4 md:grid-cols-2" variant="up">
                        {c.objectives.items.map((o) => (
                            <Card key={o.kpi} title={o.kpi} desc={o.val} />
                        ))}
                    </Stagger>
                </div>
            </section>

            {/* PHẠM VI + GIÁ TRỊ */}
            <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                <SectionTitle
                    id="pham-vi"
                    eyebrow={c.scope.eyebrow}
                    title={c.scope.title}
                    desc={c.scope.desc}
                />

                <div className="mt-10 grid gap-6">
                    <Reveal variant="up">
                        <div
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                            style={{ borderColor: "rgba(25,36,52,0.12)" }}
                        >
                            <h3 className="text-base font-semibold text-[var(--dt-navy)]">Lĩnh vực áp dụng</h3>
                            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                                {c.scope.fields.map((s) => (
                                    <li key={s} className="flex gap-3">
                                        <span
                                            className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full"
                                            style={{ backgroundColor: "var(--dt-yellow)" }}
                                        />
                                        <span>{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal variant="up" delay={80}>
                        <div
                            className="rounded-2xl border bg-white p-6 shadow-sm lg:col-span-2"
                            style={{ borderColor: "rgba(25,36,52,0.12)" }}
                        >
                            <h3 className="text-base font-semibold text-[var(--dt-navy)]">
                                {c.scope.culture.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.scope.culture.desc}</p>

                            <Stagger className="mt-6 grid gap-3 md:grid-cols-2" variant="up">
                                {c.scope.culture.values.map((v) => (
                                    <div
                                        key={v.key}
                                        className="rounded-xl p-4"
                                        style={{ backgroundColor: "rgba(253,202,2,0.14)" }}
                                    >
                                        <p className="text-sm font-semibold text-[var(--dt-navy)]">{v.key}</p>
                                        <p className="mt-1 text-sm text-neutral-600">{v.desc}</p>
                                    </div>
                                ))}
                            </Stagger>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* QUY TRÌNH */}
            <section className="bg-[var(--dt-muted)]">
                <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                    <SectionTitle
                        id="quy-trinh"
                        eyebrow={c.qaFlow.eyebrow}
                        title={c.qaFlow.title}
                        desc={c.qaFlow.desc}
                    />

                    <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" variant="up">
                        {c.qaFlow.items.map((s) => (
                            <Card key={s.step} title={s.title} desc={s.desc} badge={s.step} />
                        ))}
                    </Stagger>
                </div>
            </section>

            {/* CẢI TIẾN */}
            <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
                <SectionTitle
                    id="cai-tien"
                    eyebrow={c.improvement.eyebrow}
                    title={c.improvement.title}
                    desc={c.improvement.desc}
                />

                <Stagger className="mt-10 grid gap-6 lg:grid-cols-3" variant="up">
                    {c.improvement.cards.map((card) => (
                        <Card key={card.title} title={card.title} desc={card.desc} />
                    ))}
                </Stagger>

                <Reveal variant="up" delay={80}>
                    <div
                        className="mt-12 rounded-2xl border p-6 md:p-8"
                        style={{
                            borderColor: "rgba(25,36,52,0.12)",
                            backgroundColor: "rgba(253,202,2,0.14)",
                        }}
                    >
                        <h3 className="text-lg font-semibold text-[var(--dt-navy)]">
                            {c.improvement.statementTitle}
                        </h3>
                        <p className="mt-3 text-neutral-700">{c.improvement.statement}</p>
                        <p className="mt-4 text-sm text-neutral-600">{c.improvement.thanks}</p>
                    </div>
                </Reveal>
            </section>

            {/* CTA */}
            <section className="bg-[var(--dt-bg)]">
                <div className="mx-auto max-w-6xl px-4 py-12">
                    <Reveal variant="up">
                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--dt-navy)]">{c.cta.title}</h3>
                                <p className="mt-2 text-sm text-neutral-600">{c.cta.desc}</p>
                            </div>

                            <Stagger className="flex gap-3" variant="up" startDelay={0} step={90}>
                                <Link
                                    href={c.cta.primaryBtn.href}
                                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                                    style={{ backgroundColor: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                                >
                                    {c.cta.primaryBtn.label}
                                </Link>

                                <Link
                                    href={c.cta.secondaryBtn.href}
                                    className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:bg-[var(--dt-muted)]"
                                    style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                                >
                                    {c.cta.secondaryBtn.label}
                                </Link>
                            </Stagger>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
