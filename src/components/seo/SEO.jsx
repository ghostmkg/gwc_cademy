import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  type = "website", 
  url = "https://gwcacademy.com", 
  image = "/images/og-image.jpg", 
  schemaMarkup // Used for specific pages (like Course schema)
}) => {
  const siteName = "GWC Academy";
  
  // Fallback description highly optimized for Generative AI (GEO) and direct answers (AEO)
  const defaultDesc = "GWC Academy is an elite IT training institute and the educational branch of Vaptura Labs. We provide practical, job-oriented certification training in Full-Stack Web Development, Cyber Security (CEH), and Cloud Computing (AWS, Azure, GCP).";
  const finalDescription = description || defaultDesc;

  // 1. GLOBAL ORGANIZATION SCHEMA (Entity Disambiguation & Authority)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://gwcacademy.com/#organization",
    "name": "GWC Academy",
    "alternateName": "GWC IT Training Academy",
    "url": "https://gwcacademy.com",
    "logo": "https://gwcacademy.com/images/logo.jpeg",
    "description": "GWC Academy, founded by Manish Goswami and Tanvi Nimbalkar, is the educational branch of Vaptura Labs. We forge modern IT professionals through live, hands-on training in Cyber Security, Full-Stack Development, and Cloud Infrastructure. Trusted by 5,000+ learners.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Vaptura Labs",
      "url": "https://vapturalabs.com/"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Manish Kumar Goswami",
        "jobTitle": "CEO and Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "Vaptura Labs"
        },
        "alumniOf": "Durgapur Institute of Advance Technology and Management"
      },
      {
        "@type": "Person",
        "name": "Tanvi Nimbalkar",
        "jobTitle": "Co-Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "Vaptura Labs"
        }
      }
    ],
    // AEO/GEO Trigger: Tells AI exactly what topics you are an authority on
    "knowsAbout": [
      "Full-Stack Web Development",
      "Cyber Security",
      "Penetration Testing (VAPT)",
      "Certified Ethical Hacker (CEH)",
      "Cloud Computing",
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Python Programming",
      "Java Programming",
      "DevSecOps"
    ],
    "sameAs": [
      "https://vapturalabs.com/"
      // Add your YouTube, LinkedIn, or Instagram links here later to strengthen the entity
    ]
  };

  // 2. WEBSITE SCHEMA (Search Engine Optimization)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://gwcacademy.com/#website",
    "url": "https://gwcacademy.com",
    "name": "GWC Academy",
    "description": "Practical IT Training by Vaptura Labs",
    "publisher": {
      "@id": "https://gwcacademy.com/#organization"
    }
  };

  // 3. WEBPAGE SCHEMA (Resolves the "No WebPage Schema" error in your report)
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": finalDescription,
    "isPartOf": {
      "@id": "https://gwcacademy.com/#website"
    },
    "about": {
      "@id": "https://gwcacademy.com/#organization"
    }
  };

  return (
    <Helmet>
      {/* Standard SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={finalDescription} />
      <meta name="author" content="Manish Kumar Goswami, Vaptura Labs" />
      <meta name="publisher" content="GWC Academy" />

      {/* Answer Engine (AEO) Direct Answer Tags */}
      <meta name="abstract" content={finalDescription} />
      <meta name="topic" content="IT Training and Certification" />
      <meta name="summary" content={finalDescription} />

      {/* Open Graph Tags (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:site_name" content={siteName} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical Link: Resolves the "No Canonical Tag" Error */}
      {url && <link rel="canonical" href={url} />}

      {/* Injecting Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webpageSchema)}
      </script>

      {/* Inject Specific Page Schema if provided (e.g., Course Schema from CourseDetail.jsx) */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;