import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

if (document.getElementById('root').hasChildNodes()) {
  hydrateRoot(document.getElementById('root'),
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  )
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>,
  )
}
