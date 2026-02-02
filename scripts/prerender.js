import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import(toAbsolute('dist/server/entry-server.js'));

import { routes as staticRoutes } from '../src/data/routes.js';

const routes = staticRoutes.map(r => r.path);

const BLOG_DATA_PATH = toAbsolute('src/data/blogData.jsx');

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

const blogSlugs = getBlogSlugs();
blogSlugs.forEach(slug => routes.push(`/blogs/${slug}`));

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
