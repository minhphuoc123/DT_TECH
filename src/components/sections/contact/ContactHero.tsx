import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import type { ContactHeroData } from "@/types/contact";

type Props = { data: ContactHeroData };

export default function ContactHero({ data }: Props) {
    return (
        <section className="bg-white">
            <Container className="pt-10 pb-6 md:pt-14 md:pb-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Reveal variant="up">
                        <h1 className="text-3xl font-extrabold md:text-4xl" style={{ color: "var(--dt-yellow)" }}>
                            {data.title}
                        </h1>
                    </Reveal>

                    <Reveal variant="up" delay={120}>
                        <p className="mt-3 text-sm leading-6 md:text-base md:leading-7" style={{ color: "var(--dt-navy)", opacity: 0.85 }}>
                            {data.subtitle}
                        </p>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
