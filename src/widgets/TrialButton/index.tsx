'use client'
import React, {FC} from "react";
import Image from "next/image";
import IconArrow from "@/../public/icons/icon-arrow-small.svg";
// import {getWidgetById} from "@/shared/api";
import {useAppStore} from "@/shared/store/AppStore";

interface ComponentProps {
  text?: string
}

const TrialButton:FC<ComponentProps> = ({text= "Become a member"}) => {
  const {setTrialModal} = useAppStore()

  const handleClick = () => {
    setTrialModal({isTrialModalActive:true})
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="block button bg-orange h-[4.17vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange sm:gap-[3.08vw] sm:text-[3.59vw] sm:gap-[2.2vw] sm:w-full"
      >
        {text}
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
      <p className="text-[0.83vw] font-rubik opacity-[70%] sm:font-lato sm:text-center sm:max-w-[70.51vw] sm:text-[3.59vw]">
        <span className="font-bold text-purple">Free one-week trial</span>, then $47/month <br/>
        You can cancel your subscription at any time.
      </p>
    </>
  );
};

export default TrialButton;