import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import Image from 'next/image';

const Banner = ({ banner }: any) => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper w-full h-[360px] rounded-md"
      >
        {banner?.map((data: any) => (
          <SwiperSlide key={data.id}>
            <Image
              src={data.image}
              alt={data.name}
              layout="fill"
              className="w-full h-32"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
