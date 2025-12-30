import Container from "@/components/layout/Container";
import Stagger from "@/components/common/Stagger";
import type { HomeStatsData } from "@/types/home";

type Props = { data: HomeStatsData };

export default function Stats({ data }: Props) {
    return (
        <section className="bg-white">
            <Container className="pb-10 md:pb-14">
                <Stagger className="grid gap-3 sm:grid-cols-2 md:grid-cols-4" variant="up" step={90}>
                    {data.items.map((s) => (
                        <div
                            key={s.label}
                            className="rounded-2xl border bg-white p-5 shadow-sm"
                            style={{ borderColor: "rgba(25,36,52,0.10)" }}
                        >
                            <div className="text-xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                {s.k}
                            </div>
                            <div className="mt-1 text-sm opacity-80" style={{ color: "var(--dt-navy)" }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </Stagger>
            </Container>
        </section>
    );
}
