import React from 'react';
import Image from "next/image";
import IconLogo from "@/../public/icons/icon-logo-white.svg";
import ImageSecurity from '@/../public/images/img-security.webp'
import ImageStripe from '@/../public/images/img-stripe.webp'
import Link from "next/link";

const Footer = () => {
  return (
   <div className="bg-black text-white pt-[3.13vw] pb-[1.04vw]">
     <div className="container">
        <div className="flex justify-between items-end">
          <div>
              <Image
                src={IconLogo.src}
                width={IconLogo.width}
                height={IconLogo.height}
                alt="logo faceplasty"
                className="mb-[1.30vw]"
              />
              <p className="text-[0.94vw] font-montserrat mb-[0.63vw] leading-[1.2em]">
                INTERNATIONAL FACEPLASTIC AND OSTEOPATHY -FZCO <br/>
                Office No. 45-0110 M & 4th FLOOR, CITY AVENUE BUILDING, PORT SAEED, DEIRA, DUBAI,UAE PO
              </p>
              <Link href="/oferta" className="border-b border-b-transparent transition-border duration-300 hover:border-b-white">Oferta</Link>
            </div>
          <div>
            <Image
              src={ImageSecurity.src}
              width={ImageSecurity.width}
              height={ImageSecurity.height}
              alt="logo faceplasty"
              className="mb-[1.30vw] w-[7.60vw] h-[3.44vw] ml-auto"
            />
            <Image
              src={ImageStripe.src}
              width={ImageStripe.width}
              height={ImageStripe.height}
              alt="logo faceplasty"
              className="w-[10.10vw] h-[2.71vw] object-contain"
            />
          </div>
        </div>
     </div>
   </div>
  );
};

export default Footer;