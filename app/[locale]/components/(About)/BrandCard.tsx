import Image from 'next/image';
import React from 'react';

type Props = {
  id: string;
  logo_url: string;
};

const BrandCard = (props: Props) => {
  return (
    <div className='col-lg col-md-4 col-6 md-mb30'>
      <div className='item d-flex align-items-center justify-content-center'>
        <div className='img'>
          <Image
            src={props.logo_url}
            alt=''
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
