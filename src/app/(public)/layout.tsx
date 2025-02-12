import React from 'react';
import DefaultLayout from "@/widgets/Layout/DefaultLayout";
import Header from "@/widgets/Header";
import AuthModal from "@/widgets/Modals/AuthModal";
import Footer from "@/widgets/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultLayout>
      <Header/>
      {children}
      <Footer />
      <AuthModal />
    </DefaultLayout>
  );
};

export default Layout;