import GenerateWrapper from "@/components/dashboard/GenerateWrapper";

import { templates } from "@/constants/Constants";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const template = (await params).template;
  const decodedSlug = decodeURIComponent(template);
  const selectedTemplate = templates.find((t) => t.title === decodedSlug);

  if (!selectedTemplate) return notFound();
  return (
    <GenerateWrapper
      title={selectedTemplate.title}
      description={selectedTemplate.description}
    />
  );
}
