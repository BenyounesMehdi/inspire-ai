import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-primary animate-in zoom-in" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>Thank you for your purchase</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-2 text-muted-foreground">
          <p>
            Your payment has been processed successfully. You can now continue
            using our services.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="w-full">
            <Link href="/dashboard/generate">
              Go to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
