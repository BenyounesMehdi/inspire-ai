import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Copy, Download } from "lucide-react";
import ContentEditor from "../editor/ContentEditor";
import { toast } from "sonner";
import { useRef } from "react";
import { copyContent } from "@/utils/helpers/copy-content";
import { downloadContent } from "@/utils/helpers/download-content";
type GeneratedContentProps = {
  content: string;
};
export default function GeneratedContent({ content }: GeneratedContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    if (contentRef.current) {
      await downloadContent(contentRef as React.RefObject<HTMLDivElement>);
    }
  };

  const handleCopy = (content: string) => {
    copyContent(content);
    toast.success("Copied to clipboard");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-md md:text-xl">Generated Content</p>
          <div className="flex gap-2">
            <Button disabled={!content} onClick={() => handleCopy(content)}>
              <Copy /> <span className="hidden sm:block">Copy</span>
            </Button>
            <Button onClick={handleDownload} disabled={!content}>
              <Download /> <span className="hidden sm:block">Download</span>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-96 overflow-y-scroll">
        <div ref={contentRef}>
          {content && <ContentEditor content={content} />}
        </div>
      </CardContent>
    </Card>
  );
}
