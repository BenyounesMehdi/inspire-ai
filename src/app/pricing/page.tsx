import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/constants/Constants";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { createSubscription } from "@/utils/actions/create-subscription";
import SubmitButton from "@/components/shared/SubmitButton";
import { getUserSubscription } from "@/utils/data/subscription/get-user-subscription";

export default async function PricingPage() {
  const SubscribedUser = await getUserSubscription();
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Choose the perfect plan for your needs
          </h1>
        </div>

        <div className="grid gap-8 max-w-3xl mx-auto md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg"
                  : "border-secondary-foreground/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {plan.popular ? (
                  SubscribedUser?.status === "active" ? (
                    <Button asChild className="w-full   ">
                      <Link href="/dashboard/generate">Go to Dashboard</Link>
                    </Button>
                  ) : (
                    <form className="w-full" action={createSubscription}>
                      <SubmitButton label="Get Started" />
                    </form>
                  )
                ) : (
                  <Button
                    variant={"ghost"}
                    asChild
                    className="w-full bg-secondary text-muted-foreground "
                  >
                    <Link href="/dashboard/generate">Try for free</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
