import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  id: string;
  title: string;
  tagline: string;
  thumbnail_url: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className='col-lg-6 items'>
      <div className='item'>
        <div className='cont d-flex align-items-center'>
          <div>
            <h5>{props.title}</h5>
            <span>{props.tagline}</span>
          </div>
          <div className='ml-auto'>
            <Link href={`/projects/${props.id}`}>
              <i className='fa-solid fa-chevron-right'></i>
            </Link>
          </div>
        </div>
        <div className='img'>
          <Image
            src={props.thumbnail_url}
            alt=''
            quality={100}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
