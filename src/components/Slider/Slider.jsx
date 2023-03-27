import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'

import 'swiper/css';

export const Slider = () => {
    return (
        <Swiper 
            spaceBetween={6}
            grabCursor
            slidesPerView={3}
        >
            <SwiperSlide style={{flexShrink: 1}}><img src={img1} alt="img1" /></SwiperSlide>
            <SwiperSlide style={{flexShrink: 1}}><img src={img2} alt="img2" /></SwiperSlide>
            <SwiperSlide style={{flexShrink: 1}}><img src={img3} alt="img3" /></SwiperSlide>
            <SwiperSlide style={{flexShrink: 1}}><img src={img1} alt="img1" /></SwiperSlide>
            <SwiperSlide style={{flexShrink: 1}}><img src={img1} alt="img1" /></SwiperSlide>
            <SwiperSlide style={{flexShrink: 1}}><img src={img2} alt="img2" /></SwiperSlide>
        </Swiper>
    )
}
