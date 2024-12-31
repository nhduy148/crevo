import React from 'react';
import TeamMember from '@data/team.json';
import MemberCard from '@components/(About)/MemberCard';
import Image from 'next/image';
import ClientCard from '@components/(About)/ClientCard';
import ClientCommentData from '../../../data/clients/comment.json';
import ClientListData from '../../../data/clients/list.json';
import BrandCard from '@components/(About)/BrandCard';
import { useTranslations } from 'next-intl';
import { Link } from '@i18n/routing';

const About = () => {
  const t = useTranslations();
  const clientData = ClientCommentData;
  const clientList = ClientListData;
  return (
    <main>
      <header className='about-hed section-padding pb-0'>
        <div className='container'>
          <div className='caption mb-80'>
            <h1 className='sec-head'>
              <span className='sub-head mr-30'>About Us</span>
              Expert web designers & web developers trained in the digital
              industry.
            </h1>
            <div className='row justify-content-end'>
              <div className='col-lg-5'>
                <div className='text mt-30'>
                  <p>
                    Crafting a virtual presence that stands out in the bustling
                    online space requires not only technical skill but a flair
                    for the unique feel each brand holds. With a unique view,
                    she crafts projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='main-marq shadow-off'>
            <div className='slide-har st1'>
              <div className='box'>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
              </div>
              <div className='box'>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
                <div className='item'>
                  <h2>
                    <span>About Us</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className='fit-img radius-15'>
            <Image
              src='/assets/imgs/about/header/1.jpg'
              alt=''
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        </div>
      </header>

      <section className='services-dm container-fluid'>
        <div className='box sub-bg radius-30 section-padding mt-15'>
          <div className='container'>
            <div className='sec-head mb-100'>
              <div className='row'>
                <div className='col-lg-4'>
                  <h6 className='sub-head'>Our Service Expertise</h6>
                </div>
                <div className='col-lg-5'>
                  <h3 className='text-indent md-mb30'>
                    We help you to build a creative digital business
                  </h3>
                </div>
                <div className='col-lg-3'>
                  <div className='text'>
                    <p>
                      We are a digital marketing agency with expertise, and
                      we’re on a mission to help you take the next step in your
                      business.
                    </p>
                    <Link href='#0' className='crv-butn mt-40'>
                      <div className='d-flex'>
                        <span className='text'>Learn More</span>
                        <span className='icon'>
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
              </div>
            </div>
            <div className='row justify-content-end'>
              <div className='col-lg-9'>
                <div className='item d-flex align-items-center'>
                  <div className='title'>
                    <h2>Concept</h2>
                  </div>
                  <div className='text ml-auto'>
                    <div className='d-flex align-items-center'>
                      <p>
                        Brand Identity, Strategy & Consult,
                        <br />
                        Position, Rebrand
                      </p>
                      <div>
                        <div className='icon invert'>
                          <Image
                            src='/assets/common/imgs/icons/crown-solid.svg'
                            alt=''
                            width={1000}
                            height={1000}
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item d-flex align-items-center'>
                  <div className='title'>
                    <h2>Design</h2>
                  </div>
                  <div className='text ml-auto'>
                    <div className='d-flex align-items-center'>
                      <p>
                        Build Wireframe, Design system & Components,
                        <br />
                        Position, Rebrand
                      </p>
                      <div>
                        <div className='icon invert'>
                          <Image
                            src='/assets/common/imgs/icons/bezier-curve-solid.svg'
                            alt=''
                            width={1000}
                            height={1000}
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item d-flex align-items-center'>
                  <div className='title'>
                    <h2>Code</h2>
                  </div>
                  <div className='text ml-auto'>
                    <div className='d-flex align-items-center'>
                      <p>
                        Brand Identity, Stragegy & Consult,
                        <br />
                        Position, Rebrand
                      </p>
                      <div>
                        <div className='icon invert'>
                          <Image
                            src='/assets/common/imgs/icons/code-solid.svg'
                            alt=''
                            width={1000}
                            height={1000}
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='item d-flex align-items-center'>
                  <div className='title'>
                    <h2>Growth</h2>
                  </div>
                  <div className='text ml-auto'>
                    <div className='d-flex align-items-center'>
                      <p>
                        Brand Identity, Strategy & Consult,
                        <br />
                        Position, Rebrand
                      </p>
                      <div>
                        <div className='icon invert'>
                          <Image
                            src='/assets/common/imgs/icons/chart-line-solid.svg'
                            alt=''
                            width={1000}
                            height={1000}
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='intro-iner section-padding'>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-lg-5'>
              <div className='img-box'>
                <div className='img fit-img'>
                  <Image
                    src='/assets/imgs/about/intro1.jpg'
                    alt=''
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* Badge */}
                {/* <div className='states'>
                  <h2 className='mb-10 fw-600'>7k+</h2>
                  <span className='text-u fz-12 fw-500'>
                    Satisfaction
                    <br />
                    Clients
                  </span>
                </div> */}
                <div className='just-shape'>
                  <div className='shap-right-top'>
                    <svg
                      viewBox='0 0 11 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-11 h-11'
                    >
                      <path
                        d='M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z'
                        fill='#0e0f11'
                      ></path>
                    </svg>
                  </div>
                  <div className='shap-left-bottom'>
                    <svg
                      viewBox='0 0 11 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-11 h-11'
                    >
                      <path
                        d='M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z'
                        fill='#0e0f11'
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className='butn-vid d-flex align-items-center'>
                  <div className='play-button'>
                    <a href='https://youtu.be/AzwC6umvd1s' className='vid'>
                      <i className='fas fa-play'></i>
                    </a>
                  </div>
                  <div className='cont'>
                    <span>
                      Lets see
                      <br />
                      how we did it.
                    </span>
                  </div>
                  <div className='shaps bottom'>
                    <div className='shap-right-top'>
                      <svg
                        viewBox='0 0 11 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-11 h-11'
                      >
                        <path
                          d='M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z'
                          fill='#0e0f11'
                        ></path>
                      </svg>
                    </div>
                    <div className='shap-left-bottom'>
                      <svg
                        viewBox='0 0 11 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-11 h-11'
                      >
                        <path
                          d='M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z'
                          fill='#0e0f11'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='sec-head mb-60'>
                <h6 className='sub-head mb-10'>Who we are?</h6>
                <h3>
                  Elevating brands globally with innovative strategies and
                  visionary design
                </h3>
              </div>
              <div className='row justify-content-center'>
                <div className='col-lg-10'>
                  <div className='accordion' id='accordionExample'>
                    <div className='accordion-item active'>
                      <h4 className='accordion-header' id='heading2'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapse2'
                          aria-expanded='false'
                          aria-controls='collapse2'
                        >
                          What’s Our mission?
                        </button>
                      </h4>
                      <div
                        id='collapse2'
                        className='accordion-collapse collapse show'
                        aria-labelledby='heading2'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          <p>
                            How quick is quick? For most design, we’re talking
                            2-3 business days. We balance speed with
                            quality,ensuring you get top-north design swiftly
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h4 className='accordion-header' id='heading3'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapse3'
                          aria-expanded='false'
                          aria-controls='collapse3'
                        >
                          Our Culture & Our Studio
                        </button>
                      </h4>
                      <div
                        id='collapse3'
                        className='accordion-collapse collapse'
                        aria-labelledby='heading3'
                        data-bs-parent='#accordionExample'
                      >
                        <div className='accordion-body'>
                          <p>
                            How quick is quick? For most design, we’re talking
                            2-3 business days. We balance speed with
                            quality,ensuring you get top-north design swiftly
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='content' data-tp-throwable-scene='true'>
            <div className='item' data-tp-throwable-el=''>
              <div className=''>
                <span>SEO/Marketing</span>
              </div>
            </div>
            <div className='item' data-tp-throwable-el=''>
              <div className=''>
                <span className='bdark'>Motion</span>
              </div>
            </div>
            <div className='item' data-tp-throwable-el=''>
              <div className='icon1'>
                <Image
                  src='/assets/imgs/about/s-icon1.svg'
                  alt=''
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className='item' data-tp-throwable-el=''>
              <div className=''>
                <span className='bred'>UI/UX Design</span>
              </div>
            </div>
            <div className='item' data-tp-throwable-el=''>
              <div className=''>
                <img src='assets/imgs/about/s-icon2.svg' alt='' />
              </div>
            </div>
            <div className='item' data-tp-throwable-el=''>
              <div className=''>
                <span>Branding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='team-mp'>
        <div className='container section-padding bord-thin-top-light'>
          <div className='sec-head mb-80'>
            <div className='row'>
              <div className='col-lg-7'>
                <h6 className='sub-head'>{t('About.teamMember')}</h6>
              </div>
              <div className='col-lg-4 d-flex align-items-center'>
                <div className='ml-auto'>
                  <p>{t('About.teamMemberDescription')}</p>
                </div>
              </div>
            </div>
          </div>
          {TeamMember.map((member) => {
            return <MemberCard key={member.id} {...member} />;
          })}
        </div>
      </div>

      <section className='container-fluid'>
        <div className='section-padding sub-bg radius-30'>
          <div className='testimonials-ds'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-5'>
                  <div className='qoute-icon md-mb50'>
                    <div className='text'>
                      <Image
                        src='/assets/imgs/about/testim/Vector_Cricle_Text.svg'
                        alt=''
                        width={1000}
                        height={1000}
                        quality={1000}
                      />
                    </div>
                    <div className='icon'>
                      <Image
                        src='/assets/imgs/about/testim/vector_quote.svg'
                        alt=''
                        width={1000}
                        height={1000}
                        quality={1000}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='swiper testim-swiper swiper-container'>
                    <div className='swiper-wrapper'>
                      {clientData.map((e, key) => {
                        return <ClientCard {...e} key={key} />;
                      })}
                    </div>
                    <div className='swiper-pagination'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='clients-ds mt-100'>
            <div className='container'>
              <div className='sec-head mb-80'>
                <h6 className='sub-head'>Partner with +150 brands</h6>
              </div>
              <div className='row sm-marg'>
                {clientList.map((e, key) => {
                  return <BrandCard key={key} {...e} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
