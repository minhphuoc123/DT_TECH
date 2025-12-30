import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import type { ServiceStatData } from "@/types/services";

type Props = {
    data: ServiceStatData;
    reverse?: boolean;
};

export default function ServiceStat({ data, reverse = false }: Props) {
    return (
        <section className="bg-white">
            <Container className="py-6 md:py-8">
                <div
                    className={`grid overflow-hidden rounded-2xl border shadow-sm md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""
                        }`}
                    style={{ borderColor: "rgba(25,36,52,0.10)" }}
                >
                    {/* Text */}
                    <div className="bg-white p-7">
                        <Reveal variant="up">
                            <div>
                                <h2 className="text-xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                    {data.title}
                                </h2>

                                {data.subtitle && (
                                    <p className="mt-2 text-sm font-semibold opacity-80" style={{ color: "var(--dt-navy)" }}>
                                        {data.subtitle}
                                    </p>
                                )}

                                <p className="mt-3 text-sm leading-6 opacity-85" style={{ color: "var(--dt-navy)" }}>
                                    {data.description}
                                </p>
                            </div>
                        </Reveal>

                        {!!data.bullets?.length && (
                            <Reveal variant="up" delay={120}>
                                <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--dt-navy)" }}>
                                    {data.bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="mt-[6px] h-2 w-2 rounded-full" style={{ background: "var(--dt-yellow)" }} />
                                            <span className="opacity-90">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        )}

                        {(data.primaryCta || data.secondaryCta) && (
                            <Reveal variant="up" delay={200}>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {data.primaryCta && (
                                        <Link
                                            href={data.primaryCta.href}
                                            className="rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                                            style={{ background: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                                        >
                                            {data.primaryCta.label}
                                        </Link>
                                    )}

                                    {data.secondaryCta && (
                                        <Link
                                            href={data.secondaryCta.href}
                                            className="rounded-md border px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                                            style={{ borderColor: "rgba(25,36,52,0.18)", color: "var(--dt-navy)" }}
                                        >
                                            {data.secondaryCta.label}
                                        </Link>
                                    )}
                                </div>
                            </Reveal>
                        )}
                    </div>

                    {/* Image */}
                    <div className="relative min-h-[220px] bg-white md:min-h-[320px]">
                        <Image src={data.image.src} alt={data.image.alt} fill className="object-cover" />
                        <div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.22))" }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
