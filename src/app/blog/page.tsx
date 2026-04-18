import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Cleaning Tips & Home Care",
  description:
    "Tips and insights on keeping a clean, well-maintained home in Chicago.",
};

// TODO: Replace with dynamic MDX file reading in Phase 4
const posts = [
  {
    slug: "why-personal-cleaning",
    title: "Why a Personal Cleaner Makes All the Difference",
    date: "Coming soon",
    description:
      "What you get when the same person cleans your home every time \u2014 and why franchises can\u2019t match it.",
  },
];

export default function BlogPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-center mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Tips and insights on keeping a clean, comfortable home.
        </p>

        <div className="max-w-2xl mx-auto space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-background-alt rounded-xl p-6 border border-border"
            >
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground">{post.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </section>
  );
}
