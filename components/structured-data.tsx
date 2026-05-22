const siteUrl = "https://bashgit.com";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "BashGit Labs",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    email: "bashgitlabs@gmail.com",
    description:
      "BashGit Labs is a Jaipur, India based software engineering company designing software products, AI-enabled workflows, backend systems, cloud platforms and reliability foundations for serious teams.",
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "Country", name: "India" }
    ],
    knowsAbout: [
      "Software development",
      "Product engineering",
      "AI workflow development",
      "Backend API development",
      "Cloud engineering",
      "DevOps",
      "Reliability engineering",
      "Observability"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "bashgitlabs@gmail.com",
      contactType: "business inquiries",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "BashGit Labs",
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-IN"
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/#services`,
    name: "BashGit Labs software engineering services",
    itemListElement: [
      "Product systems engineering",
      "AI-enabled workflow development",
      "Backend and API platform development",
      "Platform engineering",
      "Cloud and DevOps engineering",
      "Observability and reliability engineering"
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "India"
      }
    }))
  }
];

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c")
      }}
    />
  );
}
