import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'The Krisar Academy';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || 'The Krisar Academy'} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || 'The Krisar Academy'} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || 'The Krisar Academy'} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Canonical */}
            {url && <link rel="canonical" href={url} />}
        </Helmet>
    );
};

export default SEO;
