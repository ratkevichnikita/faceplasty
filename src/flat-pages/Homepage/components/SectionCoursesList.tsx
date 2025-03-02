'use client'
import React, {FC, useEffect, useState} from 'react';
import Image from "next/image";
import CardProduct from "@/widgets/CardProduct";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowNav from '@/../public/icons/icon-arrow-purple.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from "clsx";
import {BESTSELLER_COURSE_ID, Product} from "@/shared/api/types/courses";
import { enhanceProductsWithData } from "@/shared/helpers";
import CardProductSkeleton from "@/widgets/CardProduct/CardProductSkeleton";
import {bold} from "next/dist/lib/picocolors";

interface ComponentProps {
  products: Product[] | null;
}

const SectionCoursesList: FC<ComponentProps> = ({ products }) => {

  const [enhancedProducts, setEnhancedProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(enhancedProducts);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [bestSellerActive,setBestsellerActive] = useState<boolean>(false)
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (products) {
      const updatedProducts = enhanceProductsWithData(products);
      setEnhancedProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    }
  }, [products]);

  const uniqueCategories = Array.from(
    enhancedProducts.reduce((map, product) => {
      if (product.category && !map.has(product.category.id)) {
        map.set(product.category.id, product.category.name);
      }
      return map;
    }, new Map<string, string>())
  ).map(([id, name]) => ({ id, name }));

  const handleFilter = (categoryId: string | null) => {
    if (categoryId === activeCategory) {
      setActiveCategory(null);
      setBestsellerActive(false)
      setFilteredProducts(enhancedProducts);
    } else {
      setActiveCategory(categoryId);
      setBestsellerActive(false)
      setFilteredProducts(
        categoryId ? enhancedProducts.filter((product) => product.category?.id === categoryId) : enhancedProducts
      );
    }
  };

  const handleFilterBestseller = () => {
    const filteredProducts = enhancedProducts.filter(product => {
      return  product.contents?.some(content => content.courseId === BESTSELLER_COURSE_ID)
    });
    setBestsellerActive(true)
    setActiveCategory(null)
    setFilteredProducts(filteredProducts)
  }

  return (
    <>
      {!swiperReady
        ? <div className="flex gap-[1.04vw] mb-[2.08vw]">
          {Array.from({length:4}).map((_,index) => {
            return (
              <div key={index} className="animate-pulse bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw] "/>
            )
          })}
          </div>
        : <div className="flex gap-[1.04vw] mb-[2.08vw]">
          <button
            className={clsx(
              "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw] transition-bg duration-300",
              { "bg-green text-white bg-opacity-100": bestSellerActive }
            )}
            onClick={handleFilterBestseller}
          >
            <p className="text-[0.83vw] uppercase font-medium leading-[1.2em]">Bestsellers</p>
          </button>
          {uniqueCategories.map((p) => (
            <button
              key={p.id}
              className={clsx(
                "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw] transition-bg duration-300",
                { "bg-green text-white bg-opacity-100": activeCategory === p.id }
              )}
              onClick={() => handleFilter(p.id)}
            >
              <p className="text-[0.83vw] uppercase font-medium leading-[1.2em]">{p.name}</p>
            </button>
          ))}
        </div>
      }
       <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation]}
          onSwiper={() => setSwiperReady(true)}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="font-lato !py-[20px] !my-[-20px]"
        >
         {!swiperReady
           ? <div className="flex gap-[2.08vw]">
             {Array.from({ length: 4 }).map((_, index) => (
               <CardProductSkeleton key={index} />
             ))}
           </div>
           : filteredProducts.map((product) => (
               <SwiperSlide key={product.id}>
                 <CardProduct product={product} />
               </SwiperSlide>
             ))
         }
          <div
            role="button"
            aria-label="Prev Slide"
            className="swiper-button-prev !size-[2.50vw] !left-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300"
          >
            <Image src={ArrowNav.src} width={ArrowNav.width} height={ArrowNav.height} alt="prev image" />
          </div>
          <div
            role="button"
            aria-label="Next Slide"
            className="swiper-button-next !size-[2.50vw] rotate-[180deg] !right-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300"
          >
            <Image src={ArrowNav.src} width={ArrowNav.width} height={ArrowNav.height} alt="next image" />
          </div>
        </Swiper>
    </>
  );
};

export default SectionCoursesList;
