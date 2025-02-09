"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import IconSearch from '@/../public/icons/icon-search.svg';
import clsx from "clsx";

type SearchFormValues = {
  search: string;
};

export default function SearchForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SearchFormValues>();
  const router = useRouter();

  const onSubmit = (data: SearchFormValues) => {
    if (data.search.trim()) {
      router.push(`/search?query=${encodeURIComponent(data.search)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <input
        {...register("search", { required: true })}
        type="text"
        placeholder="Search"
        className={clsx(
          "bg-[#E5E5E5] rounded-[3.13vw] py-[0.9vw] pl-[1.04vw] pr-[2.2vw] bg-opacity-50 w-[13.54vw] text-[0.83vw] border-[1px] border-transparent outline-none transition-all placeholder:text-[0.83vw]", {
            "!border-[#F2B705]": errors.search
          })}
      />
      <button type="submit" className="absolute right-0 top-0 z-[10] h-full w-[2.5vw]">
        <Image
          src={IconSearch.src}
          width={IconSearch.width}
          height={IconSearch.height}
          alt="search icon"
          className="size-[1.25vw]"
        />
      </button>
    </form>
  );
}
