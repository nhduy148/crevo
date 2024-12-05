import Image from 'next/image';
import React from 'react';

type Props = {
  id: string;
  full_name: string;
  title: string;
  avatar_url: string;
  comment: string;
};

const ClientCard = (props: Props) => {
  return (
    <div className='swiper-slide'>
      <div className='item'>
        <div className='text'>
          <h4>{props.comment}</h4>
        </div>
        <div className='info d-flex align-items-center mt-40 pt-30 bord-thin-top-light'>
          <div>
            <div className='img-author'>
              <Image
                src={props.avatar_url}
                alt=''
                width={1000}
                height={1000}
                quality={1000}
              />
            </div>
          </div>
          <div className='info-text'>
            <span>{props.full_name}</span>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
