import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Stats from "@/components/sections/home/Stats";
import OrgChart from "@/components/sections/home/OrgChart";
import Careers from "@/components/sections/home/Careers";
import CoreValues from "@/components/sections/home/CoreValues";
import QualityPolicy from "@/components/sections/home/QualityPolicy";

import { HOME_PAGE_DATA } from "@/content/home";

export default function HomePage() {
    const { hero, stats, about, qualityPolicy, coreValues, orgChart, careers } = HOME_PAGE_DATA;

    return (
        <main className="bg-white">
            <Hero data={hero} />
            <About data={about} />
            <Stats data={stats} />
            <OrgChart data={orgChart} />
            <CoreValues data={coreValues} />
            <Careers data={careers} />
            <QualityPolicy data={qualityPolicy} />
        </main>
    );
}
