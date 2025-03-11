"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import IconSearch from '@/../public/icons/icon-search.svg';
import clsx from "clsx";
import {FC, useState} from "react";

type SearchFormValues = {
  search: string;
};

interface ComponentProps {
  isExpanded: boolean,
  setIsExpanded: (value: boolean) => void
}

export const SearchForm:FC<ComponentProps> = ({isExpanded,setIsExpanded}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SearchFormValues>();
  const router = useRouter();

  const searchInput = watch("search")

  const onSubmit = (data: SearchFormValues) => {
    if (data.search.trim()) {
      router.push(`/search?query=${encodeURIComponent(data.search)}`);
    }
  };

  const isMobile =  typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <input
        {...register("search", { required: true })}
        type="text"
        placeholder={isMobile ? "" : "Search"}
        className={clsx(
          "bg-[#E5E5E5] rounded-[3.13vw] py-[0.9vw] pl-[1.04vw] pr-[2.2vw] bg-opacity-50 w-[13.54vw] text-[0.83vw] border-[1px] border-transparent outline-none transition-all placeholder:text-[0.83vw] sm:placeholder:text-[3.59vw] sm:text-[3.59vw] sm:rounded-[15.38vw] sm:h-[10.77vw] sm:py-0 sm:w-[14.36vw]", {
            "!border-[#F2B705]": errors.search,
            "sm:w-[78vw] sm:pl-[4.5vw] sm:pr-[10.5vw]": isExpanded || searchInput?.trim()
          })}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
      <button type="submit" className="absolute right-0 top-0 z-[10] h-full w-[2.5vw] sm:right-[4vw] sm:w-[4.5vw]">
        <Image
          src={IconSearch.src}
          width={IconSearch.width}
          height={IconSearch.height}
          alt="search icon"
          className="size-[1.25vw] sm:size-[4.10vw]"
        />
      </button>
    </form>
  );
}

export default SearchForm
