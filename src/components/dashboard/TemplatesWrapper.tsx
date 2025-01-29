"use client";

import { useState } from "react";
import TemplateCard from "../template/TemplateCard";
import TemplatesCategories from "../template/TemplatesCategories";
import { templates } from "@/constants/Constants";

type TemplatedWrapperProps = {
  isSubscribed: boolean;
};

export default function TemplatesWrapper({
  isSubscribed,
}: TemplatedWrapperProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from templates
  const allCategories = Array.from(new Set(templates.map((t) => t.category)));

  // Determine displayed categories based on subscription
  const filteredCategories = isSubscribed
    ? allCategories
    : allCategories.slice(0, 3);

  // Filter templates that belong to the selected categories (including "All")
  const filteredTemplates = templates.filter((template) =>
    selectedCategory === "All"
      ? filteredCategories.includes(template.category)
      : template.category === selectedCategory
  );

  // Include "All" as an option, but it should only contain templates from filtered categories
  const displayedCategories = ["All", ...filteredCategories];

  return (
    <div className="container w-full px-5 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Browse all templates
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          What would you like to generate today?
        </p>
      </div>

      <TemplatesCategories
        catergories={displayedCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.title} template={template} />
        ))}
      </div>
    </div>
  );
}
