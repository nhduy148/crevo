import Image from 'next/image';
import React from 'react';

const ClientsSection = () => {
  return (
    <section className='clients-sa'>
      <div className='container'>
        <div className='sec-head mb-100'>
          <h6 className='sub-head'>Our Clients & Partners</h6>
        </div>
        <div className='row'>
          <div className='col-lg-2 col-md-4 col-6 md-mb30'>
            <div className='item d-flex align-items-center justify-content-center'>
              <div className='img'>
                <img src='/assets/imgs/brands/1.svg' alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-6 md-mb30'>
            <div className='item d-flex align-items-center justify-content-center'>
              <div className='img'>
                <Image
                  src='/assets/imgs/brands/2.svg'
                  alt=''
                  width={190}
                  height={190}
                />
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-6 md-mb30'>
            <div className='item d-flex align-items-center justify-content-center'>
              <div className='img'>
                <img src='/assets/imgs/brands/3.svg' alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-6 sm-mb30'>
            <div className='item d-flex align-items-center justify-content-center'>
              <div className='img'>
                <img src='/assets/imgs/brands/4.svg' alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-6 sm-mb30'>
            <div className='item d-flex align-items-center justify-content-center'>
              <div className='img'>
                <img src='/assets/imgs/brands/5.svg' alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-4 col-6'>
            <div className='item d-flex align-items-center justify-content-center'>
              <div className='cont sub-color'>
                <div className='icon invert'>
                  <img src='/assets/common/imgs/icons/global.svg' alt='' />
                </div>
                <span>
                  125+ clients
                  <br />
                  worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
