export default function SEO({
  title,
  description,
  path = "",
  image = "/og-image.png",
  type = "website",
}) {
  const siteTitle = "Aaditya Joshi";
  const fullTitle = title ? `${title} – ${siteTitle}` : `${siteTitle} – Engineer`;
  
  // Ensure this domain matches exactly what you see in the browser address bar
  const baseUrl = "https://www.joshiaaditya.com.np";
  const canonical = `${baseUrl}${path}`;
  
  // Clean up the image path to avoid double slashes
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}