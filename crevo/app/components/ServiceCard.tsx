import React from 'react';
import Image from 'next/image';

type Props = {
  iconUrl: string;
  imgUrl: string;
  title: string;
  description: string;
};

const ServiceCard = ({ iconUrl, imgUrl, title, description }: Props) => {
  return (
    <div className='col-lg-4'>
      <div className='item md-mb50'>
        <div className='cont'>
          <div className='d-flex align-items-center'>
            <div>
              <h6>{title}</h6>
            </div>
            <div className='ml-auto'>
              <div className='icon invert'>
                <Image src={iconUrl} alt='' width={44} height={44} />
              </div>
            </div>
          </div>
          <div className='text'>
            <p>{description}</p>
          </div>
        </div>
        <div className='img'>
          <Image src={imgUrl} alt='' width={44} height={44} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
