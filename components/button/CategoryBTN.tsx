import React from 'react';

import Link from 'next/link';

const CategoryBTN = () => {
  return (
    <Link href="/category">
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
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>

        <span className="sr-only">Notifications</span>
        {/* <div className="badge-overlay">20</div> */}
      </a>
    </Link>
  );
};

export default CategoryBTN;
