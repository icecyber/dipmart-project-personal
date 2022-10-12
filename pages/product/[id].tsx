import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import customAxios from '../../components/axios/axiosHttp';
import Layout from '../../components/Layout';

interface Data {
  id: string;
  name: string;
  primary_image: any;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Data>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.post(
        '/api/method/dipmarts_app.api.productdetail'
      );
      setProduct(await res.data.message);
    };
    fetchData();
  }, []);
  console.log(product);

  const router = useRouter();
  const product_id = router.query.data;

  if (product_id === product?.id) {
    return (
      <Layout title={product?.name}>
        <div className="py-2">
          <Link href="/">Back</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product?.primary_image ?? ''}
              alt={product?.name}
              width={640}
              height={640}
              layout="responsive"
            />
          </div>
        </div>
      </Layout>
    );
  }
};

export default ProductDetail;
