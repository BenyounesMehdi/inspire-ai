import { questionsAndAnswers } from "@/constants/Constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FrequentlyAskedQuestions() {
  return (
    <section className="container mx-auto py-8 space-y-6 md:py-12 lg:py-24 px-7">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Frequently asked questions
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to know about our platform
        </p>
      </div>
      <div className="mx-auto max-w-[58rem] mt-8">
        <Accordion type="single" collapsible className="w-full">
          {questionsAndAnswers.map((e) => {
            return (
              <AccordionItem value={`item ^${e.id}`} key={e.id}>
                <AccordionTrigger className="font-semibold text-lg ">
                  {e.question}
                </AccordionTrigger>
                <AccordionContent className="font-medium text-muted-foreground">
                  {e.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
