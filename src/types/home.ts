export type RevealVariant = "up" | "left" | "right";

export type CtaLink = {
    label: string;
    href: string;
};

export type HomeHeroData = {
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
    chips?: string[];

    rightCard?: {
        logoSrc: string;
        logoAlt: string;
        companyName: string;
        badges?: string[];
    };

    showcase?: {
        imageSrc: string;
        imageAlt: string;
        title: string;
        description: string;
        href?: string;
    };
};

export type HomeStat = { k: string; label: string };

export type HomeStatsData = {
    items: HomeStat[];
};

export type HomeAboutData = {
    title: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
    imageSrc: string;
    imageAlt: string;
};

export type HomeQualityPolicyData = {
    title: string;
    headline: string;
    body: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
    imageSrc: string;
    imageAlt: string;
};

export type HomeCoreValue = { title: string; desc: string };

export type HomeCoreValuesData = {
    title: string;
    subtitle?: string;
    items: HomeCoreValue[];
    staggerVariants?: RevealVariant[];
};

export type HomeOrgChartData = {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
};

export type HomeJob = {
    title: string;
    desc: string;
    req: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
};

export type HomeCareersData = {
    title: string;
    subtitle?: string;
    jobs: HomeJob[];
};

export type HomePageData = {
    hero: HomeHeroData;
    stats: HomeStatsData;
    about: HomeAboutData;
    qualityPolicy: HomeQualityPolicyData;
    coreValues: HomeCoreValuesData;
    orgChart: HomeOrgChartData;
    careers: HomeCareersData;
};
