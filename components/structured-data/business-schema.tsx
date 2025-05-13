export default function BusinessSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TechnicalSchool",
    name: "Daniel Muronzi Welding Training Centre",
    description:
      "Empowering individuals with real-world welding skills through excellence, innovation, and practical education.",
    url: "https://meronzi-welding-centre.vercel.app",
    logo: "https://meronzi-welding-centre.vercel.app/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "978, Mugabe Heights, Borrowdale North",
      addressLocality: "Harare",
      addressRegion: "Harare Province",
      postalCode: "",
      addressCountry: "Zimbabwe",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.7386,
      longitude: 31.0857,
    },
    telephone: "+263785054159",
    email: "futuremillionairezw@gmail.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "00:00",
        closes: "00:00",
      },
    ],
    sameAs: ["https://www.facebook.com/people/Daniel-Muronzi/100093815093396/?fref=nf&ref=embed_post"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Welding Courses",
      itemListElement: [
        {
          "@type": "Course",
          name: "Shielded Metal Arc Welding (SMAW)",
          description: "Master the fundamentals of stick welding with hands-on training.",
          provider: {
            "@type": "Organization",
            name: "Daniel Muronzi Welding Training Centre",
          },
        },
        {
          "@type": "Course",
          name: "TIG Welding",
          description: "Learn precision welding techniques for thin materials and detailed work.",
          provider: {
            "@type": "Organization",
            name: "Daniel Muronzi Welding Training Centre",
          },
        },
        {
          "@type": "Course",
          name: "MIG Welding",
          description: "Develop skills in the most versatile and widely used welding process.",
          provider: {
            "@type": "Organization",
            name: "Daniel Muronzi Welding Training Centre",
          },
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
}
