import React, {FC} from 'react';

interface ComponentProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const Page:FC<ComponentProps> = async ({params,searchParams}) => {
  const { query } = await searchParams;

  return (
   <>
     <div className="container">
       search: {query}
       <div className="">

       </div>
     </div>
   </>
  );
};

export default Page;