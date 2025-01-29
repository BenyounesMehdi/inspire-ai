import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Copy, Download } from "lucide-react";
import ContentEditor from "../editor/ContentEditor";
import { toast } from "sonner";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
type GeneratedContentProps = {
  content: string;
};
export default function GeneratedContent({ content }: GeneratedContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleDownload = async () => {
    if (!contentRef.current) return;

    // Capture content as an image
    const canvas = await html2canvas(contentRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Get the dynamic height based on the content
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [imgWidth, imgHeight], // Dynamically set height
    });

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("generated-content.pdf");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-md md:text-xl">Generated Content</p>
          <div className="flex gap-2">
            <Button
              disabled={!content}
              onClick={() => {
                const plainText = content
                  .replace(/!\[.*?\]\(.*?\)/g, "") // Remove images
                  .replace(/\[([^\]]+)\]\((.*?)\)/g, "$1") // Remove links but keep the text
                  .replace(/`([^`]+)`/g, "$1") // Remove inline code
                  .replace(/#+\s(.+)/g, "$1") // Remove headers
                  .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold formatting
                  .replace(/\*(.*?)\*/g, "$1") // Remove italic formatting
                  .replace(/~~(.*?)~~/g, "$1") // Remove strikethrough
                  .replace(/>\s?(.*)/g, "$1") // Remove blockquotes
                  .replace(/-\s(.*)/g, "$1") // Remove list dashes
                  .replace(/\*\s(.*)/g, "$1") // Remove list asterisks
                  .replace(/\d+\.\s(.*)/g, "$1") // Remove ordered list numbers
                  .replace(/\n{2,}/g, "\n") // Reduce multiple newlines to a single newline
                  .trim();

                navigator.clipboard.writeText(plainText);
                toast.success("Copied to clipboard");
              }}
            >
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
