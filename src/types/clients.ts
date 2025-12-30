export type CtaLink = {
    label: string;
    href: string;
};

export type MiniStat = {
    value: string;
    label: string;
};

export type LogoItem = {
    name: string;
    logo: {
        src: string;
        alt: string;
    };
    href?: string; // optional: link tới site/case study
};

export type ClientsHeroData = {
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
    stats: MiniStat[];
};

export type ClientsPartnersPageData = {
    hero: ClientsHeroData;
    customers: {
        title: string;
        items: LogoItem[];
    };
    partners: {
        title: string;
        items: LogoItem[];
    };
    bottomCta?: {
        title: string;
        description: string;
        primaryCta: CtaLink;
    };
};
