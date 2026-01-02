export type SeoMeta = {
    title: string;
    description: string;
    canonical: string;
};

export type AnchorLink = {
    label: string;
    href: string;
};

export type Commitment = {
    title: string;
    desc: string;
};

export type QualityObjective = {
    kpi: string;
    val: string;
};

export type QAFlowStep = {
    step: string;
    title: string;
    desc: string;
};

export type CoreValue = {
    key: "NHÂN" | "TÂM" | "TRÍ" | "TÍN";
    desc: string;
};

export type ImprovementCard = {
    title: string;
    desc: string;
};

export type QualityPolicyContent = {
    seo: SeoMeta;

    hero: {
        brand: string;
        title: string;
        desc: string;
        primaryCta: { label: string; href: string };
        secondaryCta: { label: string; href: string };
        anchors: AnchorLink[];
    };

    commitments: {
        eyebrow: string;
        title: string;
        desc: string;
        items: Commitment[];
    };

    objectives: {
        eyebrow: string;
        title: string;
        desc: string;
        items: QualityObjective[];
    };

    scope: {
        eyebrow: string;
        title: string;
        desc: string;
        fields: string[];
        culture: {
            title: string;
            desc: string;
            values: CoreValue[];
        };
    };

    qaFlow: {
        eyebrow: string;
        title: string;
        desc: string;
        items: QAFlowStep[];
    };

    improvement: {
        eyebrow: string;
        title: string;
        desc: string;
        cards: ImprovementCard[];
        statementTitle: string;
        statement: string;
        thanks: string;
    };

    cta: {
        title: string;
        desc: string;
        primaryBtn: { label: string; href: string };
        secondaryBtn: { label: string; href: string };
    };
};
