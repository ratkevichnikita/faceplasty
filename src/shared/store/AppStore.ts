import { create } from "zustand";
import { Product } from "@/shared/api/types/courses";

interface AppStoreState {
  isAuthModalActive: boolean;
  isMenuModalActive: boolean;
  isCertificateModalActive: boolean;
  isTrialModalActive: boolean;
  products: Product[] | null;
  search: string | null
  user: null;
  isWidgetModalActive: boolean;
  isWidgetModalId: string | null;
  modalType: "login" | "register" | null;
  setAuthModal: (value: { modalType: "login" | "register" | null; active: boolean }) => void;
  setTrialModal: (value: { isTrialModalActive: boolean }) => void;
  setWidgetModal: (value: { isWidgetModalActive: boolean; isWidgetModalId: string | null }) => void;
  setProducts: (value: Product[] | null) => void;
  setMenuModal: (value: {isMenuModalActive: boolean}) => void;
  setSearch: (value: string) => void
}

export const useAppStore = create<AppStoreState>((set) => ({
  isAuthModalActive: false,
  isMenuModalActive: false,
  isCertificateModalActive: false,
  modalType: null,
  isTrialModalActive: false,
  products: null,
  search: null,
  user: null,
  isWidgetModalActive: false,
  isWidgetModalId: null,
  setMenuModal: ({isMenuModalActive}) => set({isMenuModalActive}),
  setWidgetModal: ({ isWidgetModalActive, isWidgetModalId }) => set({ isWidgetModalActive, isWidgetModalId }),
  setTrialModal: ({ isTrialModalActive }) => set({ isTrialModalActive }),
  setAuthModal: ({ modalType, active }) => set({ isAuthModalActive: active, modalType }),
  setProducts: (value: Product[] | null) => set({ products: value }),
  setSearch: (value:string | null) => set({search: value})
}));