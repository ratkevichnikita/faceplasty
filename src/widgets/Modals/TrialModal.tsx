'use client'
import React, {useEffect} from 'react';
import {useAppStore} from "@/shared/store/AppStore";
import { Dialog, DialogPanel } from '@headlessui/react'

const parseJson = (json) => {
  // Рекурсивно обрабатываем все вложенные элементы
  return json.children?.map((child, index) => {
    return (
      <div key={child.id || index} style={child.style}>
        {child.content && (
          <div dangerouslySetInnerHTML={{ __html: child.content }} />
        )}
        {child.children && (
          <div className="nested-children">
            {parseJson(child)}
          </div>
        )}
        {/* Обработка других типов элементов */}
        {child.element_class === 'EZText' && (
          <div className="ez-text">{child.content}</div>
        )}
        {child.element_class === 'EZCheckout' && (
          <div className="ez-checkout">
            {/* Логика для обработки checkout форм */}
          </div>
        )}
        {/* Можно добавить дополнительные условия для других типов элементов */}
      </div>
    );
  });
};

const WidgetComponent = ({ jsonString }) => {
  const parsedJson = JSON.parse(jsonString);  // Преобразуем строку JSON в объект

  return (
    <div className="widget-container">
      {parseJson(parsedJson)} {/* Рекурсивно выводим контент */}
    </div>
  );
};

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