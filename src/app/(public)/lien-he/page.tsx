import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfoCard from "@/components/sections/contact/ContactInfoCard";
import Container from "@/components/layout/Container";
import { CONTACT_PAGE_DATA } from "@/content/contact";

export default function ContactPage() {
    const { hero, info } = CONTACT_PAGE_DATA;

    return (
        <main className="bg-[var(--dt-bg)]">
            <ContactHero data={hero} />

            <section className="bg-white">
                <Container className="pb-10 md:pb-14">
                    <ContactInfoCard data={info} />
                </Container>
            </section>
        </main>
    );
}
