/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CloseIcon from '../../components/icon/CloseIcon';
import Layout from '../../components/Layout';

const WishListPage = () => {
  return (
    <Layout title="Wishlist">
      <div className="w-full h-[104] bg-white flex p-[10px] rounded-md relative">
        <div className="w-[80px] h-[84px] bg-gray-200 flex justify-center items-center rounded-md">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-[42px] h-[54px]"
          />
        </div>
        <div className="flex flex-col ml-[10px]">
          <div className="flex items-center pb-[8px] ">
            <span className="text-[14px] font-bold">
              iPhone 13 Pro Max 256GB
            </span>
            <div className="w-5 h-5 text-red-600 absolute right-5">
              <CloseIcon />
            </div>
          </div>
          <span className="text-[14px] text-gray-400">$1400</span>
        </div>
      </div>
    </Layout>
  );
};

export default WishListPage;
