import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CheckSammy - Smart Waste Management Solutions',
  description: 'Revolutionizing waste management with smart solutions for a cleaner future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="checksammy-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}