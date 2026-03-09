import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website'
}) => {
    const location = useLocation();
    const siteTitle = 'The Krisar Academy';
    const fullTitle = title && title.includes('|') ? title : (title ? `${title} | ${siteTitle}` : siteTitle);
    const metaDescription = description || 'The Krisar Academy - A visionary institution dedicated to nurturing young minds through holistic education.';
    const metaImage = image || '/og-image.png'; // Default OG image

    // Robust URL generation for SSR and Client
    // If 'url' prop is provided, use it.
    // Otherwise, construct it from the current location.
    const metaUrl = url || `https://thekrisaracademy.com${location.pathname}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={metaUrl} />

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
        </Helmet>
    );
};

export default SEO;
