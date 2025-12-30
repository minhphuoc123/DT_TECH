import Image from "next/image";
import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import type { HomeOrgChartData } from "@/types/home";

type Props = { data: HomeOrgChartData };

export default function OrgChart({ data }: Props) {
    return (
        <section className="bg-white">
            <Container className="py-10 md:py-14">
                <Reveal variant="up">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                {data.title}
                            </h2>
                            <p className="mt-2 text-sm opacity-80" style={{ color: "var(--dt-navy)" }}>
                                {data.subtitle}
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal variant="up" delay={140}>
                    <div className="mt-6 overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: "rgba(25,36,52,0.10)" }}>
                        <div className="relative h-[260px] w-full md:h-[340px]">
                            <Image src={data.imageSrc} alt={data.imageAlt} fill className="object-contain bg-white p-6" />
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
