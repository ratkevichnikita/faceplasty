'use client'
import React from 'react';
import Image from "next/image";
import ImageEvents from "../../../../public/images/img-events.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowNav from '@/../public/icons/icon-arrow-purple.svg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from "clsx";

const SectionEvents = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="font-lato !py-[20px] !my-[-20px]"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index} className="rounded-[2.08vw] overflow-hidden border border-[#00000014] shadow-cardShadow">
          <Image
            src={ImageEvents.src}
            width={ImageEvents.width}
            height={ImageEvents.height}
            alt="image"
          />
          <div className="p-[1.04vw] space-y-[1.04vw]">
            <span className="bg-purple text-white rounded-[2.08vw] font-medium text-[0.83vw] text-center px-[1.04vw] py-[0.31vw]">8 JAN 12:00</span>
           <div className="space-y-[0.52vw] ">
             <p className="font-semibold text-[0.83vw]">ULTIMATE FACE LIFTING</p>
             <p className="text-[0.73vw] leading-[1.2em]">
               Lift your face instantly! A powerful lifting program.
               Lift your face instantly! A powerful lifting program.
               Lift your face instantly! A powerful lifting program...
             </p>
           </div>
            <button className="rounded-full w-[9.38vw] h-[3.13vw] block uppercase ml-auto font-semibold text-[0.83vw] text-center border border-[#00000014]">
              Learn more
            </button>
          </div>
        </SwiperSlide>
        ))}
        <div
          role="button"
          aria-label="Prev Slide"
          className={clsx(
            'swiper-button-prev !size-[2.50vw] !left-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 ',
            {}
          )}
        >
          <Image
            src={ArrowNav.src}
            width={ArrowNav.width}
            height={ArrowNav.height}
            alt="prev image"
            className="h-[0.68vw] w-[0.42vw] sm:h-[2.667vw] sm:w-[1.5vw]"
          />
        </div>
        <div
          role="button"
          aria-label="Next Slide"
          className={clsx(
            'swiper-button-next !size-[2.50vw] rotate-[180deg] !right-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 ',
            {}
          )}
        >
          <Image
            src={ArrowNav.src}
            width={ArrowNav.width}
            height={ArrowNav.height}
            alt="next image"
            className="h-[0.68vw] w-[0.42vw] sm:h-[2.667vw] sm:w-[1.5vw]"
          />
        </div>
      </Swiper>
    </>
  );
};

export default SectionEvents;