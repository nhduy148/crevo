import Image from 'next/image';
import React from 'react';

const Contact = () => {
  return (
    <main>
      <header className='contact-hed section-padding pb-0'>
        <div className='container'>
          <div className='caption mb-80 text-center'>
            <h1>Get In Touch</h1>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='google-map'>
            <iframe
              id='gmap_canvas'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1220452248217!2d106.68416177643917!3d10.80196355871929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528dabe4db52d%3A0x63ed2028ed1d5cbd!2zNDAgUGhhbiBUw6J5IEjhu5MsIFBoxrDhu51uZyA3LCBQaMO6IE5odeG6rW4sIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1733379945442!5m2!1svi!2s"'
            ></iframe>
          </div>
        </div>
      </header>

      <section className='contact-pg section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 valign'>
              <div className='full-width md-mb80'>
                <div className='sec-head md-mb80'>
                  <h2 className='text-u'>
                    Lets make your
                    <br />
                    brand
                    <span className='fw-200'>brilliant!</span>
                  </h2>
                  <p className='mt-20 mb-20'>
                    If you would like to work with us or just want to get in
                    touch, we’d love to hear from you!
                  </p>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='morinfo mt-30'>
                        <h6 className='mb-15'>Address</h6>
                        <p>
                          40/17 Phan Tay Ho, Phu Nhuan District, Ho Chi Minh
                          city
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='morinfo mt-30'>
                        <h6 className='mb-15'>Email</h6>
                        <p>owner.crevo@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className='phone fz-30 fw-600 mt-30 underline main-color'>
                    <a href='tel:+84909552099'>+84 909 552 099</a>
                  </div>
                </div>
                <ul className='rest social-text d-flex mt-60 fz-16'>
                  <li className='mr-30'>
                    <a href='#0' className='hover-this'>
                      <span className='hover-anim'>Facebook</span>
                    </a>
                  </li>
                  <li className='mr-30'>
                    <a href='#0' className='hover-this'>
                      <span className='hover-anim'>Twitter</span>
                    </a>
                  </li>
                  <li className='mr-30'>
                    <a href='#0' className='hover-this'>
                      <span className='hover-anim'>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href='#0' className='hover-this'>
                      <span className='hover-anim'>Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-1 valign'>
              <div className='full-width'>
                <div className='sec-head mb-50'>
                  <h6 className='sub-head'>
                    Send a<span className='fw-200'>message</span>
                  </h6>
                </div>
                <form id='contact-form' method='post' action='contact.php'>
                  <div className='messages'></div>

                  <div className='controls row'>
                    <div className='col-lg-6'>
                      <div className='form-group mb-30'>
                        <input
                          id='form_name'
                          type='text'
                          name='name'
                          placeholder='Name'
                          required
                        />
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div className='form-group mb-30'>
                        <input
                          id='form_email'
                          type='email'
                          name='email'
                          placeholder='Email'
                          required
                        />
                      </div>
                    </div>

                    <div className='col-12'>
                      <div className='form-group mb-30'>
                        <input
                          id='form_subject'
                          type='text'
                          name='subject'
                          placeholder='Subject'
                        />
                      </div>
                    </div>

                    <div className='col-12'>
                      <div className='form-group'>
                        <textarea
                          id='form_message'
                          name='message'
                          placeholder='Message'
                          rows={4}
                          required
                        ></textarea>
                      </div>
                      <div className='mt-30'>
                        <button
                          type='submit'
                          className='butn butn-md butn-bord butn-rounded'
                        >
                          <div className='d-flex align-items-center'>
                            <span>Lets Talking</span>
                            <span className='icon ml-10'>
                              <Image
                                src='./assets/common/imgs/icons/arrow-top-right.svg'
                                alt=''
                                width={1000}
                                height={1000}
                                quality={100}
                              />
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
