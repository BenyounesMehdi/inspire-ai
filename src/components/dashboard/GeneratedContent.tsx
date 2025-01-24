import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import ContentEditor from "../editor/ContentEditor";

type GeneratedContentProps = {
  content: string;
};
export default function GeneratedContent({ content }: GeneratedContentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-xl">Generated Content</p>
          <Button>
            <Copy /> Copy
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-80 overflow-y-scroll">
        {content && <ContentEditor content={content} />}
      </CardContent>
    </Card>
  );
}
