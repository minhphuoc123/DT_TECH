import Image from "next/image";
import type { ProjectItem } from "@/types/project";

function badgeTheme(category: ProjectItem["category"]) {
    switch (category) {
        case "Viễn thông vệ tinh":
            return { bg: "var(--dt-blue)", fg: "white" };     
        case "An ninh giám sát":
            return { bg: "var(--dt-navy)", fg: "white" };    
        case "Smart City":
            return { bg: "var(--dt-yellow)", fg: "var(--dt-navy)" }; 
        case "Năng lượng":
            return { bg: "#0f766dc4", fg: "white" };         
        case "IoT đo lường":
            return { bg: "#7c3aedcc", fg: "white" };       
        case "Hạ tầng & ELV":
            return { bg: "#111827d3", fg: "white" };            
        case "Công nghiệp":
            return { bg: "#b45309cb", fg: "white" };      
        default:
            return { bg: "var(--dt-navy)", fg: "white" };
    }
}

export default function ProjectCard({ project }: { project: ProjectItem }) {
    const theme = badgeTheme(project.category);

    return (
        <article
            className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: "rgba(25,36,52,0.12)" }}
        >
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.featured}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0,0,0,0.00) 40%, rgba(0,0,0,0.55) 100%)",
                    }}
                />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span
                        className="rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
                        style={{
                            background: theme.bg,
                            color: theme.fg,
                            border: "1px solid rgba(255,255,255,0.22)",
                            textShadow: theme.fg === "white" ? "0 1px 1px rgba(0,0,0,0.25)" : "none",
                        }}
                    >
                        {project.category}
                    </span>

                    {project.featured ? (
                        <span
                            className="rounded-full px-3 py-1 text-xs font-bold shadow-sm"
                            style={{
                                background: "white",
                                color: "var(--dt-navy)",
                                border: "1px solid rgba(25,36,52,0.12)",
                            }}
                        >
                            Nổi bật
                        </span>
                    ) : null}
                </div>

                {/* title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-semibold text-white md:text-lg">
                        {project.title}
                    </h3>
                </div>

                {/* shine nhẹ */}
                <div
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl opacity-0 transition group-hover:opacity-100"
                    style={{ background: "rgba(253,202,2,0.22)" }}
                />
            </div>
        </article>
    );
}
