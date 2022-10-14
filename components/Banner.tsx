/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';

import {
  Autoplay,
  Pagination,
} from 'swiper';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

const Banner = ({ banner }: any) => {
  return (
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full h-[170px] md:h-[330px] rounded-md "
      >
        {banner?.map((data: any) => (
          <SwiperSlide key={data.id}>
            <img src={data.image} alt={data.name} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Banner;
