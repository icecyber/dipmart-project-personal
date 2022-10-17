/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import customAxios from '../../components/axios/axiosHttp';
import CloseIcon from '../../components/icon/CloseIcon';
import Layout from '../../components/Layout';
import Image from 'next/image';

interface Data {
  id: string;
  primary_image: string;
  name: string;
  default_price: number;
}

const WishListPage = () => {
  const [wishlist, setWishlist] = useState<Array<Data>>([]);

  let offset = 0;
  let lastpage = 0;
  const getWishlist = async () => {
    if (offset === offset) {
      offset += 1;
    }
    const res = await customAxios.get('/api/method/dipmarts_app.api.wishlist', {
      params: {
        current_page: offset,
      },
    });
    const newData: any[] = res.data.message.result;
    setWishlist((oldData) => [...oldData, ...newData]);
    lastpage = res.data.message.meta.last_page;
  };

  const handleScroll = (e: any) => {
    if (offset > lastpage) {
      return;
    }
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      getWishlist();
    }
  };

  useEffect(() => {
    getWishlist();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const removeHandler = (id: string, index: number) => {
    customAxios.post('/api/method/dipmarts_app.api.itemtowishlist', {
      product_id: id,
    });
    setWishlist((prev) => prev.filter((e, i) => i !== index));
  };

  return (
    <Layout title="Wishlist">
      {wishlist &&
        wishlist?.map((data: any, index: number) => (
          <div className="relative" key={index}>
            <button
              type="button"
              name="close-btn"
              onClick={() => removeHandler(data.id, index)}
              className="w-5 h-5 text-red-600 absolute right-5 z-10 top-2"
            >
              <CloseIcon />
            </button>
            <Link href={`/product/${data.id}`}>
              <div className=" h-[104] bg-white flex p-[10px] rounded-md relative mx-4 mb-4">
                <div className="w-[80px] h-[84px] bg-gray-200 flex justify-center items-center rounded-md">
                  <img
                    src={data.primary_image}
                    alt={data.name}
                    className="w-[42px] h-[54px]"
                  />
                </div>
                <div className="flex flex-col ml-[10px]">
                  <div className="flex items-center pb-[8px] ">
                    <span className="text-[14px] font-bold">{data.name}</span>
                  </div>
                  <span className="text-[14px] text-gray-400">
                    ${data.default_price}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}

      {/* Empty Wishlist */}
      {wishlist.length === 0 && (
        <div className="w-[300px] mx-auto text-center flex flex-col relative top-24 ">
          <Image
            src="/empty_wishlist.svg"
            alt="Empty_Wishlist"
            width={254}
            height={250}
          />
          <span className="font-bold text-lg">Empty Wish List</span>
          <p className="text-sm text-gray-400">
            You haven’t added any items
            <br /> to your Wish List yet.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default WishListPage;
