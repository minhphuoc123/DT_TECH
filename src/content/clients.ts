import type { ClientsPartnersPageData } from "@/types/clients";

export const CLIENTS_PARTNERS_PAGE_DATA: ClientsPartnersPageData = {
    hero: {
        title: "Khách hàng & Đối tác",
        description:
            "DT-TECH trân trọng niềm tin của khách hàng và sự đồng hành của đối tác. Chúng tôi xây dựng quan hệ hợp tác dựa trên chất lượng, minh bạch và hiệu quả triển khai.",
        primaryCta: { label: "Trở thành đối tác", href: "/lien-he?topic=partner" },
        secondaryCta: { label: "Xem dự án tiêu biểu", href: "/du-an" },
        stats: [
            { value: "200+", label: "Dự án đã triển khai" },
            { value: "5+", label: "Năm kinh nghiệm thực chiến" },
            { value: "24/7", label: "Hỗ trợ vận hành" },
            { value: "3 lớp", label: "Checklist • Hold Point • CAPA" },
        ],
    },

    customers: {
        title: "Danh sách khách hàng",
        items: [
            { name: "Petrolimex", logo: { src: "/images/clients/petrolimex.jpg", alt: "Petrolimex" } },
            { name: "Viet Thuan", logo: { src: "/images/clients/viet-thuan.png", alt: "Viet Thuan" } },
            { name: "VUBC", logo: { src: "/images/clients/vubc.jpg", alt: "VUBC" } },
            { name: "VSICO", logo: { src: "/images/clients/vsico.jpg", alt: "VSICO" } },
            { name: "Allsea", logo: { src: "/images/clients/allsea.png", alt: "Allsea" } },
            { name: "Nước sạch Hà Nội", logo: { src: "/images/clients/nuoc-sach-hanoi.png", alt: "Nước sạch Hà Nội" } },
            { name: "VNPT", logo: { src: "/images/clients/vnpt.png", alt: "VNPT" } },
            { name: "VETC", logo: { src: "/images/clients/vetc.png", alt: "VETC" } },
            { name: "ATIS", logo: { src: "/images/clients/atis.jpg", alt: "ATIS" } },
            { name: "Savico", logo: { src: "/images/clients/savico.png", alt: "Savico" } },
            { name: "Tasco", logo: { src: "/images/clients/tasco.png", alt: "Tasco" } },
            { name: "PVTrans", logo: { src: "/images/clients/pvtrans.png", alt: "PVTrans" } },
            { name: "EVN", logo: { src: "/images/clients/evn.png", alt: "EVN" } },
        ],
    },

    partners: {
        title: "Danh sách đối tác",
        items: [
            { name: "Oracle", logo: { src: "/images/partners/oracle.png", alt: "Oracle" } },
            { name: "TP-Link", logo: { src: "/images/partners/tp-link.png", alt: "TP-Link" } },
            { name: "IBM", logo: { src: "/images/partners/ibm.jpeg", alt: "IBM" } },
            { name: "Cisco", logo: { src: "/images/partners/cisco.png", alt: "Cisco" } },
            { name: "AWS", logo: { src: "/images/partners/aws.png", alt: "AWS" } },
        ],
    },

    bottomCta: {
        title: "Bạn muốn trở thành khách hàng/đối tác của DT-TECH?",
        description: "Gửi yêu cầu để nhận tư vấn giải pháp, hồ sơ năng lực và đề xuất triển khai phù hợp nhu cầu.",
        primaryCta: { label: "Liên hệ ngay", href: "/lien-he" },
    },
};
