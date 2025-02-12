import React from 'react';
import Image from "next/image";
import ImageMain from '@/../public/images/image-header.webp';
import ImageAbout from '@/../public/images/img-about.webp';
import IconArrow from '@/../public/icons/icon-arrow-small.svg';
import SectionEvents from "@/flat-pages/Homepage/components/SectionEvents";
import SectionCoursesList from "@/flat-pages/Homepage/components/SectionCoursesList";
import SectionReviews from "@/flat-pages/Homepage/components/SectionReviews";
import SectionContacts from "@/flat-pages/Homepage/components/SectionContacts";

const Homepage = () => {
  return (
    <div className="container ">
      {/*MAIN SECTION */}
      <div className="pt-[5.21vw] pb-[4.17vw]">
        <div className="flex justify-between items-end">
          <div className="space-y-[2.08vw] max-w-[36.42vw]">
            <h1 className="font-montserrat text-[2.81vw] leading-[1.7em] font-bold uppercase">
              <span className="text-[5vw] block">Academy bY</span>
              dr. Ales Ulishchenko
            </h1>
            <p className="max-w-[32.29vw] text-[0.83vw] leading-[1.2em]">
              Faceplasty – a patented technique based on working with the cranial bones.
              It includes massages, osteopathic exercises, facial massages, face fitness, bodywork, yoga, and stretching.
            </p>
            <div className="flex items-center gap-[1.04vw]">
              <button className="bg-purple text-white button hover:border-purple hover:text-purple">
                ALL COURSES
              </button>
              <button className="bg-orange group button flex items-center gap-[0.63vw] hover:text-orange hover:border-orange">
                become a member
                <span className="rounded-full flex items-center justify-center bg-black size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg]">
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
                for $47/month
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-black absolute right-0 flex flex-col items-center justify-center rounded-[2.08vw] h-[5.42vw] w-[10.63vw]">
              <p className="text-[2.81vw] text-white font-bold leading-[1.2em]">15+ </p>
              <p className="text-[0.83vw] font-medium leading-[1.2em] text-white opacity-[80%]">Years in Medicine</p>
            </div>
            <Image
              src={ImageMain.src}
              width={ImageMain.width}
              height={ImageMain.height}
              alt="image"
              className="w-[41.93vw] h-[30.99vw]"
            />
            <div className="space-y-[0.83vw] absolute bottom-0">
              <div className="bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[5.42vw] w-[10.63vw]">
                <p className="text-[2.81vw] font-bold leading-[1.2em]">850k </p>
                <p className="text-[0.83vw] font-medium leading-[1.2em]">Students</p>
              </div>
              <div className="bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[5.42vw] w-[10.63vw]">
                <p className="text-[2.81vw] font-bold leading-[1.2em]">30+  </p>
                <p className="text-[0.83vw] font-medium leading-[1.2em]">online courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*SECTION ABOUT */}
      <div className="py-[5.21vw]">
        <div className="flex items-end gap-[2.24vw]">
          <div className="relative">
            <div className="bg-black absolute bottom-0 flex flex-col items-center justify-center rounded-[2.08vw] h-[5.42vw] w-[10.63vw]">
              <p className="text-[2.81vw] text-white font-bold leading-[1.2em]">570+</p>
              <p className="text-[0.83vw] font-medium leading-[1.2em] text-white opacity-[80%]">participants</p>
            </div>
            <Image
              src={ImageAbout.src}
              width={ImageAbout.width}
              height={ImageAbout.height}
              alt="image"
              className="w-[42.29vw] h-[30.21vw]"
            />
          </div>
          <div className="space-y-[1.04vw] max-w-[42.45vw]">
            <h2 className="font-montserrat text-[2.81vw] leading-[1.2em] font-bold uppercase">
              Join to our <br/> rejuvenation club
            </h2>
            <p className="max-w-[90%] text-[0.83vw] leading-[1.2em]">
              Join our club and discover how easy it can be to make self-care a natural part of your daily routine.
              With personalized support and a welcoming community,
              you'll have everything you need to prioritize your well-being.
              From expert tips to exclusive resources, we’re here to guide and inspire you every step of the way.
              Take the first step toward a healthier, more balanced you today!
            </p>
            <div className="flex items-center gap-[1.04vw]">
              <button className="bg-orange group button flex items-center gap-[0.63vw] hover:text-orange hover:border-orange">
                become a member
                <span className="rounded-full flex items-center justify-center bg-black size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg]">
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
                for $47/month
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[2.08vw]">
          <ul className="flex gap-[3.65vw] font-lato">
            <li className="bg-[#E5E5E5] h-[13.70vw] w-[31%] rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
              <p className="font-bold leading-[1.2em] text-[2.81vw]">6 workouts </p>
              <p className="text-[0.83vw] max-auto text-center max-w-[15.63vw]">per week with trainers, each lasting 15–20 minutes</p>
            </li>
            <li className="bg-[#E5E5E5] h-[13.70vw] w-[31%] rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
              <p className="font-bold leading-[1.2em] text-[2.81vw]">all courses  </p>
              <p className="text-[0.83vw] max-auto text-center max-w-[15.63vw]"> and monthly marathons by Dr. Ales</p>
            </li>
            <li className="bg-[#E5E5E5] h-[13.70vw] w-[31%] rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
              <p className="font-bold leading-[1.2em] text-[2.81vw]">A WhatsApp  </p>
              <p className="text-[0.83vw] max-auto text-center max-w-[15.63vw]">for club members with trainers</p>
            </li>
          </ul>
        </div>
      </div>
      {/*SECTION EVENTS */}
      <div className="py-[5.21vw]">
        <h2 className="font-montserrat text-[2.81vw] uppercase font-bold">
          Our Future Events
        </h2>
        <div className="pt-[2.08vw]">
          <SectionEvents />
        </div>
      </div>
      {/*SECTION COURSES*/}
      <div className="py-[5.21vw]">
        <h2 className="font-montserrat text-[2.81vw] uppercase font-bold">
          Course Library
        </h2>
        <div className="pt-[2.08vw]">
          <SectionCoursesList />
        </div>
      </div>
      {/*SECTION REVIEWS*/}
      <div className="py-[5.21vw]">
        <h2 className="font-montserrat text-[2.81vw] uppercase font-bold">
          Reviews
        </h2>
        <div className="pt-[2.08vw]">
          <SectionReviews />
        </div>
      </div>
      {/*SECTION CONTACTS*/}
      <div className="py-[5.21vw]">
        <SectionContacts />
      </div>
    </div>
  );
};

export default Homepage;