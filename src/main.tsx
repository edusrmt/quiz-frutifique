import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage } from './routes/Home/index.tsx';
import { GlobalStyle } from './globalStyle.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <HomePage />
  </StrictMode>
);
