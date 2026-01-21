import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '../dist');

// Define routes to prerender
const routes = [
    '/',
    '/about',
    '/facilities',
    '/academics',
    '/beyond-academics',
    '/blog',
    '/contact',
    '/gallery',
    '/admission',
    '/cbse-disclosure',
    '/payment'
];

// Add blog routes - manually added for now based on known data or we could parse it
// Ideally we would parse src/data/blogData.jsx but since it's JSX it's tricky in Node.
// For now, I'll rely on the main pages and maybe add a few known blog slugs if I can find them.
const blogSlugs = [
    'grand-celebration-sports-spirit-krisars-sports-fiesta-2024-2025',
    'krisar-academy-students-create-history-world-record-proverbs-recitation',
    'school-receives-national-recognition-bengaluru-ceremony',
    'school-honoured-prestigious-nsa-award-excellence-education-2024',
    'memorable-day-celebrity-chef-madhambatti-rangaraj-school-function-2023',
    'proud-moment-2023-school-honoured-best-school-district-collector',
    'walking-green-ramp-fashion-show-nature-heart',
    'summer-water-awareness-drive-2019',
    'millet-road-show'
];

blogSlugs.forEach(slug => routes.push(`/blog/${slug}`));

async function prerender() {
    console.log('Starting prerendering...');
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // We need a local server to serve the built files
    // Since we are running this AFTER vite build, we can just serve the dist folder
    // But we need a server. We can use `preview` command or just a simple express/http-server.
    // However, simplest way effectively is to rely on the user having run `npm run preview` 
    // OR we can spin up a simple static file server here.

    // Actually, let's use `vite preview` in the background? 
    // Or just file:// protocol? file:// might have issues with routing.
    // Let's assume we can run a simple server.

    // Easier: Use `puppeteer` to request from the running dev server? 
    // No, we want to prerender the BUILD output.

    // Let's use `http-server` or similar, OR just write a tiny http server here.
    const { createServer } = await import('http');
    const { default: handler } = await import('serve-handler');

    const server = createServer((request, response) => {
        return handler(request, response, {
            public: distDir,
            rewrites: [
                { source: '**', destination: '/index.html' }
            ]
        });
    });

    const PORT = 4173; // Standard Vite preview port
    server.listen(PORT, () => {
        console.log(`Prerender server running at http://localhost:${PORT}`);
    });

    for (const route of routes) {
        console.log(`Prerendering: ${route}`);
        try {
            await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });

            // Wait for title to not be default (optional, if your SEO comp works fast)
            // await page.waitForFunction('document.title !== "Vite + React"');

            // Wait for Helmet to update the head
            try {
                await page.waitForFunction(() => document.querySelector('meta[data-rh="true"]'), { timeout: 5000 });
            } catch (e) {
                console.warn(`Timeout waiting for Helmet meta tags on ${route}, proceeding anyway.`);
            }

            let content = await page.content();

            // Remove the static placeholder tags using regex
            content = content.replace(/<meta[^>]*data-prerender-remove="true"[^>]*>/g, '');
            // Remove the specific comment
            content = content.replace('<!-- Default Social Media Meta Tags (Placeholder for Prerendering Removal) -->', '');

            // Determine output path
            // / -> dist/index.html
            // /about -> dist/about/index.html
            const filePath = route === '/'
                ? path.join(distDir, 'index.html')
                : path.join(distDir, route.substring(1), 'index.html');

            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            fs.writeFileSync(filePath, content);
            console.log(`Generated: ${filePath}`);
        } catch (err) {
            console.error(`Error prerendering ${route}:`, err);
        }
    }

    await browser.close();
    server.close();
    console.log('Prerendering complete.');
    process.exit(0);
}

prerender();
