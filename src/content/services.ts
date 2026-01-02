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
            subtitle: "Phát triển phần mềm doanh nghiệp",
            description:
                "Tư vấn và xây dựng các giải pháp phần mềm tối ưu, giúp tự động hóa quy trình vận hành và nâng cao hiệu suất kinh doanh.",
            image: { src: "/images/service-app.webp", alt: "AI IoT Camera" },
            bullets: ["Thiết kế theo nhu cầu", "Hệ thống quản trị dữ liệu", "Phát triển Web & Ứng dụng di động", "Bảo trì & tối ưu"],
            primaryCta: { label: "Nhận tư vấn", href: "/lien-he?topic=ai-iot" },
            secondaryCta: { label: "Xem dự án", href: "/du-an?tag=ai-iot" },
        },
    ],
};
