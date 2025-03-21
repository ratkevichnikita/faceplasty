import React from 'react';
import Image from "next/image";
import ImageMain from '@/../public/images/image-header.webp';
import SectionEvents from "@/flat-pages/Homepage/components/SectionEvents";
import SectionCoursesList from "@/flat-pages/Homepage/components/SectionCoursesList";
import SectionContacts from "@/flat-pages/Homepage/components/SectionContacts";
import TrialButon from "@/widgets/TrialButton";
import {Product} from "@/shared/api/types/courses";
import {Event} from '@/shared/api/types/events';
import SectionFaq from "@/flat-pages/Homepage/components/SectionFaq";
import SectionCombine from "@/flat-pages/Homepage/components/SectionCombine";
import SectionQuote from "@/flat-pages/Homepage/components/SectionQuote";
import SectionWithMap from "@/flat-pages/Homepage/components/SectionWithMap";
import SectionAbout from "@/flat-pages/Homepage/components/SectionAbout";
import SpecialOfferButton from "@/widgets/SpecialOfferButton";
import Link from "next/link";

interface ComponentProps {
  products: Product[] | null
  events: Event[] | null
}

const Homepage = ({products,events}:ComponentProps) => {
  return (
    <div className="container ">
      {/*MAIN SECTION */}
      <div className="pt-[5.21vw] pb-[4.17vw] sm:pt-[15.38vw]">
        <div className="flex justify-between items-end gap-[2.60vw]">
          <div className="space-y-[2.08vw] max-w-[42.71vw] sm:max-w-full sm:space-y-[6.15vw] sm:pb-[11.79vw]">
            <h1 className="font-montserrat text-[2.81vw] leading-[1.7em] font-medium uppercase sm:leading-[1.2em] sm:text-[6.15vw]">
              <span className="text-[4.48vw] block sm:text-[10.26vw] sm:mb-[6vw]">MINDBODYFACE</span>
              better every day
            </h1>
            <p className="font-rubik max-w-[38.85vw] text-[2.08vw] leading-[1.2em] opacity-[84%] sm:[&>br]:hidden sm:max-w-full sm:text-[3.59vw]">
              Medically proven methods and techniques to look younger, boost your energy, <br/>
              and experience true happiness
              <br/> every single day!
            </p>
            <div className="flex items-center gap-[1.04vw] sm:gap-[3.08vw] sm:flex-col">
              <Link
                href="#courses"
                rel="nofollow"
                className="bg-purple flex justify-center flex items-center !px-[1.56vw] text-white button hover:bg-black hover:text-white sm:w-full"
              >
                ALL COURSES
              </Link>
              <div className="block sm:hidden">
                <TrialButon className="w-[17.19vw]" variant="horizontal" text="become a member" description="Get a trial week for $1, <br> then $47/month" />
              </div>
              <div className="hidden sm:block w-full">
                <TrialButon className="w-full" variant="vertical" text="become a member" description="One-week trial for $1, then $47/month.<br> You can cancel your subscription at any time." />
              </div>
            </div>
          </div>
          <div className="relative sm:hidden">
            <div className="bg-black font-lato absolute right-0 flex flex-col items-center justify-center rounded-[2.08vw] h-[7.45vw] w-[13.8vw]">
              <p className="text-[2.08vw] text-center text-white font-medium leading-[1.2em]">Dr. Ales
                Ulishchenko</p>
              <p className="text-[0.83vw] font-medium leading-[1.2em] text-white opacity-[80%]">Founder & Main Expert</p>
            </div>
            <Image
              src={ImageMain.src}
              width={ImageMain.width}
              height={ImageMain.height}
              priority
              quality={95}
              alt="image"
              className="w-[41.93vw] h-[30.99vw]"
            />
            <div className="space-y-[0.83vw] absolute bottom-0">
              <div className="bg-[#E5E5E5] text-center flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[7.29vw] w-[12.76vw]">
                <p className="text-[2.08vw] font-medium leading-[1.2em] uppercase opacity-80">PhD </p>
                <p className="text-[0.83vw] font-medium leading-[1.2em] opacity-80">Doctor of Medicine, <br/>
                  Osteopath & Plastic Surgeon</p>
              </div>
              <div className="bg-[#E5E5E5] text-center flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[7.29vw] w-[12.76vw]">
                <p className="text-[2.08vw] font-medium leading-[1.2em] uppercase opacity-80">4,000,000 </p>
                <p className="text-[0.83vw] font-medium leading-[1.2em] opacity-80">Followers And 100K+ <br/> Students Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*SECTION ABOUT */}
      <div id="about" className="py-[5.21vw] sm:py-[7.69vw]">
       <SectionAbout />
      </div>
      {/*SECTION COURSES*/}
      <div id="courses" className="py-[5.21vw] sm:py-[7.69vw]">
        <h2 className="font-montserrat leading-[1.2em] text-[2.81vw] uppercase font-medium sm:mb-[6.15vw] sm:text-[6.15vw]">
          Course Library
        </h2>
        <div className="pt-[2.08vw] sm:pt-0">
          <SectionCoursesList products={products}/>
          <div className="flex flex-col items-center text-center justify-center gap-[1.04vw] pt-[2.08vw] sm:pt-[6.15vw] sm:gap-[3.08vw]">
            <TrialButon text="try all courses for $1" variant="vertical" description={`<span>Trial week for $1,</span>, then $47/month <br/> You can cancel your subscription at any time.`} />
          </div>
        </div>
      </div>
      {/*SECTION EVENTS */}
      <div className="py-[5.21vw] sm:py-[7.69vw]">
        <h2 className="font-montserrat leading-[1.2em] text-[2.81vw] uppercase font-medium sm:mb-[6.15vw] sm:text-[6.15vw]">
          Our Future Events
        </h2>
        <div className="pt-[2.08vw] sm:pt-0">
          <SectionEvents events={events} />
        </div>
      </div>
      {/*SECTION COMBINE */}
      <div className="py-[5.21vw] sm:py-[7.69vw]">
        <SectionCombine />
        <div className="flex flex-col items-center text-center justify-center gap-[1.04vw] pt-[2.08vw] sm:pt-[6.15vw] sm:gap-[3.08vw]">
          <TrialButon
            text="start your transformation"
            variant="vertical"
            description={`<span>Get a trial week for $1,</span> then $47/month.<br> You can cancel your subscription at any time.`}
          />
        </div>
      </div>
      {/*SECTION WITH QUOTE*/}
      <div className="py-[4.69vw] sm:py-[7.69vw]">
        <SectionQuote />
      </div>
      {/*SECTION WITH MAP*/}
      <div className="pt-0">
        <SectionWithMap />
      </div>
      {/*SECTION CONTACTS*/}
      <div id="contacts" className="py-[5.21vw] sm:py-[7.69vw]">
        <SectionContacts />
      </div>
      {/*SECTION FAQ*/}
      <div id="faq" className="py-[5.21vw] sm:py-[7.69vw] sm:pb-[12.82vw]">
        <h2 className="max-w-[42.71vw] leading-[1.2em] mx-auto font-montserrat text-[2.81vw] text-center uppercase font-medium sm:text-left sm:max-w-full sm:mb-[6.15vw] sm:text-[6.15vw]">
          Frequently Asked Questions
        </h2>
        <div className="pt-[2.08vw] sm:pt-[6.15vw]">
          <SectionFaq />
        </div>
      </div>
      <SpecialOfferButton />
    </div>
  );
};

export default Homepage;