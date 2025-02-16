'use client'
import React from 'react';
import Image from "next/image";
import clsx from "clsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowNav from "../../../../public/icons/icon-arrow-purple.svg";
import ImageReview from '@/../public/images/reviews/image-review-photo.webp';
import StarRating from "@/widgets/StarRating";

interface IReviewsData {
  text: string
  id: number
  userCity: string
  userName: string
  rating: number
}

const reviewsData:IReviewsData[] = [
  {
    id: 1,
    text: 'I was honestly shocked at how quickly this worked! By day three, I could already see my forehead looking smoother, and my under-eye puffiness was way less noticeable. My friends even asked if I had done something different! The best part? It only takes 15 minutes a day, and I can do it while listening to my avorite podcast. I love that I don’t need expensive treatments to look refreshed!',
    userName: 'Clara, 47',
    userCity: 'Melbourne',
    rating: 4.5
  },
  {
    id: 2,
    text: 'I had no idea how much tension I was holding in my face until I started this course. After just a few days, my forehead feels relaxed, my eyes look brighter, and even my smile looks more natural! It’s such a joy to have this little self-care ritual every day – just 15 minutes, and I feel like I’m giving my face the love it deserves. Dr. Ales explains everything so well, it’s like having a personal coach guiding you through every step. I never thought something this simple could be so effective!',
    userName: 'Rachel, 52',
    userCity: 'Los Angeles',
    rating: 5
  },
  {
    id: 3,
    text: 'I never thought something like this would work, but my face looks so much more relaxed! Even my eyes look more awake. I’m really impressed with how quickly I’ve seen results. This has definitely become part of my daily routine.',
    userName: 'Ava, 29',
    userCity: 'Sydney',
    rating: 4
  },
  {
    id: 4,
    text: 'I can already see the difference after just a few days. The dark circles under my eyes have lightened, and my skin feels so much more toned. I love that I can do this at home without needing expensive treatments. Highly recommend!',
    userName: 'Lily, 38',
    userCity: 'Toronto',
    rating: 5
  },
  {
    id: 5,
    text: 'I’ve tried so many things over the years, but this method is the only one that’s really worked. My face looks fresher, and the tension I used to hold is completely gone. It’s easy to follow, and the results are so worth it.',
    userName: 'Jessica, 39',
    userCity: 'Dublin',
    rating:4.5
  },
]

const SectionReviews = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="font-lato !py-[20px] !my-[-20px]"
      >
        {reviewsData.map(r => (
          <SwiperSlide key={r.id} className="rounded-[2.08vw] p-[2.08vw] overflow-hidden border border-[#00000014] shadow-cardShadow">
            <StarRating rating={r.rating} />
            <div className="space-y-[1.04vw] pt-[1.04vw]">
              <p className="text-[0.83vw] leading-[1.2em] min-h-[7.98vw]">{r.text}</p>
              <div className="flex items-center gap-[0.63vw]">
                <Image
                  src={ImageReview.src}
                  width={ImageReview.width}
                  height={ImageReview.height}
                  alt="image"
                  className="size-[2.50vw]"
                />
                <div>
                  <p className="text-[0.83vw] leading-[1.2em] font-bold mb-[0.31vw]">{r.userName}</p>
                  <p className="text-[0.83vw] leading-[1.2em]">{r.userCity}</p>
                </div>
              </div>
            </div>
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

export default SectionReviews;