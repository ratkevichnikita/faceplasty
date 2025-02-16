import React, {FC} from 'react';
import Image from "next/image";
import IconStar from '@/../public/icons/icon-star.svg';
import IconStudent from '@/../public/icons/icon-student.svg';
import IconDiamond from '@/../public/icons/icon-diamond.svg';
import {Product} from "@/shared/api/types/courses";
import clsx from "clsx";

interface ComponentProps {
  product: Product
}

const CardProduct:FC<ComponentProps> = ({product}) => {
  const isPremium = product.price > 140
  return (
    <div className="relative rounded-[2.08vw] max-w-[20.31vw] overflow-hidden border border-[#00000014] shadow-cardShadow">
      {isPremium && <div className="flex items-center justify-center absolute left-[1.04vw] top-[1.04vw] bg-orange size-[3.13vw] rounded-full">
        <Image src={IconDiamond.src} width={IconDiamond.width} height={IconDiamond.height} alt="diamond icon" className="w-[1.82vw] h-[1.41vw]" />
      </div>}
      <div className=" relative h-[11.46vw] w-full">
        <Image
          src={process.env.NEXT_PUBLIC_MEDIA_ORIGIN + `${product.image.cloudKey}`}
          sizes="(max-width: 640px) 100%, (max-width: 1024px) 50vw, 20.31vw"
          priority
          fill
          alt="image"
          className="object-cover"
        />
      </div>
      <div className="">
        <div className="p-[1.04vw] space-y-[1.04vw]">
          <div className="flex gap-[0.26vw]">
              <span className="flex items-center gap-[0.31vw] text-[0.73vw] rounded-full px-[0.42vw] border border-[#00000014] h-[1.30vw]">
                <Image
                  src={IconStar.src}
                  width={IconStar.width}
                  height={IconStar.height}
                  alt="rating icon"
                  className="w-[0.73vw] h-[0.63vw] object-contain"
                />
                {product.rating}
              </span>
              <span className="flex items-center gap-[0.31vw] text-[0.73vw] rounded-full px-[0.42vw] border border-[#00000033] h-[1.30vw]">
                <Image
                  src={IconStudent.src}
                  width={IconStudent.width}
                  height={IconStudent.height}
                  alt="rating icon"
                  className="w-[0.73vw] h-[0.63vw] object-contain"
                />
                {product.students} students
              </span>
          </div>
          <div className="space-y-[0.52vw] ">
            <p className="font-semibold text-[0.83vw] leading-[1.2em] line-clamp-1">{product.name}</p>
            <p className="text-[0.73vw] min-h-[1.72vw] leading-[1.2em] line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-[1.04vw] border-t border-t-[#00000014]">
           <button className={clsx("bg-purple text-white button !h-[3.13vw] !px-[1.04vw] hover:bg-black hover:text-white", {
             'bg-orange': isPremium
           })}>
             BUY ${product.price}
           </button>
          <button className="flex items-center group justify-center gap-[0.83vw] rounded-full w-[11.67vw] h-[3.13vw] block uppercase ml-auto font-semibold text-[0.83vw] text-center border border-[#00000014]">
            Jump to course
            <span className="rounded-full flex items-center justify-center bg-purple size-[2.08vw] ">
              <span className="w-[0.89vw] h-[0.63vw] transition-transform duration-300 group-hover:rotate-[45deg]">
                <svg width="100%" height="100%" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98275 2.23638C4.44368 2.23638 4.00667 1.79938 4.00667 1.2603C4.00667 0.72123 4.44368 0.284224 4.98275 0.284223L12.3448 0.284224C12.8839 0.284224 13.3209 0.721231 13.3209 1.2603L13.3209 8.62236C13.3209 9.16144 12.8839 9.59844 12.3448 9.59844C11.8057 9.59844 11.3687 9.16144 11.3687 8.62236L11.3687 3.61677L2.45205 12.5335C2.07086 12.9146 1.45284 12.9146 1.07166 12.5335C0.690478 12.1523 0.690478 11.5342 1.07166 11.1531L9.98834 2.23638L4.98275 2.23638Z" fill="#fff"/>
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;