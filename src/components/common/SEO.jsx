const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website'
}) => {
    const siteTitle = 'The Krisar Academy';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || 'The Krisar Academy - A visionary institution dedicated to nurturing young minds through holistic education.';
    const metaImage = image || '/og-image.jpg'; // We should ensure this image exists or use a better default
    const metaUrl = url || window.location.href;

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />
        </>
    );
};

export default SEO;
