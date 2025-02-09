'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ImageLogo from '@/../public/icons/icon-logo-black.png'
import SearchForm from "@/widgets/SearchForm";
import {useAppStore} from "@/shared/store/AppStore";

const navigation = [
  {title:'About', href:'#about',id:1},
  {title:'Courses', href:'#courses',id:2},
  {title:'FAQ', href:'#faq',id:3},
  {title:'Contacts', href:'contacts',id:4},
]

const Header = () => {
  const { setAuthModal } = useAppStore();
  return (
    <div className="py-[1.56vw] font-lato">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={ImageLogo.src}
              width={ImageLogo.width}
              height={ImageLogo.height}
              alt="faceplasty logo"
              className=""
            />
          </Link>
          <nav className="pl-[6vw]">
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
          <div className="flex gap-[2.08vw]">
            <SearchForm />
            <div className="flex gap-[0.52vw]">
              <button
                onClick={() => setAuthModal({ modalType: "register", active: true })}
                className="text-[0.83vw] h-[3.13vw] text-black font-semibold uppercase bg-transparent rounded-[2.08vw] px-[1.30vw]"
              >
                Sign up
              </button>
              <button
                onClick={() => setAuthModal({ modalType: "login", active: true })}
                className="button !h-[3.13vw] bg-purple text-white hover:border-purple hover:text-purple"
              >
                Log in
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;