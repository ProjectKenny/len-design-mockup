// app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Spectacle & Lens | Premium Eyewear and Contact Lenses',
  description: 'Discover our wide range of high-quality spectacles and contact lenses. Virtual try-on available with AI technology.',
  keywords: 'spectacles, eyeglasses, contact lenses, optical shop, eyewear, vision care',
  authors: [{ name: 'Spectacle & Lens Team' }],
  creator: 'Spectacle & Lens',
  publisher: 'Spectacle & Lens',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Spectacle & Lens | Premium Eyewear and Contact Lenses',
    description: 'Discover our wide range of high-quality spectacles and contact lenses. Virtual try-on available with AI technology.',
    url: 'https://www.spectaclelens.com',
    siteName: 'Spectacle & Lens',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Spectacle & Lens',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spectacle & Lens | Premium Eyewear and Contact Lenses',
    description: 'Discover our wide range of high-quality spectacles and contact lenses. Virtual try-on available with AI technology.',
    images: ['/twitter-image.jpg'],
    creator: '@spectaclelens',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}