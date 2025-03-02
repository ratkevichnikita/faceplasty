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
      <div className="flex gap-[1.04vw] mb-[2.08vw]">
        <button
          className={clsx(
            "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw]",
            {
              "bg-purple text-white": false,
            }
          )}
        >
          <p className="text-[0.83vw] uppercase font-medium leading-[1.2em]">bestseller</p>
        </button>
        {uniqueCategories?.map(p => {
          return (
            <button
              className={clsx(
                "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw] transition-bg duration-300",
                {
                  "bg-green text-white": false,
                }
              )}
            >
              <p className="text-[0.83vw] uppercase font-medium leading-[1.2em]">{p.name}</p>
            </button>
          )
        })}
      </div>
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