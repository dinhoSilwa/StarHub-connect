import { create } from "zustand";

type ModalState = {
  modals: Record<string, boolean>;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  toggleModal: (modalName: string) => void;
};

export const useModalStore = create<ModalState>()((set) => ({
  modals: {},
  openModal: (modalName: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: true },
    })),

  closeModal: (modalName: string) =>
    set((state) => ({
      modals: { ...state.modals, [modalName]: false },
    })),

  toggleModal: (modalName: string) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [modalName]: !state.modals[modalName],
      },
    })),
}));
