import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { router } from '@/routes';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="checksammy-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}