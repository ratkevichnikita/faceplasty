'use client'
import React from 'react';
import Image from "next/image";
import { StaticImageData } from "next/image";
import ImageReviews1 from "@/../public/images/reviews/img-review1.webp";
import ImageReviews2 from "@/../public/images/reviews/img-review2.webp";
import ImageReviews3 from "@/../public/images/reviews/img-review3.webp";
import ImageReviews4 from "@/../public/images/reviews/img-review4.webp";
import ImageReviews5 from "@/../public/images/reviews/img-review5.webp";
import ImageReviews6 from "@/../public/images/reviews/img-review6.webp";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowNav from '@/../public/icons/icon-arrow-purple.svg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from "clsx";

interface IReviewsData {
  text: string
  id: number
  image: StaticImageData
}

const reviewsData:IReviewsData[] = [
  {
    text: 'Swelling has disappeared, facial contours are tightened, the face looks slimmer and younger.',
    id: 1,
    image: ImageReviews1,
  },
  {
    text: 'Swelling has disappeared from the face, the face has become more even and firm, the double chin has diminished, nasolabial folds have reduced, dark circles under the eyes have lessened, and the face looks younger and more open.',
    id: 2,
    image: ImageReviews2,
  },
  {
    text: 'Swelling has disappeared from the face, making it look younger and slimmer.',
    id: 3,
    image: ImageReviews3,
  },
  {
    text: 'Wrinkles have smoothed out, the gaze has become more open, the facial contours have tightened, and the face looks younger.',
    id: 4,
    image: ImageReviews4,
  },
  {
    text: 'Facial contours are more sculpted, with improved symmetry and reduced puffiness. The skin appears smoother, and the overall face looks rejuvenated and more youthful.',
    id: 5,
    image: ImageReviews5,
  },
  {
    text: 'Swelling has disappeared from the face, the belly has reduced, the double chin has diminished, posture has improved, and the face looks younger.',
    id: 6,
    image: ImageReviews6,
  }
]

const SectionBeforeAfter = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="animate-fadeIn font-lato !py-[20px] !my-[-20px]"
      >
        {reviewsData.map(r => (
          <SwiperSlide key={r.id} className="relative !w-[28.49vw] !h-[20.10vw] rounded-[2.08vw] overflow-hidden shadow-cardShadow">
            <Image
              src={r.image}
              fill
              alt="image"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
        <div
          role="button"
          aria-label="Prev Slide"
          className={clsx(
            'swiper-button-prev !size-[2.50vw] !left-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 ',
            {}
          )}
        >
          <Image
            src={ArrowNav.src}
            width={ArrowNav.width}
            height={ArrowNav.height}
            alt="prev image"
            className="h-[0.68vw] w-[0.42vw] sm:h-[2.667vw] sm:w-[1.5vw]"
          />
        </div>
        <div
          role="button"
          aria-label="Next Slide"
          className={clsx(
            'swiper-button-next !size-[2.50vw] rotate-[180deg] !right-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 ',
            {}
          )}
        >
          <Image
            src={ArrowNav.src}
            width={ArrowNav.width}
            height={ArrowNav.height}
            alt="next image"
            className="h-[0.68vw] w-[0.42vw] sm:h-[2.667vw] sm:w-[1.5vw]"
          />
        </div>
      </Swiper>
    </>
  );
};

export default SectionBeforeAfter;