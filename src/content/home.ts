import type { HomePageData } from "@/types/home";

export const HOME_PAGE_DATA: HomePageData = {
    hero: {
        title: "Công nghệ thông minh – Giải pháp bền vững",
        description:
            "DT-TECH cung cấp giải pháp viễn thông, hạ tầng CNTT, tích hợp hệ thống và chuyển đổi số cho doanh nghiệp & cơ quan. Tập trung vào chất lượng triển khai, vận hành ổn định và tối ưu chi phí dài hạn.",
        primaryCta: { label: "Liên hệ với chúng tôi", href: "/lien-he" },
        secondaryCta: { label: "Xem dịch vụ", href: "/dich-vu" },
        chips: ["Viễn thông / VSAT", "Hạ tầng CNTT", "Tích hợp hệ thống", "Phát triển phần mềm"],
        rightCard: {
            logoSrc: "/images/logo.png",
            logoAlt: "DT-TECH",
            companyName: "DT-TECH",
            badges: ["ISO-ready", "Onsite Survey", "SLA Support", "Security"],
        },
        showcase: {
            imageSrc: "/images/hero-city.jpg",
            imageAlt: "DT-TECH triển khai dự án",
            title: "Triển khai thực tế, minh chứng năng lực",
            description: "Xem dự án tiêu biểu và phạm vi công việc theo từng lĩnh vực.",
            href: "/du-an",
        },
    },

    stats: {
        items: [
            { k: "5+", label: "Năm kinh nghiệm" },
            { k: "100+", label: "Dự án" },
            { k: "24/7", label: "Hỗ trợ vận hành" },
            { k: "Cam kết", label: "Hỗ trợ sau bàn giao" },
        ],
    },

    about: {
        title: "Về công ty",
        body:
            "Công ty CP thương mại và công nghệ DT – TECH, không chỉ là một đơn vị kinh doanh thông thường mà còn là đối tác đáng tin cậy mang lại giải pháp công nghệ đỉnh cao. Với đầy sự năng động, tận tụy, uy tín và sự cam kết vững chắc, chúng tôi tự hào là động lực đằng sau sự tiến bộ và sự đổi mới trong ngành công nghiệp, công ty chúng tôi đã và đang khẳng định được vị trí vững chắc của mình là doanh nghiệp tiên phong trong kỷ nguyên của cuộc cách mạng công nghiệp lần thứ 4",
        primaryCta: { label: "Tìm hiểu thêm", href: "/du-an" },
        secondaryCta: { label: "Liên hệ tư vấn", href: "/lien-he" },
        imageSrc: "/images/about-tablet.webp",
        imageAlt: "DT-TECH",
    },

    coreValues: {
        title: "Giá trị cốt lõi",
        subtitle: "Bộ nguyên tắc định hướng cách chúng tôi làm việc mỗi ngày.",
        items: [
            { title: "NHÂN", desc: "Luôn coi con người là tài sản quý giá nhất trong mọi quyết định." },
            { title: "TÂM", desc: "Duy trì đạo đức nghề nghiệp, đặt lợi ích khách hàng lên hàng đầu." },
            { title: "TRÍ", desc: "Không ngừng học hỏi, cải tiến để nâng cao chất lượng và hiệu quả." },
            { title: "TÍN", desc: "Giữ vững cam kết, đảm bảo tiến độ và chất lượng đã thỏa thuận." },
        ],
        staggerVariants: ["up", "left", "right", "up"],
    },

    orgChart: {
        title: "Sơ đồ tổ chức",
        subtitle: "Cấu trúc tổ chức rõ ràng giúp kiểm soát chất lượng và tiến độ triển khai.",
        imageSrc: "/images/org-chart.png",
        imageAlt: "Sơ đồ tổ chức DT-TECH",
    },

    careers: {
        title: "Tuyển dụng",
        subtitle: "Gia nhập đội ngũ DT-TECH để cùng triển khai các dự án công nghệ có giá trị thực tế.",
        jobs: [
            {
                title: "Nhân viên kế toán",
                desc: "Theo dõi chứng từ, đối soát, lập báo cáo theo quy trình nội bộ.",
                req: "Cẩn thận, trung thực, ưu tiên có kinh nghiệm và sử dụng tốt Excel.",
                primaryCta: { label: "Ứng tuyển", href: "/lien-he" },
                secondaryCta: { label: "Gửi CV", href: "/lien-he" },
            },
            {
                title: "Nhân viên đăng bài (Content)",
                desc: "Viết và đăng nội dung theo kế hoạch truyền thông, tối ưu hiển thị.",
                req: "Viết tốt tiếng Việt, chủ động, có tư duy hình ảnh là lợi thế.",
                primaryCta: { label: "Ứng tuyển", href: "/lien-he" },
                secondaryCta: { label: "Gửi CV", href: "/lien-he" },
            },
        ],
    },

    qualityPolicy: {
        title: "Chính sách về chất lượng",
        headline: "DT-TECH cam kết mang đến chất lượng & độ tin cậy theo tiêu chuẩn doanh nghiệp",
        body:
            "Quy trình khảo sát – thiết kế – triển khai – nghiệm thu – vận hành được chuẩn hóa. Đội ngũ kỹ thuật phối hợp chặt chẽ với khách hàng để đảm bảo an toàn, tiến độ và hiệu quả khai thác dài hạn.",
        primaryCta: { label: "Liên hệ tư vấn", href: "/lien-he" },
        secondaryCta: { label: "Xem dịch vụ", href: "/dich-vu" },
        imageSrc: "/images/quality-banner.jpg",
        imageAlt: "Quality",
    },
};
