import { create } from "zustand";
import { User } from "@/shared/api/types/User";
import { Product } from "@/shared/api/types/courses";

interface TrialModalContent {
  createdDate: string;
  description: string;
  designConcurrencyStamp: string;
  designHTMLPublished: string;
  designSettings: string;
  designSettingsPublished: string;
  designStylePublished: string;
  hasHtml: boolean;
  id: string;
  name: string;
  quiz: null;
}

interface AppStoreState {
  isAuthModalActive: boolean;
  isMenuModalActive: boolean;
  isCertificateModalActive: boolean;
  isTrialModalActive: boolean;
  trialModalContent: TrialModalContent | null;
  products: Product[] | null;
  user: User | null;
  modalType: "login" | "register" | null;
  setAuthModal: (value: { modalType: "login" | "register" | null; active: boolean }) => void;
  setTrialModal: (value: { isTrialModalActive: boolean; trialModalContent: TrialModalContent | null }) => void;
  setProducts: (value: Product[] | null) => void;
}

export const useAppStore = create<AppStoreState>((set) => ({
  isAuthModalActive: false,
  isMenuModalActive: false,
  isCertificateModalActive: false,
  modalType: null,
  isTrialModalActive: false,
  trialModalContent: null,
  products: null,
  user: null,
  setTrialModal: ({ isTrialModalActive, trialModalContent }) => {
    set({
      isTrialModalActive,
      trialModalContent,
    });
  },
  setAuthModal: ({ modalType, active }) =>
    set({
      isAuthModalActive: active,
      modalType,
    }),
  setProducts: (value: Product[] | null) => {
    set({ products: value });
  },
}));