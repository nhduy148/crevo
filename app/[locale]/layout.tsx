/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';
import Script from 'next/script';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'styles/common/common_style.scss';
import 'styles/main.scss';
import 'styles/inner_pages.scss';

export const metadata: Metadata = {
  title: 'Crevo Tech',
  description: 'Crevo Tech - Empowering businesses in the era of technology',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang='en'>
      <head>
        {/* jQuery */}
        <Script
          src='/assets/js/jquery-3.6.0.min.js'
          strategy='beforeInteractive'
        />
        <Script
          src='/assets/js/jquery-migrate-3.4.0.min.js'
          strategy='beforeInteractive'
        />
        {/* GSAP */}
        <Script
          src='/assets/js/gsap_lib/gsap.min.js'
          strategy='beforeInteractive'
        />
        <Script
          src='/assets/js/gsap_lib/ScrollSmoother.min.js'
          strategy='beforeInteractive'
        />
        <Script
          src='/assets/js/gsap_lib/ScrollTrigger.min.js'
          strategy='beforeInteractive'
        />
        <Script
          src='/assets/js/gsap_lib/SplitText.min.js'
          strategy='beforeInteractive'
        />

        {/* Plugin */}
        <Script src='/assets/js/plugins.js' strategy='beforeInteractive' />
      </head>

      <body>
        <Suspense fallback={<Loading />}>
          <Loading />
          <div className='cursor'></div>

          {/* Start progress-scroll-button */}
          <div className='progress-wrap cursor-pointer'>
            <svg
              className='progress-circle svg-content'
              width='100%'
              height='100%'
              viewBox='-1 -1 102 102'>
              <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
            </svg>
          </div>
          <NextIntlClientProvider messages={messages}>
            <NavBar />
            <div id='smooth-wrapper'>
              <div id='smooth-content'>
                {/* End progress-scroll-button */}

                {children}

                <Footer />
              </div>
            </div>
          </NextIntlClientProvider>
        </Suspense>
        {/* common scripts */}
        <Script
          async
          src='/assets/js/common_scripts.js'
          strategy='beforeInteractive'
        />

        <Script
          async
          src='/assets/js/scripts.js'
          strategy='beforeInteractive'
        />
      </body>
    </html>
  );
}
