import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import TiptapEditor from "../editor/TiptapEditor";

type GeneratedContentProps = {
  content: string;
};
export default function GeneratedContent({ content }: GeneratedContentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          Generated Content
          <Button>
            <Copy /> Copy
          </Button>
        </CardTitle>
        <CardDescription>
          Your generated content will appear here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TiptapEditor content={content} />
      </CardContent>
    </Card>
  );
}
