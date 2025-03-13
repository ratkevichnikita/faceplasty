'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import ImageLogo from '@/../public/icons/icon-logo.svg'
import SearchForm from "@/widgets/SearchForm";
import {useAppStore} from "@/shared/store/AppStore";
import clsx from "clsx";

const navigation = [
  {title:'About', href:'#about',id:1},
  {title:'Courses', href:'#courses',id:2},
  {title:'FAQ', href:'#faq',id:3},
  {title:'Contacts', href:'#contacts',id:4},
]

const Header = () => {
  const [menuModal,setMenuModal] = useState<boolean>(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { setAuthModal } = useAppStore();

  return (
    <div className="py-[1.56vw] font-lato sm:pt-[5.13vw] sm:pb-0">
      <div className="container">
        <div className="flex items-center justify-between gap-[0.75vw]">
          <Link href="/" className={clsx("animate-fadeIn",{"sm:hidden": isExpanded})}>
            <Image
              src={ImageLogo.src}
              width={ImageLogo.width}
              height={ImageLogo.height}
              alt="faceplasty logo"
              className="w-[17.45vw] h-[4.84vw] sm:w-[38.46vw] sm:h-[10.77vw]"
            />
          </Link>
          <nav className="sm:hidden">
            <ul className="flex items-center text-[0.83vw] gap-[1.04vw] uppercase font-semibold font-lato">
              {navigation.map(item => {
                return (
                  <li key={item.id} className="">
                    <Link href={item.href} className={"py-[1.09vw] px-[0.63vw] border-b border-b-transparent hover:border-b-purple transition-border duration-300"}>
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="flex gap-[2.08vw] sm:items-center sm:gap-[7.69vw] sm:ml-auto">
            <SearchForm isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            <div className="flex gap-[0.52vw] sm:hidden">
              {/*<button*/}
              {/*  onClick={() => setAuthModal({ modalType: "register", active: true })}*/}
              {/*  className="text-[0.83vw] h-[3.13vw] shrink-0 text-black font-semibold uppercase bg-transparent rounded-[2.08vw] px-[1.30vw]"*/}
              {/*>*/}
              {/*  Sign up*/}
              {/*</button>*/}
              <Link
                href="https://course.fp-platform.online/login?returnUrl=/"
                rel="nofollow"
                className="button flex items-center !h-[3.13vw] shrink-0 bg-purple text-white hover:bg-black hover:text-white"
              >
                Log in
              </Link>
            </div>
            <button
              onClick={() => setMenuModal(!menuModal)}
              className="flex-col h-[3.33vw] w-[4.10vw] gap-[1.03vw] hidden md:flex"
            >
              <span className={clsx('block h-[2px] w-full rounded-[5px] bg-black transition-transform duration-300', {
                'origin-[2px] rotate-[45deg] sm:origin-[0.056vw]': menuModal,
              })} />
              <span className={clsx('block h-[2px] w-full rounded-[5px] bg-black transition-opacity duration-300', {
                'opacity-0': menuModal,
              })} />
              <span className={clsx('block h-[2px] w-full rounded-[5px] bg-black transition-transform duration-300', {
                'origin-[1px] rotate-[-45deg] sm:origin-[0.055vw]': menuModal,
              })} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;