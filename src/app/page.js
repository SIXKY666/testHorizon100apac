"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex container items-center justify-center">
      <div className="content">
        <Swiper
          grabCursor={true}
          direction={'vertical'}              
          effect={'creative'}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, '-100%', -1],     
            },
            next: {
              translate: [0, '100%', 0],       
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/moutain.png" alt='moutain' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/ocean.png" alt='ocean' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/sakura.png" alt='sakura' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/waterfall.png" alt='waterfall' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
