import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { router } from './router-config';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } });

root.render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={() => null}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router()} />
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
