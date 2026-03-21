import { Helmet } from "react-helmet-async";

/**
 * Drop-in SEO component.
 *
 * Usage:
 *   <SEO
 *     title="Projects"
 *     description="Browse Aaditya Joshi's open-source and personal projects."
 *     path="/projects"
 *   />
 */
export default function SEO({
  title,
  description,
  path = "",
  image = "/og-image.png",
  type = "website",
}) {
  const siteTitle = "Aaditya Joshi";
  const fullTitle = title ? `${title} – ${siteTitle}` : `${siteTitle} – Software Engineer`;
  const canonical = `https://joshiaaditya.com.np${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://joshiaaditya.com.np${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={`https://joshiaaditya.com.np${image}`} />
    </Helmet>
  );
}