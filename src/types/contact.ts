// src/types/contact.ts
export type CtaLink = {
    label: string;
    href: string;
};

export type ContactFieldType = "text" | "email" | "tel" | "textarea";

export type ContactField = {
    name: "fullName" | "email" | "phone" | "message";
    type: ContactFieldType;
    label: string;
    placeholder: string;
    required?: boolean;
};

export type ContactInfoItem = {
    label: string;
    value: string;
    href?: string; // tel: / mailto: / url
};

export type ContactMap = {
    embedUrl: string; // google maps embed link
    title: string;
};

export type ContactHeroData = {
    title: string;
    subtitle: string;
};

export type ContactPageData = {
    hero: ContactHeroData;

    form: {
        title: string;
        description?: string;
        submitLabel: string;
        fields: ContactField[];
        successMessage: string;
        note?: string;
    };

    info: {
        title: string;
        items: ContactInfoItem[];
        map: ContactMap;
        workingHours: {
            title: string;
            lines: string[];
        };
    };
};
