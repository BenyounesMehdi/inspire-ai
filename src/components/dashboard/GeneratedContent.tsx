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
import { toast } from "sonner";

type GeneratedContentProps = {
  content: string;
};
export default function GeneratedContent({ content }: GeneratedContentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-xl">Generated Content</p>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(content);
              toast.success("Copied to clipboard");
            }}
          >
            <Copy /> Copy
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-96 overflow-y-scroll">
        {content && <ContentEditor content={content} />}
      </CardContent>
    </Card>
  );
}
