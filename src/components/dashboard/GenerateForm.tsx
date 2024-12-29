import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { State } from "@/types/Types";
import { generateContent } from "@/utils/actions/generate-content";
import { FileText, Loader2 } from "lucide-react";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import { toast } from "sonner";

type GenerateFormProps = {
  title: string;
  description: string;
  setContent: Dispatch<SetStateAction<string | undefined>>;
};

export default function GenerateForm({
  title,
  description,
  setContent,
}: GenerateFormProps) {
  const initialState: State = {
    status: undefined,
    message: "",
  };
  const [state, formAction, isPending] = useActionState(
    generateContent,
    initialState
  );

  useEffect(() => {
    if (state?.status === "error") toast.error(state.message);
    else if (state?.status === "success") {
      setContent(state.content as string);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-green-100 p-2 ">
              <FileText className="h-6 w-6 text-primary " />
            </div>
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="additional">Enter your prompt here</Label>
              <Textarea
                name="prompt"
                id="additional"
                className="min-h-[100px]"
              />
            </div>
            <>
              {!isPending ? (
                <Button className="w-full bg-primary hover:bg-primary/85">
                  Generate Content
                </Button>
              ) : (
                <Button disabled className="w-full bg-primary ">
                  <Loader2 className="animate-spin" /> <span>Please wait</span>
                </Button>
              )}
            </>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
