import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "@/data/faq.json";

interface FaqItem {
  question: string;
  answer: string;
  tags: string[];
}

export function FaqAccordion() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-serif font-bold text-3xl mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Find answers to common questions about our AI assistant
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {(faqData as FaqItem[]).map((faq, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="border-border"
          >
            <AccordionTrigger className="text-left font-medium hover:text-pink hover:no-underline">
              <div className="flex flex-col items-start gap-2 w-full">
                <span>{faq.question}</span>
                <div className="flex flex-wrap gap-1">
                  {faq.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
