export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Digitech Search Labs",
    "description": "Specialized SEO and technical optimization services. Expert in crawl health, local SEO, and AI retrieval engines.",
    "image": "https://digitechsearchlabs.com/og-image.jpg",
    "url": "https://digitechsearchlabs.com",
    "telephone": "+918368889393",
    "email": "contact@digitechsearchlabs.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, WB-1, Shakarpur",
      "addressLocality": "Delhi",
      "addressRegion": "DL",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6304",
      "longitude": "77.2774"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:00"
      }
    ],
    "founder": {
      "@type": "Organization",
      "name": "Digitech Computers",
      "foundingDate": "1997"
    },
    "sameAs": [
      "https://www.facebook.com/digitechsearchlabs",
      "https://www.linkedin.com/company/digitech-search-labs"
    ],
    "knowsAbout": [
      "Technical SEO",
      "Local SEO",
      "Google Business Profile",
      "Generative Engine Optimization",
      "Medical SEO",
      "Core Web Vitals",
      "JSON-LD Schema",
      "Google Search Ads"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
