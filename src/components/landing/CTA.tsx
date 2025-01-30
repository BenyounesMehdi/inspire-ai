import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-tr-lg rounded-tl-lg bg-gradient-to-r from-green-400 to-green-600 px-6 py-16 sm:px-12 sm:py-24 md:px-20">
        <div className=" flex flex-col items-center gap-4 text-center text-muted">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
            Ready to transform your content?
          </h2>
          <p className=" text-muted/90 md:text-xl">
            Join thousands of content creators who are already using our
            platform to create amazing content faster than ever.
          </p>
          <div className="mt-4 flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/dashboard/generate">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-muted border-muted hover:bg-muted/10"
              asChild
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
