import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/siteData';

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalPath = "",
  schema 
}) => {
  const defaultTitle = `${siteConfig.brand.academyName} | Beauty & Makeup Courses in Perambur, Chennai`;
  const defaultDescription = siteConfig.brand.academyShortDesc;
  const siteUrl = "https://shinyglowacademy.com";
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  const defaultKeywords = "beauty academy in Perambur, makeup course in Perambur, beautician course in Chennai, cosmetology course Chennai, nail extension course Chennai, hair extension training Chennai, eyelash extension course Chennai, saree pre-pleating course, makeup academy near me, beauty salon in Perambur, Shiny Plush";

  // Base Educational Organization & Local Business JSON-LD schema
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        "name": siteConfig.brand.academyName,
        "url": siteUrl,
        "telephone": siteConfig.contact.phoneFormatted,
        "email": siteConfig.contact.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.contact.address.line1,
          "addressLocality": "Perambur",
          "addressRegion": "Chennai, Tamil Nadu",
          "postalCode": siteConfig.contact.address.pincode,
          "addressCountry": "IN"
        },
        "sameAs": [
          siteConfig.socials.academyInstagram,
          siteConfig.socials.salonInstagram
        ]
      },
      {
        "@type": "BeautySalon",
        "@id": `${siteUrl}/#salon`,
        "name": siteConfig.brand.salonName,
        "url": `${siteUrl}/#/salon`,
        "telephone": siteConfig.contact.phoneFormatted,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.contact.address.line1,
          "addressLocality": "Perambur",
          "addressRegion": "Chennai, Tamil Nadu",
          "postalCode": siteConfig.contact.address.pincode,
          "addressCountry": "IN"
        }
      }
    ]
  };

  const activeSchema = schema ? schema : baseSchema;

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteConfig.brand.academyName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.brand.academyName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />

      {/* Structured JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(activeSchema)}
      </script>
    </Helmet>
  );
};
