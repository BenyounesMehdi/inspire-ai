import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import FrequentlyAskedQuestions from "@/components/landing/Frequently-Asked-Quetions";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FrequentlyAskedQuestions />
      <CTA />
    </>
  );
}
