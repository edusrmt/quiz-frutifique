import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage } from './routes/Home/index.tsx';
import { GlobalStyle } from './globalStyle.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QuizPage } from './routes/Quiz/index.tsx';
import { ResultPage } from './routes/Result/index.tsx';
import { QuizContextProvider } from './contexts/QuizContext.tsx';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/quiz',
    element: <QuizPage />,
  },
  {
    path: '/resultado',
    element: <ResultPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <QuizContextProvider>
      <RouterProvider router={router} />
    </QuizContextProvider>
    <Analytics />
  </StrictMode>
);
