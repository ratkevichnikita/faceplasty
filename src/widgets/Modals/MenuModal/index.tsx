'use client';
import React from 'react';
import { useAppStore } from '@/shared/store/AppStore';
import { Dialog, DialogPanel } from '@headlessui/react';
import {useRouter} from "next/navigation";
import Link from "next/link";

const MenuModal = () => {
  const { isMenuModalActive, setMenuModal } = useAppStore();

  const handleLinkClick = () => {
    setMenuModal({ isMenuModalActive: false });
  };

  return (
    <Dialog
      open={isMenuModalActive}
      as="div"
      className="relative z-[20] focus:outline-none"
      onClose={() => setMenuModal({ isMenuModalActive: false })}
    >
      <div className="fixed inset-0 z-[20] w-screen overflow-y-auto font-lato">
        <div className="flex pt-[30.77vw] min-h-full bg-white">
          <DialogPanel
            transition
            className="w-full duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="relative max-w-[90vw] h-full flex flex-col pb-[20px] mx-auto">
              <ul className="flex-grow">
                  <li className="text-[4.10vw] ">
                    <Link
                      href="#about"
                      className="block text-right py-[2.56vw] w-full uppercase font-semibold"
                      onClick={handleLinkClick}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#courses"
                      className="block text-right py-[2.56vw] w-full uppercase font-semibold"
                      onClick={handleLinkClick}
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#faq"
                      className="block text-right py-[2.56vw] w-full uppercase font-semibold"
                      onClick={handleLinkClick}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contacts"
                      className="block text-right py-[2.56vw] w-full uppercase font-semibold"
                      onClick={handleLinkClick}
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>
              <Link
                href="https://course.fp-platform.online/login?returnUrl=/"
                rel="nofollow"
                className="button block flex items-center ml-auto justify-center w-[34.36vw] shrink-0 bg-purple text-white hover:bg-black hover:text-white"
              >
                Log in
              </Link>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default MenuModal;