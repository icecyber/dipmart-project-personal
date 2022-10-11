/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../../components/Layout';

const CategoryPage = () => {
  return (
    <Layout title={'Category'}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="relative w-[160px] h-[150px] shadow-md">
          <img className="rounded-md " src="https://picsum.photos/200" alt="" />
          <div className="absolute bottom-[10px] left-[10px] text-white">
            <p>Finding Mobile</p>
            <p className="font-bold">By Brand</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
