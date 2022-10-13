import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules

import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

const Banner = ({ banner }: any) => {
  return (
    <>
      <Swiper
        navigation={true}
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
            <Image src={data.image} alt={data.name} layout="fill" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
