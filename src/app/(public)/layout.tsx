import React from 'react';
import DefaultLayout from "@/widgets/Layout/DefaultLayout";
import Header from "@/widgets/Header";
import AuthModal from "@/widgets/Modals/AuthModal";
import Footer from "@/widgets/Footer";
import TrialModal from "@/widgets/Modals/TrialModal/index";
import WidgetModal from "@/widgets/Modals/WidgetModal";
import MenuModal from "@/widgets/Modals/MenuModal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DefaultLayout>
      <Header/>
      {children}
      <Footer />
      <AuthModal />
      <TrialModal />
      <WidgetModal />
      <MenuModal />
    </DefaultLayout>
  );
};

export default Layout;