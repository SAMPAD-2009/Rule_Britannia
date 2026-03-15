import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rule Britannia',
  description: 'Explore the legacy of the British Empire through interactive 3D exhibits, maps, and AI-powered historical data.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rule Britannia',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#B88A2E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700;900&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
