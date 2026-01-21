import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

export function render(url, context) {
    const helmetContext = {}

    const html = renderToString(
        <StrictMode>
            <StaticRouter location={url} context={context}>
                <HelmetProvider context={helmetContext}>
                    <App />
                </HelmetProvider>
            </StaticRouter>
        </StrictMode>
    )

    const { helmet } = helmetContext

    return { html, helmet }
}
