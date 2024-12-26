"use client";

import { useState } from "react";

import { templates } from "@/constants/Constants";
import TemplateCard from "@/components/template/TemplateCard";
import TemplatesCategories from "@/components/template/TemplatesCategories";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="container w-full  px-5 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Browse all templates
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          What would you like to generate today?
        </p>
      </div>

      <TemplatesCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.title} template={template} />
        ))}
      </div>
    </div>
  );
}
