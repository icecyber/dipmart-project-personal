import React from 'react';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

import { ProductItemType } from './type';

const ProductItem = ({ product }: ProductItemType) => {
  console.log(product);
  
  return (
    <div className="card">
      <Link href={`/product/${product.id}`} key={product.id}>
        <a>
          <Image
            className="rounded shadow mx-auto max-w-sm md:max-w-[10rem] "
            src={product.primary_image}
            alt={product.name}
            width='500px'
            height='500px'
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">$ {product.default_price}</p>
        <p className="mb-2">{product.stock_type}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
