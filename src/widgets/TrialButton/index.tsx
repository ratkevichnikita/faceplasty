'use client'
import React, {FC} from "react";
import Image from "next/image";
import IconArrow from "@/../public/icons/icon-arrow-small.svg";
// import {getWidgetById} from "@/shared/api";
import {useAppStore} from "@/shared/store/AppStore";

interface ComponentProps {
  text?: string
}

const TrialButton:FC<ComponentProps> = ({text= "Become a member"}) => {
  // const {setTrialModal} = useAppStore()
  const handleClick = () => {
    document.body.classList.toggle("isPaymentOpen");
    // Проверяем, не был ли скрипт уже загружен
    if (document.getElementById("widget-script")) return;

    const script = document.createElement("script");
    script.src = "https://static.axl.tech/widget/widget.min.js";
    script.async = true;
    script.id = "widget-script"; // ID, чтобы избежать повторной загрузки

    // Добавляем атрибуты, если они нужны для работы виджета
    script.setAttribute("ao-number", "9380");
    script.setAttribute("ao-widget-id", "QkoGrAWzK0GvAUOyO_4r_g");
    script.setAttribute("ao-domain", "fp-platform.online");

    document.body.appendChild(script);
  };

  // const handleClick = async () => {
  //   try {
  //     const resp = await getWidgetById('QkoGrAWzK0GvAUOyO_4r_g')
  //     setTrialModal({isTrialModalActive:true, trialModalContent:resp.body})
  //     console.log('resp',resp)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <button
        onClick={handleClick}
        className="block button bg-orange h-[4.17vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange sm:gap-[3.08vw] sm:text-[3.59vw] sm:gap-[2.2vw] sm:w-full"
      >
        {text}
        <span className="rounded-full flex items-center justify-center bg-white size-[2.08vw] transition-transform duration-300 group-hover:rotate-[45deg] sm:size-[5.13vw]">
          <Image
            src={IconArrow.src}
            width={IconArrow.width}
            height={IconArrow.height}
            alt="image"
            className="w-[0.89vw] h-[0.63vw] sm:w-[2.56vw] sm:h-[1.79vw]"
          />
        </span>
      </button>
      <p className="text-[0.83vw] font-rubik opacity-[70%] sm:font-lato sm:text-center sm:max-w-[70.51vw] sm:text-[3.59vw]">
        <span className="font-bold text-purple">Free one-week trial</span>, then $47/month <br/>
        You can cancel your subscription at any time.
      </p>

    </>
  );
};

export default TrialButton;