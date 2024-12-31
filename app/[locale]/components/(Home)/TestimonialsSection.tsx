import Image from 'next/image';
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className='testimonials-sa section-padding'>
      <div className='container'>
        <div className='sec-head mb-100'>
          <div className='row'>
            <div className='col-lg-5'>
              <h6 className='sub-head'>Testimonials</h6>
            </div>
            <div className='col-lg-7'>
              <h4>
                We’ve helped hundreds of partners,
                <br />
                to achieve their goals and
                <span className='sub-color inline'>
                  stellar feedback,
                  <br />
                  is our reward!
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className='swiper testim-swiper swiper-container'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='item'>
                <div>
                  <div className='rate'>
                    <h5>
                      5.0
                      <span className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                      </span>
                    </h5>
                  </div>
                  <div className='mt-30'>
                    <h6>
                      A studio with passionate, professional and full
                      creativity. Much more than i’m expect. Great services,
                      high quality products & affordable prices. I’m extremly
                      satisfied!.
                    </h6>
                  </div>
                </div>
                <div className='info d-flex align-items-center mt-40 pt-30 bord-thin-top-light'>
                  <div>
                    <div className='img-author'>
                      <Image
                        src='/assets/imgs/testim/avatar1.jpg'
                        alt=''
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                  <div className='info-text'>
                    <span>Bradley Gordon</span>
                    <p>CEO & Founder, Archin Studio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='item'>
                <div>
                  <div className='rate'>
                    <h5>
                      5.0
                      <span className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                      </span>
                    </h5>
                  </div>
                  <div className='mt-30'>
                    <h6>
                      Thank you so much for the suppot of Hubfolio team, who
                      have been with our business for more than 3 years. A long
                      journey with many exciting experiences and moments.
                      Hubfolio will alway be our 1st choice.
                    </h6>
                  </div>
                </div>
                <div className='info d-flex align-items-center mt-40 pt-30 bord-thin-top-light'>
                  <div>
                    <div className='img-author'>
                      <img src='/assets/imgs/testim/avatar2.jpg' alt='' />
                    </div>
                  </div>
                  <div className='info-text'>
                    <span>Bradley Gordon</span>
                    <p>CEO & Founder, Archin Studio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='item'>
                <div>
                  <div className='rate'>
                    <h5>
                      5.0
                      <span className='stars'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                      </span>
                    </h5>
                  </div>
                  <div className='mt-30'>
                    <h6>
                      Hubfolio ability to create a high-quality user interface
                      stands out. It’s something we placed a premium on.
                      Recommended!.
                    </h6>
                  </div>
                </div>
                <div className='info d-flex align-items-center mt-40 pt-30 bord-thin-top-light'>
                  <div>
                    <div className='img-author'>
                      <img src='/assets/imgs/testim/avatar3.jpg' alt='' />
                    </div>
                  </div>
                  <div className='info-text'>
                    <span>Bradley Gordon</span>
                    <p>CEO & Founder, Archin Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
