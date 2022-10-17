import React from 'react';
import ArrowLeft from '../components/icon/ArrowLeft';
import DeliveryIcon from '../components/icon/DeliveryIcon';
import ShoppingBag from '../components/icon/ShoppingBag';
import TagIcon from '../components/icon/TagIcon';
import ThreeDots from '../components/icon/ThreeDots';
import Layout from '../components/Layout';

const notification = () => {
  return (
    <Layout icon={<ArrowLeft />} title={'Notification'}>
      <div className="flex justify-around text-center pb-2 border-b border-gray-200">
        <div className="text-center">
          <span className="bg-blue-800 w-[35px] h-[35px]  flex items-center justify-center rounded-full">
            <ThreeDots className="text-white w-[25px] h-[25px]" />
          </span>
          <h3 className="pt-[10px]">All</h3>
        </div>
        <div>
          <span className="bg-gray-300 w-[35px] h-[35px]  flex items-center justify-center mx-auto rounded-full">
            <TagIcon className="text-white w-[25px] h-[25px]" />
          </span>
          <h3 className="pt-[10px]">Promotion</h3>
        </div>
        <div>
          <span className="bg-gray-300 w-[35px] h-[35px]  flex items-center justify-center mx-auto rounded-full">
            <ShoppingBag className="text-white w-[25px] h-[25px]" />
          </span>
          <h3 className="pt-[10px]">Order</h3>
        </div>
        <div>
          <span className="bg-gray-300 w-[35px] h-[35px]  flex items-center justify-center mx-auto rounded-full">
            <DeliveryIcon className="text-white w-[25px] h-[25px]" />
          </span>
          <h3 className="pt-[10px]">Delivery</h3>
        </div>
      </div>
      {/* Notification Bar */}
      <div className="mt-3">
        <div className="flex p-[20px] border-b border-gray-200">
          <div className="bg-orange-500 min-w-[35px] max-h-[35px]  flex justify-center items-center rounded-full ">
            <DeliveryIcon />
          </div>
          <div className="pl-[15px]">
            <div className="flex justify-between">
              <h3 className="font-bold text-[15px]">Order Arrived</h3>
              <span className="text-gray-400">12:35 PM</span>
            </div>
            <p className="text-[12px] pt-1">
              Order ID <strong>1772</strong> has been completed & arrived at the
              location.
            </p>
          </div>
        </div>
        <div className="flex p-[20px] border-b border-gray-200">
          <div className="bg-blue-500 min-w-[35px] max-h-[35px]  flex justify-center items-center rounded-full ">
            <ShoppingBag className="w-5 text-white" />
          </div>
          <div className="pl-[15px] w-full">
            <div className="flex justify-between">
              <h3 className="font-bold text-[15px]">Success Order</h3>
              <span className="text-gray-400">12:35 PM</span>
            </div>
            <p className="text-[12px] pt-1">
              Order ID <strong>1773</strong> has been success.
            </p>
          </div>
        </div>
        <div className="flex p-[20px] border-b border-gray-200">
          <div className="bg-emerald-300 min-w-[35px] max-h-[35px]  flex justify-center items-center rounded-full ">
            <TagIcon className="w-5 text-white" />
          </div>
          <div className="pl-[15px]">
            <div className="flex justify-between">
              <h3 className="font-bold text-[15px]">
                20% Discount on all Xiaomi <br />
                Phone
              </h3>
              <span className="text-gray-400">12:35 PM</span>
            </div>
            <p className="text-[12px] pt-1">
              All of the Xiaomi products available with 20% exclusive discount.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default notification;
