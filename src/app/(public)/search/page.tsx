'use client';

import React, { useEffect, useState } from 'react';
import SearchContent from "@/widgets/SearchPage/SearchContent";
import Link from "next/link";
import Image from "next/image";
import IconBack from '@/../public/icons/icon-arrow-back.svg';
import { useSearchParams } from 'next/navigation';
import CardProductSkeleton from "@/widgets/CardProduct/CardProductSkeleton";

const Page = () => {
  const [query, setQuery] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  if (!query) {
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
            Search: <span className="text-[1.04vw] font-normal sm:text-[3.2vw]">{query}</span>
          </p>
          <div className="flex gap-[2.08vw]">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    )
  }

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
          Search: <span className="text-[1.04vw] font-normal sm:text-[3.2vw]">{query}</span>
        </p>
        <SearchContent query={query} />
      </div>
    </div>
  );
};

export default Page;