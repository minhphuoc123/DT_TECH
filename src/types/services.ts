// src/types/services.ts
export type CtaLink = {
    label: string;
    href: string;
};

export type ServiceStatData = {
    title: string;
    subtitle?: string;
    description: string;

    image: {
        src: string;
        alt: string;
    };

    bullets?: string[];

    primaryCta?: CtaLink;
    secondaryCta?: CtaLink;
};

export type ServicesHeroData = {
    title: string;
    description: string;

    primaryCta: CtaLink;
    secondaryCta?: CtaLink;

    illustration: {
        src: string;
        alt: string;
    };

    // optional chips/highlights
    highlights?: string[];
};

export type ServicesPageData = {
    hero: ServicesHeroData;
    stats: ServiceStatData[];
};
