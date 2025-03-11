import React from 'react';
import Image from "next/image";
import IconLogo from "@/../public/icons/icon-logo-white.svg";
import ImageSecurity from '@/../public/images/img-security.webp';
import ImageStripe from '@/../public/images/img-stripe.webp';
import IconBanks from '@/../public/icons/icon-banks.png';
import IconEmail from '@/../public/icons/icon-email-white.svg';
import IconWp from '@/../public/icons/icon-wp.svg';
import Link from "next/link";

const Footer = () => {
  return (
   <div className="bg-black text-white pt-[2.34vw] pb-[4.01vw] sm:py-[7.69vw]">
     <div className="container">
        <div className="flex justify-between items-end sm:flex-col sm:items-center">
          <div>
              <Image
                src={IconLogo.src}
                width={IconLogo.width}
                height={IconLogo.height}
                alt="logo faceplasty"
                className="mb-[1.30vw] sm:w-[78.46vw]"
              />
              <p className="text-[0.94vw] font-montserrat mb-[1.04vw] leading-[1.2em] sm:mb-[6.15vw] sm:text-[3.59vw]">
                International Faceplastic And Osteopathy- FZCO <br/> DSO-IFZA, DSO-IFZA, DSO-IFZA, Dubai, 0000, Dubai License Number. 14760 Licensing Authority Dubai Silicon Oasis . +971504389834
              </p>
              <div className="space-y-[0.52vw] mb-[1.04vw] text-[0.94vw] sm:mb-[6.15vw] sm:text-[3.08vw]">
                <Link href="/oferta" className="block w-fit border-b border-b-transparent transition-border duration-300 hover:border-b-white">Contract Information</Link>
                <Link href="/oferta" className="block w-fit border-b border-b-transparent transition-border duration-300 hover:border-b-white">Cookie Policy</Link>
                <Link href="/oferta" className="block w-fit border-b border-b-transparent transition-border duration-300 hover:border-b-white">Legal notice</Link>
              </div>
              <div className="flex gap-[1.04vw] mb-[1.04vw] sm:mb-[3.2vw] sm:flex-col sm:max-w-[75.64vw] sm:mx-auto sm:gap-[3.08vw]">
                <Link
                  href="mailto:support@fp-platform.online"
                  className="flex items-center bg-green justify-center gap-[0.52vw] h-[3.13vw] text-white rounded-[2.04vw] px-[1.04vw] sm:gap-[2.05vw]  sm:rounded-[10.26vw] sm:w-full sm:h-[12.05vw]"
                >
                  <Image
                    src={IconEmail.src}
                    width={IconEmail.width}
                    height={IconEmail.height}
                    alt="email icon"
                    className="size-[0.78vw] sm:size-[5.13vw]"
                  />
                  <span className="font-semibold text-[0.83vw] uppercase sm:text-[3.59vw]">support@fp-platform.online</span>
                </Link>
                <Link
                  href="mailto:support@fp-platform.online"
                  className="flex items-center bg-green justify-center gap-[0.52vw] h-[3.13vw] text-white rounded-[2.04vw] w-[14.58vw] sm:gap-[2.05vw] sm:rounded-[10.26vw] sm:w-full sm:h-[12.05vw]"
                >
                  <Image
                    src={IconWp.src}
                    width={IconWp.width}
                    height={IconWp.height}
                    alt="whatsapp icon"
                    className=" size-[1.04vw] sm:size-[5.13vw]"
                  />
                  <span className="font-semibold text-[0.83vw] uppercase sm:text-[3.59vw]">Whats app</span>
                </Link>
                <button className="h-[3.13vw] bg-orange text-white text-[0.83vw] px-[2.08vw] font-semibold rounded-[2.04vw] uppercase sm:gap-[2.05vw] sm:text-[3.59vw] sm:rounded-[10.26vw] sm:w-full sm:h-[12.05vw]">
                  log in
                </button>
              </div>
              <p className="text-[0.94vw] sm:text-[3.08vw]">
                All services and information on this website are for educational purposes only and do not constitute medical advice or treatment
              </p>
            </div>
          <div className="sm:flex sm:justify-between sm:w-full sm:items-end sm:pt-[3.08vw]">
            <Image
              src={ImageSecurity.src}
              width={ImageSecurity.width}
              height={ImageSecurity.height}
              alt="logo faceplasty"
              className="mb-[1.30vw] w-[7.60vw] h-[3.44vw] ml-auto sm:ml-0 sm:mb-0 sm:w-[23.85vw] sm:h-[10.77vw]"
            />
            <div>
              <Image
                src={ImageStripe.src}
                width={ImageStripe.width}
                height={ImageStripe.height}
                alt="logo faceplasty"
                className="w-[10.10vw] h-[2.71vw] object-contain sm:w-[31.54vw] sm:h-[8.72vw] sm:mb-[3.08vw]"
              />
              <Image
                src={IconBanks.src}
                width={IconBanks.width}
                height={IconBanks.height}
                alt="logo faceplasty"
                className="w-[10.10vw] h-[2.71vw] object-contain sm:w-[38.97vw] sm:h-[6.15vw]"
              />
            </div>
          </div>
        </div>
     </div>
   </div>
  );
};

export default Footer;