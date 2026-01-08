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
        "Thông tin liên lạc vệ tinh",
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
            title: "Hệ thống thông tin liên lạc Hàng hải (VSAT MARINE)",
            image: "/images/projects/project-1.png",
            category: "Thông tin liên lạc vệ tinh",
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
            title: "Thiết kế và triển khai Hệ thống thông tin liên lạc nội bộ qua vệ tinh",
            image: "/images/projects/chong-set-mo-than.jpg",
            category: "Thông tin liên lạc vệ tinh",
        },
        {
            id: "solar-hybrid",
            title: "Hệ thống Solar HYBRID 3KVA – 10KVA",
            image: "/images/projects/solar-system.jpg",
            category: "Năng lượng",
        },
        {
            id: "fire-forest",
            title: "Cung cấp giải pháp công nghệ giúp cảnh báo cháy rừng, đo đạc địa chất, khí tượng thuỷ văn",
            image: "/images/projects/fire-forest.png",
            category: "An ninh giám sát",
        },
        {
            id: "security",
            title: "Các thiết bị và giải pháp dành riêng cho lĩnh vực An ninh - Quốc phòng",
            image: "/images/projects/security.png",
            category: "An ninh giám sát",
        },
        {
            id: "light-electric",
            title: "Triển khai hệ thống Điện, Điện nhẹ cho dự án: Cụm công nghiệp Thanh Văn – Tân Ước",
            image: "/images/projects/light-electric.png",
            category: "Năng lượng",
        },
    ] as ProjectItem[],
};
