import React from 'react';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Notification from './icon/Notification';
import Search from './icon/Search';

const TopNav = () => {
  return (
    <header className="sticky top-0 w-full z-20  bg-white">
      <nav className="nav md:h-[90px]">
        <Link href="/">
          <img
            className="w-20 md:w-[130px] h-auto"
            src="https://www.dipmarts.com/wp-content/themes/dipmarts/assets/images/DiPMart-Horizontal-Logo.png"
            alt="logo"
          />
        </Link>
        <div className="flex flex-row space-x-2">
          <Link href={'/category/search'}>
            <a>
              <Search />
            </a>
          </Link>
          <Link href={'/notification'}>
            <a>
              <Notification />
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
