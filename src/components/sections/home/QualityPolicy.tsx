import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import type { HomeQualityPolicyData } from "@/types/home";

type Props = { data: HomeQualityPolicyData };

export default function QualityPolicy({ data }: Props) {
    return (
        <section className="bg-white">
            <Container className="py-10 md:py-14">
                <Reveal variant="up">
                    <h2 className="text-2xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                        {data.title}
                    </h2>
                </Reveal>

                <Reveal variant="up" delay={120}>
                    <div
                        className="mt-6 overflow-hidden rounded-2xl border shadow-sm md:flex"
                        style={{ borderColor: "rgba(25,36,52,0.10)" }}
                    >
                        <div className="p-7 md:w-1/2">
                            <div className="text-base font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                {data.headline}
                            </div>
                            <p className="mt-3 text-sm leading-6 opacity-85" style={{ color: "var(--dt-navy)" }}>
                                {data.body}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href={data.primaryCta.href}
                                    className="rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                                    style={{ background: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                                >
                                    {data.primaryCta.label}
                                </Link>

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
                        </div>

                        <div className="relative min-h-[220px] bg-white md:min-h-[260px] md:w-1/2">
                            <Image src={data.imageSrc} alt={data.imageAlt} fill className="object-cover" />
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(90deg, rgba(25,36,52,0.08), transparent 60%)" }}
                            />
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
