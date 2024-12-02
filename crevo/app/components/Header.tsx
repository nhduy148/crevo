import React from 'react';

export const Header = () => {
  return (
    <header className='header-sa d-flex align-items-center'>
      <div className='background'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex align-items-center'>
            <div className='caption'>
              <h1>
                We create award winning
                <span className='sub-color'>sites</span>
              </h1>
              {/* <a
                      href="#contact-footer"
                      className="butn butn-md butn-bord butn-rounded mt-40"
                    >
                      <div className="d-flex align-items-center">
                        <span>Contact Us</span>
                        <span className="icon icon pe-7s-play ml-10 fz-20"></span>
                      </div>
                    </a> */}
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='text'>
                    <p>Empowering businesses in the era of technology.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='imgs'>
              <div className='cube'>
                <img src='assets/imgs/header/cube.svg' alt='' />
              </div>
              <div className='circle'>
                <img src='assets/imgs/header/circle-badge.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
