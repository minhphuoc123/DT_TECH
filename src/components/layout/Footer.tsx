import Link from "next/link";
import Container from "./Container";

export default function Footer() {
    return (
        <footer style={{ background: "var(--dt-navy)" }}>
            <div className="h-1 w-full" style={{ background: "var(--dt-yellow)" }} />

            <Container className="py-12">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <div className="text-base font-semibold text-white">DT-TECH</div>
                        <p className="mt-3 text-sm text-white/80">
                            Công nghệ thông minh – Giải pháp bền vững. Giải pháp viễn thông, CNTT, tích hợp hệ thống và chuyển đổi số.
                        </p>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-white">Liên kết</div>
                        <ul className="mt-4 space-y-2 text-sm">
                            {[
                                { href: "/dich-vu", label: "Dịch vụ" },
                                { href: "/du-an", label: "Dự án" },
                                { href: "/khach-hang-doi-tac", label: "Khách hàng & Đối tác" },
                                { href: "/cong-bo-thong-tin", label: "Công bố thông tin" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-white/80 hover:text-white"
                                    >
                                        <span className="mr-2" style={{ color: "var(--dt-yellow)" }}>•</span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-white">Liên hệ</div>
                        <ul className="mt-4 space-y-2 text-sm text-white/80">
                            <li>
                                <span className="font-medium text-white">Hotline:</span> 090 827 8868
                            </li>
                            <li>
                                <span className="font-medium text-white">Email:</span> Sales@dt-tech.vn
                            </li>
                            <li>
                                <span className="font-medium text-white">Địa chỉ:</span> Số 4 ngõ 10/117 Trần Cung, phường Nghĩa Đô, Hà Nội
                            </li>
                        </ul>

                        <Link
                            href="/lien-he"
                            className="mt-5 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
                            style={{ background: "var(--dt-yellow)", color: "var(--dt-navy)" }}
                        >
                            Gửi yêu cầu tư vấn
                        </Link>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 text-xs text-white/60" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                    © {new Date().getFullYear()} DT-TECH. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
