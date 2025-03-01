import React from 'react';
import Image from "next/image";
import ImageContacts from '@/../public/images/image-contacts.webp';
import IconInsta from '@/../public/icons/icon-insta.svg';
import IconInsta2 from '@/../public/icons/icon-insta2.svg';
import IconWp from '@/../public/icons/icon-wp.svg';
import IconMail from '@/../public/icons/icon-email.svg';
import Link from "next/link";

const SectionContacts = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-center w-full h-[29.79vw] px-[3.13vw] mb-[1.67vw]">
        <Image
          src={ImageContacts.src}
          fill
          alt="faceplasy company"
          className="z-[-1]"
        />
        <div className="max-w-[40.68vw] text-white">
          <h2 className="text-[2.81vw] font-medium font-montserrat leading-[1.2em] mb-[1.04vw]">
            Stay updated with valuable insights, exclusive offers
          </h2>
          <p className="text-[1.30vw] mb-[0.78vw]">
            Follow us for more!
          </p>
          <Link href="/" className="h-[4.17vw] w-[15.96vw] cursor-pointer bg-white text-black font-medium flex items-center justify-center gap-[0.36vw] rounded-[2.08vw]">
            <Image
              src={IconInsta2.src}
              width={IconInsta2.width}
              height={IconInsta2.height}
              alt="instagram icon"
              className="w-[0.99vw] h-[1.61vw]"
            />
            <span className="text-[1.04vw] uppercase tracking-[-0.04em]">dr_ales_osteopath</span>
          </Link>
        </div>
        <Link href="/" className="absolute right-0 bottom-0 cursor-pointer transition-transform duration-300 hover:scale-[1.05]">
          <Image
            src={IconInsta.src}
            width={IconInsta.width}
            height={IconInsta.height}
            alt="instagram icon"
            className="size-[5.63vw]"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center ">
        <p className="text-[0.83vw] mb-[1.67vw]">
          If you have any questions, feel free to contact our support team on WhatsApp or email.
        </p>
        <div className="flex items-center justify-center gap-[2.08vw]">
          <Link href="/" className="w-[10.42vw] h-[4.17vw] rounded-[2.08vw] flex items-center justify-center gap-[0.42vw] bg-purple text-white text-[0.83vw] uppercase transition-bg duration-300 hover:bg-black hover:text-white">
            <Image
              src={IconWp.src}
              width={IconWp.width}
              height={IconWp.height}
              alt="instagram icon"
              className="size-[1.04vw]"
            />
            Whats app
          </Link>
          <Link href="mailto:support@fp-platform.online" className="flex items-center w-[19.27vw] h-[4.17vw] rounded-[2.08vw] border border-purple justify-center gap-[0.42vw] text-[0.83vw] uppercase">
            <Image
              src={IconMail.src}
              width={IconMail.width}
              height={IconMail.height}
              alt="instagram icon"
              className="size-[1.04vw]"
            />
            support@fp-platform.online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionContacts;