import React, { useState } from 'react';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

import customAxios from './axios/axiosHttp';
import { ProductItemType } from './type';

const ProductItem = ({ product }: ProductItemType) => {
  const [inWishlist, setInWishlist] = useState(product.in_wishlist)  

  product.in_wishlist

  const data = {product_id : product.id}

  
    const removeWishlist = () => {
      customAxios.post('/api/method/dipmarts_app.api.itemtowishlist', data)
      setInWishlist(false)
    }
  
    const addToWishlist = () => {
      customAxios.post('/api/method/dipmarts_app.api.itemtowishlist', data)
      setInWishlist(true)    
    }

    const cartBody = {
      "product_id": product.id,
      "selection": [
          product.pre_spec.spec[0],
          product.pre_spec.spec[1]
      ],
      "qty": 1,
      "noted": ""
    }
    const addToCart = () => {
      customAxios.post('/api/method/dipmarts_app.api.addtocart', 
        cartBody
      )
      console.log(addToCart);
      
    }

  return (
    <div className="card relative">
      <div className="-left-1 absolute z-10 w-[60px] h-[18px] bg-[#3080DC] rounded-r-sm text-white text-[9px] flex justify-center items-center mt-[10px] ">
        {product?.is_top_sell}
      </div>
      {/* Heart Icon Outline */}
      {inWishlist ? 
      <button type='button' name='wishlist-btn' onClick={removeWishlist} className="w-[31px] h-[31px] bg-gray-200 rounded-full flex justify-center items-center absolute right-[10px] top-[10px] z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </button> 
      :
      <button type='button' name='wishlist-btn' onClick={addToWishlist} className="w-[31px] h-[31px] bg-gray-200 rounded-full flex justify-center items-center absolute right-[10px] top-[10px] z-10">
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
      }
      
      <div className="text-center pt-[19px]">
        <Link href={`/product/${product.id}`} key={product.id} passHref>
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
        <Link href={`/product/${product.id}`} passHref>
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
          {product.discount > 0 ?? <p className="text-red-600 text-[10px] ml-[5px]">
            <s>$ {product.discount}</s>
          </p>}
          
        </div>
        <button
          onClick={addToCart}
          className="w-[25px] h-[25px] rounded-full bg-white shadow-md flex justify-center items-center"
          type="button"
          name='addtocart'
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
