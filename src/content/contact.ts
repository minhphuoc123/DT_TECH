import type { ContactPageData } from "@/types/contact";

export const CONTACT_PAGE_DATA: ContactPageData = {
    hero: {
        title: "Liên hệ với chúng tôi",
        subtitle: "Có thắc mắc hoặc cần hỗ trợ? Liên hệ qua thông tin liên hệ để được hỗ trợ nhanh nhất.",
    },

    form: {
        title: "Gửi yêu cầu",
        description: "DT-TECH sẽ phản hồi sớm nhất trong giờ làm việc.",
        submitLabel: "Gửi",
        successMessage: "Cảm ơn bạn! DT-TECH đã nhận được yêu cầu và sẽ liên hệ sớm nhất.",
        note: "Bằng việc gửi thông tin, bạn đồng ý để DT-TECH liên hệ lại qua Email/Số điện thoại.",
        fields: [
            {
                name: "fullName",
                type: "text",
                label: "Họ và tên",
                placeholder: "Nhập họ tên của bạn",
                required: true,
            },
            {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "Nhập email của bạn",
                required: true,
            },
            {
                name: "phone",
                type: "tel",
                label: "Số điện thoại",
                placeholder: "Nhập số điện thoại của bạn",
                required: false,
            },
            {
                name: "message",
                type: "textarea",
                label: "Nội dung",
                placeholder: "Nhập nội dung...",
                required: true,
            },
        ],
    },

    info: {
        title: "Thông tin liên hệ",
        items: [
            { label: "Hotline", value: "090 827 8868", href: "tel:0908278868" },
            { label: "Email", value: "Sales@dt-tech.vn", href: "mailto:Sales@dt-tech.vn" },
            { label: "Địa chỉ", value: "Số 4 ngõ 10/117 Trần Cung, phườngNghĩa Đô, Hà Nội" },
        ],
        map: {
            title: "Bản đồ DT-TECH",
            embedUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7739.381100673642!2d105.78220683020884!3d21.05234346771184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2c26d40673%3A0x3e0ddac782fb0993!2zMTAgTmcuIDExNyDEkC4gVHLhuqduIEN1bmcsIEPhu5UgTmh14bq_LCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1767096096634!5m2!1svi!2s",
        },
        workingHours: {
            title: "Thời gian làm việc",
            lines: ["Thứ Hai tới Thứ Sáu: 9:00 – 18:00", "Thứ Bảy & ngày lễ: phản hồi qua email"],
        },
    },
};
