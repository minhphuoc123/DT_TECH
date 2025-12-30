import ClientsHero from "@/components/sections/clients/ClientsHero";
import LogoGrid from "@/components/sections/clients/LogoGrid";
import Container from "@/components/layout/Container";
import Link from "next/link";

import { CLIENTS_PARTNERS_PAGE_DATA } from "@/content/clients";

export default function ClientsPartnersPage() {
    const { hero, customers, partners, bottomCta } = CLIENTS_PARTNERS_PAGE_DATA;

    return (
        <main className="bg-white">
            <ClientsHero data={hero} />

            <LogoGrid title={customers.title} items={customers.items} />
            <LogoGrid title={partners.title} items={partners.items} />

            {bottomCta && (
                <section className="bg-white">
                    <Container className="pb-12 md:pb-16">
                        <div
                            className="rounded-2xl border p-7 shadow-sm md:flex md:items-center md:justify-between md:gap-8"
                            style={{ borderColor: "rgba(25,36,52,0.12)", background: "rgba(253,202,2,0.18)" }}
                        >
                            <div className="max-w-2xl">
                                <div className="text-lg font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                    {bottomCta.title}
                                </div>
                                <p className="mt-2 text-sm opacity-85" style={{ color: "var(--dt-navy)" }}>
                                    {bottomCta.description}
                                </p>
                            </div>

                            <div className="mt-5 md:mt-0">
                                <Link
                                    href={bottomCta.primaryCta.href}
                                    className="rounded-md px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                                    style={{ background: "var(--dt-navy)", color: "white" }}
                                >
                                    {bottomCta.primaryCta.label}
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            )}
        </main>
    );
}
