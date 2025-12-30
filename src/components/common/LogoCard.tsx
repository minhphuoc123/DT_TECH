import Image from "next/image";
import Link from "next/link";
import type { LogoItem } from "@/types/clients";

type Props = {
    data: LogoItem;
    size?: "md" | "lg" | "xl";
};

const SIZE_MAP = {
    md: "h-28 w-28", // 112
    lg: "h-32 w-32", // 128
    xl: "h-36 w-36", // 144
} as const;

export default function LogoCard({ data, size = "lg" }: Props) {
    const box = (
        <div
            className={`grid place-items-center rounded-2xl border bg-white shadow-sm transition hover:shadow-md ${SIZE_MAP[size]}`}
            style={{ borderColor: "rgba(25,36,52,0.12)" }}
            title={data.name}
        >
            {/* Safe area lớn hơn để logo trông “đầy” */}
            <div className="relative h-[78%] w-[78%]">
                <Image src={data.logo.src} alt={data.logo.alt} fill className="object-contain" />
            </div>
        </div>
    );

    return data.href ? <Link href={data.href}>{box}</Link> : box;
}
