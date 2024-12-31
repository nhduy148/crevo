'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface IProps {
  pathname: string;
  label: string;
}

export const ActiveLink: React.FC<IProps> = ({ pathname, label }) => {
  const { pathname: routerPath } = useRouter();
  return (
    <Link
      className={clsx('nav-link', {
        active: routerPath.includes(pathname),
      })}
      href={pathname}>
      {label}
    </Link>
  );
};

ActiveLink.defaultProps = {};
