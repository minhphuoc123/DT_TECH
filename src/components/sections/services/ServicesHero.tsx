import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import type { ServicesHeroData } from "@/types/services";

type Props = {
  data: ServicesHeroData;
};

export default function ServicesHero({ data }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--dt-navy)" }}
    >
      {/* Decorative gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={{
          background:
            "radial-gradient(900px 500px at 20% 20%, var(--dt-yellow), transparent 60%), radial-gradient(900px 500px at 80% 30%, #3b82f6, transparent 55%)",
        }}
      />

      <Container className="relative py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left content */}
          <Reveal variant="up">
            <div>
              <h1 className="text-3xl font-extrabold tracking-wide text-white md:text-4xl">
                {data.title}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 md:text-base md:leading-7">
                {data.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
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
                    className="rounded-md border px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ borderColor: "rgba(255,255,255,0.28)" }}
                  >
                    {data.secondaryCta.label}
                  </Link>
                )}
              </div>

              {!!data.highlights?.length && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {data.highlights.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-3 py-1 text-xs font-medium text-white/90"
                      style={{ borderColor: "rgba(255,255,255,0.18)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          {/* Right illustration */}
          <Reveal variant="up" delay={140}>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={data.illustration.src}
                  alt={data.illustration.alt}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
