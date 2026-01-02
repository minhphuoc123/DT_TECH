import type { Metadata } from "next";
import ProjectsView from "@/components/sections/projects/ProjectsView";
import { PROJECTS_PAGE } from "@/content/projects";

export const metadata: Metadata = {
    title: `${PROJECTS_PAGE.seo.title} | DT-TECH`,
    description: PROJECTS_PAGE.seo.description,
    alternates: { canonical: PROJECTS_PAGE.seo.canonical },
};

export default function Page() {
    return <ProjectsView />;
}
