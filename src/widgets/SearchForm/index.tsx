"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import IconSearch from '@/../public/icons/icon-search.svg';
import clsx from "clsx";
import {FC} from "react";

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
      router.push(`/search?query=${encodeURIComponent(data.search.toLowerCase())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <input
        {...register("search", { required: true })}
        type="search"
        className={clsx(
          "bg-[#E5E5E5] rounded-[3.13vw] py-[0.9vw] pl-[1.04vw] pr-[2.2vw] border border-transparent outline-none ring-0 ring-offset-0 bg-opacity-50 w-[13.54vw] text-[0.83vw] outline-none transition-all placeholder:text-[0.83vw] sm:placeholder:text-[3.59vw] sm:rounded-[15.38vw] sm:h-[10.77vw] sm:py-0 sm:w-[14.36vw] sm:text-[16px]", {
            "!border-[#F2B705]": errors.search?.message,
            "sm:w-[78vw] sm:pl-[4.5vw] sm:pr-[10.5vw] focus:border-orange": isExpanded || searchInput?.trim()
          })}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
      <button type="submit" className="absolute right-0 top-0 z-[10] h-full w-[2.5vw] sm:right-[5vw] sm:w-[4.5vw]">
        <Image
          src={IconSearch.src}
          width={IconSearch.width}
          height={IconSearch.height}
          alt="search icon"
          className="size-[1.25vw] sm:size-[4.10vw]"
        />
      </button>
      <span className={clsx("block absolute z-[5] opacity-60 pointer-events-none text-[0.83vw] left-[1.04vw] top-1/2 -translate-y-1/2 sm:hidden", {
        "hidden": searchInput?.trim()
      })}>
        Search
      </span>
    </form>
  );
}

export default SearchForm
