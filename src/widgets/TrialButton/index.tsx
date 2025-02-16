import React from 'react';
import Image from "next/image";
import IconArrow from "../../../public/icons/icon-arrow-small.svg";

const TrialButon = () => {
  return (
    <>
      <button className="button bg-orange w-[16.98vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange">
        become a member
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
      <p className="text-[0.83vw] font-rubik opacity-[70%]">
        <span className="font-bold text-purple">Free one-week trial</span>, then $47/month
      </p>
    </>
  );
};

export default TrialButon;