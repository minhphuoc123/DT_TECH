import type { QualityPolicyContent } from "@/types/qualityPolicy";

export const qualityPolicyContent: QualityPolicyContent = {
    seo: {
        title: "Chính sách chất lượng | DT-TECH",
        description:
            "DT-TECH cam kết đáp ứng yêu cầu khách hàng, đảm bảo chất lượng – tiến độ – độ tin cậy, không ngừng cải tiến thông qua đào tạo và nâng cấp công nghệ.",
        canonical: "/chinh-sach-chat-luong",
    },

    hero: {
        brand: "",
        title: "Chính sách chất lượng",
        desc:
            "DT-TECH lấy khách hàng làm trung tâm và coi chất lượng là ưu tiên hàng đầu. Chúng tôi chuẩn hóa quy trình triển khai, tăng cường đào tạo và cải tiến liên tục để đảm bảo dịch vụ ổn định, tin cậy.",
        primaryCta: { label: "Liên hệ tư vấn", href: "/lien-he" },
        secondaryCta: { label: "Xem cam kết", href: "#cam-ket" },
        anchors: [
            { label: "Cam kết", href: "#cam-ket" },
            { label: "Mục tiêu", href: "#muc-tieu" },
            { label: "Quy trình", href: "#quy-trinh" },
            { label: "Cải tiến", href: "#cai-tien" },
        ],
    },

    commitments: {
        eyebrow: "",
        title: "Những điều DT-TECH luôn đảm bảo",
        desc: "Các cam kết được áp dụng xuyên suốt tư vấn – triển khai – vận hành – hỗ trợ.",
        items: [
            {
                title: "Đúng yêu cầu",
                desc: "Thống nhất rõ tiêu chí nghiệm thu, kiểm soát thay đổi để tránh phát sinh không cần thiết.",
            },
            {
                title: "Ổn định & tin cậy",
                desc: "Chuẩn hóa quy trình, kiểm thử và checklist nhằm giảm lỗi và tăng tính ổn định khi vận hành.",
            },
            {
                title: "Đúng tiến độ",
                desc: "Kế hoạch rõ ràng, theo dõi định kỳ và cảnh báo sớm để đảm bảo deadline.",
            },
            {
                title: "Cải tiến liên tục",
                desc: "Đào tạo nhân sự, nâng cấp công nghệ và tối ưu quy trình dựa trên phản hồi thực tế.",
            },
        ],
    },

    objectives: {
        eyebrow: "",
        title: "Mục tiêu chất lượng",
        desc: "Mục tiêu được theo dõi theo dự án và cải tiến theo chu kỳ.",
        items: [
            { kpi: "Chất lượng", val: "Đạt tiêu chí nghiệm thu theo phạm vi thống nhất" },
            { kpi: "Tiến độ", val: "Bám kế hoạch và kiểm soát rủi ro sớm" },
            { kpi: "Vận hành", val: "Giảm lỗi sau bàn giao bằng kiểm thử & checklist" },
            { kpi: "Hỗ trợ", val: "Phản hồi theo SLA đã thỏa thuận" },
        ],
    },

    scope: {
        eyebrow: "",
        title: "Áp dụng cho toàn bộ dịch vụ DT-TECH",
        desc: "Chính sách chất lượng áp dụng cho các hoạt động cung cấp giải pháp và dịch vụ của DT-TECH.",
        fields: [
            "Tích hợp hệ thống, hạ tầng CNTT, Data Center",
            "Phát triển phần mềm & giải pháp",
            "Thiết bị & giải pháp CNTT",
            "Viễn thông: VSAT và giải pháp liên quan",
        ],
        culture: {
            title: "Giá trị nền tảng",
            desc: "Chúng tôi xây dựng chất lượng dựa trên văn hóa và kỷ luật thực thi.",
            values: [
                { key: "NHÂN", desc: "Tôn trọng con người, hợp tác và trách nhiệm." },
                { key: "TÂM", desc: "Đạo đức kinh doanh, đặt lợi ích khách hàng lên trước." },
                { key: "TRÍ", desc: "Học hỏi – sáng tạo – nâng cao chuyên môn." },
                { key: "TÍN", desc: "Giữ cam kết, minh bạch, làm đến cùng." },
            ],
        },
    },

    qaFlow: {
        eyebrow: "",
        title: "Đảm bảo chất lượng",
        desc: "Chuỗi bước kiểm soát giúp giảm rủi ro và nâng độ ổn định khi bàn giao.",
        items: [
            { step: "01", title: "Làm rõ yêu cầu", desc: "Chốt phạm vi, tiêu chí nghiệm thu và rủi ro." },
            { step: "02", title: "Thiết kế giải pháp", desc: "Thiết kế kỹ thuật, kế hoạch triển khai & kiểm thử." },
            { step: "03", title: "Triển khai", desc: "Thực hiện theo chuẩn và kiểm soát thay đổi." },
            { step: "04", title: "Kiểm thử – nghiệm thu", desc: "Kiểm thử theo checklist, nghiệm thu theo tiêu chí." },
            { step: "05", title: "Bàn giao – hỗ trợ", desc: "Bàn giao tài liệu, hỗ trợ vận hành theo SLA." },
        ],
    },

    improvement: {
        eyebrow: "",
        title: "Đào tạo – Nâng cấp – Cải tiến",
        desc: "Cải tiến dựa trên dữ liệu dự án và phản hồi khách hàng.",
        cards: [
            { title: "Đào tạo & chuẩn hóa", desc: "Chuẩn hóa năng lực theo vai trò và checklist triển khai." },
            { title: "Nâng cấp công nghệ", desc: "Tối ưu công cụ, giám sát vận hành và chất lượng bàn giao." },
            { title: "Rà soát định kỳ", desc: "Tổng kết sau dự án và cập nhật quy trình/tiêu chuẩn." },
        ],
        statementTitle: "Tuyên bố chất lượng",
        statement:
            "DT-TECH cam kết cung cấp dịch vụ chất lượng và tin cậy, hướng tới tiêu chuẩn quốc tế thông qua cải tiến liên tục.",
        thanks: "Trân trọng cảm ơn Quý Khách hàng đã tin tưởng đồng hành cùng DT-TECH.",
    },

    cta: {
        title: "Bạn cần tư vấn giải pháp?",
        desc: "Gửi yêu cầu để DT-TECH tư vấn nhanh và đúng nhu cầu.",
        primaryBtn: { label: "Đi tới trang liên hệ", href: "/lien-he" },
        secondaryBtn: { label: "Xem dịch vụ", href: "/dich-vu" },
    },
};
