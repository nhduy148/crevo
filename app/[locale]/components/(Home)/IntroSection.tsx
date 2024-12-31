import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const IntroSection = () => {
  return (
    <section className='intro-sa'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 valign'>
            <div className='img full-width md-mb80'>
              <Image
                src='/assets/imgs/intro.png'
                alt=''
                width={2000}
                height={2000}
                quality={100}
              />
            </div>
          </div>
          <div className='col-lg-4 offset-lg-1 valign'>
            <div className='sec-head'>
              <h6 className='sub-head mb-80'>Our Philosophy</h6>
              <h4>
                We help passionate Founders perfect theirs design & development
                game.
                <span className='sub-color inline'>
                  Let’s aim for the
                  <br />
                  top together!
                </span>
              </h4>
              <Link
                href='./about'
                className='butn butn-md butn-bord butn-rounded mt-40'
              >
                <div className='d-flex align-items-center'>
                  <span>About Crevo Tech</span>
                  <span className='icon invert ml-10'>
                    <Image
                      src='/assets/common/imgs/icons/arrow-top-right.svg'
                      alt=''
                      width={32}
                      height={32}
                    />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
