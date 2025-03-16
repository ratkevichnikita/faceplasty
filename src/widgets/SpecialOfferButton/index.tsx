'use client'
import React, {useState} from 'react';
import Image from "next/image";
import IconArrow from "@/../public/icons/icon-arrow-small.svg";
import {useAppStore} from "@/shared/store/AppStore";

const SpecialOfferButton = () => {
  const {setTrialModal} = useAppStore()

  const [open,setOpen] = useState<boolean>(true)

  const handleClose = () => {
    setOpen(false)
  }

  const handleClick = () => {
    setTrialModal({isTrialModalActive:true})
    setOpen(false)
  }
  
  if(open) {
    return (
      <div className="animate-fadeIn fixed w-[87.50vw] left-1/2 bottom-[20px] -translate-x-1/2 z-[15] ">
        <div className="relative">
          <button onClick={handleClose} className="size-[2.08vw] flex items-center justify-center rounded-full bg-white border border-[rgba(0,0,0,0.2)] absolute right-0 top-[-2.5vw] sm:top-[-11.5vw] sm:size-[10.26vw]">
           <div>
             <span className="block w-[0.83vw] h-[1px] bg-black rotate-[45deg] origin-[0.3vw] sm:origin-[1.6vw] sm:w-[4.10vw]" />
             <span className="block w-[0.83vw] h-[1px] bg-black rotate-[-45deg] sm:w-[4.10vw]" />
           </div>
          </button>
          <div className="flex items-center justify-between shadow-cardShadow border border-[rgba(0,0,0,0.2)] bg-white w-full py-[1.56vw] px-[2.08vw] rounded-[2.08vw] sm:px-[7.69vw] sm:py-[3.08vw] sm:rounded-[5.13vw] sm:gap-[3.08vw] sm:flex-col">
            <p className="font-rubik  text-[2.08vw] sm:text-[4.10vw]">
              <span className="text-main font-semibold">Try first week for $1,</span> then $47/month
            </p>
            <button
              onClick={handleClick}
              className="block button bg-orange h-[4.17vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange sm:gap-[2.56vw] sm:w-[64.10vw]"
            >
              Become a member
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
          </div>
        </div>
      </div>
    );
  }
};

export default SpecialOfferButton;