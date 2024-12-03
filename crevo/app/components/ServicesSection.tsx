import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className='services-sa section-padding'>
      <div className='container'>
        <div className='sec-head mb-100'>
          <div className='row'>
            <div className='col-lg-5'>
              <h6 className='sub-head'>Our Services</h6>
            </div>
            <div className='col-lg-7'>
              <h4>
                As a tight-knit team of experts, we create memorable and
                emotional websites,
                <span className='sub-color inline'>
                  digital experiences, and native apps.
                </span>
              </h4>
              <a
                href='./services.html'
                className='butn butn-md butn-bord butn-rounded mt-40'
              >
                <div className='d-flex align-items-center'>
                  <span>Learn More</span>
                  <span className='icon pe-7s-angle-right ml-10 fz-30'></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <ServiceCard
            iconUrl='/images/icons/bezier-curve-solid.svg'
            imgUrl='/images/services/1.jpg'
            title='Strategy and Design'
            description='We provide digital solutions as Website Design,Mobile App Design, Landing Page design, Illustration, Animation increase company’s values'
          />
          <ServiceCard
            iconUrl='/images/icons/code-solid.svg'
            imgUrl='/images/services/2.png'
            title='Coding and Implementation'
            description='We implement coding with new tech React, Webflow, Wordpress, Shopify, Flutter, iOS, Android and AI-driven applications'
          />
          <ServiceCard
            iconUrl='/images/icons/chart-line-solid.svg'
            imgUrl='/images/services/3.png'
            title='SEO/Marketing and Advertisment'
            description='Growth your brand with our SEO/Marketing and advertisment solutions. Help increase the traffic, Google 5* rating and more'
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
