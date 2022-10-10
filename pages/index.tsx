import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import customAxios from '../components/axios/axiosHttp';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

interface Data {
  id: string;
}

const Home: NextPage = () => {
  const [product, setProduct] = useState<Array<Data>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        'api/method/dipmarts_app.api.homepagepg'
      );
      console.log(product);

      setProduct(res.data.message.all_products);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {product.map((product: any) => {
          return <ProductItem product={product} key={product.id}></ProductItem>;
        })}
      </div>
    </Layout>
  );
};

export default Home;
