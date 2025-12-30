import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import Stagger from "@/components/common/Stagger";
import type { ClientsHeroData } from "@/types/clients";

type Props = { data: ClientsHeroData };

export default function ClientsHero({ data }: Props) {
    return (
        <section className="bg-white">
            <Container className="py-10 md:py-14">
                <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
                    <div>
                        <Reveal variant="up">
                            <h1 className="text-3xl font-extrabold md:text-4xl" style={{ color: "var(--dt-navy)" }}>
                                {data.title}
                            </h1>
                        </Reveal>

                        <Reveal variant="up" delay={120}>
                            <p className="mt-3 text-sm leading-6 opacity-85 md:text-base md:leading-7" style={{ color: "var(--dt-navy)" }}>
                                {data.description}
                            </p>
                        </Reveal>

                        <Reveal variant="up" delay={220}>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={data.primaryCta.href}
                                    className="rounded-md px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                                    style={{ background: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                                >
                                    {data.primaryCta.label}
                                </Link>

                                {data.secondaryCta && (
                                    <Link
                                        href={data.secondaryCta.href}
                                        className="rounded-md border px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                                        style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                                    >
                                        {data.secondaryCta.label}
                                    </Link>
                                )}
                            </div>
                        </Reveal>
                    </div>

                    <Stagger className="grid gap-3 sm:grid-cols-2" variant="up" step={90} startDelay={80}>
                        {data.stats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-2xl border bg-white p-5 shadow-sm"
                                style={{ borderColor: "rgba(25,36,52,0.10)" }}
                            >
                                <div className="text-xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                    {s.value}
                                </div>
                                <div className="mt-1 text-sm opacity-80" style={{ color: "var(--dt-navy)" }}>
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </Stagger>
                </div>
            </Container>
        </section>
    );
}
