import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  portDetail: {
    urlDetail: string;
    title: string;
  };
  description: string;
  tags: { urlTag: string; nameTag: string }[];
  urlImage: string;
};

const PortfolioCard = ({ portDetail, description, tags, urlImage }: Props) => {
  return (
    <div className='card-item'>
      <div className='row'>
        <div className='col-lg-5'>
          <div className='cont md-mb50'>
            <div>
              <h5>
                <a href={portDetail.urlDetail}>{portDetail.title}</a>
              </h5>
            </div>
            <div>
              <p>{description}</p>
              <div className='mt-40'>
                {tags.map((tag, key) => {
                  <Link key={key} href={tag.urlTag} className='tag'>
                    {tag.nameTag}
                  </Link>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-7'>
          <div className='img'>
            <Image src={urlImage} alt='' width={44} height={44} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
