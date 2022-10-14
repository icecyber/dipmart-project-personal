/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import customAxios from '../components/axios/axiosHttp';
import Banner from '../components/Banner';
import MoreIcon from '../components/icon/SeeAll';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

interface Data {
  id: string;
}
interface Slide {
  id: string;
  image: string;
  title: string;
}

interface Brand {
  id: string;
  logo: string;
  name: string;
}

const Home: NextPage = () => {
  const [product, setProduct] = useState<Array<Data>>([]);
  const [slide, setSlide] = useState<Array<Slide>>([]);
  const [brandname, setBrandname] = useState<Array<Brand>>();
  const [secondslide, setSecondslide] = useState<Array<Brand>>([]);
  const [allproduct, setAllproduct] = useState<Array<Data>>([]);

  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = async () => {
    const res = await customAxios.get('/api/method/dipmarts_app.api.homepage');
    setProduct(res.data.message.popular_products);
    setSlide(res.data.message.advertisement);
    setBrandname(res.data.message.shop_by_brands);
    setSecondslide(res.data.message.secondary_banner);
  };

  let offset = 0;
  let lastpage = 0;
  const getAllproduct = async () => {
    if (offset === offset) {
      offset += 1;
    }
    const req = await customAxios.get(
      '/api/method/dipmarts_app.api.allproduct',
      {
        params: {
          current_page: offset,
        },
      }
    );
    const newData: any[] = req.data.message.result;
    setAllproduct((oldData) => [...oldData, ...newData]);
    lastpage = req.data.message.meta.last_page;
  };

  const handleScroll = (e: any) => {
    if (offset > lastpage) {
      return;
    }
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      getAllproduct();
    }
  };

  useEffect(() => {
    getAllproduct();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout title="Homepage">
      <div className="px-4">
        <Banner banner={slide} />
        <div>
          <div className="w-full h-auto md:full md:h-auto grid grid-cols-4 gap-4 md:grid-cols-5 my-[20px]">
            {brandname?.slice(0, 7).map((s) => (
              <div
                key={s.id}
                className="relative  flex flex-col bg-white rounded-lg w-full py-[10px] mx-auto items-center"
              >
                <Link href={'/'} passHref>
                  <a>
                    <img
                      className="w-[37px] h-[37px] md:w-[37px] md:h-[37px] mx-auto object-contain"
                      src={s.logo}
                      alt={s.name}
                    />
                  </a>
                </Link>
                <span className="text-center">{s.name}</span>
              </div>
            ))}
            <div className="flex flex-col bg-[#3080DC] rounded-lg w-full p-auto justify-center">
              <Link href={'/'} passHref>
                <a className="flex flex-col items-center text-center text-white">
                  <MoreIcon />
                  <span className="text-[12px]">See All</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="d-flex justify-between mb-[20px]">
            <h2 className="text-lg font-bold">Popular</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {product?.map((product: any, index) => {
            return (
              <ProductItem
                product={product}
                key={index}
                pre_spec={{
                  spec: [],
                }}
              />
            );
          })}
        </div>
        <Banner banner={secondslide} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {allproduct?.map((product: any, index) => {
            return (
              <ProductItem
                product={product}
                key={index}
                pre_spec={{
                  spec: [],
                }}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
