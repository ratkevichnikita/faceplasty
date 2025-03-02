import React from 'react';
import Image from "next/image";
import ImageMain from '@/../public/images/image-header.webp';
import IconArrow from '@/../public/icons/icon-arrow-small.svg';
import SectionEvents from "@/flat-pages/Homepage/components/SectionEvents";
import SectionCoursesList from "@/flat-pages/Homepage/components/SectionCoursesList";
import SectionContacts from "@/flat-pages/Homepage/components/SectionContacts";
import VideoPlayer from "@/widgets/VideoPlayer";
import TrialButon from "@/widgets/TrialButton";
import {Product} from "@/shared/api/types/courses";
import SectionFaq from "@/flat-pages/Homepage/components/SectionFaq";
import SectionCombine from "@/flat-pages/Homepage/components/SectionCombine";
import SectionQuote from "@/flat-pages/Homepage/components/SectionQuote";
import SectionWithMap from "@/flat-pages/Homepage/components/SectionWithMap";

interface ComponentProps {
  products: Product[] | null
}

const Homepage = ({products}:ComponentProps) => {

  return (
    <div className="container ">
      {/*MAIN SECTION */}
      <div className="pt-[5.21vw] pb-[4.17vw]">
        <div className="flex justify-between items-end gap-[2.60vw]">
          <div className="space-y-[2.08vw] max-w-[42.71vw]">
            <h1 className="font-montserrat text-[2.81vw] leading-[1.7em] font-medium uppercase">
              <span className="text-[4.48vw] block">MINDBODYFACE</span>
              better every day
            </h1>
            <p className="font-rubik max-w-[38.85vw] text-[2.08vw] leading-[1.2em] opacity-[84%]">
              Medically proven methods and techniques to look younger, boost your energy, <br/>
              and experience true happiness
              <br/> every single day!
            </p>
            <div className="flex items-center gap-[1.04vw]">
              <button className="bg-purple !px-[1.56vw] text-white button hover:bg-black hover:text-white">
                ALL COURSES
              </button>
              <button className="button bg-orange w-[16.98vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange">
                <span className="shrink-0">become a member</span>
                <span className="rounded-full shrink-0 flex items-center justify-center bg-white size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg]">
                  <Image
                    src={IconArrow.src}
                    width={IconArrow.width}
                    height={IconArrow.height}
                    alt="image"
                    className="w-[0.89vw] h-[0.63vw]"
                  />
                </span>
              </button>
              <p className="text-[0.83vw] font-rubik max-w-[8.85vw] opacity-[70%]">
                Get a trial week for $1,
                then $47/month
              </p>
            </div>
          </div>
          <div className="relative">
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
      <div id="about" className="py-[5.21vw]">
        <div className="w-[38.54vw] mb-[1.48vw]">
          <h2 className="font-montserrat text-[2.81vw] leading-[1.2em] mb-[1.04vw] font-medium uppercase">
            Join our <br/> rejuvenation club
          </h2>
          <p className="text-[2.08vw] font-rubik leading-[1.2em] opacity-[80%]">
            Take the first step towards a healthier, more balanced you today!
          </p>
        </div>
        <div className="flex gap-[2.76vw]">
          <div className="relative w-[53.33vw] h-[30.42vw]">
            <VideoPlayer />
          </div>
          <div className="max-w-[31.77vw] w-full">
            <ul className="flex flex-col gap-[1.04vw] text-center font-lato">
              <li className="bg-[#E5E5E5] h-[9.18vw] w-full rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
                <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw]">6 WEEKLY <br/> workouts</p>
                <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw]">With top trainers. Each session lasts 15–20 minutes</p>
              </li>
              <li className="bg-[#E5E5E5] h-[9.18vw] w-full rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
                <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw]">Full access for all <br/> courses </p>
                <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw]"> In 7 days, you'll gain access to all our knowledge and experience</p>
              </li>
              <li className="bg-[#E5E5E5] h-[9.18vw] w-full rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
                <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw]">community <br/> of like-minded people</p>
                <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw]">Whatsap chat with our experts</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[1.04vw] pt-[1.48vw]">
          <button className="bg-orange !px-[4.69vw] text-white group button flex items-center gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange">
            join the club
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
          <p className="text-[0.83vw] font-rubik max-w-[19.85vw] opacity-[70%]">
            One-week trial for $1, then $47/month. <br/>
            You can cancel your subscription at any time.
          </p>
        </div>
      </div>
      {/*SECTION COURSES*/}
      <div id="courses" className="py-[5.21vw]">
        <h2 className="font-montserrat leading-[1.2em] text-[2.81vw] uppercase font-medium">
          Course Library
        </h2>
        <div className="pt-[2.08vw]">
          <SectionCoursesList products={products}/>
          <div className="flex flex-col items-center text-center justify-center gap-[1.04vw] pt-[2.08vw]">
            <TrialButon text="try all courses for $1" />
          </div>
        </div>
      </div>
      {/*SECTION EVENTS */}
      <div className="py-[5.21vw]">
        <h2 className="font-montserrat leading-[1.2em] text-[2.81vw] uppercase font-medium">
          Our Future Events
        </h2>
        <div className="pt-[2.08vw]">
          <SectionEvents />
        </div>
      </div>
      {/*SECTION COMBINE */}
      <div className="py-[5.21vw]">
        <SectionCombine />
        <div className="flex flex-col items-center text-center justify-center gap-[1.04vw] pt-[2.08vw]">
          <TrialButon text="start your transformation" />
        </div>
      </div>
      {/*SECTION WITH QUOTE*/}
      <div className="py-[4.69vw]">
        <SectionQuote />
      </div>
      {/*SECTION WITH MAP*/}
      <div className="pt-0">
        <SectionWithMap />
      </div>
      {/*SECTION CONTACTS*/}
      <div id="contacts" className="py-[5.21vw]">
        <SectionContacts />
      </div>
      {/*SECTION FAQ*/}
      <div id="faq" className="py-[5.21vw]">
        <h2 className="max-w-[42.71vw] leading-[1.2em] mx-auto font-montserrat text-[2.81vw] text-center uppercase font-medium">
          Frequently Asked Questions
        </h2>
        <div className="pt-[2.08vw]">
          <SectionFaq />
        </div>
      </div>
    </div>
  );
};

export default Homepage;