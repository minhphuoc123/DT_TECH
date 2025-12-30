import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import Stagger from "@/components/common/Stagger";
import LogoCard from "@/components/common/LogoCard";
import type { LogoItem } from "@/types/clients";

type Props = {
    title: string;
    items: LogoItem[];
};

export default function LogoGrid({ title, items }: Props) {
    return (
        <section className="bg-white">
            <Container className="pb-10 md:pb-14">
                <Reveal variant="up">
                    <h2 className="text-2xl font-extrabold" style={{ color: "var(--dt-navy)" }}>
                        {title}
                    </h2>
                </Reveal>

                <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-15" variant="up" step={80} startDelay={60}>
                    {items.map((it) => (
                        <LogoCard key={it.name} data={it}/>
                    ))}
                </Stagger>
            </Container>
        </section>
    );
}
