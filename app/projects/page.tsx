import React from 'react';
import ProjectsData from '../../data/project.json';
import Link from 'next/link';
import ProjectCard from '../components/(Project)/ProjectCard';

const Projects = () => {
  const data = ProjectsData;
  return (
    <main>
      <header className='work-hed'>
        <div className='container section-padding'>
          <div className='caption text-center'>
            <h1>Projects</h1>
            <div className='path mt-15'>
              <span>
                <Link href='/'>Home</Link>
              </span>
              <span>
                <i className='fa-solid fa-arrow-right-long'></i>
              </span>
              <span className='main-color'>Projects</span>
            </div>
          </div>
        </div>
      </header>

      <div className='works-mp section-padding pt-0'>
        <div className='container'>
          <div className='row md-marg gallery'>
            {data.map((item, key) => {
              return <ProjectCard key={key} {...item} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
