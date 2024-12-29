"use client";

import { useState } from "react";
import GeneratedContent from "./GeneratedContent";
import GenerateForm from "./GenerateForm";

type GenerateWrapperProps = {
  title: string;
  description: string;
};

export default function GenerateWrapper({
  title,
  description,
}: GenerateWrapperProps) {
  const [content, setContent] = useState<string | undefined>();
  return (
    <div className="container px-3 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <GenerateForm
          title={title}
          description={description}
          setContent={setContent}
        />
        <GeneratedContent content={content as string} />
      </div>
    </div>
  );
}
