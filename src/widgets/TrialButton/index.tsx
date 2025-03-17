'use client'
import React, {FC} from "react";
import Image from "next/image";
import IconArrow from "@/../public/icons/icon-arrow-small.svg";
import {useAppStore} from "@/shared/store/AppStore";
import clsx from "clsx";

interface ComponentProps {
  text?: string
  variant: 'vertical' | 'horizontal'
  description?: string
  className?: string
}

const TrialButton:FC<ComponentProps> = ({text= "Become a member", variant = "horizontal", description, className}) => {
  const {setTrialModal} = useAppStore()

  const handleClick = () => {
    setTrialModal({isTrialModalActive:true})
  };

  return (
    <div className={clsx("flex items-center justify-center gap-[0.83vw] sm:w-full sm:gap-[3.08vw] sm:flex-col",{
      "flex-col": variant == 'vertical'
    })}>
      <button
        onClick={handleClick}
        className={clsx("block button bg-orange h-[4.17vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange sm:gap-[3.08vw] sm:text-[3.59vw] sm:gap-[2.2vw] sm:w-full", className, {

        })}
      >
        <span className="shrink-0">{text}</span>
        <span className="rounded-full shrink-0 flex items-center justify-center bg-white size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg] sm:size-[5.13vw]">
          <Image
            src={IconArrow.src}
            width={IconArrow.width}
            height={IconArrow.height}
            alt="image"
            className="w-[0.89vw] h-[0.63vw] sm:w-[2.56vw] sm:h-[1.79vw]"
          />
        </span>
      </button>
      {description && (
        <p
          dangerouslySetInnerHTML={{__html: description ?? ''}}
          className="text-[0.83vw] font-rubik opacity-[70%] [&>span]:text-purple [&>span]:font-bold sm:font-lato sm:text-center sm:max-w-[70.51vw] sm:text-[3.59vw]"
        />
      )}
    </div>
  );
};

export default TrialButton;