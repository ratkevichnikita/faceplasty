import { create } from "zustand";
import { User } from "@/shared/api/types/User";

interface TrialModalContent {
  createdDate: string
  description: string
  designConcurrencyStamp: string
  designHTMLPublished: string
  designSettings: string
  designSettingsPublished: string
  designStylePublished: string
  hasHtml: boolean
  id: string
  name: string
  quiz: null
}

interface AppStoreState {
  isAuthModalActive: boolean;
  isMenuModalActive: boolean;
  isCertificateModalActive: boolean;
  isTrialModalActive: boolean
  trialModalContent: TrialModalContent | null
  user: User | null;
  modalType: "login" | "register" | null;
  setAuthModal: (value: { modalType: "login" | "register" | null; active: boolean }) => void;
  setTrialModal: (value: {isTrialModalActive: boolean; trialModalContent:TrialModalContent | null}) => void
}

export const useAppStore = create<AppStoreState>((set) => ({
  isAuthModalActive: false,
  isMenuModalActive: false,
  isCertificateModalActive: false,
  modalType: null,
  isTrialModalActive: false,
  trialModalContent: null,
  user: null,
  setTrialModal: ({isTrialModalActive,trialModalContent}) => {
    set({
      isTrialModalActive,
      trialModalContent,
    })
  },
  setAuthModal: ({ modalType, active }) =>
    set({
      isAuthModalActive: active,
      modalType,
    }),
}));
