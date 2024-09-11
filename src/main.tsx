import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './shared/styles/globalStyles';
import { App } from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
);
