'use client'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image
          alt="Cabinet de consultation rue Houdan"
          src="/carousel/cabinet-portrait-1.jpg"
          width="1200"
          height="600"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="Cabinet de consultation rue Houdan"
          src="/carousel/cabinet-portrait-2.jpg"
          width="1200"
          height="600"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="Cabinet de consultation rue Houdan"
          src="/carousel/cabinet-portrait-3.jpg"
          width="1200"
          height="600"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel
