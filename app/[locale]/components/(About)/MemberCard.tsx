import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TeamMember } from 'types';

// type Props = {
//   id: string;
//   full_name: string;
//   title: string;
//   avatar_url: string;
//   social_networks: {
//     platform: string;
//     url: string;
//   }[];
// };

const MemberCard = (props: TeamMember) => {
  return (
    <div className='item mb-10'>
      <div className='d-flex'>
        <div>
          <div className='img fit-img'>
            <Image
              src={props.avatarUrl}
              alt=''
              width={2000}
              height={2000}
              quality={100}
            />
          </div>
        </div>
        <div className='cont'>
          <h2>{props.fullName}</h2>
          <span>{props.title}</span>
        </div>
        <div className='ml-auto'>
          <div className='social-icon'>
            {props.socialNetworks.map((item, key) => {
              return (
                <Link key={key} href={item.url}>
                  <i className={`fa-brands fa-${item.platform}`}></i>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
