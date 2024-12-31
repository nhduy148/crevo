import React from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'i18n/routing';
import { Service } from 'types';

type Props = {
  dataService: Service[];
};

const ServicesSection = ({ dataService }: Props) => {
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
              <Link
                href='/services'
                className='butn butn-md butn-bord butn-rounded mt-40'
              >
                <div className='d-flex align-items-center'>
                  <span>Learn More</span>
                  <span className='icon pe-7s-angle-right ml-10 fz-30'></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          {dataService.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
