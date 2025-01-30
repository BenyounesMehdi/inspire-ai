import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const downloadContent = async (
  contentRef: React.RefObject<HTMLDivElement>
) => {
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
