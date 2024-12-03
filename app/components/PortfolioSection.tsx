import React from 'react';
import PortfolioCard from './PortfolioCard';
import Link from 'next/link';
import Image from 'next/image';

const dataPortfolio = [
  {
    portDetail: {
      urlDetail: './project-details.html',
      title: 'Unerio Residential Complex Landing page',
    },
    description:
      'This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project',
    urlImage: '/assets/imgs/works/1.jpg',
    tags: [
      {
        urlTag: '#0',
        nameTag: 'Development',
      },
      {
        urlTag: '#0',
        nameTag: 'UI/UX',
      },
      {
        urlTag: '#0',
        nameTag: 'Illustration',
      },
    ],
  },
  {
    portDetail: {
      urlDetail: './project-details.html',
      title: 'Archin Architecture',
    },
    description:
      'This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project',
    urlImage: '/assets/imgs/works/2.jpg',
    tags: [
      {
        urlTag: '#0',
        nameTag: 'Mobile Responsive',
      },
      {
        urlTag: '#0',
        nameTag: 'UX Design',
      },
    ],
  },
  {
    portDetail: {
      urlDetail: './project-details.html',
      title: 'Jorger Clarkson - Architect',
    },
    description:
      'This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project',
    urlImage: '/assets/imgs/works/3.jpg',
    tags: [
      {
        urlTag: '#0',
        nameTag: 'UI/UX',
      },
      {
        urlTag: '#0',
        nameTag: 'Webflow',
      },
    ],
  },
  {
    portDetail: {
      urlDetail: './project-details.html',
      title: 'DS Freelance Developer',
    },
    description:
      'This paragraph is short description to describe about this project, you can use it to improve SEO or highlight some key result of this project',
    urlImage: '/assets/imgs/works/4.jpg',
    tags: [
      {
        urlTag: '#0',
        nameTag: 'UI/UX',
      },
      {
        urlTag: '#0',
        nameTag: 'Webflow',
      },
    ],
  },
];

const PortfolioSection = () => {
  return (
    <section className='work-card'>
      <div className='container section-padding bord-thin-top-light'>
        <div className='sec-head mb-100'>
          <div className='row'>
            <div className='col-lg-5'>
              <h6 className='sub-head'>Featured Works</h6>
            </div>
            <div className='col-lg-7'>
              <h4>
                Our user-centered design encourages
                <span className='sub-color inline'>
                  productivity & boosts revenue.
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className='cards'>
          {dataPortfolio.map((item, key) => (
            <PortfolioCard
              key={key}
              portDetail={{
                urlDetail: item.portDetail.urlDetail,
                title: item.portDetail.title,
              }}
              description={item.description}
              tags={item.tags}
              urlImage={item.urlImage}
            />
          ))}
        </div>
        <div className='text-center mt-80'>
          <Link
            href='./portfolio-cards.html'
            className='butn butn-md butn-bord butn-rounded'
          >
            <div className='d-flex align-items-center'>
              <span>Check Our Portfolio</span>
              <span className='icon invert ml-10'>
                <Image
                  src='/assets/common/imgs/icons/arrow-top-right.svg'
                  alt=''
                  width={44}
                  height={44}
                />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
