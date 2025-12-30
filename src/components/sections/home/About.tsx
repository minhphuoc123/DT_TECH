import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import type { HomeAboutData } from "@/types/home";

type Props = { data: HomeAboutData };

export default function About({ data }: Props) {
    return (
        <section className="bg-white">
            <Container className="py-10 md:py-14">
                <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                    <div>
                        <Reveal variant="up">
                            <h2 className="text-2xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                {data.title}
                            </h2>
                        </Reveal>

                        <Reveal variant="up" delay={120}>
                            <p className="mt-3 text-sm leading-6 opacity-85" style={{ color: "var(--dt-navy)" }}>
                                {data.body}
                            </p>
                        </Reveal>

                        <Reveal variant="up" delay={220}>
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
                        </Reveal>
                    </div>

                    <Reveal variant="up" delay={160}>
                        <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: "rgba(25,36,52,0.10)" }}>
                            <div className="relative h-[240px] w-full md:h-[300px]">
                                <Image src={data.imageSrc} alt={data.imageAlt} fill className="object-cover" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
