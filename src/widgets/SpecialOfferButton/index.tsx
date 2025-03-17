'use client'
import React, {useState} from 'react';
import TrialButton from "@/widgets/TrialButton";

const SpecialOfferButton = () => {
  const [open,setOpen] = useState<boolean>(true)

  const handleClose = () => {
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
            <TrialButton variant="horizontal" text="Become a member" />
          </div>
        </div>
      </div>
    );
  }
};

export default SpecialOfferButton;