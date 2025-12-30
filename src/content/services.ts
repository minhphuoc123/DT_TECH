import type { ServicesPageData } from "@/types/services";

export const SERVICES_PAGE_DATA: ServicesPageData = {
    hero: {
        title: "DỊCH VỤ DT-TECH",
        description:
            "DT-TECH cung cấp giải pháp triển khai hạ tầng – viễn thông – tích hợp hệ thống – phát triển phần mềm theo tiêu chuẩn doanh nghiệp. Tập trung ổn định vận hành, bảo mật và tối ưu chi phí dài hạn.",
        primaryCta: { label: "Liên hệ", href: "/lien-he" },
        secondaryCta: { label: "Xem dự án", href: "/du-an" },
        illustration: {
            src: "/images/services-hero.jpg",
            alt: "Dịch vụ DT-TECH",
        },
        highlights: ["Khảo sát onsite", "Thiết kế tối ưu", "Triển khai chuẩn quy trình", "Hỗ trợ SLA"],
    },

    stats: [
        {
            title: "Hạ tầng CNTT",
            subtitle: "Thiết kế & triển khai hệ thống vận hành ổn định",
            description:
                "Khảo sát – thiết kế – triển khai mạng nội bộ, server, lưu trữ, phân quyền và giám sát. Ưu tiên ổn định, bảo mật và khả năng mở rộng theo quy mô doanh nghiệp.",
            image: { src: "/images/service-it.jpg", alt: "Hạ tầng CNTT" },
            bullets: ["Tư vấn kiến trúc", "LAN/WAN/Wi-Fi", "Server/Storage/Backup", "Giám sát & bảo mật"],
            primaryCta: { label: "Nhận tư vấn", href: "/lien-he?topic=it" },
            secondaryCta: { label: "Xem dự án", href: "/du-an?tag=it" },
        },
        {
            title: "Viễn thông / VSAT",
            subtitle: "Kết nối ổn định cho điểm xa, vùng khó triển khai",
            description:
                "Cung cấp phương án kết nối chuyên dụng và dự phòng, đảm bảo chất lượng dịch vụ theo nhu cầu vận hành. Hỗ trợ giám sát và SLA theo thỏa thuận.",
            image: { src: "/images/service-vsat.png", alt: "Viễn thông VSAT" },
            bullets: ["Khảo sát onsite", "Thi công chuẩn kỹ thuật", "Giám sát chất lượng", "Bảo trì & SLA"],
            primaryCta: { label: "Nhận tư vấn", href: "/lien-he?topic=vsat" },
            secondaryCta: { label: "Xem dự án", href: "/du-an?tag=vsat" },
        },
        {
            title: "Tích hợp hệ thống",
            subtitle: "Đồng bộ thiết bị, phần mềm và quy trình vận hành",
            description:
                "Tích hợp đa nhà cung cấp, chuẩn hóa luồng vận hành, bàn giao tài liệu và đào tạo. Mục tiêu: hệ thống chạy mượt, dễ giám sát, dễ mở rộng.",
            image: { src: "/images/service-integration.jpg", alt: "Tích hợp hệ thống" },
            bullets: ["Tích hợp đa nền tảng", "Chuẩn hóa quy trình", "Tài liệu & đào tạo", "Hỗ trợ sau triển khai"],
            primaryCta: { label: "Nhận tư vấn", href: "/lien-he?topic=integration" },
            secondaryCta: { label: "Xem dự án", href: "/du-an?tag=integration" },
        },
        {
            title: "Phát triển phần mềm",
            subtitle: "Giám sát, cảnh báo và tự động hóa theo kịch bản",
            description:
                "Thiết kế hệ thống camera/IoT, phân quyền bảo mật, lưu trữ và cảnh báo. Có thể tích hợp phân tích AI tùy nhu cầu (nhận diện/cảnh báo bất thường…).",
            image: { src: "/images/service-app.webp", alt: "AI IoT Camera" },
            bullets: ["Thiết kế theo nhu cầu", "Phân quyền & bảo mật", "Kịch bản cảnh báo", "Bảo trì & tối ưu"],
            primaryCta: { label: "Nhận tư vấn", href: "/lien-he?topic=ai-iot" },
            secondaryCta: { label: "Xem dự án", href: "/du-an?tag=ai-iot" },
        },
    ],
};
