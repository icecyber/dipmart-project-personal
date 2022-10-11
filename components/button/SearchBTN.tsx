import Link from 'next/link';
import React from 'react';

const SearchBTN = () => {
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <span className="sr-only">Notifications</span>
        {/* <div className="badge-overlay">2</div> */}
      </a>
    </Link>
  );
};

export default SearchBTN;
