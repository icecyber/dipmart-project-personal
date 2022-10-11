import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import Marquee from 'react-fast-marquee';

import customAxios from '../components/axios/axiosHttp';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Banner from '../components/Banner';

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
  // const [brand, setBrand] useState<Array<Brand>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        '/api/method/dipmarts_app.api.homepage'
      );
      setProduct(res.data.message.popular_products);
      setSlide(res.data.message.advertisement);
      setBrandname(res.data.message.shop_by_brands);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {/* <Marquee className='w-full h-[200px] md:full md:h-[360px] ' gradient={false} >
        {slide.map((slides)=>(
          <div key={slides.id}>
            <Image className='w-full h-full' src={slides.image} alt={slides.title} layout='fill' />
          </div>
        ))
        }
      </Marquee> */}
      <Banner banner={slide} />
      <div>
        <div className="d-flex justify-between">
          <h2 className="text-lg font-bold">Shop By Brand</h2>
          <Link href="/">
            <a href="">See all</a>
          </Link>
        </div>

        <div className="w-full h-[200px] md:full md:h-[360px] grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {brandname?.slice(0, 3).map((s) => (
            <div key={s.id} className="relative w-10 h-10">
              <Image
                className="object-cover"
                src={s.logo}
                alt={s.name}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 ">
        {product.map((product: any) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </Layout>
  );
};

export default Home;
