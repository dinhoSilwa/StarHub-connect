import { create } from "zustand";

type ModalStoreState = {
  modalVisibilityMap: Record<string, boolean>;
  openModal: (modalKey: string) => void;
  closeModal: (modalKey: string) => void;
  toggleModal: (modalKey: string) => void;
};

export const useModalStore = create<ModalStoreState>()((set) => ({
  modalVisibilityMap: {},
  openModal: (modalKey: string) =>
    set((state) => ({
      modalVisibilityMap: { ...state.modalVisibilityMap, [modalKey]: true },
    })),

  closeModal: (modalKey: string) =>
    set((state) => ({
      modalVisibilityMap: { ...state.modalVisibilityMap, [modalKey]: false },
    })),

  toggleModal: (modalKey: string) =>
    set((state) => ({
      modalVisibilityMap: {
        ...state.modalVisibilityMap,
        [modalKey]: !state.modalVisibilityMap[modalKey],
      },
    })),
}));
