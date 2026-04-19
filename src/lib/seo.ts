export const siteConfig = {
  name: "Precious Home Help",
  description:
    "Owner-operated, personal house cleaning for Chicago's South Side neighborhoods.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://precioushomehelp.com",
  phone: "+1-872-235-9880",
  priceRange: "$25/hr",
  areaServed: [
    "Hyde Park, Chicago, IL",
    "Woodlawn, Chicago, IL",
    "Bronzeville, Chicago, IL",
  ],
};

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    name: siteConfig.name,
    image: `${siteConfig.url}/og.jpg`,
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
  };
}
