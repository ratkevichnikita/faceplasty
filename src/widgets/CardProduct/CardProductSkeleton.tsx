import React from 'react';

const CardProductSkeleton = () => {
  return (
    <div className="rounded-[2.08vw] bg-[#E5E5E5] w-[20.31vw] p-[1.04vw] h-[24.48vw]">
      <div className="h-full flex flex-col justify-end">
        <div className="flex gap-[0.5vw] mb-[1.04vw]">
          <p className="h-[1.30vw] w-[3vw] bg-[#c1bcbc] animate-pulse rounded-[2.08vw]" />
          <p className="h-[1.30vw] w-[6vw] bg-[#c1bcbc] animate-pulse rounded-[2.08vw]" />
        </div>
        <p className="w-[9vw] h-[2vw] bg-[#c1bcbc] animate-pulse rounded-[2.08vw] mb-[0.5vw]"/>
        <p className="w-full h-[1.30vw] bg-[#c1bcbc] animate-pulse rounded-[2.08vw] mb-[0.25vw]" />
        <p className="w-[80%] h-[1.30vw] bg-[#c1bcbc] animate-pulse rounded-[2.08vw] mb-[1.04vw]" />
        <div className="flex justify-between">
          <p className="h-[3.13vw] w-[6vw] bg-[#c1bcbc] animate-pulse rounded-[2.08vw]" />
          <p className="h-[3.13vw] w-[11.64vw] bg-[#c1bcbc] animate-pulse rounded-[2.08vw]" />
        </div>
      </div>
    </div>
  );
};

export default CardProductSkeleton;