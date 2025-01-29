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
        <div ref={contentRef}>
          {content && <ContentEditor content={content} />}
        </div>
      </CardContent>
    </Card>
  );
}
