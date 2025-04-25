import type { Metadata } from 'next';
import './globals.css';

/**
 * import font from google-font
 */
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
});

/**
 * setup for seo optimization
 */
export const metadata: Metadata = {
  title: 'M.A.P. Tech',
  description:
    'M.A.P. Tech, we see technology as more than just a tool—it’s a catalyst for progress and innovation. Since our founding in 2024, we have been driven by a clear mission: to empower businesses with cutting-edge IT solutions tailored specifically to their needs.',
    openGraph: {
      title: 'M.A.P. Tech',
      description:
        'M.A.P. Tech, we see technology as more than just a tool—it’s a catalyst for progress and innovation.',
      url: 'https://maptechnepal.com', 
      images: [
        {
          url: 'http://maptechnepal/banner.webp', 
          width: 1200,
          height: 630,
          alt: 'M.A.P. Tech Banner',
        },
      ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" href="/Site_Logo.png" type="image/png" /> 
        <body className={montserrat.className}>{children}</body>
    </html>
  );
}
