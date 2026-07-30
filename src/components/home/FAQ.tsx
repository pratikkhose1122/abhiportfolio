import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "For an MVP or a standard website, it typically takes 4-6 weeks from kickoff to launch. More complex SaaS platforms or mobile apps can take 2-4 months depending on the scope.",
    },
    {
      q: "Who owns the code?",
      a: "You do. Once the project is paid in full, all intellectual property, source code, and assets are 100% transferred to your ownership.",
    },
    {
      q: "Do you offer post-launch maintenance?",
      a: "Yes. I offer retainer packages for ongoing maintenance, feature updates, and technical support to ensure your product continues to perform optimally.",
    },
    {
      q: "How do we communicate during the project?",
      a: "We will have a dedicated Slack/Discord channel for day-to-day communication, and we'll schedule weekly check-in calls to review progress and milestones.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
            Frequently Asked
          </h2>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-accent-blue transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
