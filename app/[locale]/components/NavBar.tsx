import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from 'i18n/routing';

const NavBar = () => {
  const t = useTranslations();
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        {/* Logo */}
        <Link className='logo' href='/'>
          <Image
            src='/assets/imgs/Logo-light.svg'
            alt='logo'
            width={32}
            height={32}
          />
        </Link>

        {/* Nav links */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' href='/'>
                {t('NavBar.home')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/about'>
                {t('NavBar.about')}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/projects'>
                {t('NavBar.projects')}
              </Link>
            </li>
          </ul>
        </div>
        <div className='topnav d-flex align-items-center'>
          <Link href='/contact' className='butn butn-rounded'>
            <div className='d-flex align-items-center'>
              <span>{t('NavBar.contact')}</span>
              <span className='icon ml-10'>
                <Image
                  src='/assets/common/imgs/icons/arrow-top-right.svg'
                  alt=''
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
