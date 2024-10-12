import { create } from "zustand";

interface ModalProfile {
  isOpenModalProfile: boolean;
  setisOpenModalProfile: () => void;
}

export const modalProfileStore = create<ModalProfile>()((set) => ({
  isOpenModalProfile: false,
  setisOpenModalProfile: () =>
    set((state) => ({
      isOpenModalProfile: !state.isOpenModalProfile,
    })),
}));
