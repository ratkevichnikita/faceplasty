'use client';
import React from 'react';
import SearchContent from "@/widgets/SearchPage/SearchContent";
import Link from "next/link";
import Image from "next/image";
import IconBack from '@/../public/icons/icon-arrow-back.svg';

import CardProductSkeleton from "@/widgets/CardProduct/CardProductSkeleton";
import {useAppStore} from "@/shared/store/AppStore";

const Page = () => {
  const {search} = useAppStore()

  return (
    <div className="py-[5.21vw] sm:py-[7.69vw]">
      <div className="container">
        <Link href="/" className="flex items-center group gap-[0.53vw] w-fit mb-[3.04vw] sm:mb-[7.2vw] ">
          <Image
            src={IconBack.src}
            width={IconBack.width}
            height={IconBack.height}
            alt="arrow back"
            className="size-[1.04vw] sm:size-[4.12vw]"
          />
          <span className="text-[0.94vw] leading-[1.2em] border-b border-b-black transition-border duration-300 group-hover:border-transparent sm:text-[4.12vw]">Back</span>
        </Link>
        <p className="font-montserrat leading-[1.2em] text-[1.75vw] uppercase mb-[2.08vw] font-medium sm:mb-[8.2vw] sm:text-[6.15vw]">
          Search: <span className="text-[1.04vw] font-normal sm:text-[3.2vw]">{search}</span>
        </p>
        <SearchContent query={search} />
      </div>
    </div>
  );
};

export default Page;