export default function GlowBackdrop() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
                className="absolute -left-28 -top-28 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(253,202,2,0.20)" }}
            />
            <div
                className="absolute -right-24 top-16 h-96 w-96 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(25,36,52,0.12)" }}
            />
            <div
                className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(29,78,160,0.10)" }}
            />
        </div>
    );
}