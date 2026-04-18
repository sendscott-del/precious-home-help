import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Eco-Friendly Cleaning Tips",
  description:
    "Tips and insights on non-toxic cleaning, HEPA vacuuming, and keeping a healthy home in Chicago.",
};

// TODO: Replace with dynamic MDX file reading in Phase 4
const posts = [
  {
    slug: "non-toxic-home",
    title: "The Health Benefits of a Non-Toxic Home",
    date: "Coming soon",
    description:
      "Why switching to plant-based cleaning products matters for your family\u2019s health.",
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
          Tips and insights on eco-friendly cleaning and keeping a healthy home.
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
