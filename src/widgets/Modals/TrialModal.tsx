'use client'
import React, {useEffect} from 'react';
import {useAppStore} from "@/shared/store/AppStore";
import { Dialog, DialogPanel } from '@headlessui/react'

const AuthModal = () => {
  const { isTrialModalActive, setTrialModal, trialModalContent } = useAppStore();

  return (
    <Dialog open={isTrialModalActive} as="div" className="relative z-10 focus:outline-none" onClose={() => setTrialModal({ isTrialModalActive: false, trialModalContent: null })}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-lato">
        <div className="flex min-h-full items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <DialogPanel
            transition
            className="w-full bg-white duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="container max-w-[40vw]">
              {/* Подключаем стили */}
              {trialModalContent?.designStylePublished && (
                <style dangerouslySetInnerHTML={{ __html: trialModalContent.designStylePublished }} />
              )}

              {/* Вставляем HTML с настройками */}
              <div
                dangerouslySetInnerHTML={{ __html: trialModalContent?.designHTMLPublished ?? '' }}
              />

            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AuthModal;