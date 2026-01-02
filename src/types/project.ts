// src/types/project.ts

export type ProjectCategory =
    | "Viễn thông vệ tinh"
    | "An ninh giám sát"
    | "Smart City"
    | "IoT đo lường"
    | "Năng lượng"
    | "Hạ tầng & ELV"
    | "Công nghiệp";

export type ProjectImpact = { label: string; value: string };

export type ProjectItem = {
    id: string;
    title: string;
    image: string;
    category: ProjectCategory;

    // các trường dưới giữ lại để sau này làm modal/detail
    description?: string;
    client?: string;
    year?: string;
    location?: string;
    tags?: string[];
    challenge?: string;
    solution?: string;
    impact?: ProjectImpact[];

    featured?: boolean;
    href?: string;
};

export type ProjectsPageContent = {
    seo: {
        title: string;
        description: string;
        canonical: string;
    };

    hero: {
        badge: string;
        title: string;
        subtitle: string;
        desc: string;
        chips: string[];
        primaryCta: { label: string; href: string };
        secondaryCta: { label: string; href: string };
    };

    categories: readonly (ProjectCategory | "Tất cả")[];

    featuredTitle: string;
    featuredDesc: string;

    cta: {
        title: string;
        desc: string;
        primary: { label: string; href: string };
        secondary?: { label: string; href: string };
    };

    projects: ProjectItem[];
};
