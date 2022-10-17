import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import customAxios from '../../components/axios/axiosHttp';
import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';
import SortIcon from '../../components/icon/SortIcon';
import SquareIcon from '../../components/icon/SquareIcon';
import ListIcon from '../../components/icon/ListIcon';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  product_list: Data[];
}

interface Data {}

const Brand = () => {
  const [listing, setListing] = useState<Array<Product>>([]);

  const router = useRouter();
  let param = router.query.brand;

  useEffect(() => {
    const listProduct = async () => {
      const req: any = await customAxios.get(
        '/api/method/dipmarts_app.api.brandproduct',
        {
          params: {
            id: param,
          },
        }
      );
      setListing(req.data.message.product_list);
    };
    listProduct();
  }, [param, setListing]);

  return (
    <Layout title={param}>
      {listing && (
        <>
          <div className="px-4">
            <div className="grid grid-cols-2 items-center">
              <div className="flex">
                <button className="p-3">
                  <SortIcon />
                </button>
                <div className="p-3">Sort</div>
              </div>
              <div className="flex justify-end">
                <button className="p-3">
                  <SquareIcon />
                </button>
                <button className="p-3">
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-4 pt-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {listing?.map((product: any) => {
                return <ProductItem product={product} key={product.id} />;
              })}
            </div>
          </div>
        </>
      )}

      {/* Empty Shop by brand */}
      {listing.length === 0 && (
        <div className="w-[300px] mx-auto text-center flex flex-col relative top-24 ">
          <Image
            src="/empty_shopbybrand.svg"
            alt="empty_shopbybrand"
            width={254}
            height={250}
          />
          <span className="font-bold text-lg">We’re Sorry!</span>
          <p className="text-sm text-gray-400">
            The products is not available at the <br /> moment.
          </p>
        </div>
      )}
    </Layout>
  );
};
export default Brand;
