import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';
import Script from 'next/script';
import NavBar from './components/NavBar';
import './styles/main.scss';
import './styles/inner_pages.scss';
import './styles/common/common_style.scss';
import Footer from './components/Footer';

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
      <head>
        {/* jQuery */}
        <Script src='/js/jquery-3.6.0.min.js' strategy='worker' />
        <Script src='/js/jquery-migrate-3.4.0.min.js' strategy='worker' />

        {/* Plugin */}
        <Script src='/js/plugins.js' strategy='worker' />

        {/* GSAP */}
        <Script src='/js/gsap_lib/gsap.min.js' strategy='worker' />
        <Script src='/js/gsap_lib/ScrollSmoother.min.js' strategy='worker' />
        <Script src='/js/gsap_lib/ScrollTrigger.min.js' strategy='worker' />
        <Script src='/js/gsap_lib/SplitText.min.js' strategy='worker' />
        {/* common scripts */}
        <Script src='/js/common_scripts.js' strategy='worker' />

        {/* <Script src='/js/inner_pages.js' /> */}
        <Script src='/js/scripts.js' strategy='worker' />
      </head>

      <body>
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
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
