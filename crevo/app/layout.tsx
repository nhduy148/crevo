import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import Loading from './loading';
import NavBar from './components/NavBar';
import './assets/scss/home1-style.scss';
import Script from 'next/script';

const geistSans = localFont({
  src: './assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Crevo Tech',
  description: 'Crevo Tech - Empowering businesses in the era of technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <div className='cursor'></div>
          {/* Start progress-scroll-button */}
          <div className='progress-wrap cursor-pointer'>
            <svg
              className='progress-circle svg-content'
              width='100%'
              height='100%'
              viewBox='-1 -1 102 102'
            >
              <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
            </svg>
          </div>
          <NavBar />
          {/* End progress-scroll-button */}
          {children}
        </Suspense>
      </body>
      <Script src='./assets/js/inner_pages.js' />
      <Script src='./assets/js/scripts.js' />
      {/* GSAP */}
      <Script src='./assets/js/gsap_lib/gsap.min.js' />
      <Script src='./assets/js/gsap_lib/ScrollSmoother.min.js' />
      <Script src='./assets/js/gsap_lib/ScrollTrigger.min.js' />
      <Script src='./assets/js/gsap_lib/SplitText.min.js' />
    </html>
  );
}
