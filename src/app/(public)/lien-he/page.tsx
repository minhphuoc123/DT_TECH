import Container from "@/components/layout/Container";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactFormCard from "@/components/sections/contact/ContactFormCard";
import ContactInfoCard from "@/components/sections/contact/ContactInfoCard";
import { CONTACT_PAGE_DATA } from "@/content/contact";

export default function ContactPage() {
    const { hero, form, info } = CONTACT_PAGE_DATA;

    return (
        <main className="bg-white">
            <ContactHero data={hero} />

            <section className="bg-white">
                <Container className="pb-12 md:pb-16">
                    <div className="grid gap-6 md:grid-cols-2 md:items-start">
                        <ContactFormCard data={form} />
                        <ContactInfoCard data={info} />
                    </div>
                </Container>
            </section>
        </main>
    );
}
