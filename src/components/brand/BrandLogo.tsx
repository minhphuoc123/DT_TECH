import Image from "next/image";

type BrandLogoProps = {
    height?: number;          
    priority?: boolean;
    className?: string;
};

export default function BrandLogo({
    height = 36,
    priority = true,
    className = "",
}: BrandLogoProps) {
    const width = Math.round(height * 3.2);

    return (
        <Image
            src="/images/logo.png"
            alt="DT-TECH"
            width={width}
            height={height}
            priority={priority}
            className={className}
            style={{ height, width: "auto" }}
        />
    );
}
