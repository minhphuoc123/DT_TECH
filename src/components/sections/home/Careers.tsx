import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import Stagger from "@/components/common/Stagger";
import type { HomeCareersData } from "@/types/home";

type Props = { data: HomeCareersData };

export default function Careers({ data }: Props) {
    return (
        <section className="bg-white">
            <Container className="py-10 md:py-14">
                <Reveal variant="up">
                    <div>
                        <h2 className="text-2xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                            {data.title}
                        </h2>
                        {data.subtitle && (
                            <p className="mt-2 text-sm opacity-80" style={{ color: "var(--dt-navy)" }}>
                                {data.subtitle}
                            </p>
                        )}
                    </div>
                </Reveal>

                <Stagger className="mt-6 grid gap-4 md:grid-cols-2" variant="left" step={120} startDelay={60}>
                    {data.jobs.map((j) => (
                        <div
                            key={j.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                            style={{ borderColor: "rgba(25,36,52,0.10)" }}
                        >
                            <div className="text-base font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                {j.title}
                            </div>

                            <div className="mt-4 space-y-3 text-sm" style={{ color: "var(--dt-navy)" }}>
                                <div>
                                    <div className="text-xs font-bold opacity-70">Mô tả</div>
                                    <div className="opacity-85">{j.desc}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold opacity-70">Yêu cầu</div>
                                    <div className="opacity-85">{j.req}</div>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={j.primaryCta.href}
                                    className="rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                                    style={{ background: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                                >
                                    {j.primaryCta.label}
                                </Link>

                                {j.secondaryCta && (
                                    <Link
                                        href={j.secondaryCta.href}
                                        className="rounded-md border px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                                        style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                                    >
                                        {j.secondaryCta.label}
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </Stagger>
            </Container>
        </section>
    );
}
