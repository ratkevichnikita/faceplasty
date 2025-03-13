import React from 'react';
import Image from "next/image";
import IconInsta2 from '@/../public/icons/icon-insta2.svg';
import IconFacebook from '@/../public/icons/icon-facebook.svg';
import IconYoutube from '@/../public/icons/icon-youtube.svg';
import IconWp from '@/../public/icons/icon-wp.svg';
import IconMail from '@/../public/icons/icon-email.svg';
import ImageMobile from '@/../public/images/image-contacts-mobile.webp';
import Link from "next/link";

const SectionContacts = () => {
  return (
    <div>
      <div className="bg-main relative flex flex-col items-center justify-center w-full h-[21.88vw] px-[3.13vw] mb-[1.67vw] rounded-[2.08vw] sm:mb-[8.97vw] sm:h-full sm:px-[5.13vw] sm:rounded-[10.26vw] sm:pb-[65.38vw] sm:pt-[16.41vw]">
        <div className="hidden absolute right-0 bottom-0 w-[57.77vw] h-[85.46vw] sm:block">
          <Image
            src={ImageMobile.src}
            fill
            alt="image"
            className=" object-cover"
          />
        </div>
        <div className="max-w-[65.31vw] text-white sm:max-w-full">
          <h2 className="text-[2.81vw] text-center font-medium font-montserrat leading-[1.2em] mb-[1.04vw] uppercase sm:mb-[3.08vw] sm:text-[4.10vw] sm:text-left">
            Stay updated with valuable insights, exclusive offers
          </h2>
          <p className="text-[2.08vw] text-center mb-[0.78vw] sm:mb-[4.10vw] sm:text-[3.59vw] sm:text-left">
            Follow us for more!
          </p>
          <div className="flex justify-center gap-[2.08vw] sm:flex-col sm:gap-[3.08vw]">
            <Link href="https://www.instagram.com/dr_ales_osteopath" target="_blank" rel="nofollow" className="h-[4.17vw] px-[2.08vw] cursor-pointer bg-white text-black font-medium flex items-center justify-center gap-[0.36vw] rounded-[2.08vw] sm:h-[12.05vw] sm:rounded-[10.26vw] sm:gap-[1.79vw] sm:w-[47.44vw]">
              <Image
                src={IconInsta2.src}
                width={IconInsta2.width}
                height={IconInsta2.height}
                alt="instagram icon"
                className="w-[0.99vw] h-[1.61vw] sm:w-[2.31vw] sm:h-[4.10vw]"
              />
              <span className="text-[1.04vw] uppercase tracking-[-0.05em] sm:text-[4.10vw] sm:normal-case">dr_ales_osteopath</span>
            </Link>
            <Link href="https://www.facebook.com/dr.ales.osteopath/" target="_blank" rel="nofollow" className="h-[4.17vw] px-[2.08vw] cursor-pointer bg-white text-black font-medium flex items-center justify-center gap-[0.36vw] rounded-[2.08vw] sm:h-[12.05vw] sm:rounded-[10.26vw] sm:gap-[1.79vw] sm:w-[47.44vw]">
              <Image
                src={IconFacebook.src}
                width={IconFacebook.width}
                height={IconFacebook.height}
                alt="instagram icon"
                className="w-[0.99vw] h-[1.61vw] sm:size-[4.10vw]"
              />
              <span className="text-[1.04vw] uppercase tracking-[-0.04em] sm:text-[4.10vw] sm:normal-case">dr.ales.osteopath</span>
            </Link>
            <Link href="https://www.youtube.com/@dr_ales_osteopath" target="_blank" rel="nofollow" className="h-[4.17vw] px-[2.08vw] cursor-pointer bg-white text-black font-medium flex items-center justify-center gap-[0.36vw] rounded-[2.08vw] transition-bg duration-300 hover:bg-gray sm:h-[12.05vw] sm:rounded-[10.26vw] sm:h-[10.26vw] sm:gap-[1.79vw] sm:w-[47.44vw]">
              <Image
                src={IconYoutube.src}
                width={IconYoutube.width}
                height={IconYoutube.height}
                alt="instagram icon"
                className="w-[2.24vw] h-[1.61vw] sm:w-[5.64vw] sm:h-[4.10vw]"
              />
              <span className="text-[1.04vw] uppercase tracking-[-0.04em] sm:text-[4.10vw] sm:normal-case">dr_ales_faceplasty</span>
            </Link>
          </div>
         </div>
      </div>
      <div className="flex flex-col items-center ">
        <p className="block text-[0.83vw] mb-[1.04vw] sm:hidden">
          If you have any questions, feel free to contact our support team on WhatsApp or email.
        </p>
        <div className="flex items-center justify-center gap-[2.08vw] sm:flex-col sm:gap-[3.08vw]">
          <Link
            href="https://api.whatsapp.com/send?phone=971508610413"
            rel="nofollow"
            className="w-[19.17vw] h-[4.17vw] rounded-[2.08vw] flex items-center justify-center gap-[0.42vw] bg-purple text-white text-[0.83vw] uppercase transition-bg duration-300 hover:bg-black hover:text-white sm:text-[3.59vw] sm:gap-[2.05vw] sm:rounded-[10.26vw] sm:h-[12.05vw] sm:w-[76.92vw]"
          >
            <Image
              src={IconWp.src}
              width={IconWp.width}
              height={IconWp.height}
              alt="instagram icon"
              className="size-[1.04vw] sm:size-[5.13vw]"
            />
            +971 50 861 0413
          </Link>
          <Link href="mailto:support@fp-platform.online" className="flex items-center w-[19.27vw] h-[4.17vw] rounded-[2.08vw] border border-main justify-center gap-[0.42vw] text-[0.83vw] uppercase sm:text-[3.59vw] sm:rounded-[10.26vw] sm:gap-[2.05vw] sm:h-[12.05vw] sm:w-[76.92vw]">
            <Image
              src={IconMail.src}
              width={IconMail.width}
              height={IconMail.height}
              alt="instagram icon"
              className="size-[1.04vw] sm:size-[5.13vw]"
            />
            support@fp-platform.online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionContacts;