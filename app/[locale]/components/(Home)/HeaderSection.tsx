import { Link } from 'i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  const t = useTranslations();
  return (
    <header className='header-sa d-flex align-items-center'>
      <div className='background'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex align-items-center'>
            <div className='caption'>
              <h1>
                {t('HomePage.title')}
                <span className='sub-color'>{t('HomePage.title2')}</span>
              </h1>
              <Link
                href='/contact'
                className='butn butn-md butn-bord butn-rounded mt-40'
              >
                <div className='d-flex align-items-center'>
                  <span>{t('NavBar.contact')}</span>
                  <span className='icon icon pe-7s-play ml-10 fz-20'></span>
                </div>
              </Link>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='text'>
                    <p>{t('HomePage.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='imgs'>
              <div className='cube'>
                <Image
                  src='/assets/imgs/header/cube.svg'
                  alt=''
                  width={44}
                  height={44}
                />
              </div>
              <div className='circle'>
                <Image
                  src='/assets/imgs/header/circle-badge.svg'
                  alt=''
                  width={44}
                  height={44}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
