'use client';
import React, { useEffect, useRef } from 'react';
import { useAppStore } from '@/shared/store/AppStore';
import { Dialog, DialogPanel } from '@headlessui/react';

const WidgetModal = () => {
  const { isWidgetModalActive, isWidgetModalId, setWidgetModal, setTrialModal } = useAppStore();
  const widgetContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isWidgetModalId) {
      try {
        document.body.classList.add('isPaymentOpen');

        // Проверяем, не был ли скрипт уже загружен
        if (document.getElementById('widget-script')) return;

        const script = document.createElement('script');
        script.src = 'https://static.axl.tech/widget/widget.min.js';
        script.async = true;
        script.id = 'widget-script';

        // Добавляем атрибуты, если они нужны для работы виджета
        script.setAttribute('ao-number', '9380');
        script.setAttribute('ao-widget-id', isWidgetModalId ?? '');
        script.setAttribute('ao-domain', 'fp-platform.online');

        document.body.appendChild(script);

        // Наблюдаем за изменениями в body, чтобы переместить iframe
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              const iframe = document.querySelector('iframe');
              if (iframe && widgetContainerRef.current) {
                widgetContainerRef.current.appendChild(iframe);
                observer.disconnect(); // Остановить наблюдение после перемещения
              }
            }
          });
        });

        observer.observe(document.body, { childList: true });

        return () => {
          document.body.classList.remove('isPaymentOpen');
          const scriptElement = document.getElementById('widget-script');
          if (scriptElement) {
            scriptElement.remove();
          }
          observer.disconnect();
        };
      } catch (error) {
        console.error('Ошибка при загрузке виджета:', error);
        // Закрываем модальное окно виджета
        setWidgetModal({ isWidgetModalActive: false, isWidgetModalId: null });
        // Закрываем модальное окно trial
        setTrialModal({ isTrialModalActive: true });
      }
    }
  }, [isWidgetModalActive, isWidgetModalId, setWidgetModal, setTrialModal]);

  const onModalClose = () => {
    setWidgetModal({ isWidgetModalActive: false, isWidgetModalId: null })
    document.body.style.overflow = '';
    document.body.style.height = '';
  }

  return (
    <Dialog
      open={isWidgetModalActive}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => setWidgetModal({ isWidgetModalActive: false, isWidgetModalId: null })}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-lato">
        <div className="flex min-h-full items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <DialogPanel
            transition
            className="w-full flex items-center justify-center duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="relative">
              <button
                onClick={onModalClose}
                className="animate-fadeIn delay-500 absolute right-[-2.5vw] top-[-1.5vw] z-[10] flex items-center justify-center rounded-full bg-white size-[2.08vw] hover:bg-gray-100 transition-colors sm:right-0 sm:top-[-10.5vw] sm:size-[8.26vw] sm:rounded-[10.26vw]"
              >
                <span className="block w-[0.83vw] h-[1px] bg-black transform rotate-45 absolute sm:w-[3.83vw]" />
                <span className="block w-[0.83vw] h-[1px] bg-black transform -rotate-45 absolute sm:w-[3.83vw]" />
              </button>

              <div ref={widgetContainerRef} className="global-modal animate-fadeIn delay-500 relative overflow-auto rounded-[2.04vw] h-[90vh] w-[30vw] lg:w-[45vw] sm:h-[85vh] sm:w-[88vw] sm:rounded-[5vw]"/>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default WidgetModal;