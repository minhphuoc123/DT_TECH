import type { ProjectsPageContent, ProjectItem } from "@/types/project";

export const PROJECTS_PAGE: ProjectsPageContent = {
    seo: {
        title: "Dự án",
        description:
            "Các dự án tiêu biểu DT-TECH: VSAT, CCTV AI, Smart Parking, IoT đo lường và giải pháp năng lượng/hạ tầng.",
        canonical: "/du-an",
    },

    hero: {
        badge: "",
        title: "Dự án",
        subtitle: "của chúng tôi.",
        desc:
            "Một bộ sưu tập dự án tiêu biểu giúp bạn nhìn nhanh năng lực triển khai – tích hợp hệ thống của DT-TECH.",
        chips: ["Triển khai thực chiến", "Tích hợp hệ thống", "Giám sát realtime", "Vận hành bền vững"],
        primaryCta: { label: "Xem nổi bật", href: "#noi-bat" },
        secondaryCta: { label: "Xem tất cả", href: "#tat-ca" },
    },

    categories: [
        "Tất cả",
        "Viễn thông vệ tinh",
        "An ninh giám sát",
        "Smart City",
        "IoT đo lường",
        "Năng lượng",
        "Hạ tầng & ELV",
        "Công nghiệp",
    ] as const,

    featuredTitle: "Dự án nổi bật",
    featuredDesc: "Một vài dự án tiêu biểu để bạn cảm nhận nhanh phong cách triển khai của DT-TECH.",

    cta: {
        title: "Bạn muốn triển khai dự án tương tự?",
        desc:
            "Hãy chia sẻ bài toán của bạn. DT-TECH sẽ tư vấn giải pháp phù hợp và lộ trình triển khai thực tế.",
        primary: { label: "Liên hệ tư vấn", href: "/lien-he" },
        secondary: { label: "Xem dịch vụ", href: "/dich-vu" },
    },

    projects: [
        {
            id: "vsat-maritime",
            title: "Hệ thống thông tin liên lạc Hàng hải (VSAT)",
            image: "/images/projects/project-1.png",
            category: "Viễn thông vệ tinh",
            featured: true,
        },
        {
            id: "cctv-ai",
            title: "Camera giám sát an ninh tích hợp AI",
            image: "/images/projects/project-2.png",
            category: "An ninh giám sát",
            featured: true,
        },
        {
            id: "smart-parking",
            title: "Giải pháp bãi đỗ xe thông minh",
            image: "/images/projects/project-3.png",
            category: "Smart City",
            featured: true,
        },
        {
            id: "fuel-leak",
            title: "Giám sát rò rỉ nhiên liệu cho tàu chở xăng dầu",
            image: "/images/projects/project-4.jpg",
            category: "IoT đo lường",
        },
        {
            id: "smart-water-meter",
            title: "Giám sát đồng hồ nước thông minh",
            image: "/images/projects/giam-sat-dong-ho-nuoc.jpg",
            category: "IoT đo lường",
        },
        {
            id: "electric-water-sensors",
            title: "Cảm biến đo lường điện & nước cho doanh nghiệp",
            image: "/images/projects/cam-bien-dien-nuoc.jpg",
            category: "IoT đo lường",
        },
        {
            id: "vsat-mines",
            title: "Thi công VSAT & chống sét cho mỏ than",
            image: "/images/projects/chong-set-mo-than.jpg",
            category: "Viễn thông vệ tinh",
        },
        {
            id: "solar-hybrid",
            title: "Hệ thống Solar HYBRID 3KVA – 10KVA",
            image: "/images/projects/solar-system.jpg",
            category: "Năng lượng",
        },
    ] as ProjectItem[],
};
