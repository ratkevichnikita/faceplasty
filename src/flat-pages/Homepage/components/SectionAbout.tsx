'use client'
import React from 'react';
import Image from "next/image";
import VideoPlayer from "@/widgets/VideoPlayer";
import IconArrow from "@/../public/icons/icon-arrow-small.svg";
import Icon1 from '@/../public/icons/icon-about1.svg';
import Icon2 from '@/../public/icons/icon-about2.svg';
import Icon3 from '@/../public/icons/icon-about3.svg';
import {useAppStore} from "@/shared/store/AppStore";

const SectionAbout = () => {
  const {setTrialModal} = useAppStore()
  return (
    <>
      <div className="hidden relative w-full h-[51.28vw] mb-[6.15vw] sm:block">
        <VideoPlayer />
      </div>
      <div className="w-[38.54vw] mb-[1.48vw] sm:w-full">
        <h2 className="font-montserrat text-[2.81vw] leading-[1.2em] mb-[1.04vw] font-medium uppercase sm:mb-[6.15vw] sm:text-[6.15vw]">
          <span className="sm:hidden">Join our <br/> </span>rejuvenation club
        </h2>
        <p className="block text-[2.08vw] font-rubik leading-[1.2em] opacity-[80%] sm:hidden">
          Take the first step towards a healthier, more balanced you today!
        </p>
        <p className="hidden text-[3.59vw] sm:block">
          Discover how easy it can be to make self-care a natural part of your daily routine.
          From expert support to exclusive resources, we&apos;re here to guide and inspire you along the way.
        </p>
      </div>
      <div className="flex gap-[2.76vw]">
        <div className="relative w-[53.33vw] h-[30.42vw] sm:hidden">
          <VideoPlayer />
        </div>
        <div className="max-w-[31.77vw] w-full sm:max-w-full sm:pt-[6.15vw]">
          <ul className="flex flex-col gap-[1.04vw] text-center font-lato sm:gap-[3.08vw]">
            <li className="bg-[#E5E5E5] h-[9.18vw] w-full rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center sm:order-2 sm:px-[3.85vw] sm:gap-[3.85vw] sm:justify-start sm:flex-row sm:h-[15.64vw] sm:rounded-[5.13vw]">
              <Image
                src={Icon2.src}
                width={Icon2.width}
                height={Icon2.height}
                alt="icon"
                className="hidden size-[5.13vw] sm:block shrink-0"
              />
              <div className="sm:text-left">
                <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw] sm:mb-[1.54vw] sm:text-[4.10vw] sm:[&>br]:hidden">6 WEEKLY <br/> workouts</p>
                <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw] sm:max-w-full sm:text-[2.56vw]">With top trainers. Each session lasts 15–20 minutes</p>
              </div>
            </li>
            <li className="bg-[#E5E5E5] h-[9.18vw] w-full rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center sm:order-1 sm:px-[3.85vw] sm:gap-[3.85vw] sm:justify-start sm:flex-row sm:h-[15.64vw] sm:rounded-[5.13vw]">
              <Image
                src={Icon1.src}
                width={Icon1.width}
                height={Icon1.height}
                alt="icon"
                className="hidden size-[5.13vw] sm:block shrink-0"
              />
              <div className="sm:text-left">
                <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw] sm:mb-[1.54vw] sm:text-[4.10vw] sm:[&>br]:hidden">Full access for all <br/> courses </p>
                <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw] sm:max-w-full sm:text-[2.56vw]"> In 7 days, you&apos;ll gain access to all our knowledge and experience</p>
              </div>
              </li>
            <li className="bg-[#E5E5E5] h-[9.18vw] w-full rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center sm:order-3 sm:px-[3.85vw] sm:gap-[3.85vw] sm:justify-start sm:flex-row sm:h-[15.64vw] sm:rounded-[5.13vw]">
              <Image
                src={Icon3.src}
                width={Icon3.width}
                height={Icon3.height}
                alt="icon"
                className="hidden size-[5.13vw] sm:block shrink-0"
              />
              <div className="sm:text-left">
                <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw] sm:mb-[1.54vw] sm:text-[4.10vw] sm:[&>br]:hidden">community <br/> of like-minded people</p>
                <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw] sm:text-left sm:max-w-full sm:text-[2.56vw]">Whatsap chat with our experts</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-[1.04vw] pt-[1.48vw] sm:flex-col sm:gap-[3.08vw] sm:pt-[6.15vw] sm:pb-[11.79vw]">
        <button
          onClick={() => setTrialModal({isTrialModalActive:true})}
          className="bg-orange !px-[4.69vw] text-white group button flex items-center gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange sm:gap-[3.08vw] sm:justify-center sm:text-[3.59vw] sm:gap-[2.2vw] sm:w-full"
        >
          join the club
          <span className="rounded-full flex items-center justify-center bg-white size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg] sm:size-[5.13vw]">
            <Image
              src={IconArrow.src}
              width={IconArrow.width}
              height={IconArrow.height}
              alt="image"
              className="w-[0.89vw] h-[0.63vw] sm:w-[2.56vw] sm:h-[1.79vw]"
            />
          </span>
        </button>
        <p className="text-[0.83vw] font-rubik max-w-[19.85vw] opacity-[70%] sm:font-lato sm:text-center sm:max-w-[70.51vw] sm:text-[3.59vw]">
          One-week trial for $1, then $47/month. <br/>
          You can cancel your subscription at any time.
        </p>
      </div>
    </>
  );
};

export default SectionAbout;