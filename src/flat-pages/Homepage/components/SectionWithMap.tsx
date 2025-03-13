import React from 'react';
import Image from "next/image";
import ImageMap from '@/../public/images/image-map.webp';
import IconArrow from "@/../public/icons/icon-arrow-small.svg";
import IconWorld from '@/../public/icons/icon-world.svg';
import IconStudent from '@/../public/icons/icon-student2.svg';
import {useAppStore} from "@/shared/store/AppStore";


const SectionWithMap = () => {
  const {setTrialModal} = useAppStore()
  return (
    <div className="relative pt-[15.10vw] pb-[3.13vw] overflow-hidden sm:flex sm:flex-col">
      <div className="max-w-[40vw] sm:max-w-full">
        <h2 className="font-montserrat leading-[1.2em] text-[2.81vw] mb-[1.04vw] uppercase font-medium sm:mb-[6.15vw] sm:text-[6.15vw]">
          Join Our Global Community
        </h2>
        <div className="text-[2.08vw] font-rubik leading-[1.2em] opacity-[80%] mb-[2.08vw] sm:hidden">
          <p> Students in 177 countries</p>
          <p> 9 languages of training</p>
          <p> One mission</p>
        </div>
        <div className="flex items-center gap-[1.04vw] sm:gap-[3.08vw] sm:hidden">
          <button
            onClick={() => setTrialModal({isTrialModalActive:true})}
            className="bg-orange text-white group button flex items-center gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange"
          >
            <span className="shrink-0">become a member</span>
            <span className="shrink-0 rounded-full flex items-center justify-center bg-white size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg]">
                <Image
                  src={IconArrow.src}
                  width={IconArrow.width}
                  height={IconArrow.height}
                  alt="image"
                  className="w-[0.89vw] h-[0.63vw]"
                />
              </span>
          </button>
          <p className="text-[0.83vw] font-rubik max-w-[19.85vw] opacity-[70%]">
            One-week trial for $1, then $47/month. <br/>
            You can cancel your subscription at any time.
          </p>
        </div>
      </div>
      <div className="absolute right-[-20vw] top-0 w-[76.56vw] h-[39.79vw] sm:size-full sm:static">
        <Image
          src={ImageMap.src}
          width={ImageMap.width}
          height={ImageMap.height}
          alt="image map"
          className="object-cover"
        />
      </div>
      <div className="text-[4.10vw] font-lato space-y-[3.08vw] mb-[6.15vw] hidden sm:block">
        <p className="flex item-center gap-[2.56vw] rounded-[5.13vw] px-[3.85vw] py-[3.08vw] bg-[#E5E5E5]">
          <Image
            src={IconWorld.src}
            width={IconWorld.width}
            height={IconWorld.height}
            alt="icon"
          />
          Students In <span className="font-bold">177 Countries</span>
        </p>
        <p className="flex item-center gap-[2.56vw] rounded-[5.13vw] px-[3.85vw] py-[3.08vw] bg-[#E5E5E5]">
          <Image
            src={IconStudent.src}
            width={IconStudent.width}
            height={IconStudent.height}
            alt="icon"
          />
          <span className="font-bold">9 Languages</span> Of Training
        </p>
      </div>
      <div className="hidden items-center gap-[1.04vw] sm:flex-col sm:gap-[3.08vw] sm:pb-[10.26vw] sm:flex">
        <button
          onClick={() => setTrialModal({isTrialModalActive:true})}
          className="bg-orange text-white group button flex items-center gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange sm:justify-center sm:gap-[2.2vw] sm:w-full"
        >
          <span className="shrink-0 sm:text-[3.59vw]">become a member</span>
          <span className="shrink-0 rounded-full flex items-center justify-center bg-white size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg] sm:size-[5.13vw]">
            <Image
              src={IconArrow.src}
              width={IconArrow.width}
              height={IconArrow.height}
              alt="image"
              className="w-[0.89vw] h-[0.63vw] sm:w-[2.56vw] sm:h-[1.79vw]"
            />
          </span>
        </button>
        <p className="text-[0.83vw] font-rubik opacity-[70%] sm:font-lato sm:text-center sm:max-w-[70.51vw] sm:text-[3.59vw]">
          One-week trial for $1, then $47/month. <br/>
          You can cancel your subscription at any time.
        </p>
      </div>
    </div>
  );
};

export default SectionWithMap;