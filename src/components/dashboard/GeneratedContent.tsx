import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "../ui/textarea";

type GeneratedContentProps = {
  content: string;
};

export default function GeneratedContent({ content }: GeneratedContentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generated Content</CardTitle>
        <CardDescription>
          Your generated content will appear here
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Generated content will appear here..."
          className="min-h-[400px]"
          readOnly
          value={content}
        />
      </CardContent>
    </Card>
  );
}
