'use client'
import React, { useState } from 'react';
import clsx from "clsx";

interface IFaqData {
  id: number;
  question: string;
  answer: string;
}

const faqData: IFaqData[] = [
  {
    id: 1,
    question: 'question',
    answer: 'answer',
  },
  {
    id: 2,
    question: 'question2',
    answer: 'answer2',
  },
];

const SectionFaq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-t border-t-[#E5E5E5] mx-auto max-w-[62.50vw]">
      {faqData.map((q) => {
        const isOpen = openId === q.id;

        return (
          <div
            key={q.id}
            className={clsx("border-b border-b-[#E5E5E5]  px-[2.08vw] py-[1.41vw] cursor-pointer", {
              "bg-purple text-white rounded-[2.08vw]": isOpen
            })}
            onClick={() => toggleAnswer(q.id)}
          >
            <div className="w-full flex items-center justify-between">
              <p className="font-bold text-[0.83vw]">{q.question}</p>
              <div
                className={`size-[1.25vw] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              >
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_673_5671)">
                    <path d="M1 12H23M12 1V23" stroke={isOpen ? "#fff" :"#0A1412"} strokeLinecap="square"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_673_5671">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            {isOpen && (
              <p className="animate-fadeIn pt-[1.04vw] text-[0.83vw]">{q.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SectionFaq;
