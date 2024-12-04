import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
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
              <Link className='nav-link active' href='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/projects'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='./blog-grid.html'>
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className='topnav d-flex align-items-center'>
          <Link href='./contact.html' className='butn butn-rounded'>
            <div className='d-flex align-items-center'>
              <span>Contact Us</span>
              <span className='icon ml-10'>
                <Image
                  src='/assets/common/imgs/icons/arrow-top-right.svg'
                  alt=''
                  width={44}
                  height={44}
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
