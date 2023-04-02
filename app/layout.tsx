import localFont from 'next/font/local';
import Header from '@/components/Header';
import './globals.css';
import classNames from 'classnames';
import Footer from '@/components/Footer';

const octarineFont = localFont({
  src: './octarine-bold-webfont.woff2',
  display: 'swap',
  variable: '--octarine-font',
});

const ibmPlexMonoFont = localFont({
  src: './IBMPlexMono-Text.woff2',
  display: 'fallback',
});

export const metadata = {
  title: 'Syson – Frihet, bra häng och schysst lön',
  description:
    'Hej! 👋 Vi är konsulter i Stockholm, duktiga inom systemutveckling och test.',
  openGraph: {
    url: 'https://www.syson.se',
    type: 'website',
    title: 'Räkna ut din lön direkt på hemsidan.',
    description:
      'Hej! 👋 Vi är konsulter i Stockholm, duktiga inom systemutveckling och test.',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="sv"
      className={classNames(ibmPlexMonoFont.className, octarineFont.variable)}
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
