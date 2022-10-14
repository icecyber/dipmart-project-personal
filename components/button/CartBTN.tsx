import React, {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';

import customAxios from '../axios/axiosHttp';

const CartBTN = () => {

  const [badge, setBadge] = useState(0)
  useEffect(() => {
    return () => {
      const Badge = async () => {
        const res = await customAxios.get(
          '/api/method/dipmarts_app.api.cartlist'
        );
        setBadge(res.data.message.length);
      }
      Badge()
    }
  }, [])
  
  

  return (
    <Link href="/cart">
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span className="sr-only">Notifications</span>
        {badge > 0 &&
          <div className="badge-overlay">{badge}</div>   
        }
      </a>
    </Link>
  );
};

export default CartBTN;
