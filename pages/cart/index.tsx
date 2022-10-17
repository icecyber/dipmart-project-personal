import React, {
  useEffect,
  useState,
} from 'react';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import router from 'next/router';

import customAxios from '../../components/axios/axiosHttp';
import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';

interface Data {
  id: string;
}
interface Cart {
  final_price: number;
  product: Product;
}
interface Product {
  default_price: number;
  id: string;
  name: string;
  stock?: number;
  qty: number;
  primary_image: string;
  selection: Varraint[];
}

interface Varraint {
  id: string;
  name: string;
  product_varraint_value: VarraintValue[];
}
interface VarraintValue {
  id: string;
  value?: any;
  note?: string;
}

const CartPage = () => {
  const [product, setProduct] = useState<Array<Data>>([]);
  const [cartitem, setCartitem] = useState<Array<Cart>>([]);
  

  const fetchCartitem = async () => {
    const data = await customAxios.get('/api/method/dipmarts_app.api.cartlist');
    setCartitem(data.data.message);
  };

  const fetchData = async () => {
    const res = await customAxios.get(
      '/api/method/dipmarts_app.api.cartrelate'
    );
    setProduct(res.data.message.list_product);
  };

  useEffect(() => {
    fetchCartitem();
    fetchData();
  }, []);

  const removeCart = (id: string) => {
    customAxios.post('/api/method/dipmarts_app.api.removecart', { id: id });
  };

  return (
    <Layout title="My Cart">
      {(cartitem.length === 0) &&
        <div className="w-[300px] mx-auto text-center grid grid-cols-1 gap-3">
          <Image
            src="/empty_cart.svg"
            alt="Empty_Cart"
            width={204}
            height={200}
          />
          <span className="font-bold text-lg">Your Cart is Empty</span>
          <p className="text-sm text-gray-400">
            Browse product and add to cart
            <br /> to place order!
          </p>
          <button
            onClick={()=>{
              router.push('/')
            }}
            type="button"
            name='shopping'
            className="bg-blue-900 py-4 rounded-2xl text-white font-bold"
          >
            Start Shopping
          </button>
        </div>}

        {cartitem.length >= 1 && <div className="px-4">
        <div className="grid grid-cols-3 content-center mb-[40px]">
          {/* Cart */}
          <div className="mx-auto">
            <span>Cart</span>
            <div className="w-[30px] h-[30px] border-2 border-blue-800 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[25px] h-[25px] bg-blue-800 text-white rounded-full  border-2 border-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
          {/* Address */}
          <div className="mx-auto">
            <span className="text-gray-400">Address</span>
            <div className="w-[30px] h-[30px] border-2 border-gray-400 rounded-full flex justify-center items-center mx-auto ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>
          {/* Payment */}
          <div className="mx-auto">
            <span className="text-gray-400">Payment</span>
            <div className="w-[30px] h-[30px] border-2 border-gray-400 rounded-full flex justify-center items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="border-y-2 border-white py-4 px-3 bg-white rounded-xl shadow-lg">
          <span className="text-[16px] font-bold">Review Order</span>
          {cartitem.map((data: any) => {
            return (
              <div key={data.id}>
                <div className="flex py-5 justify-around">
                  <img
                    className="w-[106px] h-[126px]"
                    src={data.selection_image}
                    alt={data.product.name}
                  />
                  <div className="grid grid-row">
                    <div className="flex justify-between">
                      <h1 className="text-[14px]">{data.product.name}</h1>
                    </div>
                    <span className="text-[12px] text-gray-500">
                      Qty: &nbsp;<span className="text-black">{data.qty}</span>
                      &nbsp; &nbsp;
                    </span>
                    {data.selection.map((spec: any) => {
                      return (
                        <span
                          key={spec.id}
                          className="text-[12px] text-gray-500"
                        >
                          {spec.name}: &nbsp;
                          <span className="text-black">
                            {spec.product_varraint_value.note}
                          </span>
                        </span>
                      );
                    })}

                    <div className="flex items-center justify-between">
                      <h1 className="font-bold">
                        $ {data.product.default_price}.00
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <button
                      type="button"
                      onClick={() => removeCart(data.id)}
                      name="remove-card"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-blue-700 self-end"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <div className="flex">
                      <div className="border-2 border-blue-700 rounded-lg px-2">
                        -
                      </div>
                      <span className="px-3">1</span>
                      <div className="border-2 border-blue-700 rounded-lg px-2">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Product you might like */}
        <div className="font-bold py-3">Product you might like</div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {product.slice(0, 2).map((product: any) => {
            return (
              <ProductItem
                product={product}
                key={product.id}
                pre_spec={{
                  spec: [],
                }}
              />
            );
          })}
        </div>
        {/* Total Button */}
        <div className="grid grid-cols-3 bg-white py-4 px-4 my-5 rounded-lg ">
          <div>
            <span className="text-[14px] text-gray-400">Total</span>
            <div className="text-[20px] font-bold text-blue-700">
              $ {cartitem.reduce((a, b)=>a + b.final_price, 0)}
            </div>
          </div>
          <button
            type="button"
            name="checkout-btn"
            className="col-span-2 w-full py-[15px] bg-blue-900 text-center rounded-lg  text-white font-bold"
          >
            Checkout
          </button>
        </div>
      </div>}
      
    </Layout>
  );
};

export default CartPage;
