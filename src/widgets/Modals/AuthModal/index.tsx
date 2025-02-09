'use client'
import React from 'react';
import {useAppStore} from "@/shared/store/AppStore";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Login from "@/widgets/Modals/AuthModal/Login";
import Register from "@/widgets/Modals/AuthModal/Register";

const AuthModal = () => {
  const { modalType, isAuthModalActive, setAuthModal } = useAppStore();

  const renderContent = () => {
    switch (modalType) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      default:
        return <Login />;
    }
  };

  return (
    <Dialog open={isAuthModalActive} as="div" className="relative z-10 focus:outline-none" onClose={() => setAuthModal({ modalType: null, active: false })}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-lato">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="w-full bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div>
              {renderContent()}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AuthModal;