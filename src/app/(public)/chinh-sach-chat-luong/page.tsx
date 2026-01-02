import type { Metadata } from "next";
import { qualityPolicyContent } from "@/content/qualityPolicy";
import QualityPolicyView from "@/components/sections/quality-policy/QualityPolicyView";

export const metadata: Metadata = {
  title: qualityPolicyContent.seo.title,
  description: qualityPolicyContent.seo.description,
  alternates: { canonical: qualityPolicyContent.seo.canonical },
  openGraph: {
    title: qualityPolicyContent.seo.title,
    description: qualityPolicyContent.seo.description,
    url: qualityPolicyContent.seo.canonical,
    type: "website",
  },
};

export default function Page() {
  return <QualityPolicyView />;
}
