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
    question: 'Does this method work for everyone?',
    answer: 'We’re so sure you’ll see visible results with Dr. Ales’ program that we offer a 100% money-back guarantee. You can request a full refund within 14 days if the program doesn\'t meet your expectations.',
  },
  {
    id: 2,
    question: 'How do these rejuvenation techniques work?',
    answer: 'In just a few lessons, you’ll master the key techniques to activate and strengthen your facial muscles.\n' +
      '\n' +
      'These exercises will become second nature, and with consistent practice, your results will only get better over time — this isn’t just a claim, it’s backed by medical research!\n' +
      '\n' +
      'Here is some scientific proof that face exercises work:\n' +
      'Improved Blood Circulation: Facial muscle activation boosts oxygen and nutrient flow, speeding up skin regeneration. This helps reduce wrinkles and improve skin firmness.\n' +
      '\n' +
      'Muscle Tension Relief: Many wrinkles form due to muscle overuse (especially in the forehead and between the brows). Face exercises relax tight muscles, allowing the skin to smooth out naturally.\n' +
      '\n' +
      'Northwestern University Study (USA, 2018): Women aged 40-65 practiced facial exercises for 20 weeks. Results: Firmer skin and an average appearance of being 3 years younger. (JAMA Dermatology, 2018)',
  },
  {
    id: 3,
    question: 'I feel like I’m too old for this. I’ve lost hope for any real transformation…',
    answer: 'It’s never too late to take care of yourself! Age doesn’t define your ability to improve. Dr. Ales has helped over 10,000 women of all ages and skin conditions see real, visible results. The key is to start, and you’ll be amazed at what’s possible!',
  },
  {
    id: 4,
    question: 'Can I do these exercises at home?',
    answer: 'Yes, yes, and yes! Faceplasty exercises are super flexible — you can do them at home in front of a mirror, during a quick work break, or even on a plane. Finding just 5-15 minutes a day is totally doable, no matter how busy you are!',
  },
  {
    id: 5,
    question: 'Can I participate using my phone?',
    answer: 'Yes, the course platform is mobile-friendly, so you can watch lessons, join sessions, and interact with the community right from your phone, anywhere and anytime.',
  },
  {
    id: 6,
    question: 'Do you provide the option to cancel or get a refund?',
    answer: 'For any reason the course does not meet your expectations, we have you covered. You can cancel your subscription at any time with just one click. You can also request a full refund by contacting our email support at support@fp-platform.online within 14 days after payment — no questions asked.',
  },
];

const SectionFaq = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-t border-t-[#E5E5E5] mx-auto max-w-[62.50vw] sm:max-w-full">
      {faqData.map((q) => {
        const isOpen = openId === q.id;
        return (
          <div
            key={q.id}
            className={clsx("border-b border-b-[#E5E5E5] px-[2.08vw] py-[1.41vw] cursor-pointer sm:py-[3.08vw] sm:px-[5.13vw]", {
              "bg-purple text-white rounded-[2.08vw] sm:rounded-[10.26vw]": isOpen
            })}
            onClick={() => toggleAnswer(q.id)}
          >
            <div className="w-full flex items-center justify-between sm:gap-[2.56vw]">
              <p className="font-bold text-[0.83vw] sm:text-[4.10vw]">{q.question}</p>
              <div
                className={`size-[1.25vw] transition-transform duration-300 shrink-0 sm:size-[5.13vw] ${isOpen ? 'rotate-45' : ''}`}
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
              <p className="animate-fadeIn pt-[1.04vw] text-[0.83vw] sm:pt-[5.13vw] sm:text-[4.10vw]">{q.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SectionFaq;
