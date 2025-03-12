import { create } from "zustand";
import { Product } from "@/shared/api/types/courses";

interface AppStoreState {
  isAuthModalActive: boolean;
  isMenuModalActive: boolean;
  isCertificateModalActive: boolean;
  isTrialModalActive: boolean;
  products: Product[] | null;
  user: null;
  modalType: "login" | "register" | null;
  setAuthModal: (value: { modalType: "login" | "register" | null; active: boolean }) => void;
  setTrialModal: (value: { isTrialModalActive: boolean}) => void;
  setProducts: (value: Product[] | null) => void;
}

export const useAppStore = create<AppStoreState>((set) => ({
  isAuthModalActive: false,
  isMenuModalActive: false,
  isCertificateModalActive: false,
  modalType: null,
  isTrialModalActive: false,
  products: null,
  user: null,
  setTrialModal: ({ isTrialModalActive }) => set({isTrialModalActive}),
  setAuthModal: ({ modalType, active }) =>
    set({isAuthModalActive: active, modalType}),
  setProducts: (value: Product[] | null) => set({ products: value }),
}));