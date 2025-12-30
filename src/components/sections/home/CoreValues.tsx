import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import Stagger from "@/components/common/Stagger";
import type { HomeCoreValuesData } from "@/types/home";

type Props = { data: HomeCoreValuesData };

export default function CoreValues({ data }: Props) {
    const variants = data.staggerVariants ?? ["up", "left", "right", "up"];

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

                <Stagger className="mt-6 grid gap-4 md:grid-cols-2" step={100} startDelay={60} variant="up" variants={variants}>
                    {data.items.map((v) => (
                        <div
                            key={v.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm"
                            style={{ borderColor: "rgba(25,36,52,0.10)" }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-base font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                    {v.title}
                                </div>
                                <span className="h-2 w-10 rounded-full" style={{ background: "var(--dt-yellow)" }} />
                            </div>
                            <p className="mt-3 text-sm leading-6 opacity-85" style={{ color: "var(--dt-navy)" }}>
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </Stagger>
            </Container>
        </section>
    );
}
