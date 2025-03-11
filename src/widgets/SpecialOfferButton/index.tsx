'use client'
import React, {useState} from 'react';
import Image from "next/image";
import IconArrow from "@/../public/icons/icon-arrow-small.svg";

const SpecialOfferButton = () => {
  const [open,setOpen] = useState<boolean>(true)

  const handleClose = () => {
    setOpen(false)
  }

  // const handleClick = () => {
  //   console.log('1')
  // }
  
  if(open) {
    return (
      <div className="animate-fadeIn fixed w-full w-[87.50vw] left-1/2 bottom-[20px] -translate-x-1/2 z-[20] ">
        <div className="relative">
          <button onClick={handleClose} className="size-[2.08vw] flex items-center justify-center rounded-full bg-white border border-[rgba(0,0,0,0.2)] absolute right-0 top-[-2.5vw]">
           <div>
             <span className="block w-[0.83vw] h-[1px] bg-black rotate-[45deg] origin-[0.3vw]" />
             <span className="block w-[0.83vw] h-[1px] bg-black rotate-[-45deg]" />
           </div>
          </button>
          <div className="flex items-center justify-between shadow-cardShadow border border-[rgba(0,0,0,0.2)] bg-white w-full py-[1.56vw] px-[2.08vw] rounded-[2.08vw]">
            <p className="font-rubik  text-[2.08vw]">
              <span className="text-main font-semibold">Try first week for $1,</span> then $47/month
            </p>
            <button

              className="block button bg-orange h-[4.17vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange"
            >
              Become a member
              <span className="rounded-full flex items-center justify-center bg-white size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg]">
              <Image
                src={IconArrow.src}
                width={IconArrow.width}
                height={IconArrow.height}
                alt="image"
                className="w-[0.89vw] h-[0.63vw]"
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