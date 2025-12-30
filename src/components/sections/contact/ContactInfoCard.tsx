import Container from "@/components/layout/Container";
import Reveal from "@/components/common/Reveal";
import type { ContactPageData } from "@/types/contact";

type Props = { data: ContactPageData["info"] };

export default function ContactInfoCard({ data }: Props) {
    return (
        <div
            className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            style={{ borderColor: "rgba(25,36,52,0.12)" }}
        >
            <div className="p-6">
                <Reveal variant="up">
                    <div className="text-lg font-extrabold" style={{ color: "var(--dt-navy)" }}>
                        {data.title}
                    </div>
                </Reveal>

                <div className="mt-4 space-y-3 text-sm" style={{ color: "var(--dt-navy)" }}>
                    {data.items.map((it) => (
                        <div key={it.label} className="flex gap-2">
                            <div className="min-w-[72px] font-semibold opacity-80">{it.label}:</div>
                            {it.href ? (
                                <a href={it.href} className="font-semibold underline underline-offset-4">
                                    {it.value}
                                </a>
                            ) : (
                                <div className="opacity-90">{it.value}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Map */}
            <div className="border-t" style={{ borderColor: "rgba(25,36,52,0.12)" }}>
                <div className="relative h-[280px] w-full bg-white">
                    <iframe
                        title={data.map.title}
                        src={data.map.embedUrl}
                        className="h-full w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Working hours */}
            <div className="border-t p-6" style={{ borderColor: "rgba(25,36,52,0.12)" }}>
                <div className="text-base font-extrabold" style={{ color: "var(--dt-navy)" }}>
                    {data.workingHours.title}
                </div>
                <div className="mt-2 space-y-1 text-sm opacity-85" style={{ color: "var(--dt-navy)" }}>
                    {data.workingHours.lines.map((line) => (
                        <div key={line}>{line}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
