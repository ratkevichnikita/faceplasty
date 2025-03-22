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
  text: string[]
  id: number
  image: StaticImageData
  title: string
}

const reviewsData:IReviewsData[] = [
  {
    title: 'Radiant look in just 2 months',
    text: ['Eyes appear less sunken and more open',
      'Under-eye bags and dark circles have diminished',
      'Deep facial wrinkles have smoothed out',
      'Tension has disappeared, enhancing facial proportions'],
    id: 1,
    image: ImageReviews1,
  },
  {
    title: 'Refreshed gaze',
    text: ['Wrinkles have smoothed out, and the eyelids have lifted',
      'Facial asymmetry has reduced, and contours have improved',
      'The tip of the nose appears more refined',
      'Lips have fuller and more defined',
      'Skin tone has become more radiant'],
    id: 2,
    image: ImageReviews2,
  },
  {
    title: 'Smooth forehead without injections',
    text: ['Deep forehead wrinkles and nasolabial folds have softened',
      'Upper eyelid creases have diminished',
      'Tension in the corners of the lips and overall puffiness have reduced',
      'The face appears more lifted and expressive'],
    id: 3,
    image: ImageReviews3,
  },
  {
    title: 'The face regained balance',
    text: ['Lifted eyebrows and upper eyelids, resulting in a more open and refreshed gaze.',
      'Smoothed wrinkles around the eyes, forehead, between the eyebrows, and on the neck.',
      'Improved facial asymmetry, including the alignment of eyebrows and eyes.'],
    id: 4,
    image: ImageReviews4,
  },
  {
    title: 'The best version of yourself',
    text: ['Skull shape and facial proportions have improved',
      'Brows and eyelids have lifted, making the eyes appear more open',
      'The tip of the nose looks more refined',
     ' Lip shape and volume have enhanced'],
    id: 5,
    image: ImageReviews5,
  },
  {
    title: 'Tension has left the face',
    text: ['Eyebrows and eyelids have lifted.',
      'Frown lines have smoothed out.',
      'Forehead skin has become even and relaxed.',
      'Dark circles under the eyes have faded.',
      'The gaze has become more open and refreshed.'],
    id: 6,
    image: ImageReviews6,
  }
]

const SectionBeforeAfter = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        modules={[Navigation]}
        breakpoints={{
          800: {
            spaceBetween: 30
          },
          540: {
            spaceBetween: 10
          },
          320: {
            spaceBetween: 5
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="animate-fadeIn font-lato !py-[20px] !my-[-20px]"
      >
        {reviewsData.map(r => (
          <SwiperSlide key={r.id} className="relative !w-[20.2vw] !h-[26.20vw] p-[1.04vw] bg-white rounded-[2.08vw] overflow-hidden border border-[#F2F2F2] sm:p-[5.13vw] sm:rounded-[10.26vw] sm:!h-auto sm:!w-[90.74vw] ">
            <div className="relative w-full h-[12.50vw] sm:h-[61.54vw] overflow-hidden sm:rounded-[5.13vw]">
              <Image
                src={r.image}
                fill
                sizes="(max-width: 640px) 100%, (max-width: 1024px) 50vw, 28.31vw"
                alt="image"
                className="object-cover sm:object-fill"
              />
            </div>
            <div className="pt-[0.63vw] text-[4A4A4A] space-y-[0.72vw] sm:pt-[3.08vw]">
              <p className="font-semibold text-[1.04vw] sm:text-[4.10vw]">{r.title}</p>
              <ul className="list-disc pl-[1.04vw] sm:pl-[5.04vw]">
                {r.text.map((item,index) => {
                  return (
                    <li key={index} className="text-[0.83vw] font-regular list-disc sm:text-[3.59vw]" >{item}</li>
                  )
                })}
              </ul>
            </div>
          </SwiperSlide>
        ))}
        <div
          role="button"
          aria-label="Prev Slide"
          className={clsx(
            'swiper-button-prev !size-[2.50vw] !left-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 sm:!hidden',
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
            'swiper-button-next !size-[2.50vw] rotate-[180deg] !right-0 bg-white rounded-full flex items-center justify-center after:hidden transition-all duration-300 sm:!hidden',
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