import React, {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';

import customAxios from '../../components/axios/axiosHttp';
import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';

interface Product {
    id: string;
    name: string;
    product_list: Data[]
  }

  interface Data {
    
  }

const Brand = () => {

    const [listing, setListing] = useState<Array<Product>>([])

    const router = useRouter()
    let param = router.query.brand
  
    useEffect(() => {
    const listProduct = async () => {
      const req:any = await customAxios.get('/api/method/dipmarts_app.api.brandproduct',
      {params: {
        id: param
      }})
      setListing(req.data.message.product_list);
    }
    listProduct()

  }, [param, setListing]);


  return (
    <Layout title={'Shop by Brand'}>
        <div className="bg-gray-100 px-4 pt-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {listing?.map((product: any) => {
            return (
              <ProductItem
                product={product}
                key={product.id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  )
}
export default Brand