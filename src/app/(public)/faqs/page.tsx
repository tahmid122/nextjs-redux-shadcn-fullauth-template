import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface TFaq {
  id: string;
  question: string;
  answer: string;
}
const faqsData: TFaq[] = [
  {
    id: "item-1",
    question: "How do I verify my account?",
    answer:
      "To verify your account, please check your email for a verification link. If you don't see it, please check your spam folder.",
  },
  {
    id: "item-2",
    question: "How long do listings stay active?",
    answer:
      "Listings stay active for 30 days. After that, they will be automatically removed from the platform.",
  },
  {
    id: "item-3",
    question: "How Do I Track My Rental",
    answer:
      "You can track your rental by logging into your account and navigating to the 'My Rentals' section. Here you will find all your active and past rentals.",
  },
  {
    id: "item-4",
    question: "Can I Cancel a Confirmed Rental?",
    answer:
      "Yes, you can cancel a confirmed rental before the start date. Please contact the platform support team for assistance.",
  },
  {
    id: "item-5",
    question: "What If I Have an Emergency During My Rental?",
    answer:
      "If you have an emergency during your rental, please contact the platform support team immediately. We will do our best to assist you.",
  },
];
const FAQS = () => {
  return (
    <ContainerWrapper className="py-5 xl:py-15 space-y-5">
      <div className="lg:max-w-1/2 mx-auto">
        {/* title */}
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Frequently asked questions{" "}
          </h1>
          <p className="text-center text-gray-600 text-sm">
            Everything you need to know about the product and billing.
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
        </div>
        {/* accordion */}
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqsData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-base lg:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ContainerWrapper>
  );
};

export default FAQS;
