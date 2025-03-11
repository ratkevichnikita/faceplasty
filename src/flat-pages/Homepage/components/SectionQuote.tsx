import React from 'react';
import Image from "next/image";
import ImageQuote from '@/../public/images/image-quote.webp';
import ImageMain from "@/../public/images/image-header.webp";

const SectionQuote = () => {
  return (
    <>
      <div className="flex bg-[#E5E5E5] h-[13.23vw] rounded-[2.08vw] overflow-hidden sm:hidden">
        <div className="relative w-[31.25vw] h-[13.23vw] shrink-0 rounded-[2.08vw] overflow-hidden">
          <Image
            src={ImageQuote.src}
            fill
            sizes="(max-width: 640px) 100%, (max-width: 1024px) 50vw, 31.25vw"
            alt="image with quote"
            className="object-cover"
          />
        </div>
        <div className="pt-[2.34vw] pb-[1.04vw] px-[2.60vw]">
          <p className="leading-[1.2em] pl-[4.69vw] text-[0.83vw] opacity-80 italic font-medium mb-[0.78vw]">
            “In my 18 years of medical practice, I discovered one powerful truth — real and lasting beauty comes when you care for your body,
            mind, and health as a whole. I'm proud to help millions of people apply science-backed self-care methods to look younger, feel more energized, and experience true happiness.”
          </p>
          <div className="text-[0.83vw] text-right opacity-80">
            <p className="font-semibold">Dr. Ales Ulishchenko</p>
            <p> Founder of MINDBODYFACE,</p>
            <p>Osteopath & Plastic Surgeon, MD, PhD,</p>
            <p>Mentor in health and beauty</p>
            <p>over 100,000 students and 4,000,000 followers</p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="relative h-[66.67vw] w-full mb-[6.15vw]">
          <div className="bg-black font-lato absolute right-0 flex flex-col items-center justify-center rounded-[2.08vw] h-[7.45vw] w-[13.8vw] sm:rounded-[5.13vw] sm:w-[29.74vw] sm:h-[15.38vw]">
            <p className="text-[4.10vw] text-center text-white font-medium leading-[1.2em]">Dr. Ales
              Ulishchenko</p>
            <p className="text-[2.05vw] font-medium leading-[1.2em] text-white opacity-[80%]">Founder & Main Expert</p>
          </div>
          <Image
            src={ImageMain.src}
            width={ImageMain.width}
            height={ImageMain.height}
            priority
            alt="image"
            className="size-full"
          />
          <div className="space-y-[0.83vw] absolute bottom-0 space-y-[2.05vw]">
            <div className="bg-[#E5E5E5] text-center flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[7.29vw] w-[12.76vw] sm:rounded-[5.13vw] sm:w-[26.67vw] sm:h-[15.38vw]">
              <p className="text-[4.10vw] font-medium leading-[1.2em] uppercase opacity-80">PhD </p>
              <p className="text-[2.05vw] font-medium leading-[1.2em] opacity-80">Doctor of Medicine, <br/>
                Osteopath & Plastic Surgeon</p>
            </div>
            <div className="bg-[#E5E5E5] text-center flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[7.29vw] w-[12.76vw] sm:rounded-[5.13vw] sm:w-[26.67vw] sm:h-[15.38vw]">
              <p className="text-[4.10vw] font-medium leading-[1.2em] uppercase opacity-80">4,000,000 </p>
              <p className="text-[2.05vw] font-medium leading-[1.2em] opacity-80">Followers And 100K+ <br/> Students Worldwide</p>
            </div>
          </div>
        </div>
        <div className="bg-[#E5E5E5] italic px-[5.13vw] font-medium py-[3.85vw] text-[3.59vw] rounded-[10.26vw]">
          <p className="mb-[3.85vw] ">
            “In my 18 years of medical practice, I discovered one powerful truth — real and lasting beauty comes when you care for your body, mind, and health as a whole. I'm proud to help millions of people apply science-backed self-care methods to look younger, feel more energized, and experience true happiness.”
          </p>
          <p className="text-right">
            Dr. Ales Ulishchenko
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionQuote;