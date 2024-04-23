import { createBrowserRouter } from 'react-router-dom';
import { App } from '../app/app';

export const router = () =>
  createBrowserRouter(
    [
      {
        path: '/', // Base URL, here we serve the application. All the other URLs are nested underneath and define their own paths that append to the base URL
        element: <App />,
        id: 'currentUser',
        hasErrorBoundary: true,
      },
    ],
    { basename: '/cypress-failing-occasionally' }
  );
