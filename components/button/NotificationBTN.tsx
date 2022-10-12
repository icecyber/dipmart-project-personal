import React, { forwardRef } from 'react';

import Link from 'next/link';

const NotificationBTN = () => {
  return (
    <Link href="/">
      <a
        type="button"
        className="w-[40px] m-auto relative items-center py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:border-2 active:border-t-4 active"
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
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <span className="sr-only">Notifications</span>
        {/* <div className="badge-overlay">20</div> */}
      </a>
    </Link>
  );
};

export default forwardRef(NotificationBTN);
