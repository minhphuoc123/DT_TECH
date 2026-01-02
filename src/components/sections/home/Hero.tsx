import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import type { HomeHeroData } from "@/types/home";
import GlowBackdrop from "@/components/common/GlowBackdrop";

type Props = { data: HomeHeroData };

export default function Hero({ data }: Props) {
    const navy = { color: "var(--dt-navy)" };

    return (
        <section className="relative overflow-hidden bg-white">
            <GlowBackdrop/>
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                    background:
                        "radial-gradient(800px 400px at 20% 20%, var(--dt-yellow), transparent 60%), radial-gradient(900px 500px at 80% 30%, var(--dt-navy), transparent 55%)",
                }}
            />

            <Container className="relative py-10 md:py-14">
                <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
                    {/* Left */}
                    <div>
                        <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl" style={navy}>
                            {data.title}
                        </h1>

                        <p className="mt-4 max-w-xl text-sm leading-6 opacity-85" style={navy}>
                            {data.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <Link
                                href={data.primaryCta.href}
                                className="rounded-md px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                                style={{ background: "var(--dt-navy)", color: "white" }}
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

                        {!!data.chips?.length && (
                            <div className="mt-7 flex flex-wrap gap-2">
                                {data.chips.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border px-3 py-1 text-xs font-medium"
                                        style={{ borderColor: "rgba(25,36,52,0.12)", color: "var(--dt-navy)" }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                        {data.rightCard && (
                            <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: "rgba(25,36,52,0.10)" }}>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={data.rightCard.logoSrc}
                                        alt={data.rightCard.logoAlt}
                                        width={56}
                                        height={56}
                                        className="rounded-lg"
                                        style={{ height: "auto", width: "56px" }}
                                        priority
                                    />
                                    <div>
                                        <div className="text-base font-extrabold" style={navy}>
                                            {data.rightCard.companyName}
                                        </div>
                                        <div className="text-xs opacity-70" style={navy}>
                                            Giải pháp triển khai & vận hành cho doanh nghiệp
                                        </div>
                                    </div>
                                </div>

                                {!!data.rightCard.badges?.length && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {data.rightCard.badges.map((b) => (
                                            <span
                                                key={b}
                                                className="rounded-md px-2 py-1 text-xs font-semibold"
                                                style={{ background: "rgba(253,202,2,0.18)", color: "var(--dt-navy)" }}
                                            >
                                                {b}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {data.showcase && (
                            <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: "rgba(25,36,52,0.10)" }}>
                                <div className="relative h-[220px] w-full md:h-[260px]">
                                    <Image
                                        src={data.showcase.imageSrc}
                                        alt={data.showcase.imageAlt}
                                        fill
                                        className="object-cover"
                                        priority={false}
                                    />
                                </div>

                                <div className="bg-white p-4">
                                    <div className="text-sm font-semibold" style={navy}>
                                        {data.showcase.title}
                                    </div>
                                    <p className="mt-1 text-sm opacity-80" style={navy}>
                                        {data.showcase.description}
                                    </p>

                                    {data.showcase.href && (
                                        <div className="mt-3">
                                            <Link
                                                href={data.showcase.href}
                                                className="text-sm font-semibold underline underline-offset-4"
                                                style={navy}
                                            >
                                                Xem chi tiết
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
