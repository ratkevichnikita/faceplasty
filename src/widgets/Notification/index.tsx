import React from 'react';
import { createRoot } from 'react-dom/client';
import Link from 'next/link';

interface NotificationConfig {
  title: string;
  description: string;
  link?: string;
}

interface ReactRootContainerElement extends HTMLElement {
  _reactRootContainer?: {
    unmount: () => void;
  };
}

// Пример вызова
// notification.open({
//   title: 'Добро пожаловать!',
//   description: 'Вы успешно авторизировались',
// });

const Notification: React.FC<NotificationConfig> = ({ title, description, link }) => {
  const onClose = () => {
    const notificationElement = document.getElementById('notification') as ReactRootContainerElement | null;
    if (notificationElement) {
      const root = notificationElement._reactRootContainer;
      if (root) {
        root.unmount();
      }
      if (notificationElement.parentNode === document.body) {
        document.body.removeChild(notificationElement);
      }
    }
  };

  return (
    <div className="fixed shadow-cardShadow bg-white top-[2vw] right-1/2 translate-x-1/2 z-[200] w-[20vw] animate-fadeIn rounded-[1.042vw] sm:top-[8vw] sm:h-[35vw] sm:w-[90vw] sm:rounded-[3.56vw]">
      <div className="relative size-full px-[1.56vw] pb-[1.042vw] pt-[2.86vw] sm:p-[5.56vw]">
        <div className="relative z-[1]">
          <div className="mb-[1.042vw] flex items-center gap-[0.82vw] sm:mb-[3.32vw] sm:gap-[3.32vw]">
            <div className="size-[1.46vw] sm:size-[8.33vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="100%"
                height="100%"
                baseProfile="basic"
              >
                <path fill="#5F998A" d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z" />
                <polygon fill="#fff" points="7,12 3.48,8.48 4.894,7.066 7,9.172 11.71,4.462 13.124,5.876" />
              </svg>
            </div>
            <h4 className="text-[1.25vw] font-semibold leading-[1.2em] sm:text-[5.67vw]">{title}</h4>
          </div>
          <p className="text-[0.83vw] leading-[1.2em] sm:text-[3.89vw]">{description}</p>
          {link && (
            <Link
              href={link}
              className="mt-[0.5vw] block text-[1.04vw] text-blue underline hover:no-underline sm:mt-[3vw] sm:text-[4.26vw]"
            >
              Перейти в личный кабинет
            </Link>
          )}
        </div>
        <button
          onClick={onClose}
          className="absolute right-[1.042vw] top-[1.042vw] z-10 size-[1.25vw] sm:right-[3.5vw] sm:top-[3.5vw] sm:size-[6.667vw]"
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L19 19M5.00003 19L12 12L19 5" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const notification = {
  open: (config: NotificationConfig) => {
    const div = document.createElement('div');
    div.id = 'notification';
    document.body.appendChild(div);

    const root = createRoot(div);
    root.render(<Notification title={config.title} description={config.description} link={config.link ?? ''} />);

    setTimeout(() => {
      const notificationElement = document.getElementById('notification');
      if (notificationElement && notificationElement.parentNode === document.body) {
        root.unmount();
        document.body.removeChild(notificationElement);
      }
    }, 4500);
  },
};

export default notification;
