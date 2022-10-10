import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import customAxios from '../../components/axios/axiosHttp';
import Layout from '../../components/Layout';

interface Data {
  id: string;
  name: string;
  primary_image: string;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Array<Data>>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await customAxios.get(
        'api/method/dipmarts_app.api.homepagepg'
      );
      setProduct(res.data.message.all_products);
    };
    fetchData();
  }, []);

  const router = useRouter();
  const product_id = router.query;

  const dataProduct = product.find((x) => x.id === product_id.id);
  console.log(dataProduct);

  if (!dataProduct) {
    return <div>No Product Found</div>;
  }

  return (
    <Layout title={dataProduct.name}>
      <div className="py-2">
        <Link href="/">Back</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.primary_image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
