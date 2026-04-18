import type { Metadata } from "next";

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

          {/* Quote form will be built in Phase 3 */}
          <div className="bg-background-alt rounded-2xl p-8 border border-border text-center">
            <p className="text-muted-foreground">
              Quote form coming soon. In the meantime, call or text{" "}
              <a
                href="tel:8722359880"
                className="text-primary hover:text-primary-hover font-medium"
              >
                (872) 235-9880
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
