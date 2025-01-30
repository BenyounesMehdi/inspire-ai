import { ArrowRight, Sparkles, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SubmitButton from "@/components/shared/SubmitButton";
import { createCustomPortal } from "@/utils/actions/create-custom-portal";
import { getUserSubscription } from "@/utils/data/subscription/get-user-subscription";
import Link from "next/link";

export default async function Page() {
  const SubscribedUser = await getUserSubscription();
  if (!SubscribedUser) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles className="h-12 w-12 text-primary animate-pulse" />
            </div>
            <CardTitle className="text-2xl">Upgrade Your Experience</CardTitle>
            <CardDescription>
              Get access to premium features and enhanced capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Button asChild className="w-full">
              <Link href="/pricing">
                View Pricing Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Wallet className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Manage Subscription</CardTitle>
          <CardDescription>
            Update your billing information and subscription preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            You will be redirected to Stripe's secure customer portal to manage
            your subscription.
          </p>
          <form action={createCustomPortal}>
            <SubmitButton label="Continue to Stripe" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
