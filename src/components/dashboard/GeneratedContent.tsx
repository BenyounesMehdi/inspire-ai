import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Copy, Download } from "lucide-react";
import ContentEditor from "../editor/ContentEditor";
import { toast } from "sonner";

type GeneratedContentProps = {
  content: string;
};
export default function GeneratedContent({ content }: GeneratedContentProps) {
  const handleDownload = () => {
    const fileName = "generated-content.md";

    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-md md:text-xl">Generated Content</p>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                navigator.clipboard.writeText(content);
                toast.success("Copied to clipboard");
              }}
            >
              <Copy /> Copy
            </Button>
            <Button onClick={handleDownload}>
              <Download /> Download
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-96 overflow-y-scroll">
        {content && <ContentEditor content={content} />}
      </CardContent>
    </Card>
  );
}
