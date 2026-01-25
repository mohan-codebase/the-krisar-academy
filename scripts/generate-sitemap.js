import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://thekrisaracademy.com';
const BLOG_DATA_PATH = path.join(__dirname, '../src/data/blogData.jsx');
const PUBLIC_DIR = path.join(__dirname, '../public');

const staticRoutes = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/projects', changefreq: 'monthly', priority: '0.8' },
    { loc: '/facilities', changefreq: 'monthly', priority: '0.8' },
    { loc: '/uat-academics', changefreq: 'monthly', priority: '0.8' },
    { loc: '/uat-beyond-academics', changefreq: 'monthly', priority: '0.8' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
    { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
    { loc: '/gallery', changefreq: 'monthly', priority: '0.8' },
    { loc: '/admission-form2', changefreq: 'monthly', priority: '0.9' },
    { loc: '/cbse-disclosure', changefreq: 'monthly', priority: '0.6' },
    { loc: '/erp-and-payment', changefreq: 'monthly', priority: '0.5' }
];

function getBlogSlugs() {
    try {
        const content = fs.readFileSync(BLOG_DATA_PATH, 'utf8');
        const regex = /slug:\s*["']([^"']+)["']/g;
        const slugs = [];
        let match;
        while ((match = regex.exec(content)) !== null) {
            slugs.push(match[1]);
        }
        return slugs;
    } catch (error) {
        console.error('Error reading blog data:', error);
        return [];
    }
}

function generateXML(urls) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    urls.forEach(urlObj => {
        xml += '  <url>\n';
        xml += `    <loc>${urlObj.loc}</loc>\n`;
        xml += `    <lastmod>${urlObj.lastmod}</lastmod>\n`;
        xml += `    <changefreq>${urlObj.changefreq}</changefreq>\n`;
        xml += `    <priority>${urlObj.priority}</priority>\n`;
        xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
}

function generateSitemaps() {
    const today = new Date().toISOString().split('T')[0];
    const blogSlugs = getBlogSlugs();

    // 1. Generate sitemap-pages.xml
    const pageUrls = staticRoutes.map(route => ({
        loc: `${BASE_URL}${route.loc === '/' ? '' : route.loc}`,
        lastmod: today,
        changefreq: route.changefreq,
        priority: route.priority
    }));

    fs.writeFileSync(
        path.join(PUBLIC_DIR, 'sitemap-pages.xml'),
        generateXML(pageUrls)
    );
    console.log(`Generated sitemap-pages.xml with ${pageUrls.length} URLs`);

    // 2. Generate sitemap-posts.xml
    const postUrls = blogSlugs.map(slug => ({
        loc: `${BASE_URL}/blog/${slug}`,
        lastmod: today,
        changefreq: 'monthly',
        priority: '0.7'
    }));

    fs.writeFileSync(
        path.join(PUBLIC_DIR, 'sitemap-posts.xml'),
        generateXML(postUrls)
    );
    console.log(`Generated sitemap-posts.xml with ${postUrls.length} URLs`);

    // 3. Generate sitemap.xml (Index)
    let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    indexXml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    indexXml += '  <sitemap>\n';
    indexXml += `    <loc>${BASE_URL}/sitemap-pages.xml</loc>\n`;
    indexXml += `    <lastmod>${today}</lastmod>\n`;
    indexXml += '  </sitemap>\n';

    if (postUrls.length > 0) {
        indexXml += '  <sitemap>\n';
        indexXml += `    <loc>${BASE_URL}/sitemap-posts.xml</loc>\n`;
        indexXml += `    <lastmod>${today}</lastmod>\n`;
        indexXml += '  </sitemap>\n';
    }

    indexXml += '</sitemapindex>';

    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), indexXml);
    console.log('Generated sitemap.xml (Index)');
}

generateSitemaps();
