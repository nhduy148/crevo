import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer-sa bord-thin-top-light pb-80'>
      <div className='container section-padding'>
        <div className='sec-head mb-80'>
          <div className='row'>
            <div className='col-lg-5'>
              <a href='#' className='logo md-mb50'>
                <Image
                  src='/assets/imgs/Logo-light.svg'
                  alt=''
                  width={44}
                  height={44}
                />
              </a>
            </div>
            <div className='col-lg-6'>
              <h4>
                We hope to empower user and simplify
                <span className='sub-color inline'>their everyday lives.</span>
              </h4>
            </div>
          </div>
        </div>
        <div className='contact-info'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-5'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='item'>
                    <span className='sub-color'>location</span>
                    <p>Phan Tay Ho, Phu Nhuan, Ho Chi Minh city, VN</p>
                  </div>
                </div>
                <div className='col-md-6 d-flex justify-content-end justify-end'>
                  <div className='item'>
                    <span className='sub-color'>inquiry</span>
                    <p>owner.crevo@gmail.com</p>
                    <p>+84909552099</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-5'>
              <div className='social-icon'>
                <a href='https://www.facebook.com/crevotech'>
                  <i className='fa-brands fa-facebook'></i>
                </a>
                <a href='https://www.linkedin.com/company/crevo-tech/'>
                  <i className='fa-brands fa-linkedin'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sub-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='copy sub-color md-mb30'>
                <p>
                  © 2024
                  <Link href='crevo.tech'>Crevo Tech</Link>. All Right Reserved
                </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex justify-content-end'>
              <div className='links sub-color d-flex justify-content-between'>
                <Link href='/' className='active'>
                  Home
                </Link>
                <Link href='/about'>About us</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
