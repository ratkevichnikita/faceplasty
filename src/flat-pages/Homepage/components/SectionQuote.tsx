import React from 'react';
import Image from "next/image";
import ImageQuote from '@/../public/images/image-quote.webp';

const SectionQuote = () => {
  return (
    <div className="flex bg-[#E5E5E5] h-[13.23vw] rounded-[2.08vw] overflow-hidden">
      <div className="relative w-[31.25vw] h-[13.23vw] shrink-0 rounded-[2.08vw] overflow-hidden">
        <Image
          src={ImageQuote.src}
          fill
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
  );
};

export default SectionQuote;