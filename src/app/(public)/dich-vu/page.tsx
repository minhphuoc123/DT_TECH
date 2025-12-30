import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceStat from "@/components/sections/services/ServiceStat";
import { SERVICES_PAGE_DATA } from "@/content/services";

export default function ServicesPage() {
    const { hero, stats } = SERVICES_PAGE_DATA;

    return (
        <main className="bg-white mb-20">
            <ServicesHero data={hero} />
            <ServiceStat data={stats[0]} />
            <ServiceStat data={stats[1]} reverse />
            <ServiceStat data={stats[2]} />
            <ServiceStat data={stats[3]} reverse />
        </main>
    );
}
