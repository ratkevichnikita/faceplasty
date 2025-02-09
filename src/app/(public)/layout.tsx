import React from 'react';
import DefaultLayout from "@/widgets/Layout/DefaultLayout";
import Header from "@/widgets/Header";
import AuthModal from "@/widgets/Modals/AuthModal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultLayout>
      <Header/>
      {children}
      <AuthModal />
    </DefaultLayout>
  );
};

export default Layout;