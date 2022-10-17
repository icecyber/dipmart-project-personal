/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';

import { Input } from '@material-tailwind/react';

import customAxios from '../../components/axios/axiosHttp';
import ListIcon from '../../components/icon/ListIcon';
import SortIcon from '../../components/icon/SortIcon';
import SquareIcon from '../../components/icon/SquareIcon';
import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';

interface Product {
  id: string;
  name: string;
  product_list: Data[];
}

interface Data {}

const Brand = () => {
  const [selectValue, setSelectValue] = useState('')
  const [listing, setListing] = useState<Array<Product>>([]);
  const [isOpenDrawer, setOpenDrawer] = useState(true);
  const [brandname, setBrandname] = useState<Array<Product>>([]);
  

  useEffect(()=> {
    const fetchData = async () => {
      const res = await customAxios.get(
        '/api/method/dipmarts_app.api.brandlist?is_web=1'
      );
      setBrandname(res.data.message);
    };
    fetchData()
  }, []);


  const valueHandler =  (event:any) => {
    setSelectValue(event.target.value)
  }

  const listProduct = async () => {
    let params = { brand : selectValue }
    const req: any = await customAxios.get(
      '/api/method/dipmarts_app.api.allproduct', {params} ,
      );
      if(req.status === 200) {
        setListing(req.data.message.result);
      }    
    };
    useEffect(()=> {
      listProduct()  
    }, [selectValue])


  return (
    <Layout title={selectValue}>
      <div className="px-4">
            <div className="grid grid-cols-2 items-center">
              <div className="flex">
              <button className="p-3" onClick={()=>setOpenDrawer(true)}>
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
      <div
        className={`drawer ${
          isOpenDrawer ? 'w-80 md:w-96 p-4' : 'w-0'
        } `}
      >
        <h5 className="inline-flex items-center mb-4  font-semibold text-gray-500 dark:text-gray-400">
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          Filter
        </h5>
        <hr />
        <div className="mt-5 ">
          <Input placeholder='Search' id="search" className='border-2 rounded-lg py-1' />
        </div>
            <select className='border-2 rounded-lg py-1 w-full mt-3' onChange={valueHandler} required>
              {brandname?.map((data: any, index) => (
                <option key={index} value={data.id}>{data.name}</option>
              ))}
            </select>
       
        

        {/* Close BTN */}
        <button
          onClick={() => setOpenDrawer(false)}
          type="button"
          data-drawer-dismiss="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {/* Search BTN */}
        <div className="mt-5 text-center grid grid-cols-2 gap-5">
          <button
            className=" border border-blue-500 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-blue-700 hover:text-white bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Clear
          </button>
          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </div>
      {isOpenDrawer && (
        <div
          className='backDrop'
          onClick={() => setOpenDrawer(false)}
        ></div>
      )}
      
      {listing && (
          <div className="bg-gray-100 px-4 pt-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {listing?.map((product: any) => {
                return <ProductItem product={product} key={product.id} />;
              })}
            </div>
          </div>
      )}

      {/* Empty Shop by brand */}
      {listing?.length === 0 && (
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
