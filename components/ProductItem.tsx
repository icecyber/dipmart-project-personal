import React from 'react';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

import { ProductItemType } from './type';

const ProductItem = ({ product }: ProductItemType) => {


  return (
    <div className="card relative">
      <div className="-left-1 absolute z-10 w-[60px] h-[18px] bg-red-600 rounded-r-sm text-white text-[9px] flex justify-center items-center mt-[10px] ">
        25% Off
      </div>
      <button className="w-[31px] h-[31px] bg-gray-200 rounded-full flex justify-center items-center absolute right-[10px] top-[10px] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <div className="text-center pt-[19px]">
        <Link href={`/product/${product.id}`} key={product.id}>
          <a>
            <Image
              className="rounded shadow mx-auto max-w-sm md:max-w-[10rem] "
              src={product.primary_image}
              alt={product.name}
              width="106px"
              height="133px"
            />
          </a>
        </Link>
      </div>
      <div className="px-[10px] font-bold pt-[7px] pb-[15px]">
        <Link href={`/product/${product.id}`}>
          <a>
            <h2 className="font-[12px] ">{product.name}</h2>
          </a>
        </Link>
      </div>
      <div className="flex justify-between px-[10px] pb-[10px] items-center">
        <div className="flex items-center">
          <p className="font-bold text-[#2B2F7E] text-[12px] ">
            $ {product.default_price}
          </p>
          <p className="text-red-600 text-[10px] ml-[5px]">
            <s>$1049.99</s>
          </p>
        </div>
        <button
          className="w-[25px] h-[25px] rounded-full bg-white shadow-md flex justify-center items-center"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[15px] h-[15px] text-blue-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
