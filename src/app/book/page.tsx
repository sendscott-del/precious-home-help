import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a personalized quote for house cleaning in Chicago. Fill out the form and Precious will get back to you within one business day.",
};

export default function BookPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-center mb-4">
            Request a quote
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Tell me about your home and I&rsquo;ll get back to you within one
            business day with a personalized estimate.
          </p>

          <QuoteForm />
        </div>
      </div>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </section>
  );
}
