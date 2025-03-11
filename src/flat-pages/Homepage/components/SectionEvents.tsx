'use client'
import React, {FC, useState} from 'react';
import Image from "next/image";
import ImageEvents from "../../../../public/images/img-events.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {Event} from "@/shared/api/types/events";
import ArrowNav from '@/../public/icons/icon-arrow-purple.svg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from "clsx";
import dayjs from "dayjs";
import EventModal from "@/widgets/Modals/EventModal";

interface ComponentProps {
  events: Event[] | null
}

const SectionEvents:FC<ComponentProps> = ({events}) => {
  const [modalActive,setModalActive] = useState<string | null>('')

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Navigation]}
        breakpoints={{
          800: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="font-lato !py-[20px] !my-[-20px]"
      >
        {events && events
          .filter((item) => {
            const currentDate = dayjs();
            const scheduledDate = dayjs(item.scheduledDate);
            return scheduledDate.isAfter(currentDate);
          })
          .sort((a, b) => dayjs(a.scheduledDate).diff(dayjs(b.scheduledDate)))
          .map((item) => {
          const design = JSON.parse(item.designSettingsJson);
          const date = dayjs(item.scheduledDate).format("D MMM HH:mm")
          return (
            <SwiperSlide key={item.id} className="rounded-[2.08vw] overflow-hidden border border-[#00000014] shadow-cardShadow sm:rounded-[10.26vw]">
                <Image
                  src={design.registration.coverUrl}
                  width={ImageEvents.width}
                  height={ImageEvents.height}
                  alt="image"
                />
                <div className="p-[1.04vw] space-y-[1.04vw]">
                <span className="bg-purple text-white rounded-[2.08vw] font-medium text-[0.83vw] text-center px-[1.04vw] py-[0.31vw]">
                  {date}
                </span>
                  <div className="space-y-[0.52vw] ">
                    <p className="font-semibold text-[0.83vw] ">{item.name}</p>
                    <p className="text-[0.73vw] leading-[1.2em]" dangerouslySetInnerHTML={{__html:item.description ?? ''}}/>
                  </div>
                  <button
                    onClick={() => setModalActive(item.id)}
                    className="rounded-full w-[9.38vw] h-[3.13vw] block uppercase ml-auto font-semibold text-[0.83vw] transition-all duration-300 hover:bg-black hover:text-white text-center border border-[#00000014]"
                  >
                    Learn more
                  </button>
                </div>
                {modalActive === item.id && (
                  <EventModal
                    isActive={modalActive}
                    onClose={() => setModalActive(null)}
                    name={item.name}
                    image={design.registration.coverUrl}
                    description={item.description}
                    date={date}
                    duration={item.duration}
                    webinarId={item.id}
                  />
                )}
              </SwiperSlide>
          )
        })}
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

export default SectionEvents;