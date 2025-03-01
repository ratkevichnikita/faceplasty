'use client'
import React, {FC, useEffect, useState} from 'react';
import Image from "next/image";
import CardProduct from "@/widgets/CardProduct";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowNav from '@/../public/icons/icon-arrow-purple.svg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from "clsx";
import {Product} from "@/shared/api/types/courses";
import {enhanceProductsWithData} from "@/shared/helpers";
import CardProductSkeleton from "@/widgets/CardProduct/CardProductSkeleton";

interface ComponentProps {
  products: Product[] | null
}

const SectionCoursesList:FC<ComponentProps> = ({products}) => {

  if(!products || products.length == 0) {
    return <div className="flex gap-[2.08vw]">
      {Array.from({length: 4}).map((_, index) => <CardProductSkeleton key={index}/>)}
    </div>
  }

  const enhanceProducts:Product[] = enhanceProductsWithData(products);

  const uniqueCategories = Array.from(
    enhanceProducts
      .reduce((map, product) => {
        if (product.category && !map.has(product.category.id)) {
          map.set(product.category.id, product.category.name);
        }
        return map;
      }, new Map<string, string>())
  )
    .map(([id, name]) => ({ id, name }));

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="font-lato !px-[4.08vw] !mb-[2.08vw]"
      >
        <SwiperSlide className="!h-[3.13vw] !w-[10.73vw]">
          <button
            className={clsx(
              "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw]",
              {
                "bg-purple text-white": false,
              }
            )}
          >
            <p className="text-[0.83vw] uppercase font-bold leading-[1.2em]">bestseller</p>
          </button>
        </SwiperSlide>
        {uniqueCategories?.map(p => {
          return (
            <SwiperSlide key={p.id} className="!h-[3.13vw] !w-[10.73vw]">
              <button
                className={clsx(
                  "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw]",
                  {
                    "bg-purple text-white": false,
                  }
                )}
              >
                <p className="text-[0.83vw] uppercase font-bold leading-[1.2em]">{p.name}</p>
              </button>
            </SwiperSlide>
          )
        })}

        <div
          role="button"
          aria-label="Prev Slide"
          className={clsx(
            'swiper-button-prev !size-[3.13vw] z-[10] !mt-[-1.6vw] !left-0 bg-[#270236] rounded-[1.04vw] flex items-center justify-center after:hidden transition-all duration-300 ',
            {}
          )}
        >
          <div className="w-[0.63vw] h-[1.15vw]">
            <svg width="100%" height="100%" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.5207 0.508709C12.1598 1.18699 12.1598 2.2867 11.5207 2.96497L3.95053 11L11.5207 19.035C12.1598 19.7133 12.1598 20.813 11.5207 21.4913C10.8817 22.1696 9.84559 22.1696 9.20655 21.4913L0.47928 12.2281C-0.15976 11.5499 -0.15976 10.4501 0.47928 9.77187L9.20655 0.508709C9.84559 -0.16957 10.8817 -0.16957 11.5207 0.508709Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div
          role="button"
          aria-label="Next Slide"
          className={clsx(
            'swiper-button-next !size-[3.13vw] z-[10] !mt-[-1.6vw] rotate-[180deg] !right-0 bg-[#270236] rounded-[1.04vw] flex items-center justify-center after:hidden transition-all duration-300 ',
            {}
          )}
        >
          <div className="w-[0.63vw] h-[1.15vw]">
            <svg width="100%" height="100%" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.5207 0.508709C12.1598 1.18699 12.1598 2.2867 11.5207 2.96497L3.95053 11L11.5207 19.035C12.1598 19.7133 12.1598 20.813 11.5207 21.4913C10.8817 22.1696 9.84559 22.1696 9.20655 21.4913L0.47928 12.2281C-0.15976 11.5499 -0.15976 10.4501 0.47928 9.77187L9.20655 0.508709C9.84559 -0.16957 10.8817 -0.16957 11.5207 0.508709Z" fill="white"/>
            </svg>
          </div>
        </div>
      </Swiper>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="font-lato !py-[20px] !my-[-20px] "
      >
        {enhanceProducts?.map(product => {
          return (
            <SwiperSlide key={product.id} className="">
              <CardProduct product={product} />
            </SwiperSlide>
          )
        })}
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

export default SectionCoursesList;