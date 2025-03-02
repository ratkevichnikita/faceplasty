'use client'
import React, {useState} from 'react';
import SectionBeforeAfter from "@/flat-pages/Homepage/components/SectionBeforeAfter";
import SectionReviews from "@/flat-pages/Homepage/components/SectionReviews";
import clsx from "clsx";

interface IData {
  title: string
  id: number
  slug: string
}

const data:IData[] = [
  { title: "Before & after", id: 1, slug: "results"},
  { title: "Reviews", id: 2, slug: "reviews"},
]

const SectionCombine = () => {
  const [itemId,setItemId] = useState(1)
  const currentItem = data.find(el => el.id === itemId)

  const switcherHandler = (id: number) => {
    const currentItem = data.find(el => el.id === id)
    setItemId(currentItem.id)
  }

  return (
    <div>
      <h2 className="animate-fadeIn font-montserrat leading-[1.2em] text-[2.81vw] uppercase font-medium mb-[2.08vw]">
        {currentItem.title}
      </h2>
      <div>
        {data.map(item => {
          return (
            <button
              key={item.id}
              onClick={() => switcherHandler(item.id)}
              className={clsx("font-bold text-[0.83vw] uppercase text-center text-black bg-[#E5E5E5] h-[3.13vw] w-[11.98vw] rounded-r-[2.04vw] transition-all duration-300", {
                "rounded-l-[2.04vw] rounded-r-none": item.id === 1,
                "rounded-r-[2.04vw] rounded-l-none": item.id === 2,
                "text-white bg-green": item.id == itemId
              })}
            >
              {item.slug}
            </button>
          )
        })}
      </div>
      <div className="pt-[2.08vw]">
        {itemId === 1 ?  <SectionBeforeAfter /> :  <SectionReviews />}
      </div>
    </div>
  );
};

export default SectionCombine;