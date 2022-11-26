import App from "./App"
import React from "react"

import { createRoot } from 'react-dom/client';
import { StyledEngineProvider } from '@mui/styled-engine';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import "./index.scss"

const cache = createCache({
  key: 'css',
  prepend: true,
});

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    const root = createRoot(rootElement);
    root.render(
      <StyledEngineProvider injectFirst>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </StyledEngineProvider>
    );
})
