import React from 'react';
import { Link } from 'i18n/routing';

const AwardsSections = () => {
  return (
    <section className='awards-sa section-padding'>
      <div className='container'>
        <div className='sec-head mb-100'>
          <div className='row'>
            <div className='col-lg-5'>
              <h6 className='sub-head'>Awards & Recognition</h6>
            </div>
            <div className='col-lg-7'>
              <h4>
                Efforts to receive worthy rewards, awards & recognition
                <span className='sub-color inline'>
                  help us affirm our brand.
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <div className='item-title row'>
            <div className='col-md-4'>
              <div>
                <h6 className='sub-title'>hosted</h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <h6 className='sub-title'>Award title</h6>
              </div>
            </div>
            <div className='col-md-2 d-flex justify-content-end'>
              <div>
                <h6 className='sub-title'>Date</h6>
              </div>
            </div>
          </div>
          <div className='item-line row'>
            <div className='col-md-4'>
              <div className='honors'>
                <h6>Awwwards</h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='project-title'>
                <h6>SOTY 2023 - 1st Winner</h6>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='project-date'>
                <span>May 2023</span>
              </div>
            </div>
          </div>
          <div className='item-line row'>
            <div className='col-md-4'>
              <div className='honors'>
                <h6>css awards</h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='project-title'>
                <h6>Top 5 Best of eCommerce Websites 2022</h6>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='project-date'>
                <span>Dec 2022</span>
              </div>
            </div>
          </div>
          <div className='item-line row'>
            <div className='col-md-4'>
              <div className='honors'>
                <h6>Awwwards</h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='project-title'>
                <h6>Honor SOTD November, 2022r</h6>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='project-date'>
                <span>Nov 2022</span>
              </div>
            </div>
          </div>
          <div className='item-line row'>
            <div className='col-md-4'>
              <div className='honors'>
                <h6>Behance Portfolio</h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='project-title'>
                <h6>Winner - US Behance Portfolio Review 2021</h6>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='project-date'>
                <span>Aug 2021</span>
              </div>
            </div>
          </div>
          <div className='item-line row'>
            <div className='col-md-4'>
              <div className='honors'>
                <h6>ui/ux global award</h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='project-title'>
                <h6>Top 10 Best of Mobile App Design 2021</h6>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='project-date'>
                <span>Mar 2021</span>
              </div>
            </div>
          </div>
          <div className='item-line row'>
            <div className='col-md-4'>
              <div className='honors'>
                <h6>fwa us award</h6>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='project-title'>
                <h6>Winner - Best of Architecture Website 2020</h6>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='project-date'>
                <span>Sep 2020</span>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-80'>
          <Link href='/about' className='butn butn-md butn-bord butn-rounded'>
            <div className='d-flex align-items-center'>
              <span>Show More</span>
              <span className='icon pe-7s-angle-right ml-10 fz-30'></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AwardsSections;
