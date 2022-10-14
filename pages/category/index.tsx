import React, {
  useEffect,
  useState,
} from 'react';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import customAxios from '../../components/axios/axiosHttp';
import Layout from '../../components/Layout';

const CategoryPage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    return () => {
      const fetchData = async () => {
        const res = await customAxios.get(
          '/api/method/dipmarts_app.api.categorylist'
        );
        setCategory(res.data.message.result.dipmart_cartgory);
      };
      fetchData();
    };
  }, []);

  return (
    <Layout title={'Category'}>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 px-4">
        {category?.map((data: any) => (
          <Link href={`/category/${data.id}`} key={data.id} >
            <div className="relative shadow-md">
              <img className="rounded-md " src={data.image_id} alt={data.name} />
              <div className="absolute bottom-[10px] left-[10px] text-white">
                <p>{data.name}</p>
                <p className="font-bold">{data.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default CategoryPage;