/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Notification } from './icon/Nortification';
import Search from './icon/Search';

const TopNav = () => {
  return (
    <header className="sticky top-0 w-full z-20 bg-white">
      <nav className="nav">
        <Link href="/">
          <img
            className="w-20 h-auto"
            src="https://www.dipmarts.com/wp-content/themes/dipmarts/assets/images/DiPMart-Horizontal-Logo.png"
            alt="logo"
          />
        </Link>
        <div className="flex flex-row space-x-2">
          <Link href={'/cart'}>
            <Search />
          </Link>
          <Link href={'/login'}>
            <Notification />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
