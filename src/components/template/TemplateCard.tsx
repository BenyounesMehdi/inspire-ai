import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Template } from "@/types/Types";

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Card
      key={template.title}
      className=" flex flex-col justify-around  transition-colors hover:border-primary "
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-green-100 p-2 ">
            <template.icon className="h-6 w-6 text-primary " />
          </div>
          <div>
            <CardTitle className="text-lg group-hover:text-primary">
              {template.title}
            </CardTitle>
            <CardDescription className="text-xs">
              {template.category}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{template.description}</p>
      </CardContent>
      <CardFooter>
        <Button
          className="mt-4 w-full bg-primary hover:bg-primary"
          size="sm"
          asChild
        >
          <Link href={`/dashboard/generate/${template.title}`}>
            Use Template
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
