/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import customAxios from '../../components/axios/axiosHttp';
import Layout from '../../components/Layout';
import { Fragment } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

interface Product {
  id: string;
  name: string;
  primary_image: any;
  default_price: number;
  stock: number;
  product_varraint: ProductVarraint[];
  product_spec: ProductSpec[];
}

interface ProductSpec {
  id: string;
  value: string;
  value_spec: ValueSpec[];
}

interface ValueSpec {
  id: string;
  value: any;
}

interface ProductVarraint {
  id: string;
  name: string;
  varriant_type: string;
  product_varraint_value: ProductVarraintValue[];
}
interface ProductVarraintValue {
  id: string;
  note: string;
  price: number;
  status: string;
  value: string;
}

const ProductDetail = () => {
  const router = useRouter();
  const myroute = router.query.id;
  const [open, setOpen] = useState(-1);

  const handleOpen = (index: number) => {
    setOpen(open === index ? -1 : index);
  };

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.post(
        '/api/method/dipmarts_app.api.productdetail',
        {
          id: myroute,
        }
      );
      setProduct(await res.data.message);
    };
    fetchData();
  }, [myroute]);

  return (
    <Fragment>
      <Layout title={product?.name}>
        <div className="w-full relative px-4">
          <button onClick={() => router.back()}>
            <a className="absolute bg-gray-300 w-8 h-8 flex justify-center items-center rounded-lg shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </a>
          </button>
          <img
            className="w-full"
            src={product?.primary_image}
            alt={product?.name}
          />
        </div>
        <div className="bg-gray-200 px-4 rounded-t-xl">
          <h1 className="font-bold text-[20px] py-[10px]">{product?.name}</h1>
          <div className="grid grid-cols-2 ">
            <h1 className="text-[20px] text-blue-800">
              ${product?.default_price}
            </h1>
            <div className="text-[15px] flex justify-end items-center">
              <button className="border-2 border-blue-800 text-blue-800 px-2 rounded-lg w-[30px] h-[30px]">
                -
              </button>
              <span className="text-center px-2">1</span>
              <button className="border-2 border-blue-800 text-blue-800 px-2 rounded-lg w-[30px] h-[30px]">
                +
              </button>
            </div>
            {/* Avalible */}
            <h1 className="text-[14px] col-span-2">
              Availability :
              <span className="text-blue-800 font-bold"> {product?.stock}</span>{' '}
              Products in Stock
            </h1>
            {/* Capacity & Color Loop*/}
            <div className="col-span-2">
              <div>
                {product?.product_varraint.map((productVarraint) => (
                  <h1
                    className="font-bold text-[16px]"
                    key={productVarraint.id}
                  >
                    <h1 className="py-[10px]">{productVarraint.name}</h1>
                    <div className="flex">
                      {productVarraint.product_varraint_value.map((data) => {
                        return (
                          <div
                            className="bg-blue-800 rounded-md w-[57px] last:ml-[10px]"
                            key={data.id}
                          >
                            <p className="text-white text-center text-[12px] font-normal py-[5px] px-[10px] ">
                              {data.note}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </h1>
                ))}
              </div>
            </div>
            {/* Description */}
            <p className="pt-3 col-span-2 text-[15px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At ad
              tenetur possimus eum, ipsam expedita amet aliquid molestias
              eligendi atque praesentium cupiditate quaerat odit
            </p>
            {/* Product Description */}
            {product?.product_spec.map((data: any, index) => {
              return (
                <div className="col-span-2" key={data.id}>
                  <Accordion open={open === index}>
                    <AccordionHeader onClick={() => handleOpen(index)}>
                      {data.value}
                    </AccordionHeader>
                    <AccordionBody>
                      <p>
                        {data.value_spec.map((data: any) => (
                          <p key={data.id}>{data.value}</p>
                        ))}
                      </p>
                    </AccordionBody>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
        {/* Total Button */}
        <div className="grid grid-cols-5 py-4 px-4 my-5 rounded-lg border-t-2 gap-3">
          <div>
            <div className="text-[20px] py-[10px] bg-white border-2 border-blue-900 text-center rounded-lg  text-blue-900 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
          <button className="col-span-2 w-full py-[10px] bg-white border-2 border-blue-900 text-center rounded-lg  text-blue-900 font-bold">
            Add to cart
          </button>
          <button className="col-span-2 w-full py-[10px] bg-blue-900 text-center rounded-lg  text-white font-bold">
            Buy Now
          </button>
        </div>
      </Layout>
    </Fragment>
  );
};

export default ProductDetail;
