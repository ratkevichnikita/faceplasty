'use client'
import React, {FC} from "react";
import Image from "next/image";
import IconArrow from "@/../public/icons/icon-arrow-small.svg";

interface ComponentProps {
  text?: string
}

const TrialButton:FC<ComponentProps> = ({text= "Become a member"}) => {
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

  return (
    <>
      <button
        onClick={handleClick}
        className="block button bg-orange h-[4.17vw] flex items-center justify-center text-white group gap-[0.63vw] hover:bg-white hover:text-orange hover:border-orange"
      >
        {text}
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
      <p className="text-[0.83vw] font-rubik opacity-[70%]">
        <span className="font-bold text-purple">Free one-week trial</span>, then $47/month <br/>
        You can cancel your subscription at any time.
      </p>
    </>
  );
};

export default TrialButton;