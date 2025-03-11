import React, {FC} from 'react';
import SearchContent from "@/widgets/SearchPage/SearchContent";

interface ComponentProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const Page:FC<ComponentProps> = async ({params,searchParams}) => {
  const { query } = await searchParams;

  return (
   <div className="py-[5.21vw] sm:py-[7.69vw]">
     <div className="container">
       <p className="font-montserrat leading-[1.2em] text-[1.75vw] uppercase mb-[2.08vw] font-medium sm:text-[6.15vw]">
         Search: <span className="text-[1.04vw] font-normal">{query}</span>
       </p>
       <SearchContent query={query} />
     </div>
   </div>
  );
};

export default Page;