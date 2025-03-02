import React from 'react';
import Image from "next/image";
import ImageMap from '@/../public/images/image-map.webp';
import IconArrow from "@/../public/icons/icon-arrow-small.svg";

const SectionWithMap = () => {
  return (
    <div className="relative pt-[15.10vw] pb-[3.13vw] overflow-hidden">
      <div className="max-w-[40vw]">
        <h2 className="font-montserrat text-[2.81vw] leading-[1.2em] mb-[1.04vw] font-medium uppercase">
          Join Our Global Community
        </h2>
        <div className="text-[2.08vw] font-rubik leading-[1.2em] opacity-[80%] mb-[2.08vw]">
          <p> Students in 177 countries</p>
          <p> 9 languages of training</p>
          <p> One mission</p>
        </div>
        <div className="flex items-center gap-[1.04vw]">
          <button className="bg-orange text-white group button flex items-center gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange">
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
      <div className="absolute right-[-20vw] top-0 w-[76.56vw] h-[39.79vw]">
        <Image
          src={ImageMap.src}
          width={ImageMap.width}
          height={ImageMap.height}
          alt="image map"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SectionWithMap;