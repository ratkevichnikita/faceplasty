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
import {useAppStore} from "@/shared/store/AppStore";

interface ComponentProps {
  products: Product[] | null;
}

const SectionCoursesList: FC<ComponentProps> = ({ products }) => {

  const {setProducts} = useAppStore()
  const [enhancedProducts, setEnhancedProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(enhancedProducts);
  const [activeCategory, setActiveCategory] = useState<string | null>('7697');
  const [bestSellerActive,setBestsellerActive] = useState<boolean>(false)
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (products) {
      const updatedProducts = enhanceProductsWithData(products);
      setEnhancedProducts(updatedProducts);
      setProducts(updatedProducts)
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
        (categoryId && categoryId !== '7697') ? enhancedProducts.filter((product) => product.category?.id === categoryId) : enhancedProducts
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
        : <div className="flex gap-[1.04vw] mb-[2.08vw] sm:flex-wrap sm:gap-[3.08vw] sm:mb-[6.15vw]">
            <button
              className={clsx(
                "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw] transition-bg duration-300 hover:bg-green hover:text-white sm:rounded-[5.13vw] sm:px-[6.15vw] sm:w-auto sm:h-[11.03vw]",
                { "bg-green text-white !bg-opacity-100": bestSellerActive }
              )}
              onClick={handleFilterBestseller}
            >
              <span className="text-[0.83vw] uppercase font-medium leading-[1.2em] sm:text-[4.10vw]">Bestsellers</span>
            </button>
            <button
              onClick={() => handleFilter('7697')}
              className={clsx(
                "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw] transition-bg duration-300 hover:bg-green hover:text-white sm:rounded-[5.13vw] sm:px-[6.15vw] sm:w-auto sm:h-[11.03vw]",
                { "bg-green text-white !bg-opacity-100": activeCategory === '7697' }
              )}
            >
              <span className="text-[0.83vw] uppercase font-medium leading-[1.2em] sm:text-[4.10vw]">All</span>
            </button>
            {uniqueCategories.map((p) => (
              <button
                key={p.id}
                className={clsx(
                  "bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[3.13vw] w-[10.73vw] transition-bg duration-300 hover:bg-green hover:text-white sm:rounded-[5.13vw] sm:px-[6.15vw] sm:w-auto sm:h-[11.03vw]",
                  { "bg-green text-white !bg-opacity-100": activeCategory === p.id }
                )}
                onClick={() => handleFilter(p.id)}
              >
                <span className="text-[0.83vw] uppercase font-medium leading-[1.2em] sm:text-[4.10vw]">{p.name}</span>
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
          breakpoints={{
            540: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10
            }
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
            className="swiper-button-prev !size-[2.50vw] !left-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 sm:!hidden"
          >
            <Image src={ArrowNav.src} width={ArrowNav.width} height={ArrowNav.height} alt="prev image" />
          </div>
          <div
            role="button"
            aria-label="Next Slide"
            className="swiper-button-next !size-[2.50vw] rotate-[180deg] !right-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 sm:!hidden"
          >
            <Image src={ArrowNav.src} width={ArrowNav.width} height={ArrowNav.height} alt="next image" />
          </div>
        </Swiper>
    </>
  );
};

export default SectionCoursesList;
