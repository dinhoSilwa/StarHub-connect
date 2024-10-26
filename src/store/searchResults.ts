import { create } from "zustand";

export interface SearchTerms {
  term: string;
  setSearchTerm: (term: string) => void;
  clearTerm: () => void;
  isActive: boolean;
  setIsActive: () => void;
}

export const userNameTerm = create<SearchTerms>((set) => ({
  isActive: false,
  term: "",
  
  setIsActive: () => set((state) => ({ isActive: !state.isActive })),
  
  setSearchTerm: (newTerm: string) =>
    set({ term: newTerm.replace(/\s+/g, "").trim().toLowerCase() }),
  
  clearTerm: () => set({ term: "" }),
}));
