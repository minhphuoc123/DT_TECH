import Reveal from "@/components/common/Reveal";
import Stagger from "@/components/common/Stagger";
import type { ContactPageData } from "@/types/contact";

import { FaPhoneAlt, IoMdMail, FaLocationDot, FaClock } from "@/components/icons";

type Props = { data: ContactPageData["info"] };

function iconForLabel(label: string) {
    const l = label.toLowerCase();
    if (l.includes("email")) return <IoMdMail />;
    if (l.includes("hotline") || l.includes("điện thoại") || l.includes("phone")) return <FaPhoneAlt />;
    if (l.includes("địa chỉ") || l.includes("address")) return <FaLocationDot />;
    return "ℹ️";
}

export default function ContactInfoCard({ data }: Props) {
    const border = "rgba(25,36,52,0.12)";

    return (
        <section className="overflow-hidden rounded-2xl border bg-white shadow-sm" style={{ borderColor: border }}>
            {/* Header */}
            <div className="p-6 md:p-7">
                <Reveal variant="up">
                    <h2 className="text-lg font-extrabold" style={{ color: "var(--dt-navy)" }}>
                        {data.title}
                    </h2>
                </Reveal>
                <Reveal variant="up" delay={90}>
                    <p className="mt-2 text-sm opacity-80" style={{ color: "var(--dt-navy)" }}>
                        Vị trí văn phòng & thông tin liên hệ của DT-TECH.
                    </p>
                </Reveal>
            </div>

            {/* Body */}
            <div className="grid md:grid-cols-2">
                {/* Left: Map */}
                <div className="relative min-h-[340px] border-t md:border-r md:border-t-0" style={{ borderColor: border }}>
                    <iframe
                        title={data.map.title}
                        src={data.map.embedUrl}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Right: Stats */}
                <div className="border-t p-6 md:border-t-0 md:p-7" style={{ borderColor: border }}>
                    <Stagger className="grid gap-3" variant="up" startDelay={0} step={90}>
                        {data.items.map((it) => (
                            <div
                                key={it.label}
                                className="rounded-xl border p-4"
                                style={{
                                    borderColor: "rgba(25,36,52,0.12)",
                                    background: "var(--dt-muted)",
                                }}
                            >
                                <div className="flex items-center gap-2 text-xs font-semibold opacity-80" style={{ color: "var(--dt-navy)" }}>
                                    <span aria-hidden="true">{iconForLabel(it.label)}</span>
                                    <span>{it.label}</span>
                                </div>

                                <div className="mt-1 text-sm font-extrabold" style={{ color: "var(--dt-navy)" }}>
                                    {it.href ? (
                                        <a href={it.href} className="underline underline-offset-4">
                                            {it.value}
                                        </a>
                                    ) : (
                                        it.value
                                    )}
                                </div>
                            </div>
                        ))}

                        <div
                            className="rounded-xl border p-4"
                            style={{
                                borderColor: "rgba(25,36,52,0.12)",
                                background: "white",
                            }}
                        >
                            <div className="flex items-center gap-2 text-xs font-semibold opacity-80" style={{ color: "var(--dt-navy)" }}>
                                <span aria-hidden="true"><FaClock /></span>
                                <span>{data.workingHours.title}</span>
                            </div>

                            <div className="mt-2 space-y-1 text-sm opacity-85" style={{ color: "var(--dt-navy)" }}>
                                {data.workingHours.lines.map((line) => (
                                    <div key={line}>{line}</div>
                                ))}
                            </div>
                        </div>
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
