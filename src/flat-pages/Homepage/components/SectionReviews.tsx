'use client'
import React from 'react';
import Image from "next/image";
import ImageReviews from "../../../../public/images/img-reviews.webp";
import ImageReviews1 from "../../../../public/images/img-reviews1.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowNav from '@/../public/icons/icon-arrow-purple.svg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from "clsx";

const SectionReviews = () => {
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
          <SwiperSlide key={index} className="rounded-[2.08vw] p-[2.08vw] overflow-hidden border border-[#00000014] shadow-cardShadow">
            <div className="space-y-[2.08vw]">
              <Image
                src={ImageReviews.src}
                width={ImageReviews.width}
                height={ImageReviews.height}
                alt="image"
              />
              <p className="text-[0.83vw] leading-[1.2em]">
                I absolutely loved the ULTIMATE FACE LIFTING online course!
                The exercises were easy to follow, and the step-by-step instructions made it simple to stay consistent.
                After just a few weeks, I noticed a visible improvement in my skin's tone and elasticity.
                My face feels more lifted, and I feel so much more confident!
              </p>
              <div className="flex items-center gap-[0.63vw]">
                <Image
                  src={ImageReviews1.src}
                  width={ImageReviews1.width}
                  height={ImageReviews1.height}
                  alt="image"
                  className="size-[2.50vw]"
                />
                <div>
                  <p className="text-[0.83vw] leading-[1.2em] font-bold mb-[0.31vw]">Anna</p>
                  <p className="text-[0.83vw] leading-[1.2em]">ultimate face lifting</p>
                </div>
              </div>
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

export default SectionReviews;