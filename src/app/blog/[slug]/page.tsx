import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// TODO: Replace with dynamic MDX rendering in Phase 4
export const metadata: Metadata = {
  title: "Blog Post",
  description: "Eco-friendly cleaning tips from Precious Home Help.",
};

export default function BlogPostPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24">
        <p className="text-sm text-muted-foreground mb-4">
          <Link
            href="/blog"
            className="hover:text-foreground transition-colors"
          >
            &larr; Back to blog
          </Link>
        </p>

        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Blog post coming soon
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          This blog post is currently being written. Check back soon for
          eco-friendly cleaning tips and insights.
        </p>

        <div className="mt-12 bg-background-alt rounded-2xl p-8 border border-border text-center">
          <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
            Ready for a cleaner home?
          </h2>
          <p className="text-muted-foreground mb-4">
            Get a personalized quote for eco-friendly cleaning in Chicago.
          </p>
          <Button
            render={<Link href="/book" />}
            className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg"
          >
            Request a Quote
          </Button>
        </div>
      </div>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </section>
  );
}
