"use client";

import { Mail, Phone } from "lucide-react";

// ✅ Đồng bộ theo dự án DT-Tech (src/content/contact.ts)
const EMAIL = "Sales@dt-tech.vn";
const PHONE = "0908278868";

// (Tuỳ chọn) Nội dung điền sẵn khi mở ứng dụng email
const MAIL_SUBJECT = "Tư vấn dịch vụ DT-TECH";
const MAIL_BODY = "Xin chào DT-TECH,%0D%0ATôi cần tư vấn về...%0D%0A%0D%0ATrân trọng,";

// Tạo mailto có subject/body (encode an toàn)
function buildMailto(email: string, subject?: string, body?: string) {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);

    const qs = params.toString();
    return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

export default function FloatingContact() {
    const mailHref = buildMailto(EMAIL, MAIL_SUBJECT, MAIL_BODY);
    const phoneHref = `tel:${PHONE}`;

    return (
        <div className="fixed right-4 z-[9999] flex flex-col gap-3 bottom-[calc(env(safe-area-inset-bottom)+1.5rem)]">
            {/* MAIL */}
            <a
                href={mailHref}
                aria-label="Gửi email"
                title="Gửi email"
                className="group grid h-14 w-14 place-items-center rounded-full shadow-lg transition active:scale-95"
                style={{ background: "rgba(45,44,62,0.10)", backdropFilter: "blur(6px)" }}
            >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#4aa3ff]">
                    <Mail className="h-6 w-6 text-white" />
                </span>
            </a>

            {/* PHONE */}
            <a
                href={phoneHref}
                aria-label="Gọi điện"
                title="Gọi điện"
                className="group grid h-14 w-14 place-items-center rounded-full shadow-lg transition active:scale-95"
                style={{ background: "rgba(45,44,62,0.10)", backdropFilter: "blur(6px)" }}
            >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#ff4d4d]">
                    <Phone className="h-6 w-6 text-white" />
                </span>
            </a>
        </div>
    );
}
