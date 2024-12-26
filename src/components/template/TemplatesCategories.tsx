import { categories } from "@/constants/Constants";
import { Button } from "../ui/button";

type TemplatesCategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function TemplatesCategories({
  selectedCategory,
  setSelectedCategory,
}: TemplatesCategoriesProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={
              selectedCategory === category
                ? "bg-primary hover:bg-primary"
                : "hover:text-primary hover:border-primary"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}
