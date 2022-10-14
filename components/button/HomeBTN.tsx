import React from 'react';

import Link from 'next/link';

const HomeBTN = () => {
  return (
    <Link href="/">
      <a
        type="button"
        className="w-[40px] m-auto relative items-center py-2 text-sm font-medium text-center
         text-white  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:bg-white
        dark:hover:text-blue-700 dark:focus:text-blue-800 active:border-2 active:border-t-4 active"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[26px] h-[26px] md:w-10 md:h-10 text-gray-500 hover:text-blue-800 m-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <span className="sr-only">Notifications</span>
        {/* <div className="badge-overlay">20</div> */}
      </a>
    </Link>
  );
};

export default HomeBTN;
