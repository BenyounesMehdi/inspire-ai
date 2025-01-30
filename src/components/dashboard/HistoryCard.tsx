"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ForwardRefEditor } from "../editor/ForwardRefEditor";
import { toast } from "sonner";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { Copy, Download } from "lucide-react";
import { downloadContent } from "@/utils/helpers/download-content";
import { copyContent } from "@/utils/helpers/copy-content";
import ContentEditor from "../editor/ContentEditor";

type HistoryProps = {
  content: {
    id: string;
    template: string;
    prompt: string;
    output: string;
    createdAt: Date;
  };
};

export default function HistoryCard({ content }: HistoryProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="border-secondary-foreground/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="truncate bg-primary py-2 px-3 rounded-full text-muted">
            {content.template}
          </span>
          <span className="text-sm font-normal text-muted-foreground">
            {new Date(content.createdAt).toLocaleDateString()}
          </span>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {content.prompt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="w-full mt-4 hover:bg-secondary">
              View Full Output
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[100vh] ">
            <DialogHeader>
              <DialogTitle className="bg-primary py-2 px-3 rounded-full text-muted w-fit">
                {content.template}
              </DialogTitle>
              <div className="flex space-x-2">
                <Button
                  onClick={() => {
                    copyContent(content.output);
                    toast.success("Copied to clipboard");
                  }}
                >
                  <Copy /> <span className="hidden sm:block">Copy</span>
                </Button>
                <Button
                  onClick={() =>
                    downloadContent(
                      contentRef as React.RefObject<HTMLDivElement>
                    )
                  }
                >
                  <Download /> <span className="hidden sm:block">Download</span>
                </Button>
              </div>
              <DialogDescription>
                Generated on {new Date(content.createdAt).toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="mt-4 h-full max-h-[60vh]">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Prompt</h3>
                  <p className="text-sm text-muted-foreground">
                    {content.prompt}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Generated content</h3>

                  <div ref={contentRef}>
                    {content && <ContentEditor content={content.output} />}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
