import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import(toAbsolute('dist/server/entry-server.js'));

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

// Add blog routes (manually for now, ideally fetched from data source)
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

(async () => {
    // pre-render each route...
    for (const url of routes) {
        const context = {};
        const appHtml = render(url, context);

        // helmet info
        const { helmet } = appHtml;

        const html = template
            .replace('<!--app-head-->', `
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                ${helmet.script.toString()} 
            `)
            .replace('<!--app-html-->', appHtml.html)
            // Cleanup placeholder if it existed (not needed with SSR injection)
            .replace(/<div id="root"><\/div>/, `<div id="root">${appHtml.html}</div>`);

        const filePath = url === '/'
            ? 'dist/index.html'
            : `dist${url}/index.html`;

        // Ensure dir exists
        const dir = path.dirname(toAbsolute(filePath));
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(toAbsolute(filePath), html);
        console.log('pre-rendered:', filePath);
    }
})();
