import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import FrequentlyAskedQuestions from "@/components/landing/Frequently-Asked-Quetions";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FrequentlyAskedQuestions />
      <CTA />
    </>
  );
}
