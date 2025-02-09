import { create } from "zustand";
import { User } from "@/shared/api/types/User";

interface AppStoreState {
  isAuthModalActive: boolean;
  isMenuModalActive: boolean;
  isCertificateModalActive: boolean;
  user: User | null;
  modalType: "login" | "register" | null;
  setAuthModal: (value: { modalType: "login" | "register" | null; active: boolean }) => void;
}

export const useAppStore = create<AppStoreState>((set) => ({
  isAuthModalActive: false,
  isMenuModalActive: false,
  isCertificateModalActive: false,
  modalType: null,
  user: null,

  setAuthModal: ({ modalType, active }) =>
    set({
      isAuthModalActive: active,
      modalType,
    }),
}));
