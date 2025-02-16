import React from 'react';
import Image from "next/image";
import ImageMain from '@/../public/images/image-header.webp';
import IconArrow from '@/../public/icons/icon-arrow-small.svg';
import SectionEvents from "@/flat-pages/Homepage/components/SectionEvents";
import SectionCoursesList from "@/flat-pages/Homepage/components/SectionCoursesList";
import SectionReviews from "@/flat-pages/Homepage/components/SectionReviews";
import SectionContacts from "@/flat-pages/Homepage/components/SectionContacts";
import VideoPlayer from "@/widgets/VideoPlayer";
import TrialButon from "@/widgets/TrialButton";
import {Product} from "@/shared/api/types/courses";
import Spinner from "@/widgets/Spinner";

interface ComponentProps {
  products: Product[] | null
}

const Homepage = ({products}:ComponentProps) => {
  console.log('(products && products?.length > 0 )',products )
  return (
    <div className="container ">
      {/*MAIN SECTION */}
      <div className="pt-[5.21vw] pb-[4.17vw]">
        <div className="flex justify-between items-end">
          <div className="space-y-[2.08vw] max-w-[36.42vw]">
            <h1 className="font-montserrat text-[2.81vw] leading-[1.7em] font-medium uppercase">
              <span className="text-[4.48vw] block">MINDBODYFACE</span>
              better every day
            </h1>
            <p className="font-rubik max-w-[32.29vw] text-[0.83vw] leading-[1.2em]">
              A transformative space where Dr. Ales and his team guide you in mastering holistic self-care for lasting health, beauty and longevity — mind, body, and face! With our proven methods and techniques,
              you’ll look younger, feel more energized, and experience true happiness.
              Because self-care isn’t just about appearance — it’s about living longer, feeling your best, and truly thriving every single day!
            </p>
            <div className="flex items-center gap-[1.04vw]">
              <button className="bg-purple text-white button hover:bg-black hover:text-white">
                ALL COURSES
              </button>
              <button className="button bg-orange w-[16.98vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange">
                become a member
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
              <p className="text-[0.83vw] font-rubik max-w-[8.85vw] opacity-[70%]">
                <span className="font-bold">Free one-week trial</span>, then $47/month
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-black font-lato absolute right-0 flex flex-col items-center justify-center rounded-[2.08vw] h-[7.29vw] w-[13.65vw]">
              <p className="text-[2.08vw] text-white font-bold leading-[1.2em] uppercase">Dr. Ales </p>
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
              <div className="bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[7.29vw] w-[11.77vw]">
                <p className="text-[2.08vw] font-bold leading-[1.2em] uppercase">PhD </p>
                <p className="text-[0.83vw] font-medium leading-[1.2em]">in Medicine</p>
              </div>
              <div className="bg-[#E5E5E5] flex flex-col items-center justify-center bg-opacity-50 rounded-[2.08vw] h-[7.29vw] w-[11.77vw]">
                <p className="text-[2.08vw] font-bold leading-[1.2em] uppercase">30+  </p>
                <p className="text-[0.83vw] font-medium leading-[1.2em]">online courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*SECTION ABOUT */}
      <div className="py-[5.21vw]">
        <div className="flex items-end gap-[2.76vw]">
          <div className="relative">
            <VideoPlayer />
          </div>
          <div className="max-w-[42.45vw] w-full">
            <h2 className="font-montserrat text-[2.81vw] leading-[1.2em] mb-[1.04vw] font-medium uppercase">
              Join our <br/> rejuvenation club
            </h2>
            <p className="text-[0.83vw] font-rubik leading-[1.2em] mb-[2.08vw]">
              Join our club and discover how easy it can be to make self-care a natural part of your daily routine.
              From expert tips to exclusive resources,
              we’re here to guide and inspire you along the way. Take the first step towards a healthier, more balanced you today!
            </p>
            <div className="flex items-center gap-[1.04vw]">
              <button className="bg-orange text-white group button flex items-center gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange">
                become a member
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
              <p className="text-[0.83vw] font-rubik max-w-[8.85vw] opacity-[70%]">
                <span className="font-bold">Free one-week trial</span>, then $47/month
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[2.08vw]">
          <ul className="flex gap-[2.60vw] text-center font-lato">
            <li className="bg-[#E5E5E5] h-[14.84vw] w-[27.71vw] rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
              <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw] uppercase">6 WEEKLY <br/> workouts</p>
              <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw]">With top trainers. Each session lasts 15–20 minutes</p>
            </li>
            <li className="bg-[#E5E5E5] h-[14.84vw] w-[27.71vw] rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
              <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw] uppercase">FULL ACCESS FOR all <br/> courses </p>
              <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw]"> In 7 days, you'll gain access to all our knowledge and experience</p>
            </li>
            <li className="bg-[#E5E5E5] h-[14.84vw] w-[27.71vw] rounded-[2.08vw] bg-opacity-50 flex flex-col items-center justify-center">
              <p className="font-medium leading-[1.2em] text-[2.08vw] mb-[0.52vw] uppercase">community <br/> of like-minded <br/> people</p>
              <p className="text-[0.83vw] max-auto text-center max-w-[23.54vw]">Whatsap chat with our experts</p>
            </li>
          </ul>
        </div>
      </div>
      {/*SECTION COURSES*/}
      <div className="py-[5.21vw]">
        <h2 className="font-montserrat text-[2.81vw] uppercase font-medium">
          Course Library
        </h2>
        <div className="pt-[2.08vw]">
          <SectionCoursesList products={products}/>
        </div>
      </div>
      {/*SECTION EVENTS */}
      <div className="py-[5.21vw]">
        <h2 className="font-montserrat text-[2.81vw] uppercase font-medium">
          Our Future Events
        </h2>
        <div className="pt-[2.08vw]">
          <SectionEvents />
        </div>
      </div>
      {/*SECTION REVIEWS*/}
      <div className="py-[5.21vw]">
        <h2 className="font-montserrat text-[2.81vw] uppercase font-medium">
          Reviews
        </h2>
        <div className="pt-[2.08vw]">
          <SectionReviews />
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-[1.04vw] pt-[2.08vw]">
          <TrialButon />
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