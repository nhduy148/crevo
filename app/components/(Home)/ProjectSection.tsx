import React from 'react';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import Image from 'next/image';
import DataProject from '../../../data/project.json';

const ProjectSection = () => {
  const dataProject = DataProject;
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
          {dataProject.map((item, key) => {
            return <ProjectCard key={key} {...item} />;
          })}
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

export default ProjectSection;
