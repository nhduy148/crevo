import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  id: string;
  title: string;
  short_description: string;
  tags: string[];
  thumbnail_url: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className='card-item'>
      <div className='row'>
        <div className='col-lg-5'>
          <div className='cont md-mb50'>
            <div>
              <h5>
                <Link href={`projects/${props.id}`}>{props.title}</Link>
              </h5>
            </div>
            <div>
              <p>{props.short_description}</p>
              <div className='mt-40'>
                {props.tags.map((e, key) => {
                  return (
                    <Link key={key} href={`tags/${e}`} className='tag'>
                      {e}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-7'>
          <div className='img'>
            <Image
              src={props.thumbnail_url}
              alt=''
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
