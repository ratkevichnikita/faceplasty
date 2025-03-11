import React, {FC} from 'react';
import Image from "next/image";
import IconStar from '@/../public/icons/icon-star.svg';
import IconStudent from '@/../public/icons/icon-student.svg';
import IconDiamond from '@/../public/icons/icon-diamond.svg';
import ImageNoImg from '@/../public/images/image-no-img.webp';
import {Product} from "@/shared/api/types/courses";
import clsx from "clsx";
import Link from "next/link";
import {getHref} from "@/shared/helpers";

interface ComponentProps {
  product: Product
}

const CardProduct:FC<ComponentProps> = ({product}) => {
  const href = getHref(product?.internalName ?? '')
  const imageUrl = product.image?.cloudKey ? process.env.NEXT_PUBLIC_MEDIA_ORIGIN + `${product.image.cloudKey}` : ImageNoImg.src
  return (
    <div className="animate-fadeIn shrink-0 w-full relative rounded-[2.08vw] max-w-[20.31vw] overflow-hidden border border-[#00000014] shadow-cardShadow sm:max-w-full sm:rounded-[10.26vw]">
      {product.isPremium && <div className="flex items-center justify-center absolute left-[1.04vw] top-[1.04vw] bg-orange size-[3.13vw] rounded-full z-[2] sm:top-[5.13vw] sm:left-[5.13vw] sm:size-[10.26vw]">
        <Image src={IconDiamond.src} width={IconDiamond.width} height={IconDiamond.height} alt="diamond icon" className="w-[1.82vw] h-[1.41vw] sm:w-[6.97vw] sm:h-[4.92vw]" />
      </div>}
      <div className=" relative h-[11.46vw] w-full sm:h-[44.87vw]">
        <Image
          src={imageUrl}
          sizes="(max-width: 640px) 100%, (max-width: 1024px) 50vw, 20.31vw"
          priority
          fill
          alt="image"
          className={clsx("object-cover",{"!object-contain": !product.image?.cloudKey})}
        />
      </div>
      <div className="">
        <div className="p-[1.04vw] space-y-[1.04vw] sm:space-y-[5.13vw] sm:py-[3.08vw] sm:px-[5.13vw]">
          <div className="flex gap-[0.26vw] sm:gap-[3.08vw]">
              <span className="flex items-center gap-[0.31vw] rounded-full px-[0.42vw] border border-[#00000014] h-[1.30vw] sm:gap-[1.54vw] sm:px-[2.05vw] sm:h-[6.41vw]">
                <Image
                  src={IconStar.src}
                  width={IconStar.width}
                  height={IconStar.height}
                  alt="rating icon"
                  className="w-[0.73vw] h-[0.63vw] object-contain sm:size-[3.08vw]"
                />
                <span className="text-[0.73vw] sm:text-[3.59vw]">{product.rating}</span>
              </span>
              <span className="flex items-center gap-[0.31vw] rounded-full px-[0.42vw] border border-[#00000033] h-[1.30vw] sm:gap-[1.54vw] sm:px-[2.05vw] sm:h-[6.41vw]">
                <Image
                  src={IconStudent.src}
                  width={IconStudent.width}
                  height={IconStudent.height}
                  alt="rating icon"
                  className="w-[0.73vw] h-[0.63vw] object-contain sm:size-[3.08vw]"
                />
                <span className="text-[0.73vw] sm:text-[3.59vw]">{product.students} students</span>
              </span>
          </div>
          <div className="space-y-[0.52vw] sm:space-y-[2.56vw]">
            <p className="font-semibold text-[0.83vw] leading-[1.2em] line-clamp-1 sm:text-[4.10vw]">{product.name}</p>
            <p className="text-[0.73vw] min-h-[1.72vw] leading-[1.2em] line-clamp-2 sm:text-[3.59vw] sm:min-h-[9.26vw]">
              {product.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-[1.04vw] border-t border-t-[#00000014] sm:p-[5.13vw] sm:gap-[3.08vw] sm:flex-col">
           <button className={clsx("block bg-purple text-white button !h-[3.13vw] !px-[1.04vw] hover:bg-black hover:text-white sm:!h-[14.62vw] sm:w-full", {
             '!bg-orange': product.isPremium
           })}>
            <span className="text-[0.83vw] sm:text-[4.10vw]"> BUY ${product.price}</span>
           </button>
          {href && (
            <Link
              href={href}
              className="flex items-center group justify-center gap-[0.83vw] rounded-full w-[11.67vw] h-[3.13vw] block  ml-auto  border border-[#00000014] sm:gap-[2.56vw] sm:h-[14.62vw] sm:w-full"
            >
              <span className="font-semibold text-[0.83vw] text-center uppercase sm:text-[4.10vw]">Jump to course</span>
              <span className="rounded-full flex items-center justify-center bg-purple size-[2.08vw] sm:size-[5.13vw]">
                <span className="w-[0.89vw] h-[0.63vw] transition-transform duration-300 group-hover:rotate-[45deg] sm:w-[2.05vw] sm:h-[1.7vw]">
                  <svg width="100%" height="100%" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98275 2.23638C4.44368 2.23638 4.00667 1.79938 4.00667 1.2603C4.00667 0.72123 4.44368 0.284224 4.98275 0.284223L12.3448 0.284224C12.8839 0.284224 13.3209 0.721231 13.3209 1.2603L13.3209 8.62236C13.3209 9.16144 12.8839 9.59844 12.3448 9.59844C11.8057 9.59844 11.3687 9.16144 11.3687 8.62236L11.3687 3.61677L2.45205 12.5335C2.07086 12.9146 1.45284 12.9146 1.07166 12.5335C0.690478 12.1523 0.690478 11.5342 1.07166 11.1531L9.98834 2.23638L4.98275 2.23638Z" fill="#fff"/>
                  </svg>
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;