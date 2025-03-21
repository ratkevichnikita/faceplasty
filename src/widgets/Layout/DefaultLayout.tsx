import React from 'react';

const DefaultLayout = ({children}:{ children: React.ReactNode }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default DefaultLayout;